function FuncController() {
	this.getObtener = function() {
		return llamarModel.getObtener();
	}
	
	this.init = function() {
		llamarView.init();
	}
	
	this.buscar = function(keyWords) {
		let funcList = llamarModel.getObtener();
		let filtered =  funcList.filter(function(x) {
			for(let i in keyWords) {
				for(let j in x.tags) {
					if(keyWords[i] == x.tags[j]) {
						return x;
					}
				}
			}
		});
		
		llamarView.render(filtered);
	}
		
}