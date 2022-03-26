Feature: Ejemplo de Request para Udemy

  @API
  Scenario: prueba GET al endpoint
    Given I Send a GET Request to endpoint
    Then I get a 200 status code