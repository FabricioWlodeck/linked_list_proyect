//Calculo de Nodos segun Resolucion
function width_screnn (){
    alto = window.screen.height; 
    console.log("alto pantalla  = " + alto);

    if(alto <= 568)
    {
        var nodos = 15 ; 
        return (nodos);
    } 

    if(alto <= 680 && alto > 568)
    {
        var nodos = 20 ; 
        return (nodos);
    } 

    if(alto > 680   && alto < 850)
    {
        var nodos = 20 ; 
        return (nodos);
    } 

    if(alto > 850)
    {
        var nodos = 27 ; 
        return (nodos);
    } 
}
