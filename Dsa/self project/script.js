const pics = document.querySelectorAll(".pics")
let btn1 = document.querySelector(".logo1")
let btn2 = document.querySelector(".logo2")
var counter = 0;
// console.log(pics);

pics.forEach(
    (pics, index)=>{
       pics.style.left = `${index*100}%`
    })

const slideimage  = ()=>{
    pics.forEach(
        (pics)=>{
            pics.style.transform = `translateX(-${counter*100}%)`;

        }
    )

}
btn1.onclick = () =>{
    if(counter<0){
        return counter = 0
    }
    slideimage();
        counter--;

  
      
}
btn2.onclick = () =>{
 if(counter>=4){
    return counter =3
 }
 slideimage();
 counter++;

      
     
}

 