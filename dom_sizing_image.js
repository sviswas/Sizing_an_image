let image_width=document.getElementById("imageWidth");
let warningMessage=document.getElementById("warningMessage");
let image=document.getElementById("image");
let value=parseInt(image_width.textContent);
 function incrementBtn()
 {
  if(value==300)
  {
     warningMessage.textContent="Too big. Decrease the size of the Image.";
  }
  else{
    warningMessage.textContent="";
  let Inc=value+5;
  value=Inc;
  image_width.textContent=value;
  image.style.width=value+"px";
  }
}
function decrementBtn()
 {
  if(value==100)
  {
    warningMessage.textContent="Can't Visible. Increase the size of the Image.";
   }
  else{
    warningMessage.textContent="";
    let Inc=value-5;
  value=Inc;
  image_width.textContent=value;
    image.style.width=value+"px";
   }
  
}