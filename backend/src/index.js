import { server } from './server'

server.start({
    port:4000
},({port})=>{
    console.log(`Servidor en el puerto ${port}`);
})