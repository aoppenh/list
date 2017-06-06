let listEmpty = true

const submit = document.querySelector('listForm')
let clearAll

function handleSubmit(ev) {
    ev.preventDefault()

    const tar = ev.target

    const name = tar.enter.value

    const list = new Object()

    addToList(list, name)
}

function addToList(list, name) {

}

submit.addEventListener('submit', handleSubmit)