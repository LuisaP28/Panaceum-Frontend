document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.querySelector(".form-login");
    const errorAlert = document.querySelector(".alerta-error");

    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(formLogin);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        fetch("http://localhost:3000/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.ok) {
                formLogin.reset();
                window.location.href = "https://www.prueba.com";  // ! CAMBIAR LA URL POR LA QUE SE NECESITE REDIRECIONAR
            } else {
                return response.json().then(errorData => {
                    throw new Error(errorData.message || "Error al iniciar sesión");
                });
            }
        })
        .catch(error => {
            console.error("Error en el inicio de sesión:", error);
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
