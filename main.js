
let button = document.querySelector('button')

const residentBtn = () => {
 
    console.log('Button Clicked')

    axios.get('https://swapi.dev/api/planets/2/')
        .then(res => {
            return res.data
      

        })
       
       for (let i=0; i < axios; i++){
       
        return [
            {
              json: {
                "url":'https://swapi.dev/api/people/5/'
              }
            },
            {
              json: {
                "url":'https://swapi.dev/api/people/68/'
              }
            },
            {
              json: {
                "url":'https://swapi.dev/api/people/81/'
              }
            }
          ]}
    }

    button.addEventListener('click',residentBtn)