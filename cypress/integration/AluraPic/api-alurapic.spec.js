
describe('Buscar Fotos e dados', ()=>{
    it('Buscar fotos do Flavio', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://alura-fotos.herokuapp.com/flavio/photos',
        }).then((res)=>{
            expect(res.status).to.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body[0]).to.have.property("description");
            expect(res.body[0].description).to.be.equal('Farol iluminado');
        })
    })
    it.only('fazer login', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://alura-fotos.herokuapp.com/login',
            body: Cypress.env()
        }).then((res)=>{
            expect(res.status).to.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body.id).to.be.equal(1);
        })
    })
})