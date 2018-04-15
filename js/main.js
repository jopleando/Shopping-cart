var ShoppingCart = function () {
	this.products = [];
}

ShoppingCart.prototype.addProduct = function (product) {
	console.log(`Añadió ${product.name} al carro, su precio es ${product.price}€`);
	this.products.push(product);
	shoppingCart1.buy();

	/*	for (var i = 0, l = this.products; i < l.length; i++) {
			htmlC +=l[i].name + ' ' + l[i].price;
		}*/
}


ShoppingCart.prototype.buy = function (product) {
	var count = 0;
	var total = 0;
	var countApple = 0;
	var countOrange = 0;
	var priceApple = 0;
	var priceOrange = 0;
	var discountApple = 0;




	this.products.forEach(function (product) {
		if (product.name === 'Manzana') {
			countApple++;
			priceApple = product.price * countApple;
			if (countApple % 2 === 0) {
				priceApple = product.price * countApple;
				discountApple = priceApple / 2;
				priceApple -= discountApple;
			}
		}
		if (product.name === 'Naranja') {
			countOrange++;
			if (countOrange > 5) {
				priceOrange = (product.price * countOrange) * 0.5;
			} else {
				priceOrange = (product.price * countOrange);
			}
		} else {
			count++;
		}
		total += priceApple + priceOrange;
		console.log("Precio total : " + total);
		//htmlC += product.name + ' ' + product.price;
			htmlC += '<section class="col-md-4 bg-secondary">' +
				product.name + ' ' + product.price +
			'</section>'+ 
			'<section class="col-md-4 bg-secondary">' +
			'Precio Total: ' + total +
			'</section>';
		});
	var htmlC;
	document.getElementById('carrito').innerHTML = htmlC;

	/*
		console.log(`The total price is ${total}€`);
		if (count > 5) {
			total -= (total * 0.1);
			console.log(`Because you have more than 5 items, you have a discount of the 10%. You must pay ${total}€`)
		}*/
}

var Product = function (id, name, price, stock, description, img) {
	this.id = id;
	this.name = name;
	this.price = price;
	this.stock = stock;
	this.description = description;
	this.img = img;
}




var product0 = new Product(0, "Manzana", 10, 20, "Manzana golden traida desde Valencia", "https://www.frutadelasarga.com/server/Portal_0008706/img/products/manzana-roja-benejama_1225224.jpg");
var product1 = new Product(1, "Naranja", 5, 20, "Naranjas de valencia", "http://elhuertodecirilo.com/wp-content/uploads/2017/09/naranjas-modified-1.jpg");
var product2 = new Product(2, "Uva", 15, 20, "Uvas rojas de la Rioja", "http://www.campusdelvino.com/media/k2/items/cache/39a27618f1dc54b80987c6706135e6b7_XL.jpg");
var product3 = new Product(3, "Platano", 20, 20, "Platanos de Canaria", "https://www.lafruteria.es/2523-large_default/platano.jpg");
var product4 = new Product(4, "Melón", 50, 20, "Melón de piel de sapo", "https://canales.okdiario.com/recetas/img/2017/06/20/propiedades-de-melon.jpg");

var shoppingCart1 = new ShoppingCart();
var productsInShop = {};
productsInShop = { product0, product1, product2, product3, product4 };

var html = "";

for (k in productsInShop) {
	html += '<section class="col-md-5 col-sm-4 p-1 m-1 product">' +
		'<section class="card  m-1 p-1" style="width: 18rem;">' +
		'<img class="card-img-top" src=' + productsInShop[k].img + ' alt="Card image cap">' +
		'<section class="card-body text-center">' +
		'<h5 class="card-title">' + productsInShop[k].name + '</h5>' +
		'<p class="card-text">' + productsInShop[k].description + '</p>' +
		/*	'<section class="row">' +
				'<section class="col-sm">' +*/
		'<p id="price">Precio: ' + productsInShop[k].price + '€</p>' +
		/*'</section>' +
		'<section class="col-sm">' +
			'<p id="stock">' + productsInShop[k].stock + ' Uds</p>' +
		'</section>' +
	'</section>' +*/
		'<button class="btn btn-primary" onclick="shoppingCart1.addProduct(' + [k] + ')">añadir al carrito</button>' +
		'</section>' +
		'</section>' +
		'</section>';
	//console.log(k);
}



document.getElementById('productos').innerHTML = html;






