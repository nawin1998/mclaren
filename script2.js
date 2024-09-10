// // card
// let card=document.getElementById("selection");
// function replace_img(image){
//     card.src=image.src;
// }
// // carousel
// const container =document.querySelector('.caro')
// const btns =document.querySelectorAll('.btn')
// const list =["caro-1","caro-2","caro-3","caro-4","caro-5","caro-6","caro-7","caro-8","caro-9"]

// let index=0

// btns.forEach((button)=>{
//         button.addEventListener('click',()=>{
//             if(button.classList.contains('btn-left')){
//                 index--;
//                 if(index<0){
//                     index=list.length-1;
//                 }
//                 container.style.background =  `url(images/mc-gt/${list[index]}.jpg)center/contain`
                
//             }
//             else{
//                 index++;
//                 if(index==list.length){
//                     index=0;
//                 }
//                 container.style.background =  `url(images/mc-gt/${list[index]}.jpg)center/contain`
//             }
//         })
// })