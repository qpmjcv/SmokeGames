let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
    if(pagina <1000){
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

const cargarJuegos = async() => {
    try {
        const respuesta = await fetch('https://my-json-server.typicode.com/qpmjcv/GamesApi/db');
        console.log(respuesta);
        if(respuesta.status === 200){
            const datos = await respuesta.json();

            let juegos = '';
            datos.juegos.forEach(juego => {
                juegos += `
                    <div class="juego">
                        <img class="poster" src="${juego.url}">
                        <a>"${juego.description}"</a>" 
                        <h3 class="titulo">${juego.title}</h3>
                    </div>    
                    `;
                               
            });

            document.getElementById('contenedor').innerHTML = juegos;
            
        } else if(respuesta.status === 401){
            console.log('Pusiste mal el cogido');
        }

    } catch(error){
        console.log(error);
    }
}

cargarJuegos();

