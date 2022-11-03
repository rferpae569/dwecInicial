window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('button').addEventListener('click', () => {
        let nombre=document.getElementById('nombre').value
    
    
    document.getElementById('button2').addEventListener('click',()=>{
        let edad=document.getElementById('edad').value;

        if(edad>=18){
            document.body.innerHTML=`El ${nombre} es mayor de edad`;
        }else{
            document.body.innerHTML=`El usuario ${nombre} es menor de edad`;
        }

    })});
    
});
