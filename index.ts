import cors from 'cors';

import Server from './classes/server';
import router from './routes/router';

const server = new Server();

// CORS
server.app.use(cors({ origin: true, credentials: true }));

// Rutas de servicios
server.app.use('/', router);

server.start(() => {
  console.log(`Servidor corriendo en el puerto ${server.port}`);
});
