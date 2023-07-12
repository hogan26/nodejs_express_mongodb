//primero debo requerir express recien instalado y se le atribuye a una constante tambien llamda express
const express = require("express")

//luego retornamos el metodo a traves de la aplicacion

const app = express()

//con esto ya puedo usar el objeto app y su metodo listen() para que escuche en un puerto especifico y pasarle una funcion que me imprima un mensaje cuando lo haga
//el numero del puerto lo podemos almacenar en una variable, ademas se puede pasar una variable de ambiente propia no nodejs que esta en process.env.PORT, esto
//sirve por ejemplo si se esta conectando de un hosting y el puerto que nos da ese servicio en una primera instancia y si no en un puerto local.

const port = process.env.PORT || 9000
app.listen(port,()=>{console.log("la aplicacion esta funcionando en el puerto: ",port)})