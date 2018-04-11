var Product = function(name, price, stock, description, img){
	this.name= name;
	this.price= price;
	this.stock=stock;
	this.description=description;
	this.img=img;
}

var manzana= new Product("Manzana", 10, 20, "Manzana golden traida desde Valencia", "https://www.frutadelasarga.com/server/Portal_0008706/img/products/manzana-roja-benejama_1225224.jpg");
var naranja= new Product("naranja", 5, 20, "Naranjas de valencia", "http://elhuertodecirilo.com/wp-content/uploads/2017/09/naranjas-modified-1.jpg");
var uva = new Product("Uva", 15, 20, "Uvas rojas de la Rioja", "http://www.campusdelvino.com/media/k2/items/cache/39a27618f1dc54b80987c6706135e6b7_XL.jpg");
var platano= new Product ("Platano", 20, 20, "Platanos de Canaria", "https://www.lafruteria.es/2523-large_default/platano.jpg");
var melon= new Product("Melón", 50, 20, "Melón de piel de sapo", "https://canales.okdiario.com/recetas/img/2017/06/20/propiedades-de-melon.jpg");

var products = [];
products = [manzana, naranja, uva, platano, melon];


var html;

for (var i = 0; i <= products.length; i++) {
	console.log(products[i]);
}