let btn = document.getElementById("button")
let txt = document.getElementById("input-text")
let txtno = document.getElementById("input-no")
btn.addEventListener("click",()=>{
    let text = txt.value.trim()
    let note = txtno.value.trim()
    if(text && note){
    localStorage.setItem(note,text)
    // location.reload()
    display()
    }else{
        alert("Please Fill The Boxes Correctly Your Text")
    }
})



window.addEventListener("DOMContentLoaded",()=>{
    display()
})
let display=()=>{
 let output = document.getElementById("second")
    let ihtml=""
for(let i=0; i< localStorage.length ;i++){
let key1 = localStorage.key(i)
let value1= localStorage.getItem(key1)
ihtml += `<div class="content"> <p>${key1} : ${value1}</p>
<button onclick="remove('${key1}')" class="del btn">X</button> 
</div>`
}
output.innerHTML= ihtml
}

const remove=(key)=>{
    localStorage.removeItem(key)
    display()

}

