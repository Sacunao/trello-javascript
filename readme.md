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

  	window.addEventListener("load", function(){
   var addForm = document.getElementById("agregarForm"); 
	addForm.addEventListener("click", function(e) {
		e.preventDefault();
		addNewForm(this);
		deleteElement();

	});
});

function deleteElement(){
	var ocultar = document.getElementById("agregarForm");
	ocultar.classList.add("d-none");
}

function addNewForm(elemento){
	//agregando el form
	var padre = elemento.parentElement;
	var form = document.createElement("form");
	padre.appendChild(form);
	form.classList.add("formulario");
	//agregando input del form
	var input = document.createElement("input");
	form.appendChild(input);
	input.focus();
	input.classList.add("entrada");
	//agregando boton del form
	var boton = document.createElement("button");
	form.appendChild(boton);
	boton.classList.add("boton");
	//agregando nodo texto dentro del boton 
	var textBoton = document.createTextNode("Añadir lista");
	boton.appendChild(textBoton);
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

	function addNewForm(elemento){
		//agregando el form
		var padre = elemento.parentElement;
		var form = document.createElement("form");
		padre.appendChild(form);
		form.setAttribute("id","nuevoForm");
		form.classList.add("formulario");
		//agregando input del form
		var input = document.createElement("input");
		form.appendChild(input);
		input.setAttribute("id","inputForm");
		input.focus();
		input.classList.add("entrada");
		//agregando boton del form
		var boton = document.createElement("button");
		form.appendChild(boton);
		boton.setAttribute("id","botonForm");
		boton.classList.add("boton");
		boton.addEventListener("click",function(event){
			event.preventDefault();
			newTool(elemento); 
			deleteForm(elemento);
			addAgregar(elemento);
			elemento.parentElement.classList.add("trello-body");
			// document.getElementById("agregarForm").classList.add("d-none");
			// document.getElementById("nuevoForm").classList.add("d-none");
			addNewLista(elemento);
		});
		//agregando nodo texto dentro del boton 
		var textBoton = document.createTextNode("Añadir lista");
		boton.appendChild(textBoton);
	}

```

Como se puede observar se llaman a las tress funciones: newTool, DeleteForm  y addAgregar que sirven para crear el nuevo div con el contendio recepcionado por el form y eliminar visualmente el formulario.

```javascript

  	function deleteForm(elemento){
	var elementToRemove = document.getElementById("nuevoForm");
		elementToRemove.classList.add("d-none");
	}

	function newTool(elemento){
		var text = document.getElementById("inputForm").value;
		var padre = elemento.parentElement;
		var tool = document.createElement("div");
		padre.appendChild(tool);
		tool.textContent = text;
		tool.classList.add("nuevaLista");
	}

	function addAgregar(elemento){
		var padre = elemento.parentElement;
		var agregar = document.createElement("div");
		padre.appendChild(agregar);
		agregar.setAttribute("id","agregando");
		agregar.classList.add("agregar");
		//Nodo elemento
		var textAgregar = document.createTextNode("Añadir una tarjeta");
		agregar.appendChild(textAgregar);
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
		var contenedor = document.getElementById("contenedor");
		var padre = document.createElement("section");
		contenedor.appendChild(padre);
		padre.classList.add("d-inlineblock");
		var aparecer = document.getElementById("agregarForm");
		aparecer.classList.add("d-block");
		padre.appendChild(aparecer);
	}
```

Agregamos texto en el Form:

![Imagen](http://2.1m.yt/B97Ojo.png "Imagen")

VERSIÓN 0.0.4
Al dar click en "Añadir una lista", asegurarse que el input del formulario tenga el focus para poder escribir directamente el nombre de la lista.
Dar click al mensaje "Añadir una tarjeta" y mostrar e formulario para agregar la tarjeta (Nota: El ingreso de texto es mediante un textarea).

####SOLUCIÓN:

####Pseudocódigo
Para que el texto del input pueda escribir inmediatamente sin necesidad de hacer clic en él, debemos agregar el método focus.

```javascript

  	newInput.focus(); //nombreDelInput.focus();
```
Para mostrar automáticamente el nuevo formulario debemos crear un evento en el div creado de añadir tarjeta y crear un elemento form con sus componentes desde cero, tener en cuenta que no debe ser un input, sino un texarea.








