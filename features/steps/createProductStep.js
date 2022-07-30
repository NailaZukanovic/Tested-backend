const { Given, When, Then } = require("cucumber");
const assert = require("assert");
const fetch = require("node-fetch");

// ==== Add product ============
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
    .then(result => this.newEntity = result.newProduct)
    .catch(err => console.log("when Error: - ", err));
});

Then("I get note details _id {string} and title {string} and details {string} and category {string}", (restoran,kategorija,naziv,slika,cena) => {
    assert.equal(JSON.stringify({
      restoran,
      kategorija,
      naziv,
      slika,
      cena
    }), JSON.stringify({
      restoran: this.newEntity.restoran, 
      kategorija: this.newEntity.kategorija, 
      naziv: this.newEntity.naziv,
      slika: this.newEntity.slika,
      cena: this.newEntity.cena
    }))
});
