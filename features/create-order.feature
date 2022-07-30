# Feature: Add new note

# Scenario: Add note
#     Given the post api url is "http://localhost:3001/order/create"
#     And data is
#     """
#         {
              "restoran": "Walter",
              "ime_i_prezime": "Marko Markovic",
              "adresa": "Markoviceva 1",
              "telefon": "132132123",
              "napomena": "",
              "status": "Na čekanju",
              "active": false
#         }
#     """
#     When send "POST" request to given url and given data

#     Then message is true