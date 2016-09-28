//Método con mitad de elementos creados y ocultos de index
window.addEventListener("load", function(){
	var agregarForm = document.getElementById("agregarForm");
	var button = document.getElementById("button");
	var input = document.getElementById("input");
	var nuevoForm = document.getElementById("nuevoForm");
	var contenedor = document.getElementById("contenedor");

	/*Declaramos funciones globales de las variables que utilizaremos
	en mis funnciones reutilizables*/
	agregarForm.addEventListener("click", function(){
		hideElement(nuevoForm,agregarForm);
		input.focus();
		input.value="";
	});

	button.addEventListener("click", function(e){
		e.preventDefault();
		var contenedorLista = document.createElement("div");
		contenedorLista.classList.add("d-inlineblock");

		var remover = nuevoForm.parentNode;

		contenedor.appendChild(contenedorLista);
		contenedorLista.appendChild(nuevoForm);
		contenedorLista.appendChild(agregarForm);
		remover.remove();

		var contenedorTarjetas = document.createElement("div");
		contenedorTarjetas.classList.add("trello-body");
		contenedor.insertBefore(contenedorTarjetas,contenedor.lastElementChild);

		hideElement(nuevoForm,agregarForm);

		crearElementos("div", "nuevaLista", input.value, contenedorTarjetas);
		crearElementos("div", "agregar", "Añadir una tarjeta", contenedorTarjetas);

		/*Para que el form del texarea aparezca debemos aplicar a todos 
		los divs de agregar tarjeta el mismo formato, por eso le aplicamos
		a su clase*/ 
		//el resultado será un array de elementos con la misma clase
		var agregar = document.getElementsByClassName("agregar");
		/* var agregar= document.querySelectorAll(".agregar"); puede usarse, pero de
		preferencia se utiliza el Classname por temas de compatilidad.*/
		for(var i = 0; i < agregar.length; i++){
			agregar[i].addEventListener("click", function(){
				this.classList.add("d-none");
				newForm("form", "fomulario", contenedorTarjetas,this);
			});
		}
	});

	function hideElement(a,b){
		a.classList.toggle("d-none");
		b.classList.toggle("d-none");
	}

	function crearElementos(element, clase, texto, contenedor){
		var div = document.createElement(element);
		div.classList.add(clase);
		div.innerHTML= texto;
		contenedor.appendChild(div);
	}

	function newForm(form, clase, contenedor, agregarTarjeta){
		var form = document.createElement(form);
		form.classList.add(clase);
		crearElementos("textarea","textarea","", form);
//        document.getElementById("textarea").focus;
		crearElementos("button", "boton", "Agregar", form);
		contenedor.appendChild(form);

		form.lastElementChild.addEventListener("click", function(e){
			e.preventDefault();
			agregarTarjeta.classList.remove("d-none");
			form.classList.add("d-none");

			var text = form.firstElementChild.value;

			var div = document.createElement("div");
			div.classList.add("text-tarjetas");
			div.innerHTML= text;
			contenedor.insertBefore(div, agregarTarjeta);
		});
	}
});