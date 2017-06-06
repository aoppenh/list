let listEmpty = true
let count = 0
let list = new Array()
let boolList = new Array()
let array = new Array()

const sub = document.querySelector('#listForm')
let prm
let del
let clr

function promoteItem(ev) {
    ev.preventDefault();
    console.log('promoting item')

    if (boolList[0]) {
        boolList[0] = false
        //let split = Object.keys(list).split('')
        const pr = '#el' + count
        document.querySelector(pr).style.border = 'thick solid goldenrod'
    } else {
        boolList[0] = true
        //let split = Object.keys(list).split('')
        const pr = '#el' + count
        document.querySelector(pr).style.border = 'transparent'
    }
}

function deleteItem(ev) {
    ev.preventDefault();

    document.querySelector('#title').innerHTML = ''
    count--
    console.log('deleting item')

    // var el = document.getElementById('childeNode')
    // el.parentNode.removeChild(el)
}

function addToList(name) {
    count++
    list[count] = new Array(count + ' : ' + name)
    boolList[count] = new Array(true)
    console.log('Added ' + list[count])
}

function addPrm() {
    const promoteButton = document.createElement('button')
    promoteButton.setAttribute('id', 'prmB' + count)
    promoteButton.innerHTML = ' &nbsp &nbsp Promote &nbsp'
    return promoteButton
}

function addDel() {
    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('id', 'delB' + count)
    deleteButton.innerHTML = '&nbsp Delete &nbsp'
    return deleteButton
}

function addClr() {
    const clearButton = document.createElement('button')
    clearButton.setAttribute('class', 'clrB')
    clearButton.setAttribute('type', 'clear')
    return clearButton
}

function renderList(list) {
    const listDisplay = document.createElement('ul')
    listDisplay.setAttribute('id', 'myList')
    array.push(list[count])
    const li = renderListData(list[count])
    if (listEmpty) {
        listDisplay.appendChild(addClr())
    }
    var myList = document.getElementById('myList')
    if (!listEmpty) {
        listDisplay.insertBefore(li, listDisplay.childNodes[1])
    } else {
        listDisplay.appendChild(li)
    }

    prm = document.querySelector('#buttonForm')
    prm.addEventListener('click', promoteItem)
    // del = document.querySelector('delB' + array[0])
    // del.addEventListener('click', deleteItem)
    // clr = document.querySelector('clrB' + array[0])
    // clr.addEventListener('click', handleReset)

    if (listEmpty) {
        document.querySelector('#title').querySelector('strong').innerHTML = 'My Favorite Things'
        listEmpty = false
    }

    return listDisplay
}

function renderListData(value) {
    const li = document.createElement('li')
    li.innerHTML = `${value}`
    li.setAttribute('id', 'el' + count)
    li.appendChild(addPrm())
    //li.appendChild(addDel())
    return li
}

function handleSubmit(ev) {
    ev.preventDefault()

    const tar = ev.target
    const name = tar.enter.value
    const details = document.querySelector('#list')

    addToList(name)
    details.appendChild(renderList(list))
}

function handleReset() {
    count = 0
}

sub.addEventListener('submit', handleSubmit)