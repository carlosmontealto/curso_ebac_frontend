/// <reference types="cypress" />

describe('Testes para a pagina de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('input[type="text"]').type('Testador 123')
        cy.get('input[type="email"]').type('testador123@gmail.com')
        cy.get('input[type="tel"]').type('11 12345678')
        cy.screenshot('adicao-contato')
        cy.get('.adicionar').click()
        cy.get(':nth-child(5) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('exist')
    })
    it('Deve editar um contato',() => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Carlos Eduardo')
        cy.get('[type="email"]').clear().type('carlos@gmail.com')
        cy.screenshot('editando-contato')
        cy.get('.alterar').click()
        cy.get(':nth-child(5) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').contains('Carlos')
    })
        
    it('Deve remover um usuário', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.screenshot('remocao-contato')
        cy.get(':nth-child(5) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('not.exist')
        })
    
        

    })
