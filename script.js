const btnTrocarTema = document.getElementById("alterarTema")
const logo = document.getElementById("logo")
const cardsCouse = document.querySelectorAll(".cardCourse")
const btnsDetail = document.querySelectorAll(".btnDetail")
const textsGray = document.querySelectorAll(".textsGray")
const inputs = document.querySelectorAll(".inputs")
const borderColorGray = document.querySelectorAll(".borderColorGray")
const body = document.body

if (localStorage.getItem("Theme") == "Dark") {
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
} else if (localStorage.getItem("Theme") == "Light") {
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

    if (body.classList.contains("DarkTheme")) {
        localStorage.setItem("Theme", "Dark")
        btnTrocarTema.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>'
    } else {
        localStorage.setItem("Theme", "Light")
        btnTrocarTema.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>'
    }
})

// CONSULTAR CEP NA API VIA CEP E RETORNAR OS DADOS

const nome = document.getElementById("nome")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const cpf = document.getElementById("cpf")
const curso = document.getElementById("curso")
const cep = document.getElementById("cep")
const rua = document.getElementById("rua")
const bairro = document.getElementById("bairro")
const cidade = document.getElementById("cidade")
const estado = document.getElementById("estado")
const erronome = document.getElementById("erronome")
const erroemail = document.getElementById("erroemail")
const errotelefone = document.getElementById("errotelefone")
const errocpf = document.getElementById("errocpf")
const errocurso = document.getElementById("errocurso")
const errocep = document.getElementById("errocep")
const errorua = document.getElementById("errorua")
const errobairro = document.getElementById("errobairro")
const errocidade = document.getElementById("errocidade")
const erroestado = document.getElementById("erroestado")
const formMatricula = document.getElementById("formMatricula")

formMatricula.addEventListener("submit", (e) => {

    let valido = true

    if (!validarCampo(nome, erronome, "Preencha o nome.")) valido = false
    if (!validarCampo(email, erroemail, "Informe um e-mail válido.")) valido = false
    if (!validarCampo(telefone, errotelefone, "Informe o número de telefone.")) valido = false
    if (!validarCampo(cpf, errocpf, "Informe o CPF corretamente.")) valido = false
    if (!validarCampo(curso, errocurso, "Selecione um curso.")) valido = false
    if (!validarCampo(cep, errocep, "Informe o CEP corretamente.")) valido = false
    if (!validarCampo(rua, errorua, "Informe a rua.")) valido = false
    if (!validarCampo(bairro, errobairro, "Informe o bairro.")) valido = false
    if (!validarCampo(cidade, errocidade, "Informe a cidade.")) valido = false
    if (!validarCampo(estado, erroestado, "Informe o estado.")) valido = false


    if (!valido) {
        e.preventDefault()
    }

})

function validarCampo(campo, erroElemento, mensagem) {
    if (campo.value.trim() === "") {
        erroElemento.innerText = mensagem
        campo.classList.add("border-red-500")
        return false
    } else {
        erroElemento.innerText = ""
        campo.classList.remove("border-red-500")
        return true
    }
}

function limpa_formulário_cep() {
    rua.value = ("");
    bairro.value = ("");
    cidade.value = ("");
    estado.value = ("");
}

function callbackCEP(conteudo) {
    if (!("erro" in conteudo)) {
        rua.value = (conteudo.logradouro);
        bairro.value = (conteudo.bairro);
        cidade.value = (conteudo.localidade);
        estado.value = (conteudo.uf);
    } 
    else {
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

        var cep = valor.replace(/\D/g, '');

        if (cep != "") {

            var validacep = /^[0-9]{8}$/;

            if(validacep.test(cep)) {

              rua.value="...";
              bairro.value="...";
              cidade.value="...";
              estado.value="...";

                var script = document.createElement('script');

                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=callbackCEP';

                document.body.appendChild(script);

            }
            else {
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        }
        else {
            limpa_formulário_cep();
        }
    };
