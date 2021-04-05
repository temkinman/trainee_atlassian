export const User_Login = `
Feature: User Login
    As a Tester
    I want to be able to test login to the system

    Background: 
        Given I am Anonymous
        When I test background button
        Then I test background 'Log In' screen
 
    Scenario Outline: Login with Email and Password
        Given I launch the app
        And I click 'Main menu icon' button
        When I click 'Log in' button
        Then I expect to see 'Log In' screen
        When I enter "<email>" as an Email
        And I enter "<password>" as a Password
        And I click 'Submit' button
        Then I expect to see 'Home page' screen
        When I click 'Main menu icon' button
        Then I expect to see my Username
        And should be logged in the system

    Examples:
        | email                 | password    |
        | Dinechka70@gmail.com  | #Denis2216  |
        | test1@mailinator.com  | Test123456! |

    Scenario: Login with Facebook
    Given I launch the app
    And I click 'Main menu icon' button
    When I click 'Log in' button
    Then I expect to see 'Log In' screen
    When I click 'Continue with Facebook' button
    Then I expect to see screen of Facebook authorization
    When I click 'Continue' button
    Then I expect to see 'Home page' screen
    When I click 'Main menu icon' button
    Then I expect to see my Username
    And should be logged in the system

    Scenario: Login with Google
    Given I launch the app
    And I click 'Main menu icon' button
    When I click 'Log in' button
    Then I expect to see 'Log In' screen
    When I click 'Continue with Google' button
    Then I expect to see list of available Google accounts
    When I click on Google account
    Then I expect to see 'Home page' screen
    When I click 'Main menu icon' button
    Then I expect to see my Username
    And should be logged in the system
`;

export const User_Registration = `
Feature: User Registation
    As a Tester
    I want to be able to register in the system

    
    Scenario Outline: Login with Email and Password
        Given I launch the app
        And I click 'Main menu icon' button
        When I click 'Register' button
        Then I expect to see 'Register' screen
        When I enter "<email>" as an Email
        And I enter "<password>" as a Password
        And I enter "<confirm_password>" as a Password
        And I click 'Register' button
        Then I expect to see 'Home page' screen
        When I click 'Main menu icon' button
        Then I expect to see my Username
        And should be logged in the system

    Examples:
        | email                 | password    | confirm_password  |
        | Dinechka70@gmail.com  | 123456789A  | 123456789A        |
        | test1@mailinator.com  | Test123456! | Test123456!       |

    Scenario: Login with Facebook
    Given I launch the app
    And I click 'Main menu icon' button
    When I click 'Log in' button
    Then I expect to see 'Log In' screen
    When I click 'Continue with Facebook' button
    Then I expect to see screen of Facebook authorization
    When I click 'Continue' button
    Then I expect to see 'Home page' screen
    When I click 'Main menu icon' button
    Then I expect to see my Username
    And should be logged in the system

    Scenario: Login with Google
    Given I launch the app
    And I click 'Main menu icon' button
    When I click 'Log in' button
    Then I expect to see 'Log In' screen
    When I click 'Continue with Google' button
    Then I expect to see list of available Google accounts
    When I click on Google account
    Then I expect to see 'Home page' screen
    When I click 'Main menu icon' button
    Then I expect to see my Username
    And should be logged in the system
`;
