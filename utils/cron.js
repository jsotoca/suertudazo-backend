const cron = require('node-cron');
const { scrappingResultadosTinka } = require('./scrapping');

function tarea_programada(){
    cron.schedule('* * * * *',async ()=>{
        const resultados = await scrappingResultadosTinka();
        console.log(resultados);
    });
}

module.exports = {
    tarea_programada
}