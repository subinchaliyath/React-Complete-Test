describe('login',()=>{
  it('user can submit login details', () =>{
     cy.visit('http://localhost:3000/');
     cy.findByRole('link', {  name: /login page/i}).click()
     cy.findByPlaceholderText(/First Name/i).focus();
     cy.findByPlaceholderText(/Email Address/i).type("subin@gmail");
     cy.findByPlaceholderText(/First Name/i).type("subin");
     cy.findByRole('button', {  name: /submit/i}).should('be.disabled');
     cy.findByPlaceholderText(/Email Address/i).type(".com");
     cy.findByRole('button', {  name: /submit/i}).should('be.enabled');
     cy.findByRole('button', {  name: /submit/i}).click()
  })  
})