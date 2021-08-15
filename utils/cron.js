const cron = require('node-cron');
const { scrappingResultadosTinka } = require('./scrapping');
const db = require('./db');

function tarea_programada(){
    cron.schedule('45 22 * * 3,7',async ()=>{
        const resultados = await scrappingResultadosTinka();
        const fecha = new Date();
        db.setItem('resultados',JSON.stringify(resultados));
        console.log(`Se ejecuto tarea programada ${fecha}`);
    });
}

module.exports = {
    tarea_programada
}