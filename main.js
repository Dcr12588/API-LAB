
let button = document.querySelector('button')

const residentBtn = () => {
 
    console.log('Button Clicked')

    axios.get('https://swapi.dev/api/planets/2/')
        .then(res => {
            return res.data
      
        })
    }

    button.addEventListener('click',residentBtn)