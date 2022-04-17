/// <reference types="cypress" />

describe("Automationpractice user" ,()=> {

    it("Verifikacija logina automationpractice",()=> {
      
        cy.visit("http://automationpractice.com/")
        
        // Find the login button
        cy.get('.login').click()
        
        // Scroll the window 100px down
        cy.scrollTo(0, 100) 
    
        // Fill the username
        cy.get('#email').type("gogajo81174@leafzie.com")
    
        // Fill the password
        cy.get('#passwd').type("ssssssssssss")
    
       // Click on login/sign in
        cy.get('#SubmitLogin').click()
    
        // Validation of succes  login
        cy.get('.header_user_info').should('be.visible')
    
        // Aditional, test logout option
        cy.get('.logout').click()
    
        // Validation of succes logout
        cy.get('#SubmitLogin').should('be.visible')
      
    
        })
    
    })