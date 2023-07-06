//api List Users
Cypress.Commands.add('listUsers', () => {
    const listUsers = () => {
        cy.api({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2',
            failOnStatusCode: false
        }).as('response')
          cy.get('@response').should((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.data).is.not.empty
            expect(response.body.data[0]).to.have.property('id',7)
            expect(response.body.data[0]).to.have.property('email','michael.lawson@reqres.in')
            expect(response.body.data[0]).to.have.property('first_name','Michael')
          })
    }
    listUsers()       
})

//API List Single User

Cypress.Commands.add('listSigleUser', () => {
  const listSigleUser = () => {
      cy.api({
          method: 'GET',
          url: 'https://reqres.in/api/users/2',
          failOnStatusCode: false
      }).as('response')
        cy.get('@response').should((response)=>{
          expect(response.status).to.equal(200)
          expect(response.body.data).to.have.property('id')
          expect(response.body.data).to.have.property('email','janet.weaver@reqres.in')
          expect(response.body.data).to.have.property('first_name','Janet')
        })  
  }
  listSigleUser()       
})

//Create User

Cypress.Commands.add('createUser', () => {
  const createUser = () => {
      cy.api({
          method: 'POST',
          url: 'https://reqres.in/api/users',
          body: { 
                 name: 'Malta',
                 job: 'leader'
                },
          failOnStatusCode: false
      }).as('response')
        cy.get('@response').should((response)=>{
          expect(response.status).to.equal(201)
          expect(response.body).to.have.property('id')
          expect(response.body).to.have.property('name','Malta')
          expect(response.body).to.have.property('job','leader')
        })  
  }
  createUser()       
})

//Update User

Cypress.Commands.add('updateUser', () => {
  const updateUser = () => {
      cy.api({
          method: 'PATCH',
          url: 'https://reqres.in/api/users/2',
          body: { 
                 name: 'Malta',
                 job: 'qa senior'
                },
          failOnStatusCode: false
      }).as('response')
        cy.get('@response').should((response)=>{
          expect(response.status).to.equal(200)
          expect(response.body).to.have.property('name','Malta')
          expect(response.body).to.have.property('job','qa senior')
        })  
  }
  updateUser()       
})
