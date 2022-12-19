(function(){
    
    let inputscreen = document.querySelector(".screen");
    let buttoninput = document.querySelectorAll(".btn");
    let clearscreen = document.querySelector('.clearall');
    let equalto = document.querySelector('.equalit');
    let deletee = document.querySelector('.delete');

    buttoninput.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.innerHTML;
            inputscreen.value +=value;
        })
    });

    equalto.addEventListener('click',function(e){
          if(inputscreen.value===''){
            
            inputscreen.value= "please enter";
          } else{
            let output = eval(inputscreen.value);
            inputscreen.value = output;
          }
    })

    clearscreen.addEventListener('click',function(e){
        inputscreen.value="";
    })

    deletee.addEventListener('click',function(e){
        inputscreen.value=inputscreen.value.slice(0,-1);
    })
    
})();
