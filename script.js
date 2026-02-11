const btnTrocarTema = document.getElementById("alterarTema")
const logo = document.getElementById("logo")
const cardsCouse = document.querySelectorAll(".cardCourse")
const btnsDetail = document.querySelectorAll(".btnDetail")
const body = document.body

if(localStorage.getItem("Theme", "Dark")){
    body.classList.add('DarkTheme')
    logo.classList.add('DarkThemeTitle')
    cardsCouse.forEach(card => {
        card.classList.add('DarkTheme')
    })
    btnsDetail.forEach(btn => {
        btn.classList.add('DarkThemeBtn')
    })

}

btnTrocarTema.addEventListener('click', () => {
    body.classList.toggle('DarkTheme')
    logo.classList.toggle('DarkThemeTitle')
    cardsCouse.forEach(card => {
        card.classList.toggle('DarkTheme')
    })
    btnsDetail.forEach(btn => {
        btn.classList.toggle('DarkThemeBtn')
    })
    
    if(body.classList.contains("temaEscuro")){
        localStorage.setItem("Theme", "Dark")
    }else{
        localStorage.setItem("Theme", "Light")
    }

})