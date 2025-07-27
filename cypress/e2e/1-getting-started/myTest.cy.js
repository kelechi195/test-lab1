///<>reference type = "cypress/>"
describe('registeration',()=>{
it('registration with valid credentials',() => {

    cy.visit( "https://parabank.parasoft.com/parabank");
    cy.get('#loginPanel > p:nth-child(3) > a').click()
    cy.get("input[id='customer.firstName']").type('John')
    cy.get("input[id='customer.lastName']").type('Doe')
    cy.get("input[id='customer.address.street']").type('8,smart street')
    cy.get("input[id='customer.address.city']").type('ikeja')
    cy.get("input[id='customer.address.state']").type('lagos')
    cy.get("input[id='customer.address.zipCode']").type('10012')
    cy.get("input[id='customer.phoneNumber']").type('07012345678')
    cy.get("input[id='customer.ssn']").type('235647')
    cy.get("input[id='customer.username']").type('sols')
    cy.get("input[id='customer.password']").type('Solos@1909')
    cy.get('#repeatedPassword').type('Solos@1909')
    cy.get("input[value='Register']").click()
});


});

