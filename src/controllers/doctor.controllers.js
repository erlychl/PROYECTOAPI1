import Doctor from '../models/Doctor';
//insertar (POST)
export async function createDoctor(req, res) {
    const {nomdoctor,apelldoctor,dnidoctor,teldoctor,emaildoctor,dirdoctor,espdoctor,clinicaid} = req.body;
   try {
   let newDoctor = await Doctor.create({
        nomdoctor,
        apelldoctor,
        dnidoctor,
        teldoctor,
        emaildoctor,
        dirdoctor,
        espdoctor,
        clinicaid
    },{
        fields:['nomdoctor','apelldoctor','dnidoctor','teldoctor','emaildoctor','dirdoctor','espdoctor','clinicaid']
    });
    if(newDoctor){
        res.json({
        message: "Doctor creado correctamente",
        data:newDoctor
    });
  }
} catch (error) {
    res.status(500).json({
        message:"Un error a ocurrido",
        data:{}
    });
}
}
//seleccionar todo
export async function getDoctor(req, res) {
try {
    const doctor = await Doctor.findAll();
    res.json({
        message:"Doctores correctamente obtenidos",
        data:doctor
    });
} catch (error) {
    res.json({
        message: "Un error a ocurrido",
        error
    });
}
}
//Seleccionar un doctor por id (GET)
export async function getOneDoctor(req, res) {
    const {id} = req.params;
    try {
        const doctor = await Doctor.findOne({
            where:{
                id
            }
        });
        res.json({
            message: "Doctor obtenido correctamente",
            data: doctor
        });
    } catch (error) {
        res.json({
            message: "Un error a ocurrido",
            error
        });
    }
}
//Actualizar (PUT)
export async function updateDoctor(req, res) {
    const {id} = req.params;
    try {
        const {nomdoctor,apelldoctor,dnidoctor,teldoctor,emaildoctor,dirdoctor,espdoctor,clinicaid} = req.body;
    const doctors = await Doctor.findAll({
        attributes:['nomdoctor','apelldoctor','dnidoctor','teldoctor','emaildoctor','dirdoctor','espdoctor','clinicaid'],
        where:{
            id
        }
    });
    if(doctors.length>0){
        doctors.forEach(async doctor =>{
        await doctor.update({
            nomdoctor,
            apelldoctor,
            dnidoctor,
            teldoctor,
            emaildoctor,
            dirdoctor,
            espdoctor,
            clinicaid
        })
    });
    }
    res.json({
            message: "Doctores updated succesfully",
            data: clinicas
        });
    } catch (error) {
        res.json({
            message: "Un error a ocurrido",
            error
        });
    }
}
//Eliminar por ID (DELETE)
export async function deleteDoctor(req, res) {
    const {id} = req.params;
    try {
        const deleteRowCount = Doctor.destroy({
            where:{
                id
        }
    });
    res.json({
        message: "Doctor deleted succesfully",
        count: deleteRowCount,
        data:{}
    });
    } catch (error) {
        res.json({
            message: "Un error a ocurrido",
            error
        });
    }
}