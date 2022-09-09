// create button
let button = document.querySelector('button')
const residentBtn = () => {
    console.log('Button Clicked')
    // clear resident section with empty string - 
    document.getElementById("add_to_me").innerHTML = ""
    // access your resdients throuhg your general/base URL - get planet meta data to retrieve list of residents
    axios.get('https://swapi.dev/api/planets/2/')
        .then(res => {
            // for each resident get person details
            for (let i = 0; i < res.data.residents.length; i++) {
                console.log(res.data.residents[i])
                // with personal details append name to HTML residents section 
                axios.get(res.data.residents[i])
                    .then(res => {
                        document.getElementById("add_to_me").innerHTML +=
                            `<h2>${res.data.name}</h2>`;
                    })
            }

        })


}

button.addEventListener('click', residentBtn)