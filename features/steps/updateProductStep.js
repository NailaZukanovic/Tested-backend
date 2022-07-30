const { Given, When, Then } = require("cucumber");
const assert = require("assert");
const fetch = require("node-fetch");


// ========== update order ===========
Given('the patch api url is {string}', url => {
    this.noteUpdateUrl = url
});

When('update order id is {string}', id => {
    this.id = id
})

When('new data is', docString => {
    this.newData = docString
})

When('send {string} request to given url and given data to id', async (method) => {
    await fetch(`${this.noteUpdateUrl}${this.id}`, {
        method: method,
        body: this.newData,
        headers: { "Content-Type": "application/json", Accept: "application/json" }
    })
    .then(res => res.json())
    .then(result => this.is_success = result.is_success)
    .catch(err => err)
})

Then("message is {string}", (is_success) => {
  assert.equal(is_success, this.is_success)
})
