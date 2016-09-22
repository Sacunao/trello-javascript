window.addEventListener("load", function(){
   var addForm = document.getElementById("agregarForm");
   
	addForm.addEventListener("click", function(e) {
		e.preventDefault();
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
	newButton.addEventListener("click",function(event){
		event.preventDefault();
		newTool();
		deleteForm();
	});
	//agregando nodo texto dentro del boton 
	var textBoton = document.createTextNode("Añadir tarjeta");
	var newtextBoton = newButton.appendChild(textBoton);
}

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

/*function addAgregar(){
	var padre = document.getElementById("trello-body");
	var agregar = document.createElement("div");
	var newAgregar = padre.appendChild(agregar);
	newAgregar.classList.add("agregar");
	newAgregar.classList.add("b-radius");
}*/



