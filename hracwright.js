const btn = document.querySelector(".login-btn")
const header = document.querySelector("h1")
const hidden = document.querySelector(".psst")
const secret = document.querySelector(".super-secret-text")

btn.addEventListener("click", () => {
    if (login.value.toLowerCase() === "jarmil" && pass.value === "Admin123") {
        header.innerText = "Přihlášení problěhlo úspěšně"
        secret.innerText = "42"
        secret.style.fontSize = "50px"
        hidden.classList.remove("hidden")
    } else {
        header.innerText = "Špatné přihlašovací údaje"
    }
})
