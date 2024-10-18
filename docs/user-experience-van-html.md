# All Human - Accessible Website

## User Experience van HTML

Je hebt maandag gezien dat Mensen (waar deze sprint om draait) veel verschillende browsers en apparaten gebruiken. Al die browsers kunnen overweg met HTML, de standaard waar het hele Web op draait.

Als frontender heb je de verantwoordelijkheid om een goede gebruikerservaring voor eindgebruikers neer te zetten. Goede HTML helpt bij die goede _User Experience (UX)_. En slechte HTML zorgt voor een slechte gebruikerservaring. Dat klinkt logisch, maar het Internet (en ook ChatGPT) staat vol met voorbeelden van slechte HTML.

### Aanpak

Voordat je kunt bepalen wat goede HTML is, moet je vooral leren wat HTML zoal kan. En welke functionaliteiten je van de browser gratis krijgt, als je de juiste HTML elementen schrijft.

Vandaag ga je lezen en leren wat verschillende (interactieve) HTML elementen in een browser doen: links, afbeeldingen, labels, headings en details. Studenten die al wat verder zijn, kunnen ook experimenteren met popups.

Open je code editor en maak een blanco HTML pagina in je editor, noem deze `ux.html` en sla deze op in de repo van je leertaak. Begin met een `<h1>UX in HTML</h1>` en een paragraf met daarin je favoriete HTML element `<p>Mijn favoriete HTML element is ...</p>`. Schrijf dit ook op het whiteboard, zodat we kunnen beginnen.


### Links

De allereerste browser ooit, zo'n 30 jaar geleden, kon al met links (_anchors_, `<a href="...">`) overweg. Sindsdien is er alleen maar leuk spul bijgekomen in HTML.

Maak een eerste subkop in je HTML document, `<h2>Links</h2>`. Schrijf daaronder een simpele link (naar zichzelf) `<a href="ux.html">UX in HTML<a>` en open de pagina in een willekeurige browser.

#### Beantwoord onderstaande vragen op het whiteboard:

- Onderzoek met je tafel welke functionaliteiten _verschillende browsers_ je geven bij zo'n link. Gebruik je rechtermuisknop, doe een _long tap_ op je telefoon, gebruik de Shift-, Control-, Command-, Option- en Alt-toetsen (of een combinatie van die toetsen) bij het klikken op die link.

- Voeg het `download` attribuut toe, en onderzoek wat er met de functionaliteit in de browser verandert. (Dit attribuut werkt niet in elke browser lokaal, in Firefox bijvoorbeeld wel.)

- Verander het `download` attribuut naar `target="_blank"`, en onderzoek wat er met de functionaliteit in de browser verandert, als je op de link klikt.

- Voeg ook een `<button>Knop</button>` toe aan je HTML. Krijg je hiermee dezelfde functionaliteit van de browser?

- Voeg meerdere `<a href="...">` links toe aan je HTML, en probeer met alleen je toetsenbord de links te bereiken en te volgen. Wat is de standaard tabvolgorde?

- Je kunt met een `<a href="#deel-2">` ook linken naar verschillende onderdelen binnen dezelfde pagina door naar een `id` te verwijzen, bijvoorbeeld `<section id="deel-2">`. Met de pseudo-selector`:target` kun je daar in CSS wat mee doen.

Met zoiets simpels als een link kun je al alle kanten op. <!-- Hrhr --> Wil je de eindgebruiker dus de mogelijkheid geven om ergens _heen_ te gaan, gebruik dan een `<a>` (_anchor_). En dus geen `<button>`, want daarbij krijg je niet die functionaliteit van een browser.

#### Bronnen

