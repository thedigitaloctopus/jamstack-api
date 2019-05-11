const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
chai.should();
describe("JAMstack", () => {
    describe("GET /jam", () => {
        // Ensure API is running
        it("Initial 200", (done) => {
             chai.request(app)
                 .get('/jam')
                 .end((err, res) => {
                     res.should.have.status(200);
                     done();
                  });
         });
    });
    describe("POST /jam", () => {
        // Add test jams
        it("Adding strawberry 5", (done) => {
             chai.request(app)
                 .post('/jam')
                 .set('content-type', 'application/x-www-form-urlencoded')
                 .send({'jam': 'strawberry', 'msrp': '5'})
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
         it("Adding grape 4", (done) => {
            chai.request(app)
                .post('/jam')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({'jam': 'grape', 'msrp': '4'})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                 });
        });
    });
    // describe("GET /jam:id", () => {
    //     // Individual jams should return
    //     chai.request(app)
    //         .get('/jam/5cd6480f6e00db0c5477d46d')
    //         .end((err, res) => {
    //             res.should.have.status(200);
    //             done();
    //          });
    // });
    // describe("GET /jam | Verify initial array", () => {
    //     // Both jams in an array and initial values match
    //     it("Array has 2 values", (done) => {
    //          chai.request(app)
    //              .get('/jam')
    //              .end((err, res) => {
    //                  res.should.have.status(200);
    //                  res.body.should.be.a('array');
    //                  done();
    //               });
    //      });
    // });
    // describe("PUT /jam:id", () => {
    //     // Update jam msrp

    // });
    // describe("GET /jam:id", () => {
    //     // Validate updated jams

    // });
    // describe("GET /jam | Verify updated array", () => {
    //     // Both jams in an array and UPDATED values match
    //     it("Array has 2 values", (done) => {
    //          chai.request(app)
    //              .get('/jam')
    //              .end((err, res) => {
    //                  res.should.have.status(200);
    //                  res.body.should.be.a('array');
    //                  done();
    //               });
    //      });
    // });
    // describe("DELETE /jam:id", () => {
    //     // Delete single jam

    // });
    // describe("GET /jam | Verify deleted jam", () => {
    //     // One jam in an array and UPDATED value matches
    //     it("Array has 1 value", (done) => {
    //          chai.request(app)
    //              .get('/jam')
    //              .end((err, res) => {
    //                  res.should.have.status(200);
    //                  res.body.should.be.a('array');
    //                  done();
    //               });
    //      });
    // });
    // describe("DELETE /jam:id", () => {
    //     // Delete single jam

    // });
    // describe("GET /jam | Verify empty array", () => {
    //     // One jam in an array and UPDATED value matches
    //     it("Array is empty", (done) => {
    //          chai.request(app)
    //              .get('/jam')
    //              .end((err, res) => {
    //                  res.should.have.status(200);
    //                  res.body.should.be.a('array');
    //                  done();
    //               });
    //      });
    // });
});