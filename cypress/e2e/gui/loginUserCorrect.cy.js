/// <reference types="Cypress" />

describe('Login user', () =>{
    it('Login User with correct email and password', () =>{
      cy.loginUser()
    })
  })