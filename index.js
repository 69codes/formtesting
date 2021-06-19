document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('registrar')
const input = form.querySelector('input')
const ul = document.getElementById('invitedList')

const mainDiv = document.querySelector('.main')
const div = document.createElement('div')
const filterLabel = document.createElement('label')
const filterCheckBox = document.createElement('input')

filterLabel.textContent = 'Hide those who havent responded'
filterCheckBox.type = 'checkbox'
div.appendChild(filterLabel)
div.appendChild(filterCheckBox)
mainDiv.insertBefore(div, ul)

filterCheckBox.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    const lis = ul.children
    if(isChecked){
        for(let i = 0; i < lis.length; i += 1 ){
            let li = lis[i];
            if (li.className === 'responded'){
                li.style.display = '';
            } else {
                li.style.display = 'none'
            }}
    } else {
        for (let i = 0; i < lis.length; i += 1){
            let li = lis[i]
            li.style.display = ''
        }
        
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const text = input.value
    input.value = ''
    const li = document.createElement('li')
    const span = document.createElement('span')
    li.textContent = text
    const label = document.createElement('label')
    label.textContent = 'Confirmed'
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    const editButton = document.createElement('button')
    editButton.textContent = 'edit'
    li.appendChild(editButton)

    const button = document.createElement('button')
    button.textContent = 'remove'
    li.appendChild(button)
    li.appendChild(span)
    label.appendChild(checkbox)
    li.appendChild(label)
    ul.appendChild(li)

})


ul.addEventListener('change', (e) => {
    const checkbox = event.target
    const checked = checkbox.checked
    const listItem = checkbox.parentNode.parentNode

    if (checked) {
        listItem.className = 'responded'
    } else {
        listItem.className = ''
    }
});

ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON'){
        const li = e.target.parentNode;
        const ul = li.parentNode
        if (e.target.textContent === 'remove') {

            ul.removeChild(li)
        } else if (e.target.textContent === 'edit'){
            const span = li.firstChild;
            const input = document.createElement('input')
            input.type = 'text'
            input.value = span.textContent
            li.insertBefore(input, span)
            li.removeChild(span)
            e.target.textContent = 'save'
        }
        else if (e.target.textContent === 'save'){
            const input = li.firstChild;
            const span = document.createElement('span')
            
              span.textContent = input.value
            li.insertBefore(span, input)
            li.removeChild(input)
            e.target.textContent = 'edit'
        }


    }
})
} )