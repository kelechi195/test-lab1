/// <reference types="cypress" />
describe('my firsyt cypress script',() => {

    it('Todo',()=>{
    cy.visit ('https://cypress-course-apps-todo.vercel.app/'); 
    cy.get('.enter-task') .type ("Teach Book");

    });

});