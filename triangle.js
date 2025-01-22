function calculatetriangle(){
    //for trianagle base
    const trianglebase=document.getElementById('base');
   const triangleinput=trianglebase.value;
   const tbaseinput=parseFloat(triangleinput);
   console.log(tbaseinput);

   //for triangle height
   const triangleheight=document.getElementById('height')
   const theightinput=triangleheight.value;
   const theight=parseFloat(theightinput);
   console.log(theightinput);

   //calculate variable
   const area=0.5 *tbaseinput*theightinput;
   console.log('The Area of this triangle is: ',area);

   //add the area to display
   const trianglearea=document.getElementById('triangle-area');
   trianglearea.innerText=area;
}