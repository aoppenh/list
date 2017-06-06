let listEmpty = true
let count = 0
let list = new Array()
let boolList = new Array()
let array = new Array()

const sub = document.querySelector('#listForm')
const listDisplay = document.createElement('ul')
let prm
let del
let clr

function promoteItem(clicked_id) {
    console.log('promoting item')

    let k = 1
    for (let bool in boolList) {
        for (let name in list) {
            let split = new Array()
            split = name.split('')
            const id = '#el' + split[0]
            const nm = 'prmB' + name
            if (boolList[k] && nm === clicked_id) {
                boolList[k] = false
                document.querySelector(id).style.border = 'thick solid goldenrod'
            } else if (boolList[k] === false && nm === clicked_id) {
                boolList[k] = true
                document.querySelector(id).style.border = 'transparent'
            }
        }
        k++
    }
    return false
}

function deleteItem(clicked_id) {
    console.log('deleting item')

    let k = 1
    for (let bool in boolList) {
        for (let name in list) {
            let split = new Array()
            split = name.split('')
            const id = '#el' + split[0]
            const nm = 'delB' + name
            boolList[k] = false
            document.querySelector(id).style.border = 'thick solid crimson'

            var el = document.getElementById(id)
            el.parentNode.removeChild(el)
        }
        k++
    }

    count--
}

function addToList(name) {
    count++
    list[count] = new Array(count - 1 + ' : ' + name)
    boolList[count] = new Array(true)
    console.log('Added ' + list[count])
}

function addPrm() {
    const promoteButton = document.createElement('button')
    promoteButton.setAttribute('id', 'prmB' + count)
    promoteButton.setAttribute('onClick', 'promoteItem(this.id)')
    promoteButton.setAttribute('type', 'button')
    promoteButton.innerHTML = ' &nbsp &nbsp Promote &nbsp'
    return promoteButton
}

function addDel() {
    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('id', 'delB' + count)
    deleteButton.setAttribute('onClick', 'deleteItem(this.id)')
    deleteButton.setAttribute('type', 'button')
    deleteButton.innerHTML = '&nbsp Delete &nbsp'
    return deleteButton
}

function addClr() {
    const clearButton = document.createElement('button')
    clearButton.setAttribute('id', 'clrB' + count)
    clearButton.setAttribute('onClick', 'handleReset(this.id)')
    clearButton.setAttribute('type', 'button')
    clearButton.innerHTML = 'Clear All'
    return clearButton
}

function renderList(list) {
    listDisplay.setAttribute('id', 'myList')
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

    // prm = document.querySelector('#buttonForm')
    // prm.addEventListener('click', promoteItem)
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
    li.appendChild(addDel())
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

    console.log('clearing list')

    //$('li').remove()

    location.reload()
}

sub.addEventListener('submit', handleSubmit)