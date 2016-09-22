window.addEventListener("load", function() {
   var addForm = document.getElementById("agregarForm");
    
	addForm.addEventListener("click", function(e) {
		event.preventDefault();
		deleteElement();
		addNewForm();
		//deleteButtonAndAddText();
		//addAggregator();
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
	//newButton.textContent = ¨Añadir tarjeta¨;
	newButton.classList.add("boton");
	newButton.classList.add("btn");
	newButton.classList.add("btn-primary");
	
}

//newForm.setAttribute();



