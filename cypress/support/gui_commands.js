import { faker } from '@faker-js/faker'

/*Add Products*/
Cypress.Commands.add('addProduct', (
    product1 = Cypress.env('productStylish'),
    product2 = Cypress.env('productBeautiful'),
    product3 = Cypress.env('productMenTshirt'),
    quantity1 = Cypress.env('quantityStylish'),
    quantity2 =  Cypress.env('quantityBeautiful'),
    quantity3 = Cypress.env('quantityMenTshirt')
) => {
    const addProduct = () => {
        cy.visit('/products')

        cy.get('#search_product').type(product1)
        cy.get('#submit_search').click()
        cy.contains("View Product").click()        
        cy.get('#quantity').clear().type(quantity1)
        cy.contains('Add to cart').click()
        cy.contains('Added!').should('be.visible')
        cy.contains('Continue Shopping').click()
        cy.contains('Products').click()    
        
        cy.get('#search_product').type(product2)
        cy.get('#submit_search').click()
        cy.contains("View Product").click()        
        cy.get('#quantity').clear().type(quantity2)
        cy.contains('Add to cart').click()
        cy.contains('Added!').should('be.visible')
        cy.contains('Continue Shopping').click()
        cy.contains('Products').click()

        cy.get('#search_product').type(product3)
        cy.get('#submit_search').click()
        cy.contains("View Product").click()        
        cy.get('#quantity').clear().type(quantity3)
        cy.contains('Add to cart').click()
        cy.contains('Added!').should('be.visible')
        cy.contains('Continue Shopping').click()

        cy.contains('Cart').click()
        cy.get('#product-4 > .cart_quantity > .disabled').should('have.text','3')
        cy.get('#product-41 > .cart_quantity > .disabled').should('have.text','2') 
        cy.get('#product-2 > .cart_quantity > .disabled').should('have.text','1')
    }
    addProduct()       
})

/*Register User*/
Cypress.Commands.add('signupUser', (
    name = `${faker.random.word(3)}`,
    email = `${faker.internet.email()}`,
    password = Cypress.env('passwordUser'),
    firstName = Cypress.env('firstName'),
    lastName = Cypress.env('lastName'),
    company = Cypress.env('companyName'),
    address = Cypress.env('addressName'),
    state = Cypress.env('state'),
    city = Cypress.env('city'),
    zipCode = Cypress.env('zipcode'),
    mobileNumber = Cypress.env('mobileNumber'),
) => {
    const signupUser = () => {
        cy.visit('/')   
        cy.contains('Signup / Login').click()
        cy.contains('New User Signup!').should('be.visible')
        cy.get('[type="text"]').type(name)
        cy.get('[data-qa="signup-email"]').type(email)
        cy.get('[data-qa="signup-button"]').click()
        cy.contains('Enter Account Information').should('be.visible')
        cy.get('#id_gender1').first().check()
        cy.get('#password').type(password, {log: false})
        cy.get('#days').select('25')
        cy.get('#months').select('October')
        cy.get('#years').select('1982')
        cy.get('#first_name').type(firstName)
        cy.get('#last_name').type(lastName)
        cy.get('#company').type(company)
        cy.get('#address1').type(address)
        cy.get('#country').select('Canada')
        cy.get('#state').type(state)
        cy.get('#city').type(city)
        cy.get('#zipcode').type(zipCode)
        cy.get('#mobile_number').type(mobileNumber)
        cy.contains('Create Account').click()
        cy.contains('Account Created!').should('be.visible')
        cy.contains('Continue').click()
        cy.contains('Logged in as').should('be.visible')
        cy.contains('Delete Account').click()
    }
    signupUser()       
})

/*User login*/

Cypress.Commands.add('loginUser', (
    email = Cypress.env('emailUser'),
    password = Cypress.env('passwordUser'),
) => {
    const loginUser = () => {
        cy.visit('/')
        cy.contains('Signup / Login').click()
        cy.get('[data-qa="login-email"]').type(email)
        cy.get('[data-qa="login-password"]').type(password, {log: false})
        cy.get('[data-qa="login-button"]').click()
        cy.contains('Logout').should('be.visible')
    }
    loginUser()       
})