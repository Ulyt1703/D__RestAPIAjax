let inputMain = document.querySelector(".form-control")
let btnMain = document.querySelector(".btn-primary")

inputMain.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        event.preventDefault()
        btnMain.click()
    }
})

btnMain.addEventListener("click", function () {
    let inputMainValue = inputMain.value.trim()
    let pokemonTemplate = document.querySelector("#pokemon-template").innerHTML
    let handLe = Handlebars.compile(pokemonTemplate)

    fetch(`https://pokeapi.co/api/v2/pokemon/${inputMainValue.toLowerCase()}`, {
        method: "GET",
    })
        .then((Response) => {
            if (!Response.ok) {
                console.error("Error")
            }
            return Response.json()
        })
        .then((value) => {
            let PokeMan = handLe(value)
            let mainContainer = document.querySelector(".js-card-container")
            mainContainer.innerHTML = PokeMan
            const cardBody = mainContainer.querySelector(".card-body")
            if (cardBody) {
                const randomColor = getRandomColor()
                cardBody.style.backgroundColor = randomColor
            }
        })
        .catch((error) => {
            console.error(error)
        })
})
function getRandomColor() {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}


let pokemonHidden = document.querySelector(".main__pokemon-hidden")
function startPokemonCycle() {
    setInterval(() => {
        pokemonHidden.classList.add("main__pokemon-visible")
        setTimeout(() => {
            pokemonHidden.classList.remove("main__pokemon-visible")
        }, 5000)
    }, 14000)
}
setTimeout(() => {
    pokemonHidden.classList.add("main__pokemon-visible")
    setTimeout(() => {
        pokemonHidden.classList.remove("main__pokemon-visible")
    }, 5000)

    startPokemonCycle()
}, 9000)