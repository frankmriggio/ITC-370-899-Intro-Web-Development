/*
    Name: Frank Riggio
    Date: 11/16/2021
    Assignment: Image Swapping
*/

function changeImage(a){
    document.getElementById("img").src=a;
}

document.getElementById("img").addEventListener("dblclick", function() {
    if(pic1.src = "a1green.png"){
        pic1.src="a2cyan.png";}
        else{
            pic1.src = "a1green.png"
        }
    if(pic2.src = "a1red.png"){
        pic2.src = "a2orange.png";}
        else{
            pic2.src = "a1red.png"
        }
    if(pic3.src = "a1yellow.png"){
        pic3.src = "a2pink.png";}
        else {
            pic3.src = "a1yellow.png"
        }

    if(pic4.src = "a1blue.png"){
        pic4.src = "a2purple.png";}
        else {
            pic4.src = "a1blue.png"
        }
 });

