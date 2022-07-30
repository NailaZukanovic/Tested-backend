const { Given, When, Then } = require("cucumber");
const assert = require("assert");
const fetch = require("node-fetch");

// ==== Add order ============
Given("the post api url is {string}", url => {
  this.url = url
});

When("data is", (data)=> {
    this.data = data
})

When("send {string} request to given url and given data", async (method) => {
  await fetch(this.url, {
    method: method,
    body: this.data,
    headers: { "Content-Type": "application/json", Accept: "application/json" }
  })
    .then(res => res.json())
    .then(result => this.is_success = result.is_success)
    .catch(err => console.log("when Error: - ", err));
});

Then("message is {string}", (is_success) => {
  assert.equal(is_success, this.is_success)
})
