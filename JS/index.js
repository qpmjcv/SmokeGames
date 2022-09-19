// let pagina = 1;
// const btnAnterior = document.getElementById('btnAnterior');
// const btnSiguiente = document.getElementById('btnSiguiente');
const juegos = JSON.parse(localStorage.getItem('juegos')) || [];


// btnSiguiente.addEventListener('click', () => {
//     if(pagina <1000){
//         pagina += 1;
//         obtenerJuegos();

//     }
// })

// btnAnterior.addEventListener('click', () => {
//     if(pagina > 1){
//         pagina -= 1;
//         obtenerJuegos();

//     }
// })

// const cargarJuegos = async() => {
//     try {
//         const respuesta = await fetch('https://my-json-server.typicode.com/qpmjcv/GamesApi/db');
//         console.log(respuesta);
//         if(respuesta.status === 200){
//             const datos = await respuesta.json();

//             let juegos = '';
//             datos.juegos.forEach(juego => {
//                 juegos += `
//                     <div class="juego">
//                         <img class="poster" src="${juego.url}">
//                         <h3 class="titulo">${juego.title}</h3>
//                     </div>    
//                     `;
                               
//             });

//             document.getElementById('contenedor').innerHTML = juegos;
            
//         } else if(respuesta.status === 401, 402, 403, 404, 405){
//             console.log('El arreglo es demasiado largo');
//         }

//     } catch(error){
//         console.log(error);
//     }
// }

// cargarJuegos();

const renderCarousel = ()=>{
    const juegosCortos = juegos.slice(0, 5)
    // juegosCortos.forEach(juego =>{       
    //     const contenedor = document.getElementById('carouselContainer');
    //     const item = document.createElement('div');
    //     item.classList = 'carousel-item';
    //     item.innerHTML = `
    //         <img src="${juego.url}" class="d-block w-100" alt="${juego.title}">
    //         <div class="carousel-caption d-none d-md-block">
    //         <h5>${juego.title}</h5>
    //         <p>${juego.description}</p>
    //     `
    //     contenedor.appendChild(item)
    // }) 
    for(let i = 0; i < juegosCortos.length; i++){
        const contenedor = document.getElementById('carouselContainer');
        const item = document.createElement('div');
        item.classList = 'carousel-item';
        if(i === 0){
            item.classList = 'carousel-item active'
        };
        // if(juegosCortos[i].description.length < 117){
        //     let descripcion = juegosCortos[i].description.slice(0, 117);
        //     console.log(descripcion)
        // }
        item.innerHTML = `
            <img src="${juegosCortos[i].url}" class="d-block w-100 img-fluid" alt="${juegosCortos[i].title}">
            <div class="carousel-caption d-none d-md-block">
            <h5>${juegosCortos[i].title}</h5>
            <p>${juegosCortos[i].description.slice(0, 90)}</p>
        `;
        contenedor.appendChild(item);        
    }
}

renderCarousel()

const renderGames = ()=>{
    juegos.forEach(juego =>{
        const contenedor = document.getElementById('contenedor');
        const tarjeta = document.createElement('div');
        tarjeta.innerHTML = `
            <img class="img-fluid" src="${juego.url}">
            <h3 class="title">${juego.title}</h3>        
            `;
        contenedor.appendChild(tarjeta);
    })
}

renderGames()

const modalRender1 = (() =>{
    juegos.slice(20, 26).forEach(juego =>{
        const modalContainer = document.getElementById('modal1')
        const modalCard = document.createElement('div')
        modalCard.innerHTML=`
        <img class="img-fluid" src="${juego.url}">
        <h3 class="title">${juego.title}</h3>        
        `;
        modalContainer.appendChild(modalCard);
   })
})()

const modalRender2 = (() =>{
    juegos.slice(5, 11).forEach(juego =>{
        const modalCard = document.createElement('div')
        const modalContainer = document.getElementById('modal2')
        modalCard.innerHTML=`
        <img class="img-fluid" src="${juego.url}">
        <h3 class="title">${juego.title}</h3>        
        `;
        modalContainer.appendChild(modalCard);
    })
})()

const modalRender3 = (() =>{
    juegos.slice(14, 20).forEach(juego =>{
        const modalCard = document.createElement('div')
        const modalContainer = document.getElementById('modal3')
        modalCard.innerHTML=`
        <img class="img-fluid" src="${juego.url}">
        <h3 class="title">${juego.title}</h3>        
        `;
        modalContainer.appendChild(modalCard);
    })
}) ()



