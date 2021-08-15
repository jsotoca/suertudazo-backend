const cheerio   = require('cheerio');
const fetch     = require('node-fetch');
const https     = require('https');

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
});

async function obtenerUrlScrapping(url){
    return await fetch(url, { agent: httpsAgent });
}

async function scrappingResultadosTinka(){
    let url = 'https://m.intralot.com.pe/game_tinka_show_result.html';
    let respuesta = await obtenerUrlScrapping(url);
    let html = await respuesta.text();

    let superior,inferior,texto_superior,texto_inferior;
    let sorteo = {};
    let sorteos = [];

    let $ = cheerio.load(html);
    $('.box-last-game').each((i,element)=> {
        superior = $(element).find('.top-last-game > h3').text();
        inferior = $(element).find('.bottom-last-game > h5').text();
        texto_superior = superior.split(" ");
        texto_inferior = inferior.split(" ");
        sorteo = {
            numero: texto_superior[1],
            fecha: texto_superior[3],
            numeros: [
                texto_inferior[0],
                texto_inferior[2],
                texto_inferior[4],
                texto_inferior[6],
                texto_inferior[8],
                texto_inferior[10]
            ],
            boliyapa: texto_inferior[12]
        }
        sorteos.push(sorteo);
    });
    return sorteos;
}

module.exports = {
    scrappingResultadosTinka
}