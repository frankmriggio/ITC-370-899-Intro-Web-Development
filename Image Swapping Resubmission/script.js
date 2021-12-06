/*
    Frank Riggio 
    ITC 370-899
    Image Swapping Resubmission
    12/5/2021
*/

function swapImage(image){
    document.getElementById('mainImage').src = image;
}

mainImage.addEventListener("dblclick", function(){

    var currentSet = document.getElementById('img1').src;

    if(currentSet.includes("a1blue.png")){
        document.getElementById('img1').src='images/a2cyan.png';
        document.getElementById('img2').src='images/a2orange.png';
        document.getElementById('img3').src='images/a2pink.png';
        document.getElementById('img4').src='images/a2purple.png';
    }
    
    if(currentSet.includes("a2cyan.png")) {
        document.getElementById('img1').src='images/a1blue.png';
        document.getElementById('img2').src='images/a1green.png';
        document.getElementById('img3').src='images/a1red.png';
        document.getElementById('img4').src='images/a1yellow.png';
    }

})
