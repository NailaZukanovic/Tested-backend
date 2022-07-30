const { Given, When, Then } = require("cucumber");
const assert = require("assert");
const fetch = require("node-fetch");

// ======= Delete order Given =========
Given('the delete url api is {string}', (url) => {
    this.url = url
})

When("order id is {string}", (id)=> {
    this.id = id
})
When('send the {string} request to given url for given id', async (method) => {
    console.log(`${this.url}${this.id}`)
    await fetch(`${this.url}${this.id}`, {
        method: method,
        headers: { "Content-Type": "application/json", Accept: "application/json" }
    })
    .then(res => res.json())
    .then(result => this.is_success = result.is_success)
})

Then("message is {string}", (is_success) => {
    assert.equal(is_success, this.is_success)
})