# Feature: Add new note

# Scenario: Add note
#     Given the post api url is "http://localhost:3001/product/create"
#     And data is
#     """
#         {
              "restoran": "Walter",
              "kategorija": "Ostalo",
              "naziv": "Novi artikal",
              "slika": "",
              "cena": 200
#         }
#     """
#     When send "POST" request to given url and given data

#     Then I get note details restoran "Walter" and
#             kategorija "Ostalo" and
#             naziv 'Novi artikal' and
#             slika '' and
#             cena 200 and