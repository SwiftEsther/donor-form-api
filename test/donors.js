process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require('../server');
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe('Donors', () => {
  const testDonor = {
    firstName: "Esther",
    lastName: "Akinloose",
    address: "3 Michael Uwakwe St, Egan",
    city: "Lagos",
    country: "Nigeria",
    postalCode: "100001",
    phone: "08168978738",
    email: "esther@gmail.com",
    preferredFormOfContact: "phone",
    preferredFormOfPayment: "usd",
    frequency: "monthly",
    amount: "60",
    comments: "",
  };

  const badDonor = {
    firstName: "Esther",
    lastName: "Akinloose",
    address: "3 Michael Uwakwe St, Egan",
    email: "esther@gmail.com",
    preferredFormOfContact: "phone",
    preferredFormOfPayment: "usd",
    frequency: "monthly",
    amount: "60",
    comments: "",
  };

  describe("Create a donor", () => {
    it("it should not create a donor if any of the required fields are left out", done => {
      chai.request(server)
        .post("/api/donors")
        .send(testDonor)
        .end((err, res) => {
          const {message, data} = res.body;
          res.should.have.status(201);
          data.should.be.a("object");
          message.should.be.a("string");
          data.should.have.property("firstName");
          data.should.have.property("lastName");
          data.should.have.property("address");
          data.should.have.property("city");
          data.should.have.property("country");
          data.should.have.property("postalCode");
          data.should.have.property("phone");
          data.should.have.property("email");
          data.should.have.property("preferredFormOfContact");
          data.should.have.property("preferredFormOfPayment");
          data.should.have.property("frequency");
          data.should.have.property("amount");
          done();
        });
    });

    it("it should create a new donor and return an object containing a success message and the newly created donor", done => {
      chai.request(server)
        .post("/api/donors")
        .send(badDonor)
        .end((err, res) => {
          const {code, message} = res.body;
          res.should.have.status(400);
          expect(code).to.be.equal("INVALID_INPUT");
          message.should.be.a("string");
          done();
        });
    });
  });
});
