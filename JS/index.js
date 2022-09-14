let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
    if(pagina <20){
        pagina += 1;
        obtenerJuegos();

    }
})

btnAnterior.addEventListener('click', () => {
    if(pagina > 1){
        pagina -= 1;
        obtenerJuegos();

    }
})

// let juegos = '';

// const cargarJuegos = async() => {
//     try {
//         const respuesta = await fetch('https://my-json-server.typicode.com/qpmjcv/GamesApi/db');
//         console.log(respuesta);
//         if(respuesta.status === 200){
//             const datos = await respuesta.json();

            
//             datos.juegos.forEach(juego => {
//                 juegos += `
//                     <div class="juego">
//                        <img class="poster" src="${juego.url}">
//                         <h3 class="titulo">${juego.title}</h3>
//                     </div>    
//                     `;
                               
//             });

//             document.getElementById('contenedor').innerHTML = juegos;
            
        
        
//         }

//     } catch(error){
//         console.log(error);
//         console.log('El arreglo es demasiado largo');
//     }
// }

// cargarJuegos();


//https://my-json-server.typicode.com/qpmjcv/GamesApi/db