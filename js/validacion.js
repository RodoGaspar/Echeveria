function validarNombre() 
{
    valor=document.getElementById("nombre").value;

    if(valor == NULL || valor.length == 0)
    {
        document.getElementById('mensaje').innerHTML = "Campo requerido";
        elemento = formulario.getElementById("nombre");
        elemento.focus()
    return false;
    }
    return true;
}
function validarApellido() 
{
    valor=formulario.getElementById("apellido").value;

    if(valor == NULL || valor.length == 0)
    {
        document.getElementById('mensaje').innerHTML = "Campo requerido";
        elemento = formulario.getElementById("apellido");
        elemento.focus()
    return false;
    }
    return true;
}
function validarEmail(valor) //validar campos del Email
{
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
        alert("La direccion de email" + valor +"es correcta.");
    }else {
        alert("la dirección de mail es incorrecta");
    }
}
function validarSelect() //validar select
{
    indice= document.getElementById("opciones").selectedIndex;

    if(indice == NULL || indice== 0)
    {
        document.getElementById ('mensaje').innnerHTML = "Debe seleccionar una opción";
        return false;
    }
    return true;
}
function validarCheck() //validar checkbox
{
    elemento = document.getElementById ("Plantas de jardín")
    elemento = document.getElementById ("Plantas de interior")
    elemento = document.getElementById ("Empredimiento")
    elemento = document.getElementById ("Otras consultas")
    
    if (!elemento.checked)
    {
        document.getElementById ("mensaje").innnerHTML = "Debe elegir una de las opciones";
        return false;
    }
    return true;
}


    
  
