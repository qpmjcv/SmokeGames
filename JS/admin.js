const juegos = JSON.parse(localStorage.getItem('juegos')) || [];
const tableBody = document.getElementById('tableBody');



const myModal = new bootstrap.Modal(document.getElementById('modal'), {
    keyboard: true,
    backdrop: "static",
})

let edit = {
    state: false,
    id: null,
};

const renderTable = () => {
    tableBody.innerHTML = "";
    juegos.forEach(juego =>{
        const row = document.createElement('tr');
        const cells = `
        <tr>
        <th scope="row">${juego.title}</th>
        <td>${juego.developer}</td>
        <td>${juego.date}</td>
        <td>${juego.description}</td>
        <td>
        <div class="d-flex gap-2">
            <button class="btn btn-danger btn-sm" onclick="deleteGame(${juego.id})">
                <i class="bi bi-trash3" aria-hidden="true"></i>
            </button>
            <button class="btn btn-warning btn-sm" onclick="editGame(${juego.id})">
                <i class="bi bi-pencil-square" aria-hidden="true";"></i>
            </button>
        </div>
        </td>
        </tr>
        `;
        
        row.innerHTML = cells;
        tableBody.appendChild(row);
    })
};

document.getElementById('modalForm').addEventListener('submit', saveGame);
function saveGame (e) {
    e.preventDefault();
    let title = document.getElementById('titleText').value;
    let developer = document.getElementById('developerText').value;
    let date = document.getElementById('gameDate').value;
    let url = document.getElementById('urlText').value;
    let description = document.getElementById('descriptionText').value;
    let id = (juegos.length + 1);
    let datos = {
        id,
        title,
        url,
        date,
        developer,
        description,
    };
    juegos.push(datos);
    localStorage.setItem("juegos", JSON.stringify(juegos));
    renderTable();
    myModal.hide();
}

renderTable();

function deleteGame (id){
    const index = juegos.findIndex((item) =>{
        return item.id === id;
    });
    let validate = confirm(`Estás por borrar el número ${id},  segurísimo?????`);
    if(validate) {
        juegos.splice (index, 1)
        localStorage.setItem("juegos", JSON.stringify(juegos))
        renderTable()
    }
};

const editGame = (id) => {
    const index = juegos.findIndex((item) =>{
        return item.id === id;
    });

    document.getElementById('titleText').value = juegos[index].title;
    document.getElementById('developerText').value = juegos[index].developer;
    document.getElementById('gameDate').value = juegos[index].date;
    document.getElementById('urlText').value = juegos[index].url;
    document.getElementById('descriptionText').value = juegos[index].description;
    edit = {
        state: true,
        id: index,
    }
    openModal();
};

function openModal (){
    myModal.show();
};