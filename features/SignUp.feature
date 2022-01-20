@smoke
Feature: SignUp 

  Scenario: As a user, I can sign up to zoho

    Given I am on the crm page
    When I sign up
    Then CRM welcomes you
