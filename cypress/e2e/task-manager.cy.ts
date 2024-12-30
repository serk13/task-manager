/// <reference types="cypress" />

describe('Task Manager', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should add a new task', () => {
    cy.get('input[type="text"]').type('Neue Aufgabe');
    cy.get('button').contains('Hinzufügen').click();
    cy.get('li').should('contain', 'Neue Aufgabe');
  });

  it('should mark task as completed', () => {
    cy.get('input[type="text"]').type('Test Aufgabe');
    cy.get('button').contains('Hinzufügen').click();
    cy.get('input[type="checkbox"]').click();
    cy.get('.completed').should('exist');
  });

  it('should delete a task', () => {
    cy.get('input[type="text"]').type('Zu löschende Aufgabe');
    cy.get('button').contains('Hinzufügen').click();
    cy.get('button').contains('Löschen').click();
    cy.get('li').should('not.exist');
  });
}); 