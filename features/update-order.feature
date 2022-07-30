Feature: test the upadte order status api

Scenario: update order data
    Given the patch api url is "http://localhost:3001/order/status/update/:order_id"
    And update order id is "5e9c74a621951d159a4a85df"
    And new data is
    """
        {
            "status": "Završeno",
        }
    """
#    When send "PATCH" request to given url and given data to id
    
#    Then message is true
    