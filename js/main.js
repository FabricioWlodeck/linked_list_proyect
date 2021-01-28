let insertar_nodo  = document.getElementById('add');
let list  = document.getElementById('node_list');
let error_message  = document.getElementById('Error_message');


var nodes = 0;
var number_nodes = width_screnn () ;
var errors = 0 ;

//Detecto el click del boton de añadir
document.getElementById('add').addEventListener('click',function() {
    event.preventDefault();
    var clientHeight = document.getElementById('node_list').clientHeight;

    if(errors != 0){
        var last_error = document.getElementById("Error_message").lastChild;
        document.getElementById('Error_message').removeChild(last_error);
        errors = 0;
    }
    
    console.log(number_nodes);
    if(nodes < number_nodes ){
        nodes++;
        
        number = document.getElementById('add_number').value;


        if(number.length != 0){
            

            //Creo un div para el nodo
            let number_div = document.createElement("p");
            number_div.innerHTML=number;
            let node_div = document.createElement("div");
            let node = document.createElement("div");

            //le asigno las propiedades de css de los nodos
            number_div.classList.add('number_div');
            node.classList.add('node');
            node_div.classList.add('node_div');

            //inserto el nodo en " list "
            node.appendChild(number_div);
            node_div.appendChild(node)
            list.appendChild(node_div);
            }
            
        else
            {
                if(errors == 0){
                    let error_div = document.getElementById('Error_message');
                    let error_message = document.createElement("p");
                    error_message.innerHTML="Index must be a number";
                    error_message.classList.add('errors');
                    error_div.appendChild(error_message);

                    errors = 1;
                }
                
            }

    }

        

})




// para saber cuantos nodos entraran hacer un condicional segun el alto del div del "node_list" QUE NO SUBERE LOS 420 px de altura
