const recount = document.getElementById("contadorVisitas");
const resetbt = document.getElementById("btnReestablecer");

const render = () => recount.innerText=localStorage.getItem("contador");

window.addEventListener("load", ()=>{
    let contador=parseFloat(localStorage.getItem("contador"));
    contador += 1;
    localStorage.setItem("contador",contador);
    render();
})

resetbt.addEventListener("click", () =>{
    localStorage.setItem("contador",0);
    render();
})

if(localStorage.getItem("contador") == 100){
    alert("FELICIDAD! Has espameado F5 100 veces!")
}