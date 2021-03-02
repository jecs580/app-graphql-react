import { server } from './server'
import {connect} from './database';

connect();
server.start({
    port:4001
},({port})=>{
    console.log(`Servidor en el puerto ${port}`);
})