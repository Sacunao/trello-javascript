#Ejercicio Trello

##VERSIÓN 0.0.1

Un elemento en el HTML con el mensaje "Añadir una lista", que al dar click muestre un input y un botón (formulario) para que el usuario ingrese el nombre de la lista.

####SOLUCIÓN:

####Pseudocódigo

1. Necesito un input con texto añadir tarjeta, con efecto hover que haga que se cambie de color y subraye el texto. 
2. El input al hacer clic debe cambiarse a la forma de un formulario este no tiene nada escrito en el input (evento clic, uso de addClassName).

###MÉTODO UNO

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

###MÉTODO DOS

```javascript

  	window.addEventListener("load", function() {
    var addForm = document.getElementById("agregarForm");
    
	addForm.addEventListener("click", function(e) {
		event.preventDefault();
		deleteElement();
		addNewForm();
	});
    
});

function deleteElement(){
	var padre = document.getElementById("trello-body");
	var elementToRemove = document.getElementById("agregarForm");
	return padre.removeChild(elementToRemove);
}

function addNewForm(){
	//agregando el form
	var padre = document.getElementById("trello-body");
	var form = document.createElement("form");
	var newForm = padre.appendChild(form);
	newForm.classList.add("formulario");
	newForm.classList.add("b-radius");
	//agregando input del form
	var input = document.createElement("input");
	var newInput = newForm.appendChild(input);
	newInput.classList.add("entrada");
	newInput.classList.add("b-radius");
	//agregando boton 
	var boton = document.createElement("button");
	var newButton = newForm.appendChild(boton);
	newButton.setAttribute("id","botonForm");
	newButton.classList.add("boton");
	newButton.classList.add("btn");
	newButton.classList.add("btn-primary");
	//agregando boton 
	var textBoton = document.createTextNode("Añadir tarjeta");
	var newtextBoton = newButton.appendChild(textBoton);
}
```

Div de agregar tarjeta, antes y con efecto de hover:

![Imagen](http://2.1m.yt/rFGINGk.png "Imagen")

![Imagen](http://2.1m.yt/xOFtmxW.png "Imagen")

Formulario agregado:

![Imagen](http://3.1m.yt/RVrZW6H.png "Imagen")


##VERSIÓN 0.0.2

1. Mostrar en el HTML, el texto ingresado al dar click en el botón de "Guardar" del formulario (como si fuera título de la lista).
2. Debajo del título, mostrar el mensaje clickeable de "Añadir una tarjeta".

####SOLUCIÓN:

####Pseudocódigo

Necesito un método que me permita agregar el texto ingresado en la nueva lista y que este aparezca como un nuevo div.

###MÉTODO 

Dentro de la función agregar nuevo formulario tenemos que darle un evento clic al boton, ya que al hacer clic este ejecutará los dos procesos de guardar la información del texto ingresado en el input y también debe crear un nuevo elemento para añadir nuevas añadidor de tarjetas.

```javascript

  	function addNewForm(){
		//agregando el form
		var padre = document.getElementById("trello-body");
		var form = document.createElement("form");
		var newForm = padre.appendChild(form);
		newForm.setAttribute("id","nuevoForm");
		newForm.classList.add("formulario");
		newForm.classList.add("b-radius");
		//agregando input del form
		var input = document.createElement("input");
		var newInput = newForm.appendChild(input);
		newInput.setAttribute("id","inputForm");
		newInput.classList.add("entrada");
		newInput.classList.add("b-radius");
		//agregando boton del form
		var boton = document.createElement("button");
		var newButton = newForm.appendChild(boton);
		newButton.setAttribute("id","botonForm");
		newButton.classList.add("boton");
		newButton.classList.add("btn");
		newButton.classList.add("btn-primary");

		//EVENTO PARA CREAR LISTA DE TAREA
		newButton.addEventListener("click",function(event){
			event.preventDefault();
			newTool();
			deleteForm();
			addAgregar();
		});
		//agregando nodo texto dentro del boton 
		var textBoton = document.createTextNode("Añadir tarjeta");
		var newtextBoton = newButton.appendChild(textBoton);
	}
```

Como se puede observar se llaman a las tress funciones: newTool, DeleteForm  y addAgregar que sirven para crear el nuevo div con el contendio recepcionado por el form y eliminar visualmente el formulario.

```javascript

  	function deleteForm(){
		var padre = document.getElementById("trello-body");
		var elementToRemove = document.getElementById("nuevoForm");
		padre.removeChild(elementToRemove);
	}

	function newTool(){
		var text = document.getElementById("inputForm").value;
		var padre = document.getElementById("trello-body");
		var tool = document.createElement("div");
		var newtool = padre.appendChild(tool);
		newtool.textContent = text;
		newtool.classList.add("agregar");
		newtool.classList.add("b-radius");
	}

	function addAgregar(){
		var padre = document.getElementById("trello-body");
		var agregar = document.createElement("div");
		var newAgregar = padre.appendChild(agregar);
		newAgregar.classList.add("agregar");
		newAgregar.classList.add("b-radius");
		//Nodo elemento
		var textAgregar = document.createTextNode("Añadir una tarjeta");
		var newtextAgregar = newAgregar.appendChild(textAgregar);
	}
```

Agregamos texto en el Form:

![Imagen](http://4.1m.yt/5e4bVrR.png "Imagen")

Agregamos hacemos clic en el boton y se crea una lista con el texto ingresado en un nuevo elemento y también el de añadir una tarjeta.

![Imagen](http://2.1m.yt/w7ad_fr.png "Imagen")


VERSIÓN 0.0.3
Una vez agregada la lista, mostrar el mensaje clickeable de "Añadir una lista" al lado de la lista agregada.

####SOLUCIÓN:

####Pseudocódigo

Agregar un nuevo elemento de Lista al costado, para eso usaré la propiedad de crear elementos y en css el display inline-block entre los elementos contenedores.

###MÉTODO

Llamamos a la función en el evento clic del boton como hicimos en la versión dos, y llamamos a la función addNewLista.

```javascript

  	function addNewLista(){
		var padre = document.getElementById("trello-bodyDos");
		var list = document.createElement("div");
		var newLista = padre.appendChild(list);
		newLista.classList.add("lista");
		//Nodo elemento
		var textLista = document.createTextNode("Añadir una tarjeta");
		var newtextLista = newLista.appendChild(textLista);
	}
```

Agregamos texto en el Form:

![Imagen](http://2.1m.yt/B97Ojo.png "Imagen")




