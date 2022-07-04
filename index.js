let movies = [
    {
        name:"Falcon and The Winter Soilder",
        des:"",
        image:"images/slider 2.png"
    },
    {
        name:"Loki",
        des:"",
        image:"images/slider 1.png"
    },
    {
        name:"Wanda Vision",
        des:"",
        image:"images/slider 3.png"
    },
    {
        name:"Raya and The Last Dragon",
        des:"",
        image:"images/slider 4.png"
    },
    {
        name:"Luca",
        des:"",
        image:"images/slider 5.png"
    }
];

const carousel = document.querySelector('.csrousel');
let sliders = [];
let sliderIndex = 0;

const creatSlide=() => {
    if (sliderIndex >= movies.length){
        sliderIndex=0;
    }
    //Create DOC Emlement
    let slide= document.createElement('div');
    var imageElement= document.createElement('img');
    let content= document.createElement('div');
    let h1= document.createElement('h1');
    let p= document.createElement('p');

    //Attracting all elememts
    imageElement.appendChild(document.createTextNode(movies[sliderIndex].image));
    h1.appendChild(document.createTextNode(movies[sliderIndex].name));
    p.appendChild(document.createTextNode(movies[sliderIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imageElement);
    carousel.appendChild(slide);

    //setting up images 
    imageElement.src=movies[sliderIndex].image;
    sliderIndex++

    //Setting element classnames
    slide.className='slider';
    content.className='slider-Content';
    h1.className='movie-title';
    p.className='movie-des';

    sliders.push(slide);

    if (slide.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length -2)}px)`;
    }
};
 
for (let i = 0 ; i <3 ; i++){    
    creatSlide();    
}

setInterval(()=>{
    creatSlide();
},3000);

 