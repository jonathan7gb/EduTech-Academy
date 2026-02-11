const btnTrocarTema = document.getElementById("alterarTema")
const logo = document.getElementById("logo")
const cardsCouse = document.querySelectorAll(".cardCourse")
const btnsDetail = document.querySelectorAll(".btnDetail")
const textsGray = document.querySelectorAll(".textsGray")
const inputs = document.querySelectorAll(".inputs")
const borderColorGray = document.querySelectorAll(".borderColorGray")
const body = document.body

if(localStorage.getItem("Theme", "Dark")){
    body.classList.add('DarkTheme')
    logo.classList.add('DarkThemeTextBlue')
    cardsCouse.forEach(card => {
        card.classList.add('DarkTheme')
    })
    btnsDetail.forEach(btn => {
        btn.classList.add('DarkThemeBtn')
    })
    textsGray.forEach(texts => {
        texts.classList.add('DarkThemeTexts')
    })
    inputs.forEach(input => {
        input.classList.add('DarkTheme')
    })
    borderColorGray.forEach(divs => {
        divs.classList.add('DarkThemeBorder')
    })

}

btnTrocarTema.addEventListener('click', () => {
    body.classList.toggle('DarkTheme')
    logo.classList.toggle('DarkThemeTextBlue')
    cardsCouse.forEach(card => {
        card.classList.toggle('DarkTheme')
    })
    btnsDetail.forEach(btn => {
        btn.classList.toggle('DarkThemeBtn')
    })
    textsGray.forEach(texts => {
        texts.classList.toggle('DarkThemeTexts')
    })
    inputs.forEach(input => {
        input.classList.toggle('DarkTheme')
    })
    borderColorGray.forEach(divs => {
        divs.classList.toggle('DarkThemeBorder')
    })

    if(body.classList.contains("temaEscuro")){
        localStorage.setItem("Theme", "Dark")
    }else{
        localStorage.setItem("Theme", "Light")
    }

})