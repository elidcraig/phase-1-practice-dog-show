document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/dogs')
        .then(resp => resp.json())
        .then(dogsArray => {
            console.log(dogsArray)
        })
})