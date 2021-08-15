const express               = require('express');
const cors                  = require('cors');
const helmet                = require('helmet');
const compression           = require('compression');
const db                    = require('./utils/db');
const { tarea_programada }  = require('./utils/cron');
const { APP_NAME, PORT }    = require('./utils/config');

const server = express();
tarea_programada();

server.use(cors());
server.use(helmet());
server.use(compression());
server.use('/',(req,res) => {
    const resultados = JSON.parse(db.getItem('resultados'));
    res.json({
        resultados
    });
});

server.listen(PORT,() => {
    console.log(`${APP_NAME} esta corriendo en el puerto ${PORT}.`);
});
