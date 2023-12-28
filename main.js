import "./scss/main.scss";
document.querySelector(".form-input")?.addEventListener("keyup", function () {
    const value = this.value
    if (value.length === 0) {
        this.className = ""
        this.classList.add("form-input")
        this.classList.add("form-empty")
    } else if (value.length > 8) {
        this.className = ""
        this.classList.add("form-input")
        this.classList.add("form-success")
    } else {
        this.className = ""
        this.classList.add("form-input")
        this.classList.add("form-error")
    }
})

const alertCloseEls = document.querySelectorAll(".alert-close")
for (let i = 0; i < alertCloseEls.length; i++) {
    alertCloseEls[i].addEventListener("click",function () {
        this.parentElement.remove()
    })
}
