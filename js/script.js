let plus =document.querySelector('.plus');
let minus =document.querySelector('.minus');
let num =document.querySelector('.num');

let a = 0;

plus.addEventListener("click",function(){
    a++;
    num.value=a;
})
minus.addEventListener("click",function(){
    a--;
    num.value=a;
    if(a<=0){
        a=0;
        num.value=a;
    }
})
////////////////
let images=document.querySelectorAll(".images img");
let image= document.querySelector(".image");
let cont = document.querySelectorAll('.divs');

images.forEach(element => {
    element.addEventListener("click",(e) => {
    image.src=e.target.src; 
    // console.log(e.target.nextElementSibling);
   cont.forEach(el=>{
    el.classList.remove('active');
   });

   e.target.nextElementSibling.classList.add('active');
      
    });  
});

////////////////////////////

let add = document.querySelector(".add");
let btn = document.querySelector(".btn");
let article = document.querySelector(".article");
let para = document.querySelector(".para");
let spn =document.querySelector('.spn');
let prix =document.querySelector('.prix');



add.addEventListener('click',function(){
 
   
    if(num.value!=0)
    {
    spn.innerHTML=`$125 x ${num.value}`;
    prix.innerHTML="  $"+125*parseInt(num.value)+".00";
    para.style.display="none";
    article.style.display="flex";
    btn.style.display="block";
   }




})

let cart=document.querySelector('.cart');
let item=document.querySelector('.item');


cart.onclick=function(){
// item.style.display="flex";
item.classList.toggle('hidden');

}
////////// NOTIFICATION ////////////////
let noti = document.querySelector('.noti');
add.onclick=function(){
    if(num.value!=0){
    noti.textContent=num.value;
  noti.style.display="flex";
    }

}
cart.addEventListener("click",function(){
    noti.style.display="none";
})


////////// DELETE ////////////////
let sup = document.querySelector('.delete');
sup.onclick=function(){
    btn.style.display="none";
    article.style.display="none";
    para.style.display="block";
    noti.style.display="none";
    


}




///////// MOBILE /////////

let icon =document.querySelector('.icon');
let menu =document.querySelector('.menu');
let overlay =document.querySelector('.overlay');
let close =document.querySelector('.close');


icon.addEventListener("click",function(){
  menu.classList.toggle('hidden');
  overlay.classList.toggle('w-full');


})
close.addEventListener("click",function(){
    menu.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  
  
  })
////////////PREVIOUS-NEXT////////
let prev=document.querySelector('.prev');
let next=document.querySelector('.next');
let continueSliding = true

let slide=["images/image-product-1.jpg", "images/image-product-2.jpg",
           "images/image-product-3.jpg","images/image-product-4.jpg"];
let index =0;

// next.onclick=function(){
//     if(continueSliding){
//    if(index==0){
//     image.src="images/image-product-1.jpg";


//    }

//     image.src=slide[index];
//     index++;
//     console.log(index);
    
    

// }

//     if(index>=slide.length){
//        index=0;
//        continueSliding=false;
//        next.style.display='none';
//     }


//    image.src=slide[index];
//    index++;
    
//     console.log(index);      

// }
window.onload=function(){
    image.src=slide[0];
}

next.onclick = function() {
    index = (index + 1) % slide.length; // Ensure index doesn't go out of bounds
    image.src = slide[index];
    console.log(index);
   
}

prev.onclick = function() {
    index = (index - 1 + slide.length) % slide.length; // Ensure index doesn't go out of bounds
    image.src = slide[index];
    console.log(index);
  
}





