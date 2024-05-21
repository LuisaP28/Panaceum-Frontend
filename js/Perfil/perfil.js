import {  post } from "../ApiFetch/clientHTTP.js"
import { URL_PATIENT } from "../ApiFetch/urls.js"

const namePatient = document.getElementById("name");
const documentType = document.getElementById("documentType");
const documentNumber = document.getElementById("documentNumber");
const dateBirth = document.getElementById("dateBirth");
const gender = document.getElementById("gender");
const typeBloodPatient = document.getElementById("typeBloodPatient");
const email = document.getElementById("email");
const password = document.getElementById("password");
const create = document.getElementById("create");

document.addEventListener("DOMContentLoaded", () => {
  createPatient();
})

async function createPatient(){
create.addEventListener("submit", async () => {
    const newPatient = {
      name: namePatient,
      documentType : documentType,
      documentNumber : documentNumber,
      dateBirth : dateBirth,
      gender : gender,
      typeBlood : typeBlood,
      email : email,
      password : password,
      photo : "png"
    }

    try {
      const response = await post(URL_PATIENT, newPatient);
      console.log('Se creó el paciente correctamente', response);
  } catch (error) {
      console.error('Hay un error en la conexión:', error);
  }
  })
}

