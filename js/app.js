window.addEventListener("load", function() {
    var agregarFormulario = document.getElementById("agregarForm");
    var NuevoFormulario = document.getElementById("nuevoForm");
    var addForm = document.getElementById("agregarForm");
    
    addForm.addEventListener("click", function() {
        agregarFormulario.classList.add("d-none");
        NuevoFormulario.classList.add("d-block");
	});
    
});