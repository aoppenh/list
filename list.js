let listEmpty = true

const submitButton = document.querySelector('#listForm')
let prom
let del
let clr

const details = document.querySelector('#details')

function handleSubmit(ev) {
    ev.preventDefault()

    const tar = ev.target

    const name = tar.enter.value

    const list = new Object()

    addToList(list, name)
}

function addToList(list, name) {

}

function addProm() {

}

function addDel() {

}

function addClr() {

}

function removeFromList() {

}

submitButton.addEventListener('submit', handleSubmit)