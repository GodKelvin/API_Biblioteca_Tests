/*REQUIRES*/
let chai = require("chai");
let chaiHttp = require("chai-http");

/*ENCURTANDO OS COMANDOS */
let expect = chai.expect;

//Especifica o servidor
let server = "localhost:8080";

chai.use(chaiHttp);

describe("Books - PUT", function(){
	
	it("/PUT - Change name book", function(done){
		let dadosLivros = {
			new_name_book: "Os antigos Cavaleiros",
			isbn: "123"
		};
		
		chai.request(server)
		.put("/v1/books/name")
		.send(dadosLivros)
		.end(function(err, res){
			expect(res).to.have.status(200);
			expect(res.body).to.be.a("object");
			
			done();
		});
	});
});