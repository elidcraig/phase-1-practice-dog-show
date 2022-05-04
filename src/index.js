const dogTableBody = document.querySelector('#table-body')

function renderDogTable(dogsArray) {

}

fetch('http://localhost:3000/dogs')
    .then(resp => resp.json())
    .then(dogsArray => {
        renderDogTable(dogsArray)
    })