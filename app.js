const router			= new Router();
const llamarModel		= new FuncModel();
const llamarView		= new FuncView();
const llamarController	= new FuncController();

const pages = {
	"inicio": {
		template: "../app/templates/inicio.html",
		controller: llamarController
	},
	"aboutUs": {
		template: "../app/templates/aboutUs.html"
	}
}

router.init(pages);
router.defaultPage(pages["inicio"]);