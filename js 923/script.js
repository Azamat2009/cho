const data = [
    {
        id: 1,
        name: 'Ilon Bot',
        year: '2000',
    },
    {
        id: 2,
        name: 'Gucci man',
        year: '1990',
    },
    {
        id: 3,
        name: 'Ronaldo gg',
        year: '1892',
    },
    {
        id: 4,
        name: 'Messi 10',
        year: '2310',
    }
];

const form = document.forms.login
const table = document.querySelector('table')
const btn = document.querySelector('button')

function addRow(item) {
    const tr = document.createElement('tr')
    const tdNum = document.createElement('td')
    const tdName = document.createElement('td')
    const tdYear = document.createElement('td')
    const editImg = document.createElement('img')
    const delImg = document.createElement('img')

    tdNum.textContent = item.id
    tdName.textContent = item.name
    tdYear.textContent = item.year
    editImg.src = "./edit (1).svg"
    editImg.classList.add('edit')
    delImg.src = "./trash-2.svg"

    editImg.addEventListener('click', () => {
        tdName.contentEditable = true
        tdName.focus()
        tdYear.contentEditable = true
    })

    delImg.addEventListener('click', () => {
        tr.remove()
        const index = data.findIndex(i => i.id === item.id)
        data.splice(index, 1)
    })

    tdName.addEventListener('blur', () => {
        const index = data.findIndex(i => i.id === item.id)
        data[index].name = tdName.textContent
    })

    tdYear.addEventListener('blur', () => {
        const index = data.findIndex(i => i.id === item.id)
        data[index].year = tdYear.textContent
    })

    tr.append(tdNum, tdName, tdYear, editImg , delImg)
    table.append(tr)
}

data.forEach(item => {
    addRow(item)
})

btn.addEventListener('click', (event) => {
    event.preventDefault()

    const name = document.querySelector('#name').value
    const year = document.querySelector('#age').value

    const newItem = { id: data.length + 1, name: name, year: year }
    addRow(newItem)

    data.push(newItem)

    form.reset()
})