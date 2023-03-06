//const { expect } = require("chai");
const { it } = require("mocha");

describe('Login e registr de usuário no Alura Pic', ()=>{
    beforeEach(()=>{
        cy.visit('https://alura-fotos.herokuapp.com')
    })
    it('Verifica mensagens validação', ()=>{
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })
    it('Verifica e-mail inválido', ()=>{
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('alexandre');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })
    it('Verifica senha com menos de oito caracteres', ()=>{
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123456');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })
    it('Verifica solicitação de nome completo', ()=>{
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    })
    it('Verifica solicitação de nome de usuário', ()=>{
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
    })
    it.only('Login com usuário válido', ()=>{
        cy.login('flavio', '123');
        cy.contains('a', '(Logout)').should('be.visible');
        })
    it.only('Login com usuário inválido', ()=>{
        cy.login('flavis', '1244');
        cy.on('window:alert', (str)=>{
            expect(str).to.equal('Invalid user name or password');
            })
            })
    
})