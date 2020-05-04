/*REQUIRES*/
let chai = require("chai");
let chaiHttp = require("chai-http");

/*ENCURTANDO OS COMANDOS */
let expect = chai.expect;


chai.use(chaiHttp);

//Especifica o servidor
let server = "localhost:8080";

describe("Books - DELETE", function(){
	
	let isbn = "123";
	it("/DELETE - Delete book by ISBN", function(done){
		chai.request(server)
		.delete("/v1/books/delete/"+isbn)
		.end(function(err, res){
			expect(res).to.have.status(200);
			expect(res.body).to.be.a("object");
			
			done();
		});
	});
	
});