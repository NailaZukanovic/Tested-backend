Feature: test the product upadte api

Scenario: update product data
    Given the patch api url is "http://localhost:3001/product/update/:product_id"
    And update product id is "5e9c74a621951d159a4a85df"
    And new data is
    """
        {
            "naziv": "Preimenovan artikal",
            "cena": 300
        }
    """
#    When send "PATCH" request to given url and given data to id

#    Then message is true