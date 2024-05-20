const tbodyUsers = document.querySelector(".tbody");
const btnGet = document.querySelector("#btnGet");
const logOutButton = document.getElementById("logoutBtn");
const searcherPatient = document.getElementById("searchPatientInput");

document.addEventListener('DOMContentLoaded', () => {
  const btnPost = document.querySelector("#btnPost");
  const createPatientForm = document.querySelector("#createPatientForm");
  const updatePatientForm = document.querySelector("#updatePatientForm");

  // Muestra el modal al hacer clic en el botón "Crear"
  btnPost.addEventListener("click", () => {
    $('#createPatientModal').modal('show');
  });

  // Maneja el envío del formulario de creación
  createPatientForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newPatient = {
      id: Date.now().toString(),
      name: document.getElementById("patientName").value,
      type: document.getElementById("patientType").value,
      cc: document.getElementById("patientCC").value,
      birth: document.getElementById("patientBirth").value,
      email: document.getElementById("patientEmail").value,
      diag: document.getElementById("patientDiag").value,
      med: document.getElementById("patientMed").value,
    };
    data.push(newPatient);
    filterPatients();
    $('#createPatientModal').modal('hide');
  });

  // Maneja el envío del formulario de actualización
  updatePatientForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const updatedPatient = {
      id: document.getElementById("updatePatientId").value,
      name: document.getElementById("updatePatientName").value,
      type: document.getElementById("updatePatientType").value,
      cc: document.getElementById("updatePatientCC").value,
      birth: document.getElementById("updatePatientBirth").value,
      email: document.getElementById("updatePatientEmail").value,
      diag: document.getElementById("updatePatientDiag").value,
      med: document.getElementById("updatePatientMed").value,
    };
    const index = data.findIndex(patient => patient.id === updatedPatient.id);
    if (index !== -1) {
      data[index] = updatedPatient;
    }
    filterPatients();
    $('#updatePatientModal').modal('hide');
  });
});


let data = [
  {
    id: "1",
    name: "Fabiana Andrea Aguilar Gaviria",
    cc: "1125466325",
    type: "Cédula",
    birth: "2024-10-25",
    email: "fabiaguilar@gmail.com",
    diag: "Diabetes",
    med: "Insulina",
  },
  {
    id: "2",
    name: "Hernando Aguirre Arroyave",
    cc: "1125466325",
    type: "Cédula",
    birth: "2004-07-31",
    email: "hernandoaguirrea@gmail.com",
    diag: "Gastritis",
    med: "Esomeprazol",
  },
  {
    id: "3",
    name: "Oscar Alejandro Manrique Quintero",
    cc: "10030025441",
    type: "Tarjeta de identidad",
    birth: "2010",
    email: "alejandromanrique@gmail.com",
    diag: "Amigdalitis",
    med: "Azitromicina",
  },
];

logOutButton.addEventListener('click', function() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        localStorage.removeItem('accessToken');
        window.location.href = '../../inicio.html';
    }
});

btnGet.addEventListener("click", paintClient);
searcherPatient.addEventListener('input', filterPatients);

function paintClient() {
  // Llama a filterPatients para que pinte todos los usuarios inicialmente
  filterPatients();
}

function filterPatients() {
  const searchText = searcherPatient.value.toLowerCase();

  // Filtrar los datos en función del texto de búsqueda
  const filteredData = data.filter(user => user.name.toLowerCase().includes(searchText));

  // Limpiar el tbody
  tbodyUsers.innerHTML = '';

  // Pintar los datos filtrados
  filteredData.forEach((user) => {
    tbodyUsers.innerHTML += `
    <tr>
        <td class=""> ${user.name} </td>
        <td class=""> ${user.type} </td>
        <td class=""> ${user.cc} </td>
        <td class=""> ${user.birth} </td>
        <td class=""> ${user.email} </td>
        <td class=""> ${user.diag} </td>
        <td class=""> ${user.med} </td>
        <td>
            <button type="button" class="btn btn-outline-info btnUpdate" data-id="${user.id}" >Actualizar</button>
            <button type="button" class="btn btn-outline-warning btnDelete" data-id="${user.id}" >Eliminar</button>
        </td>
    </tr>
    `;
  });

  // Añadir event listeners a los botones de eliminar y actualizar después de renderizar
  addEventListeners();
}

function addEventListeners() {
const btnsDelete = document.querySelectorAll(".btnDelete");

  btnsDelete.forEach((btnDelete) => {
    btnDelete.addEventListener("click", () => {
      const patientId = btnDelete.getAttribute("data-id");
      deletePatient(patientId);
    });
  });


function deletePatient(id) {
  // Buscar el índice del paciente en la matriz de datos
  const index = data.findIndex(patient => patient.id === id);

  // Si se encuentra el paciente, eliminarlo de la matriz
  if (index !== -1) {
    data.splice(index, 1);
    // Volver a renderizar la lista de pacientes en la tabla
    filterPatients();
    // Aquí puedes agregar lógica adicional, como enviar una solicitud para eliminar el paciente del servidor
  }
}

  const btnsUpdate = document.querySelectorAll(".btnUpdate");

  btnsUpdate.forEach((btnUpdate) => {
    btnUpdate.addEventListener("click", () => {
      const patientId = btnUpdate.getAttribute("data-id");
      const patient = data.find(p => p.id === patientId);

      if (patient) {
        document.getElementById("updatePatientId").value = patient.id;
        document.getElementById("updatePatientName").value = patient.name;
        document.getElementById("updatePatientType").value = patient.type;
        document.getElementById("updatePatientCC").value = patient.cc;
        document.getElementById("updatePatientBirth").value = patient.birth;
        document.getElementById("updatePatientEmail").value = patient.email;
        document.getElementById("updatePatientDiag").value = patient.diag;
        document.getElementById("updatePatientMed").value = patient.med;

        $('#updatePatientModal').modal('show');
      }
    });
  });
}
