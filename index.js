const dodger = document.getElementById("dodger");
document.addEventListener('keydown' , function(e){
    if (e.key === 'ArrowLeft'){
        moveDodgerLeft();
    }
      
       if (e.key === 'ArrowRight'){
        moveDodgerRight();
       }
})

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const  lefts = parseInt(leftNumbers, 10);

    if ( lefts < 360) {
      dodger.style.left = `${lefts + 4}px`;
    }
  }


  function moveDodgerLeft(){
    const leftNumber=dodger.style.left.replace("pr","");
    const left=parseInt(leftNumber,10)

   if(left > 0){
    dodger.style.left=`${left - 1}px`;
}
  }