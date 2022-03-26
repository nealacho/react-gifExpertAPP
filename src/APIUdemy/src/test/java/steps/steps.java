package steps;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;


public class steps {
    private static RequestSpecification request;
    private Response response;
    private ValidatableResponse json;
    @Given("I Send a GET Request to endpoint")
    public void i_send_a_get_request_to_endpoint() {
        // Write code here that turns the phrase above into concrete actions
        request = given()
                .baseUri("https://api.github.com")
                .contentType(ContentType.JSON);
    }
    @Then("^I get a (\\d+) status code")
    public void i_get_a_status_code(int expectedStatusCode) {
        // Write code here that turns the phrase above into concrete actions
        response = request
                .when()
                .get("/users/TheFreeRangeTester/repos");
        json = response.then().statusCode(expectedStatusCode);
    }

}
