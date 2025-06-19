
# ONYX
Onyx is een platform waarop docenten en schoolpersoneel gegevens over hun individuele klassen en studenten kan monitoren, beoordelen en toevoegen.
Live site: https://proof-of-concept-zn9m.onrender.com/


## Inhoudsopgave

  * [Design](#design)
  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [installatie](#installatie)
  * [Licentie](#licentie)

## Design

![Screenshot 2025-06-04 121110](https://github.com/user-attachments/assets/1e08e1dc-9542-4c89-a649-0615733cc39a)
^ Overzichtspagina van de personeel site, met live statistieken over hoe studenten gebruiken ONYX.

![Screenshot 2025-06-04 121143](https://github.com/user-attachments/assets/06112de4-ba68-485d-975f-a7aac6519956)
^ Klassenlijst met gemiddelde punten

## Beschrijving
De pagina bestaat uit een navigatiebalk, verschillende grafieken en een kort overzicht van elke klas. Gebruikers kunnen schakelen tussen het bekijken van klasgegevens of gebruikersgegevens, realtime statistieken bekijken evenals gemiddelde sessie tijden en hoeveel totale studenten er in hun cursussen zijn.
Er is ook de mogelijkheid om individuele studenten te doorzoeken om hun voortgang te bekijken, of een overzicht van de hele klas te krijgen, inclusief een gemiddeld cijfer.
Heb je een interactie ontworpen en gebouwd? Toon een visual of video van de interactie en leg je ontwerpkeuzes uit.
Ik heb verschillende kleine interacties op de pagina opgenomen, namelijk hover-staten en toggle-knoppen, evenals een loading animatie voor de klassen gemiddelden.
Als ik meer tijd had gehad, zou ik het zoeken en de filters functioneel hebben willen maken, evenals de schakelfunctie tussen de klas- en student cijfers.


## Gebruik
User Story: Je bent een leraar en wil meer weten over je hoe je studenten gebruiken ONYX & zijn voortgang

Scenario: Je wil een overzicht op hoe je studenten studeren, hoeveel tijd ze besteden op zijn huiswerk en zijn resultaten van vorige toetsen. Je wil ook zien of er een verschil is tussen klassen en leerjaaren, en wie er momenteel online is.

## Kenmerken
<!--  Wat is er met JS gedaan en hoe?  -->

Mijn planning voor het bouwen hiervan was gebaseerd op het idee van progressive enhancement. Ik begon met het bouwen van een functionele en reliable laag, die bestond uit HTML, enkele basis CSS en de gegevens van de API. Zodra alles goed werd weergegeven, kon ik me richten op het verbeteren van de pagina met bijvoorbeeld die statistieken die chart.js gebruiken, die de site meer Usable maken. Om te zorgen dat mijn gebruikers een goede ervaring hebben met de site heb ik ook wat pleasurable UI gebruikt, zoals draaiende circle graphs en hover states toegevoegd.
De gegevens in mijn project komen van de API die de opdrachtgever ons heeft gegeven. Deze gegevens kunnen worden gebruikt door met Node.JS een fetch naar de API in te stellen, waardoor alle gegevens beschikbaar zijn voor gebruik in het project. Node.js laat het project server-side javascript draaien, wat betekent dat we dynamische inhoud kunnen weergeven en inhoud op de server kunnen lezen en schrijven. Op deze manier worden alle gegevens die in de API worden gewijzigd ook gewijzigd in het project ( met een GET route)  en vice versa (met een POST route). Ik gebruik vervolgens Liquid om if- en for-loops toe te voegen, die de juiste gegevens injecteren waar nodig op de pagina.

## Installatie
Dit Node.js-project is gemaakt met express en liquid. Om aan dit project te werken, moet je npm installeren en toegang hebben tot de gebruikte API.

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
