const tbodyUsers = document.querySelector(".tbody");

async function paintClient() {
  /* const response = await fetch(URL);
    const data = await response.json();

    console.log(data);//CUIDADO CON LA RESPUESTA DE LA BASE DE DATOS */

  let data = [
    {
      id: "1",
      name: "as",
      cc: "0000",
      type: "cedu",
      birth: "20",
      email: "asdasd@asdasd",
      diag: "hepatitis",
      med: "ibuprofeno",
    },
    {
      id: "2",
      name: "as",
      cc: "0000",
      type: "cedu",
      birth: "20",
      email: "asdasd@asdasd",
      diag: "gastritis",
      med: "esomeprazol",
    },
    {
      id: "3",
      name: "as",
      cc: "0000",
      type: "cedu",
      birth: "20",
      email: "asdasd@asdasd",
      diag: "lupus",
      med: "metacarbamol",
    },
  ];

  data.forEach((user) => {
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

  const btnsDelete = document.querySelectorAll(".btnDelete");

  btnsDelete.forEach((btnDelete) => {
    btnDelete.addEventListener("click", () => {
      //fetch Method DELETE
      console.log("elimanado " + btnDelete.getAttribute("data-id"));
    });
  });

  /* const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data), // body data type must match "Content-Type" header
  }); */

  const btnsUpdate = document.querySelectorAll(".btnUpdate");

  btnsUpdate.forEach((btnDelete) => {
    btnDelete.addEventListener("click", () => {
      //fetch Method UPDATE
      console.log("actualizando " + btnDelete.getAttribute("data-id"));
    });
  });
}

paintClient();