- [`<a>`: The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [Het `href` attribuut](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href)
- [Het `download` attribuut](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download)
- [Het `target` attribuut](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target)
- [De `:target` selector in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/:target)

### Afbeeldingen

Door foto's, logo's en andere visuele afbeeldingen toe te voegen in HTML, maken we het meteen ingewikkeld. Niet iedere browser kan namelijk de afbeeldingen downloaden, en niet ieder mens kan überhaupt _zien_. In HTML willen we met die gebruikerservaring ook rekening houden.

Voeg in jouw `ux.html` de volgende subkop toe, `<h2>Afbeeldingen</h2>`. We hebben nog geen afbeeldingen, maar de HTML kunnen we wel alvast schrijven. Zet de volgende HTML onder je kop: `<a href="ux.html"><img width="200" height="100"></a>`, en bekijk het resultaat in je browser.

De afbeelding kan nog niet gedownload worden, dus de browser tekent hier ook geen pixels.

#### Beantwoord onderstaande vragen op het whiteboard:

- Voeg `alt="UX in HTML"` toe aan de `<img>` tag, en bekijk het in je browser. Welke UX vinden jullie beter als de afbeelding niet getoond kan worden?

- We gaan nu tekst én een icoon toevoegen aan onze link, ook al hebben we de afbeelding voor het icoontje nog niet. En we hebben net geleerd dat een `alt` attribuut “beter” is voor de UX, dus die zetten we er ook meteen in. We willen immers het juiste doen. Gebruik de volgende HTML: `<a href="ux.html"><img alt="UX in HTML">UX in HTML</a>`, en bekijk het in je browser. Hm, is dit nou echt beter? Wat als je van dat `alt` attribuut `alt="Icoon"`, of `alt="Download icoon"` maakt? En wat als je gewoon `alt=""` doet in dit geval? Welke UX vinden jullie beter?

- Onderzoek en bespreek met je tafel op welke verschillende manieren je afbeeldingen kunt gebruiken, en wat voor soort `alt` attributen daarbij horen. Schrijf alle manieren op het whiteboard.

Nu weet je waarom je altijd na moet denken over de inhoud van je `alt` attributen, en waarom dat bijvoorbeeld in Lighthouse en de WCAG richtlijnen langskomt. De context van een afbeelding is relevant bij het schrijven van een `alt` attribuut.

#### Bronnen

- [`<img>`: The Image Embed element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
- [Het `alt` attribuut](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt#usage_notes)
- [Requirements for providing text to act as an alternative for images @ de HTML specificatie (geavanceerd)](https://html.spec.whatwg.org/multipage/images.html#alt)


### Labels voor invoervelden

Bij het maken van formulieren, voor bijvoorbeeld filters of zoekvelden, kun je verschillende invoervelden gebruiken. Denk aan een lijst met checkboxes of radios. Voor formulieren hangt een goede UX onder andere af van goede labels.

Maak een nieuwe subkop aan, `<h2>Labels voor invoervelden</h2>`, plak de volgende HTML eronder, en test het in je browser door verschillende docenten aan te klikken.

```html
<fieldset>
  <legend>Docenten</legend>
  <ul>
    <li><input type="checkbox"> Charley</li>
    <li><input type="checkbox"> Cyd</li>
    <li><input type="checkbox"> Dion</li>
    <li><input type="checkbox"> Dorien</li>
    <li><input type="checkbox"> Joost</li>
    <li><input type="checkbox"> Justus</li>
    <li><input type="checkbox"> Koop</li>
    <li><input type="checkbox"> Krijn</li>
    <li><input type="checkbox"> Sanne</li>
    <li><input type="checkbox"> Suus</li>
  </ul>
</fieldset>
```

De UX van deze HTML verschrikkelijk. Lighthouse klaagt er ook over. WCAG audit niet gehaald ... Helaas ...

#### Beantwoord onderstaande vragen op het whiteboard:

- Doe een Lighthouse test op de HTML met input en labels. Welke melding krijg je van de test?

- Wat nou als je elke `<input>` én elke docent samen in één `<label>` zet? Dat ziet er zo uit: `<label><input type="checkbox">Naam</label>`. Test de wijzigingen, welke UX vinden jullie beter?.

Een paar vliegen in één klap: je hebt de UX voor _alle_ gebruikers verbeterd, Lighthouse klaagt wat minder, en die WCAG checklist is zo ook wel te doen. Leer jezelf aan om bij elke `<input>` een `<label>` te koppelen. Niet alleen bij checkboxjes, maar bij _alle_ invoervelden.

- Zonder labels is het voor _iedereen_ ontoegankelijk en onbruikbaar, omdat je geen idee hebt wat je waar moet invullen. Voeg onderstaande code toe aan je HTML document en test het in je browser, werkt dit goed? Weet een gebruiker wat die moet invullen?

```html
<fieldset>
  <legend>Adresgegevens</legend>
  <p><input type="text"></p>
  <p><input type="text"></p>
  <p><input type="text"></p>
  <p><input type="text"></p>
</fieldset>
```

- Plak het volgende voorbeeld onder je code, zodat je het kunt vergelijken. Wat is het verschil tussen de twee voorbeelden?

```html
<fieldset>
  <legend>Adresgegevens</legend>
  <p>Straat: <input type="text"></p>
  <p>Huisnummer: <input type="text"></p>
  <p>Postcode: <input type="text"></p>
  <p>Plaats: <input type="text"></p>
</fieldset>
```

- Als we wél de tekstuele labels toevoegen, maar _niet_ de `<label>` elementen, blijft het voor een deel van je eindgebruikers ontoegankelijk en onbruikbaar. En HTML schrijf je voor _iedereen_. Plak dit onder je code, zodat je beide versies kunt vergelijken. Test de verschillen, welke UX vinden jullie beter?.

```html
<fieldset>
  <legend>Adresgegevens</legend>
  <p><label>Straat: <input type="text"></label></p>
  <p><label>Huisnummer: <input type="text"></label></p>
  <p><label>Postcode: <input type="text"></label></p>
  <p><label>Plaats: <input type="text"></label></p>
</fieldset>
```

- Een bijkomend voordeel is dat je nu ook op het label kunt klikken, en dat je met CSS meer kunt doen. Omdat je een goed HTML fundament hebt geschreven. Plak deze HTML/CSS onderaan in je `ux.html` om het te testen.

```html
<style>
input:hover, input:focus {
  outline: 2px solid blue;
}
</style>
```

- Stel dat een invoerveld verplicht is, wat zou je dan doen? Bespreek met je tafel hoe je dit voor meerdere eindgebruikers, browsers en apparaten kunt doen, en schrijf wat hints op het whiteboard.

#### Bronnen

- [`<label>`: The Label element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
- [`<fieldset>`: The Field Set element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)
- [Pro-tip: Multiple selections (multi-cursor) @ VS Code](https://code.visualstudio.com/docs/editor/codebasics#_multiple-selections-multicursor)
- [De `:required` selector in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/:required)


### Headings

Door je content een goede heading structuur te geven, zorg je dat bijvoorbeeld _Inhoudsopgaves_ automatisch gemaakt kunnen worden. Sommige browsers en tools bieden deze functionaliteit aan eindgebruikers.

#### Beantwoord onderstaande vragen op het whiteboard:

- Onderzoek met je tafel hoe je de heading structuur van je UX pagina kunt laten zien of voorlezen door een tool. Gebruik hiervoor bijvoorbeeld de screen reader die je geïnstalleerd hebt, zoek een browser extensie die een “table of contents” kan weergeven, of installeer een browser zoals Polypane.

#### Bronnen

- [`<h1>`–`<h6>`: The HTML Section Heading elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
- [Gebruik de tools binnen Polypane om de toegankelijkheid en bruikbaarheid te testen](https://polypane.app/) (gratis voor studenten, via de [GitHub Student Developer Pack](https://polypane.app/github-students/))


### Meer informatie en accordeons (_progressive disclosure_)

Soms wil je een deel van de informatie op een pagina verbergen en pas later tonen. Misschien maak je wel een lijst met Veelgestelde vragen, maar wil je dat er steeds maar één vraag openstaat.

#### Beantwoord onderstaande vragen op het whiteboard:

- Zoek op het Internet—of vraag ChatGPT—hoe je een accordeon kunt maken met HTML, CSS en JS. Je gaat verschillende tutorials en meningen vinden. Schrijf met je tafel wat verschillende manieren op het whiteboard, en of deze een elegante UX opleveren. Test bijvoorbeeld met je toetsenbord hoe ze te bedienen zijn.

- In HTML kun je het `<details>` element gebruiken voor dit soort _widgets_. Kopieer onderstaande code naar je HTML document en onderzoek wat het je voor UX geeft:

```html
<details>
  <summary>Meer info</summary>
  <p>Deze informatie krijg je pas later te zien.</p>
  <p>Kan handig zijn.</p>
</details>
```

- HTML biedt je ook iets voor accordeons, waarbij slechts één element openstaat. Experimenteer met onderstaande code, en onderzoek hoe de UX is, door je toetsenbord te gebruiken.

```html
<details name="faq">
  <summary>Moet ik al kunnen coderen?</summary>
  <p>Nee, je hebt helemaal geen voorkennis nodig om te beginnen aan deze opleiding, we kunnen je alles leren! Als je wel al voorkennis hebt, is dat alleen maar goed, dan kunnen we je helpen je skills te verbeteren en te verdiepen in de stof.</p>
</details>
<details name="faq">
  <summary>Wat is frontend development?</summary>
  <p>Een frontend developer ontwerpt en bouwt websites in HTML, CSS en JavaScript. Deze frontend talen leer je bij ons, je hebt dus geen voorkennis nodig.</p>
</details>
<details name="faq">
  <summary>Hoe werkt deze frontend developer opleiding?</summary>
  <p>Je richt je tijdens deze tweejarige studie op webdesign, visual interface design en frontend development. Vanaf het begin van de opleiding werk je aan actuele opdrachten van échte opdrachtgevers, en leer je samenwerken in multidisciplinaire teams.</p>
</details>
```

#### Bronnen

- [`<details>`: The Details disclosure element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- [Het `open` attribuut](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#open)
- [Het `name` attribuut](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#name)


### Geavanceerd: Popups

Zoek op het Internet hoe je een popup kunt maken met HTML, CSS en JS. Je gaat ook hier weer verschillende oplossingen vinden. Schrijf met je tafel per manier een steekwoord op het whiteboard.

Test of je de voorbeelden die je gevonden hebt ook kunt bedienen met alleen het toetsenbord. Oftewel: hoe is de UX van deze oplossingen? Schrijf of ze met het toetsenbord te bedienen zijn ook op het whiteboard.

Waarschijnlijk vond je iets over `<div>`jes, verschillende `class`es, JavaScript gebruiken, `classList`, `style.display = 'block'`, `style.display = 'none'`, `<button>`s, `focus`, `inert`, focus trap, etc. Het Web staat er vol mee. Hoe weet je nou wat goed is?

<details>
  <summary>Wat goed is</summary>

HTML biedt ook hier iets voor. Voeg de subkop `<h2>Popups</h2>` toe aan je HTML, en daarna het volgende:

```html
<button popovertarget="popup">Open iets</button>

<dialog popover id="popup">
  <p>Dit staat in een popup/overlay/popover.</p>
  <p>Leuk he.</p>
  <button popovertarget="popup" popovertargetaction="hide">Sluit dit ding weer</button>
</dialog>
```

Merk op dat dit volledig met het toetsenbord te bedienen is, zonder dat je extra werk hoeft te doen. De `Escape` toets werkt, buiten de popup klikken werkt, de focus wordt automatisch goed gezet. Dankjewel HTML.

En, wat ook prettig is, dit werkt goed samen met CSS. Voeg dit bijvoorbeeld toe, en test wat het doet.

```html
<style>
dialog::backdrop {
  background: rgb(0 0 0 / 50%);
}
</style>
```

</details>

#### Bronnen

- [`<dialog>`: The Dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [Het `open` attribuut](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#open)
- [Het `popover` attribuut](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover)
- [De `::backdrop` selector in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop)
- Wat geavanceerder: [de `showModal()` method in JS](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal), voor als je je popup _modal_ wilt maken


