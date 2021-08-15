const { scrappingResultadosTinka } = require('./utils/scrapping');

async function mostrar(){
    const resultadosTinka = await scrappingResultadosTinka();
    console.log(resultadosTinka);
}

mostrar();

