function calculaterectangle(){
    //for w
    const inputrec=document.getElementById('rec-width');
    const recwidth=inputrec.value;
    const rectanglewidth=parseFloat(recwidth);
    
    // for l
    const inputrecl=document.getElementById('rec-length');
    const reclength=inputrecl.value;
    const rectanglelength=parseFloat(reclength);

    // calculate
    const area=rectanglewidth*rectanglelength;
    console.log('The area of rectangle is: ',area);

    //add area to display
    const rectanglearea=document.getElementById('recarea');
    rectanglearea.innerText=area;



}