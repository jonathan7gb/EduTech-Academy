const btnTrocarTema = document.getElementById("alterarTema")
const logo = document.getElementById("logo")
const cardsCouse = document.querySelectorAll(".cardCourse")
const btnsDetail = document.querySelectorAll(".btnDetail")
const textsGray = document.querySelectorAll(".textsGray")
const inputs = document.querySelectorAll(".inputs")
const borderColorGray = document.querySelectorAll(".borderColorGray")
const body = document.body

if(localStorage.getItem("Theme") == "Dark"){
    btnTrocarTema.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>'
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
}else if(localStorage.getItem("Theme") == "Light"){
     btnTrocarTema.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>'
    body.classList.remove('DarkTheme')
    logo.classList.remove('DarkThemeTextBlue')
    cardsCouse.forEach(card => {
        card.classList.remove('DarkTheme')
    })
    btnsDetail.forEach(btn => {
        btn.classList.remove('DarkThemeBtn')
    })
    textsGray.forEach(texts => {
        texts.classList.remove('DarkThemeTexts')
    })
    inputs.forEach(input => {
        input.classList.remove('DarkTheme')
    })
    borderColorGray.forEach(divs => {
        divs.classList.remove('DarkThemeBorder')
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
    
    if(body.classList.contains("DarkTheme")){
        localStorage.setItem("Theme", "Dark")
        btnTrocarTema.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>'
    }else{
        localStorage.setItem("Theme", "Light")
        btnTrocarTema.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>'
    }
})