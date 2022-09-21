let mySlider = [
    'img/image1.jpg',
    'img/image2.jpg',
    'img/image3.png'
]
let img=document.querySelector('#slider img');
img.src=mySlider[0];

let index=0;

let next=document.querySelector('.next');

next.addEventListener('click',function() {
    index++;
    
     if(index>mySlider.length-1){
            index=0;
     }

    img.src=mySlider[index];
})

let prev=document.querySelector('.prev');

prev.addEventListener('click',function() {
    index--; 
     if(index==-1){
            index=mySlider.length-1;
     }

    img.src=mySlider[index];
})

function AutoPlay() {
    index++;
    
    if(index>mySlider.length-1){
           index=0;
    }

   img.src=mySlider[index];
}

setInterval(() => {
    AutoPlay();
}, 4000);