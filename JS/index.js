const cargarJuegos = async() => {
    const respuesta = await fetch('https://my-json-server.typicode.com/qpmjcv/GamesApi/db');

    console.log(respuesta);
}

cargarJuegos();