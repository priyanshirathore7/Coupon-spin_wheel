// var audio = new Audio ("assests/wheel.wav");
function shuffle(array){
    var currentIndex = array.length, randomIndex;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex  );
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

    }
    return array;
}

function spin(){
    // audio.play();
    wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectItem = "";
    // 1750,2110,2470
    // 2370,1530,1190
    // // 1630,2990,2350
    // 1890,2250,2610
    let Mobile = shuffle([1570,1930,2290]);
    let Camera = shuffle([ 1850,2210,2570]);
    let Ipad = shuffle([ 1370,1530,2190]);
    let Zonk = shuffle([1770,2130,2490]);
    let Gift_Box = shuffle([1890,2250,2610]);
    let $2000 = shuffle([1810,2170,2530]);
    let Handset = shuffle([1750,2110,2490]);
    let Smart_TV = shuffle([1370,1530,2190]);
     let Colour_Box = shuffle([1860,2410,2770]);
    1890,2250,2610

    let Amazon_Boucher = shuffle([1630,1990,2350]);
    
    
    
    let results  = shuffle([
        Mobile[0],
        Camera[0],
        Ipad[0],
        Zonk[0],
        Gift_Box[0],
        $2000[0],
        Handset[0],
        Smart_TV[0],
        Colour_Box[0],
        Amazon_Boucher[0],
    ]);
    
    if (Mobile.includes(results[0])) SelectItem = "Mobile Oppo";
    if(Camera.includes(results[0])) SelectItem = "  Camera Sport Action";
    if($2000.includes(results[0]))SelectItem = "Cash Price";
    if(Zonk.includes(results[0]))SelectItem = "nothing";
    if(Handset.includes(results[0]))SelectItem = "Headset Gaming";
    if(Gift_Box.includes(results[0]))SelectItem = "Gift Box";
    if(Ipad.includes(results[0]))SelectItem = "Ipad Pro";
    
    if(Smart_TV.includes(results[0]))SelectItem = "Smart TV";
    if(Colour_Box.includes(results[0]))SelectItem = "Colour Box";
    if(Amazon_Boucher.includes(results[0]))SelectItem = "Amazon Boucher";
    
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function(){
        element.classList.remove("animate");
        setTimeout(function(){
            element.classList.add("animate");
        }, 7000);
    })

setTimeout(function(){
    // https://giphy.com/gifs/rainbow-bright-brite-3o7aDfgPSAJY6Qd8pW

    // <iframe src="https://giphy.com/embed/3o7aDfgPSAJY6Qd8pW" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/rainbow-bright-brite-3o7aDfgPSAJY6Qd8pW">via GIPHY</a></p>
   

    applause.play();

    Swal.fire({
      
        title: 'Hurry !',
        html:'You won ' + SelectItem + ' | ' + '<a href="#">Claim Now</a>',
        width: 600,
        padding: '3em',
        color: '#716add',
        // background: ' url("./img/glitter4.jpg")',
        background: ' linear-gradient(to bottom, #ccccff 0%, #ffccff 100%)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("./img/won1.png")
          left top
          no-repeat
        `
      })
} , 5500);

setTimeout(function(){
    box.style.setProperty("transition","initial");
    box.style.transform = "rotate(90deg)";
} , 6000);


setTimeout(function(){
    wheel.pause();
    wheel.currentTime=0;

},5000);
}