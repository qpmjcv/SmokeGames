
const contenedorJuegos = document.querySelector('#contenedor');

const juegos = JSON.parse(localStorage.getItem('juegos')) || [];

const cargarJuegos=()=>{
    juegos.forEach(juego => {
        const columna=document.createElement('div');
        columna.classList="col mt-3 p-2";
        const juegoCard= `
            <div class="juego">
                <img class="poster" src="${juego.url}" alt="${juego.title}">
                <h3 class="titulo">${juego.title}</h3>
                
            </div>`;

        columna.innerHTML = juegoCard;

        contenedorJuegos.appendChild(columna);
    }); 
}

cargarJuegos();