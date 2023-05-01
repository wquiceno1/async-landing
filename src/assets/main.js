const API = "https://rickandmortyapi.com/api/character";

let content = null || document.getElementById('content')

const options = {
    method: 'GET'
}

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}
// fetch(API, options)
//     .then(response => response.json())
//     .then(json => console.log(json))

(async () => {
    try {
        const caracters = await fetchData(API);
        // console.log(caracters) 
        let view = `
        ${caracters.results.map(caracter => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${caracter.image}" alt="imagen ${caracter.name}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between flex-col">
                <h3 class="text-m text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${caracter.name}
                </h3>
                <h3 class="text-sm text-gray-500">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${caracter.species}
                </h3>
                <h3 class="text-sm text-gray-500">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${caracter.location.name}
                </h3>
                
            </div>
        </div>`).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error)
    }
})();

