document.addEventListener("DOMContentLoaded", () => {
    const formRegister = document.querySelector(".form-register");
    const errorAlert = document.querySelector(".alerta-error");
    const successAlert = document.querySelector(".alerta-exito");

    formRegister.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(formRegister);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch("http://localhost:3000/api/v1/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.ok) {
                formRegister.reset();
                successAlert.classList.add("visible");
                setTimeout(() => {
                    successAlert.classList.remove("visible");
                }, 3000);
            } else {
                return response.json().then(errorData => {
                    throw new Error(errorData.message || "Error al registrar");
                });
            }
        })
        .catch(error => {
            console.error("Error en el registro:", error);
            showErrorAlert(error.message);
        });
    });

    function showErrorAlert(message) {
        errorAlert.textContent = message;
        errorAlert.classList.add("visible");
        setTimeout(() => {
            errorAlert.classList.remove("visible");
        }, 3000);
    }
});
