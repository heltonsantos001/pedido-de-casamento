const nao = document.querySelector("#nao");
let condicao = -1
nao.addEventListener("mouseover", fugir);
   
function fugir() {
    condicao++

    switch (condicao){
        case 0:
            nao.style.transform = 'translate(190px)'
            break;
        case 1:
            nao.style.transform = 'translate(-290px)'
            break;
        case 2:
            nao.style.transform = 'translate(120px, +100px)'
            break;
        case 3:
            nao.style.transform = 'translate(20px, +130px)'
            break;
        case 4:
            nao.style.transform = 'translate(+160px, -130px)'
            break;
        case 4:
            nao.style.transform = 'translate(190px)'
            break;
    }
}
const sim = document.querySelector("#sim");
let block = document.querySelector("#block");

sim.addEventListener("click", function(){
block.style.display = 'block'
})
