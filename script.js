const formList = document.querySelectorAll("#form")[0]

form.addEventListener("submit", handleSubmit)
form.addEventListener("click", validate)


for (let index = 0; index < formList.length-1; index++) {
    formList[index].addEventListener("keyup", validate)
}

function addError(elem) {
    elem.nextElementSibling.innerHTML = `${elem.placeholder} cannot be empty`
    elem.style.backgroundImage = "url('./images/icon-error.svg')"
    elem.style.backgroundRepeat = "no-repeat"
    elem.style.backgroundPositionX = "96%"
    elem.style.backgroundPositionY = "center"
    elem.style.border = "solid 2px red"
}

function removeError(elem) {
    elem.nextElementSibling.innerHTML = ""
    elem.style.backgroundImage = "none"
    elem.style.borderColor = "inherit"
}

function validate(e) {

    if(e.target.value !== undefined){

        if(e.target.value === ""){
            addError(e.target)     
        }else if(e.target.id === "email" && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)){
            addError(e.target)     
            form.email.nextElementSibling.innerHTML = "Looks like this is not an Email!"
        }else if(e.target.id === "password" && !/\w{8}$/.test(e.target.value)){
            addError(e.target)     
            form.password.nextElementSibling.innerHTML = "Looks like this is not a Password!"
        }else{
            removeError(e.target)
        }

    }else{}
}



function handleSubmit(e) {
    e.preventDefault()
    console.log("submit");


    for (let i = 0; i < formList.length - 1; i++) {
        if(formList[i].value === ""){
            addError(formList[i])     
        }else if(formList[i].id === "email" && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formList[i].value)){
            addError(formList[i])     
            form.email.nextElementSibling.innerHTML = "Looks like this is not an Email!"
        }else if(formList[i].id === "password" && !/\w{8}$/.test(formList[i].value)){
            addError(formList[i])     
            form.password.nextElementSibling.innerHTML = "Looks like this is not a Password!"
        }else{
            removeError(formList[i])
        }
    }



}
