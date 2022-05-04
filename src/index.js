const dogTableBody = document.querySelector('#table-body')
const dogEditorForm = document.querySelector('#dog-form')

function renderDogTable(dogsArray) {
    dogsArray.forEach(dogObj => {
        const dogRow = document.createElement('tr')

        const dogNameCell = document.createElement('td')
        const dogBreedCell = document.createElement('td')
        const dogSexCell = document.createElement('td')
        const editButtonCell = document.createElement('td')
        const editButton = document.createElement('button')

        dogNameCell.textContent = dogObj.name 
        dogBreedCell.textContent = dogObj.breed 
        dogSexCell.textContent = dogObj.sex
        editButton.textContent = 'Edit'
        editButtonCell.appendChild(editButton)
        
        dogRow.appendChild(dogNameCell)
        dogRow.appendChild(dogBreedCell)
        dogRow.appendChild(dogSexCell)
        dogRow.appendChild(editButtonCell)

        dogTableBody.appendChild(dogRow)
    })
    

}

fetch('http://localhost:3000/dogs')
    .then(resp => resp.json())
    .then(dogsArray => {
        renderDogTable(dogsArray)
    })