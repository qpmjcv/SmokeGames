const bodyTable = document.querySelector("#cuerpo-tabla");

const juegos = JSON.parse(localStorage.getItem("juegos")) || [];


const cargarTabla = () => {
  juegos.forEach((juegos) => {
    const fila = document.createElement("tr");

    const celda = `<th scope="row">${juegos.editor}</th>
        <td>${juegos.title}</td>
        <td>${juegos.date}</td>
        <td>${juegos.description}</td>
        <td>
        <div class="d-flex gap-2">
            <button class="btn btn-danger btn-sm">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
            <button class="btn btn-warning btn-sm">
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>
        </div>
          
        </td>`;

    fila.innerHTML = celda;

    bodyTable.appendChild(fila);
  });
};

cargarTabla();
