##Ejercicio Trello

VERSIÓN 0.0.1

Un elemento en el HTML con el mensaje "Añadir una lista", que al dar click muestre un input y un botón (formulario) para que el usuario ingrese el nombre de la lista.

####SOLUCIÓN:

####Pseudocódigo

1. Necesito un input con texto añadir tarjeta, con efecto hover que haga que se cambie de color y subraye el texto. 
2. El input al hacer clic debe cambiarse a la forma de un formulario este no tiene nada escrito en el input (evento clic, uso de addClassName).

```javascript

  	window.addEventListener("load", function() {
    var agregarFormulario = document.getElementById("agregarForm");
    var NuevoFormulario = document.getElementById("nuevoForm");
    var addForm = document.getElementById("agregarForm");
    
    addForm.addEventListener("click", function() {
        agregarFormulario.classList.add("d-none");
        NuevoFormulario.classList.add("d-block");
	});
});
```

Div de agregar tarjeta, antes y con efecto de hover:

![Imagen](http://2.1m.yt/rFGINGk.png "Imagen")

![Imagen](http://2.1m.yt/xOFtmxW.png "Imagen")

Formulario agregado:

![Imagen](http://3.1m.yt/RVrZW6H.png "Imagen")




