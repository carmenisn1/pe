let saveEl =document.getElementById("save-el")
let countEl = document.getElementById("count")

console.log(countEl)


let count =0 
console.log(saveEl)

function increment() {
        
    console.log("the button was clicked ")
    count+=1
    countEl.innerText=count
}
function save() {
    let countSt = count + " - ";
    saveEl.textContent += countSt;
    

}

