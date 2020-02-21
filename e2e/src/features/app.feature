Feature: Go to the home
  Display Button

  Scenario: Home Page
    Given I am on the home page
    When I do nothing
    Then I should see the button with a text
  
  Scenario: Click On Button
    Given I am on the home page
    When I click the button
    Then The button's text should change