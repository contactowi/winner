function FuncView() {
	this.render = function(funcList) {
		let xContainer = document.getElementById("boxContainer");
		xContainer.innerHTML = "";
		// Se crearán las cajas para cada perro
		for(let i = 0; i < funcList.length; i++) {
			// Hay que crear la caja, el nombre, la imagen, la 
			// descripción, los tags y el botón
			let cajaBox = document.createElement("div");
			let name = document.createElement("h3");
			let img = document.createElement("img");
			let description = document.createElement("p");
			let tags = document.createElement("p");
			let button = document.createElement("button");
			// Agregar estilos y atributos
			name.innerHTML = funcList[i].name;
			cajaBox.className = "xContainer alert alert-info";
			img.src = funcList[i].img;
			img.alt = funcList[i].name;
			description.innerHTML = funcList[i].description;
			// Se muestran los tags uno a uno 
			for(let j in funcList[i].tags) {
				tags.innerHTML += "#" + funcList[i].tags[j] + " ";
			}
			// Solo falta el evento del bottón
			button.className = "btn btn-primary";
			button.innerHTML = "Comprar";
			button.addEventListener("click", function(e) {
				alert("Gracias! " + name.innerHTML);
			});
			// Se genera la caja
			cajaBox.appendChild(name);
			cajaBox.appendChild(img);
			cajaBox.appendChild(description);
			cajaBox.appendChild(tags);
			cajaBox.appendChild(button);
			// Ahora si se agrega al documento
			xContainer.appendChild(cajaBox);
		}
	}
	
	this.init = function() {
		this.render(llamarController.getObtener());

		// Agregar el evento al botón buscar
		document.getElementById("btnBuscar").addEventListener("click", function(e) {
			let buscarText = document.getElementById("txtBuscar").value.split(" ");
			llamarController.buscar(buscarText);
		});
	}
}