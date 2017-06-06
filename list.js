let listEmpty = true
let count = 0

const sub = document.querySelector('#listForm')
let prm
let del
let clr

function addToList(list, name) {
    count++
    list[count] = name
    console.log('Added ' + list[count])
}

function addPrm(li) {
    const promoteButton = document.createElement('button')
    promoteButton.setAttribute('id', 'prmB')
    promoteButton.setAttribute('type', 'promote')
    promoteButton.innerHTML = ' &nbsp &nbsp Promote &nbsp'
    return promoteButton
}

function addDel(li) {
    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('id', 'delB')
    deleteButton.setAttribute('type', 'delete')
    deleteButton.innerHTML = '&nbsp Delete &nbsp'
    return deleteButton
}

function addClr() {
    const clearButton = document.createElement('button')
    clearButton.setAttribute('id', 'clrB')
    clearButton.setAttribute('type', 'clear')
    clr = document.querySelector('#clrB')
}

function renderList(list) {
    const listDisplay = document.createElement('ul')
    listDisplay.setAttribute('id', 'myList')
    Object.keys(list).map(function (fieldName) {
        const li = renderListData(fieldName, list[fieldName])
        if (listEmpty) {
            addClr()
        }
        var myList = document.getElementById('myList')
        if (listEmpty === false) {
            listDisplay.insertBefore(li, document.getElementById('child'))
        } else {
            listDisplay.appendChild(li)
        }
    })

    if (listEmpty) {
        document.querySelector('#title').querySelector('strong').innerHTML = 'My Favorite Things'
        listEmpty = false
    }

    return listDisplay
}

function renderListData(fieldName, value) {
    const li = document.createElement('li')
    li.innerHTML = `${fieldName}: ${value}`
    li.setAttribute('id', 'childNode')
    li.appendChild(addPrm(li))
    li.appendChild(addDel(li))
    return li
}

function handleSubmit(ev) {
    ev.preventDefault()

    const tar = ev.target
    const name = tar.enter.value
    const details = document.querySelector('#list')
    const list = {}

    addToList(list, name)
    details.appendChild(renderList(list))

    prm = document.querySelector('#buttonForm')
    prm.addEventListener('click', function () {
        console.log('promoting item')
    })
    del = document.querySelector('#buttonForm')
    del.addEventListener('click', function () {
        document.querySelector('#title').innerHTML = ''
        count--
    })
}

function handleReset() {
    count = 0
}

sub.addEventListener('submit', handleSubmit)