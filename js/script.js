const input = document.querySelector("input")
const inputb = document.querySelector(".input-box")
const btn = document.getElementById("btn")
const h2 = document.getElementById("display")
const date = document.getElementById('date')
const img = document.querySelector('img')
const msg = document.querySelector(".msg")
const mbtn = document.querySelector(".modal-btn")
const close = document.querySelector(".btn-close")
const modal = document.querySelector(".modal")
const mahina = document.querySelector(".mahina")
const weeks = document.querySelector(".weeks")
const divso = document.querySelector(".divso")
const hr = document.querySelector(".hr")
const temp = document.querySelector(".temp")
const minutes = document.querySelector(".minutes")
const second = document.querySelector(".second")
const res = document.querySelector(".res")

console.log(h2);

input.max = new Date().toISOString().split('T')[0]

console.log(input.max);
modal.addEventListener('blur', ()=>{
    window.location.reload()
})
mbtn,close.addEventListener('click', ()=>{
    window.location.reload()
})

btn.addEventListener('click', ()=>{

    if(input.value == ""){
        temp.style.display = 'block'
        img.src= 'assets/warning-sign-30915_640 (1).webp'
        msg.innerHTML = `You have not entered the date`
       return false
  
    }else{

    let dob = new Date(input.value);
    let now = new Date()

    let y1 = dob.getFullYear()
    let m1 = dob.getMonth() + 1
    let d1 = dob.getDate()

    let month = [31,28,31,30,31,30,31,31,30,31,30,31]

    let y2 = now.getFullYear()
    let m2 = now.getMonth() + 1
    let d2 = now.getDate()

    if(d1 > d2){
        d2 = d2 + month[m2 - 1]
        m2 = m2 - 1 
    }

    if(m1 > m2){
        m2 = m2 + 12 
        y2 = y2 - 1 
    }
    if(y1 > y2){
        temp.style.display = 'block'
        img.src= 'assets/warning-sign-30915_640 (1).webp'
        msg.innerHTML = `Please enter valid age`
        return false
    }

    var y = y2 - y1 
    var m = m2 - m1 
    var d = d2 - d1 

    h2.innerHTML = `You are <span> ${y} </span>Years , <span>${m} </span>Months , <span>${d} </span> Days old.`
    
    console.log(y);
    console.log(m);
    console.log(d);

    let sec = Math.round((Date.now() - dob.getTime())/1000)

    let min = Math.round( sec / 60) 
    
    let hour = Math.round(min / 60 ) 

    let day = Math.round( hour / 24)

    let months = y*12 + m
 
    let week = Math.ceil( months*4.345)
    
    res.innerHTML = `<i class="fa-solid fa-hourglass-start"></i>&nbsp; Your Timeline`
    mahina.innerHTML = `<i class="fa-solid fa-heart"></i>&nbsp; <span> ${months} </span>Months , <span>${d}</span> Days .`
    weeks.innerHTML = `<i class="fa-solid fa-heart"></i>&nbsp; <span> ${week} </span>Weeks .`
    divso.innerHTML = `<i class="fa-solid fa-heart"></i>&nbsp; <span> ${day} </span>Days .`
    hr.innerHTML = `<i class="fa-solid fa-heart"></i>&nbsp; <span> ${hour} </span>Hours .`
    hr.innerHTML = `<i class="fa-solid fa-heart"></i>&nbsp; <span> ${hour} </span>Hours .`
    minutes.innerHTML = `<i class="fa-solid fa-heart"></i>&nbsp; <span> ${min} </span>Minutes .`
    second.innerHTML = `<i class="fa-solid fa-heart"></i>&nbsp; <span> ${sec} </span>Seconds .`
     
    // second 
    setInterval(sf , 1000)

     function sf(){
        second.innerHTML = `<i class="fa-solid fa-heart"></i>&nbsp; <span> ${sec++} </span>Seconds .`
     }

    //  minutes 
    setInterval(mf , 60000)

    function mf(){
     minutes.innerHTML = `<i class="fa-solid fa-heart"></i>&nbsp; <span> ${min++} </span>Minutes .`
    }
    
  }

})

   