const cron = require('node-cron');
const { scrappingResultadosTinka } = require('./scrapping');
const db = require('./db');

function tarea_programada(){
    cron.schedule('* * * * *',async ()=>{
        const resultados = await scrappingResultadosTinka();
        db.setItem('resultados',JSON.stringify(resultados));
        console.log(resultados);
    });
}

module.exports = {
    tarea_programada
}