
const button = document.getElementById('calcular') 
const input = document.getElementById('cantidad') 

button.onclick=function(){ 
    const value= input.value
    window.location.replace( 'index2.html?cantidadcom='+value) 
 }
