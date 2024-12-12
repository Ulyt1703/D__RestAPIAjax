let boxPokemon = document.querySelectorAll(".box__main-pokemon")
window.addEventListener("mousemove", function(event){
    let x = event.offsetX
    let y = event.offsetY
    for(let i = 0; i < boxPokemon.length; i++){
        let list = boxPokemon[i]
        list.style.transform = `translate(-${x/90}px, -${y/90}px)`
    }
})