import Sequelize from 'sequelize'; // modulo
import {sequelize} from '../database/database'//conexion de la bd

const Doctor = sequelize.define('doctors',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nomdoctor:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    apelldoctor:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    dnidoctor:{
        type: Sequelize.STRING(8),
        allowNull: false
    },
    teldoctor:{
        type: Sequelize.STRING(12),
        allowNull: false
    },
    emaildoctor:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    dirdoctor:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    espdoctor:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    clinicaid:{
        type:Sequelize.INTEGER,
        allowNull: false
    }
},{
    timestamps: false
});

export default Doctor;