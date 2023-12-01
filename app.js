var getul = document.getElementById('ul')

function addTodo() {
    var a = document.getElementById('inp')
    var inputValue = a.value.trim()

    if (inputValue === '') {
        alert('Please! Enter the Value.')
        return;
    }

    var li = document.createElement('li')
    var litext = document.createTextNode(a.value)
    getul.appendChild(li)
    li.appendChild(litext)
    a.value = ''

    var deletebtn = document.createElement('button')
    var deletebtnText = document.createTextNode('Delete')
    deletebtn.appendChild(deletebtnText)
    li.appendChild(deletebtn)
    deletebtn.setAttribute('onclick', 'del(this)')

    var editbtn = document.createElement('button')
    var editbtnText = document.createTextNode('Edit')
    editbtn.appendChild(editbtnText)
    li.appendChild(editbtn)
    editbtn.setAttribute('onclick', 'edit(this)')

    deletebtn.setAttribute('class','btn btn-danger aaa')
    editbtn.setAttribute('class','btn btn-primary aaa')
}

function deletAll() {
    getul.innerHTML = ''
}

function del(e) {
    e.parentNode.remove()
}

function edit(e) {
    var a = prompt('Enter Edit Value', e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a
}