# browsertech Albums

[Albums](https://evaz7.github.io/browsertech/)

Welkom bij mijn website voor browser technologies, tijdens dit vak heb een website gemaakt en hierbij progressive enhancement toegepast. Mijn website is een showcase van foto's waarmee je een collectie kan creëren, nieuwe foto's kan toevoegen en ze laten zien in een carrousel. Ik heb hierbij de volgende bronnen gebruikt:

https://www.dafontfree.io/mortend-font/
https://fonts.google.com/specimen/Space+Grotesk

## Browser testing

De features die ik ga onderzoeken zijn: het toevoegen van foto's, het selecteren van foto's, een collectie maken van foto's, de detailpagina bekijken en de carousel zelf.
Ik ga dit testen in Chrome, Firefox, Safari (IOS), Flow en Samsung internet.

### Chrome

In Chrome werken al mijn features optimaal als zowel CSS en JavaScript aan staan.

Als JavaScript uit staat is het toevoegen van foto's is nog steeds mogelijk, ook de waarschuwing in het formulier wordt weergeven. Ook kun je op de homepagina nog steeds foto's selecteren. Het creëren van een collectie gaat natuurlijk niet meer omdat de JavaScript uit staat en deze dus geen foto's uit de localstorage kan ophalen. Omdat er niks wordt meegeven naar de "create a collection" pagina kan je dus hier ook niet naar de detailpagina van de foto. De carrousel werkt ook niet omdat er dus niks vanuit de localstorage wordt opgehaald. Als je JavaScript dan gelijk aan zou zetten onthoudt de pagina wel welke foto's je al eerder hebt geselecteerd.

Als de CSS uit staat kan de gebruiker nog steeds foto's toevoegen, ook de waarschuwing als er niks is ingevuld in het alt-tekst invoer veld komt nog tevoorschijn. Alles staat hier netjes onder elkaar en het formulier is makkelijk te gebruiken. De gebruiker kan nog steeds foto's selecteren, ook deze komen onder in beeld te staan en hiermee een collectie creëren. Op de collectie pagina staan nu wel de checkboxes weergeven van de geselecteerde afbeeldingen. Verder staan de afbeeldingen hier onder elkaar in een lijst en kan je de collectie gewoon een naam geven onderaan.  Je kan vanuit hier gewoon naar de detailpagina, hierin staan de gegevens van de foto netjes onder elkaar. De carouselpagina is ook nog steeds bruikbaar, maar het is veranderd in een lijst in plaats van een scrollbalk.

### Firefox

In firefox werken al mijn features optimaal als zowel CSS en JavaScript aan staan. Alleen de stijling van mijn knop om afbeeldingen mee te geven aan een formulier is weg en de checkboxes zien er anders uit, dit laaste verschilt ook met of de checkboxes al eerder zijn geselecteerd. Het tabben door de pagina heen begint ook bij de eerste checkbox ipv de link in de header en hij pakt de "create a collection" knop niet en de links in de foto's (Volgens mij pakt hij de elementen niet als ze een position absolute hebben).

Als ik JavaScript hier uitzet gebeurt er exact hetzelfde als in Chrome.

Als ik CSS uitzet gebeurt er ook exact hetzelfde als dat ik in Chrome CSS uitzet.

### Safari mac

In safari werken ook al mijn onderdelen prima, behalve dat mijn foto's en sommige knoppen niet beschikbaar zijn voor tab. Op mijn home pagina kan ik op geen enkele knop tabben en op de voeg toe knop alleen op de invulvelden en niet eens op het invoerveld voor de afbeelding.

Als ik JavaScript hier uitzet gebeurt er exact hetzelfde als in Chrome.

Als ik CSS uitzet gebeurt er ook exact hetzelfde als dat ik in Chrome CSS uitzet.

### Safari IOS

Alles werkt prima in Safari op iOS, ik kan alle functionaliteiten uitvoeren en naar alle pagina's toegaan zonder dat er iets geks gebeurt.

### Flow

In flow werkt letterlijk niks van mijn JavaScript, ik kan afbeeldingen selecteren, maar er gebeurt verder niks. De checkboxen zien er verder anders uit in deze browser. OP het gebied van CSS werken ook veel dingen niet zoals de positionering van mijn footer, de styling van submit knoppen voor formulieren, het stijlen van de input knop om een afbeelding toe te voegen, het verplichten van invoervelden werkt niet. Ook is er geen cursor: pointer voor de links beschikbaar. De tabindex werkt wel goed in deze browser, het selecteren van checkboxen werkt alleen wel met enter in plaats van spatie.

JavaScript uitzetten hoeft niet want dat werkt toch niet.

Als ik CSS uitzet gebeurt er niet heel veel bijzonders, ik kan net als in Chrome ook zien dat ik al eens eerder op de link heb geklikt en de checkboxen staan onderaan de foto, maar verder geen grote verschillen vergeleken met andere browsers.

### Samsung internet

Op Samsung internet werkt alles zoals het zou moeten horen, ook hier krijg ik een waarschuwing als ik een invoerveld niet invul en de input type file is ook gestyled. Het enige wat niet oké werkt, is de footer met een position. Deze zweeft op de collectie pagina en de carrousel pagina in het midden. De carrousel werkt verder prima, ook met scroll-snap. Het enige wat raar is is dat de kleuren op mijn telefoon in dark-mode geen goed contrast hebben.

Als ik JavaScript hier uitzet gebeurt er exact hetzelfde als in Chrome.

Als ik CSS uitzet gebeurt er ook exact hetzelfde als dat ik in Chrome CSS uitzet.

## Screen reader

Ik ben er achter gekomen dat de afbeeldingen die ik opsla en weer ophaal uit mijn localstaorage geen alt tekst hebben, dus deze zal ik toevoegen. Er moet een tekstlabel op alle a elementen komen met een img erin en op de img zelf ook.

## Back-end nodig

Om mijn demo zo goed als mogelijk te laten werken en om progressive enhancement toe te passen, zou mijn applicatie eigenlijk server-side moeten zijn. Ik heb hiervoor NodeJS, een template-engine, express en een bestand die pagina's serveert. Hiermee kan in namelijk een server toevoegen aan mijn demo en zo de foto's met hun meta-data hierin opslaan en weer ophalen en serveren naar de client. De formulieren zouden dan gepost kunnen worden en zo worden meegegeven aan de server en weer worden gefetcht op de hiervoor bestemde pagina. De details van hoe dit zou moeten gebeuren per feature staat beschreven in de lijst met features en hun progressive enhancements hieronder.  

## Progressive enhancement

Ik heb er ten eerste voor gezorgd dat de HTML helemaal in orde was. Dus dat alles semantisch klopt, toegankelijk is en bruikbaar is als CSS en JavaScript uitstaan. Daarna heb ik zoveel mogelijk gebruik gemaakt van CSS waar dit mogelijk was in plaats van JavaScript. Tot slot heb ik JavaScript gebruikt als kers op de taart en als vervanger voor bepaalde server-side taken. In mijn demo werkt dit als volgt met de features:

- De eerste functionaliteit is dat de gebruiker foto's moet kunnen toevoegen aan de demo met meta-data zoals beschrijving, locatie, fotograaf en alt-tekst. Het gehele formulier bestaat uit pure HTML, hierdoor is deze nog steeds te gebruiken als er geen CSS en JavaScript aanwezig is. Om het formulier te versturen zou er echter wel server-side een post moeten worden gedaan naar de database met de submit knop en om deze data vervolgens weer op te halen in de homepage met alle foto's. Elk HTML-invoer-veld heeft een input type en/of een required element waardoor bepaalde elementen verplicht zijn om de demo en user-experience zo goed als mogelijk te laten werken. De invoer-velden zijn gelinkt aan de labels zodat de gebruiker ook hier op kan klikken en voor een eventuele database opslag. Ik heb verder CSS gebruikt om de input button en velden te stylen en om states te creëren voor een betere user-experience.

Een eis van mijn user-case was ook dat er (Visuele) waarschuwing zou verschijnen als er geen alt-tekst aanwezig is. Dit heb ik opgelost door een "required" toe te voegen aan het invoerveld voor de alt-tekst. Hierdoor kan de gebruiker het formulier niet verzenden zonder een alt-tekst aan de foto mee te geven.

- De volgende functionaliteit is dat de gebruiker een overzichtspagina heeft met alle foto's. Op deze pagina kan de gebruiker foto's selecteren en zo een serie samenstellen. Ook hier heb ik weer 1 drie stappen gewerkt op dit progressive te enhancen. Zo heb ik eerst een formulier gemaakt waarin alle foto's staan vanuit de "toevoeg" pagina, deze foto's zijn checkboxen waardoor als je op de foto klikt deze kan selecteren en met de knop "create collection" het formulier kan versturen. Ik heb met CSS de layout van de foto's gemaakt zodat deze responsive en gebruikers vriendelijk is.  Ik heb de checkboxen expres op de foto's laten staan zodat als de CSS uitstaan de gebruiker nog kan zien welke foto's er zijn geselecteerd. Onder in beeld heb ik met JavaScript de geselecteerde foto's in volgorde weergeven. Dit is een extra kers op de progressive enhancement taart doordat de gebruiker aan de checkboxes kan zien welke foto's er zijn geselecteerd, maar niet per se in welke volgorde en het is daarnaast ook vrij lastig om de checkboxes sop de foto te zien. De foto's zijn nu statisch, maar zouden eigenlijk server-side moeten worden opgehaald. De geslecteerde fotos zouden ook moeten worden verstuurd (het formulier moet gepost worden) naar een data-base met "create collection" zodat ik ze op de volgende pagina weer kan ophalen.

- Op de overzichtspagina van een collectie zie je de geselecteerde foto's en kan je eventueel nog een naam geven aan je collectie. Het geven van een naam aan je collectie is ook een formulier en is dus volledig bruikbaar zonder JavaScript en CSS. Deze zal dan server-side worden verzonden naar de database door het te posten, dit gebeurt als de gebruiker op de "start carousel" knop klikt. Ook zullen op deze pagina de foto's server-side worden opgehaald om deze te weergeven. Ik heb dit nu gedaan door de foto's tijdelijk op te slaan in de localstorage en hier weer uit op te halen op de pagina. Op deze manier zou je ook meerdere collecties kunnen creëren en hier eventueel ook nog een pagina voor kunnen maken. Ik heb met CSS op deze pagina gezorgd voor een betere user experience door hoverstates toe te voegen aan de foto's om aan te geven dat de gebruiker hierop kan klikken om naar de detailpagina te gaan deze link wordt gemaakt met JavaScript zodra de gebruiker een foto toevoegd in op de toevoeg-pagina. Ook heb ik met CSS een scrollbar gemaakt van alle foto's in de collectie zodat deze overzichtelijk op de pagina staan.

- Vanuit de overzichtspagina van de collectie kan je naar de detailpagina van een foto gaan, hierop vind je de alt-tekst, de beschrijving, de locatie en de fotograaf van de foto. Deze gegevens zijn gebaseerd op de gegevens die de gebruiker invult als hij een foto toegevoegd.  De foto zelf is ook te zien op deze pagina. De gegevens zijn momenteel een vaste html-pagina, maar horen eigenlijk server-side te worden gehaald vanuit een database en met een template engine die de data in de HTML zet. Zo kan je op basis van de foto de bijpassende data tonen. De HTML op deze pagina staat in een lijstje om het zo overzichtelijk als mogelijk te houden. Ik heb CSS toegevoegd om de details van de foto netjes onder elkaar te zetten zodat dit makkelijker leesbaar is.

- Tot slot heb ik een carousel gemaakt van de foto's. Deze heb ik gemaakt in de vorm van een slider. Ik haal op deze pagina de foto's weer op uit de localstorage en zet ze in een lijstje. Server-side zou dit gebeuren met een get-request om ze op te halen uit een database en door middel van een template-engine zou ik ze in mijn HTML neer zetten. Ik heb progressive enhancement toegepast in mijn slider door eerst met HTML alle afbeeldingen in een lijst te zetten. Dit maakt de HTML net iets gebruikers vriendelijker doordat alle afbeeldingen zo netjes onder elkaar komen te staan in plaats van aan elkaar vast en naast elkaar. Met CSS heb ik ervoor gezorgd dat de afbeeldingen een scrollbalk worden met scroll-snap. Hiermee heb ik al eigenlijk een echte carousel gecreëerd zonder JavaScript te gebruiken, dit is beter in verband met progressive enhancement. Als het zonder JavaScript op een valide manier kan dan is het onnodig om dit alsnog te gebruiken, tenzij je nog extra features wilt toevoegen uiteraard.