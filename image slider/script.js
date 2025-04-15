var nextBtn = document.querySelector('.next'),
prevBtn = document.querySelector('.prev'),
carousel = document.querySelector('.carousel'),
list = document.querySelector('.list'),
item = document.querySelector('.item'),
runningTime = document.querySelector('.timeRunning')

let timeRunning = 3000
let timeAutoNext = 4000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeout

let runNextAuto = setTimeout(()=>{
    nextBtn.click() 
} ,timeAutoNext) 

function resetTimeAnimation(){
    runningTime.style.animation='none'
    runningTime.offsetHeight
    runningTime.style.animation= null
    runningTime.style.animation='timeRunning 7s linear 1 forwards'
}

function showSlider(type){
    let sliderItemDom = list.querySelectorAll('.carousel .list .item')
    if(type ==='next'){
        list.appendChild(sliderItemDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemDom[sliderItemDom.length-1])
        carousel.classList.add('prev')
    }
clearTimeout(runTimeout)

runTimeout = setTimeout(()=>{
    carousel.classList.remove('next')
    carousel.classList.remove('prev')
},timeRunning)

clearTimeout(runNextAuto)
runNextAuto = setTimeout(()=>{
    nextBtn.click()
}, timeAutoNext)

resetTimeAnimation()  /*reset the running time animation*/

}
 /*start the initial animation*/
resetTimeAnimation()  