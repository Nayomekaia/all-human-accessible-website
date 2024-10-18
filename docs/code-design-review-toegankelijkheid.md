# All Human - Accessible Website

## Code/Design Review Toegankelijkheid
Deze week heb je geleerd wat toegankelijkheid is en hoe je een toegankelijkheidstest kan uitvoeren. 
Daarnaast hebben we gekeken naar hoe je een goede User Experience (UX) neerzet als front-ender. In de workshop User Experience van HTML heb je geleerd hoe goede en nette HTML ervoor zorgt dat je website beter werkt voor gebruikers. 

### Aanpak

#### 1. Code review toegankelijkheid
- Push je laatste werk van de repository all-human-accessible-website naar GitHub, publiceer je site via GitHub Pages en plaats een link bij je repo. Zorg ook dat je issues aanstaan.
- Lees onderstaande checklist om de code review straks uit te voeren:

<br/>

Checklist code-review:
- [ ] Bekijk of de website gebruik maakt van `<a>` en/of `<button>`. Wordt het juiste HTML-element gebruikt voor links naar andere pagina's of externe bronnen? Tip: bekijk nog eens de workshop [user-experience-van-html](https://github.com/fdnd-task/all-human-accessible-website/blob/main/docs/user-experience-van-html.md#links). Maak zo nodig hier een issue voor aan.
- [ ] Bekijk de HTML waarin afbeeldingen zijn opgenomen. Controleer of het juiste gebruik van het alt-attribuut wordt toegepast bij de `<img>` tags. Beantwoord daarvoor de volgende vragen: Heeft elke afbeelding een alt-attribuut? Is de tekst in het alt-attribuut beschrijvend en passend bij de context van de afbeelding? Zou je een andere tekst voor het alt-attribuut kiezen? Waarom wel of niet? Maak zo nodig hier een issue voor aan.
- [ ] Bekijk of `<input>` tags worden gebruikt. Controleer of de labels correct zijn gekoppeld aan de invoervelden. Beantwoord de volgende vragen: Heeft elk inputveld een gekoppeld `<label>` element? Kun je op het label klikken om het invoerveld te selecteren? Maak zo nodig hier een issue voor aan.
- [ ] Laat de heading structuur van de homepagina voorlezen door een tool. Je kan hiervoor een screenreader gebruiken of een browser extensie. Controleer of de heading levels correct zijn gebruikt. De volgende vragen kunnen je daarbij helpen: Is er een logische volgorde van de heading levels (`<h1>`, `<h2>`, `<h3>`, etc.)? Is er maar één `<h1>` op de pagina? Volgen de headings elkaar logisch op (bijvoorbeeld geen overslaan van `<h2>` naar `<h4>`)? Maak zo nodig hier een issue voor aan.
- [ ] Test of de HTML goed is door een HTML validator check te doen op de W3C website: https://validator.w3.org. Schrijf een issue als er in de test problemen naar voren zijn gekomen. 
- [ ] Bekijk alle HTML. Let met name op de Content sectioning, zijn de juiste elementen gebruikt voor de content van de pagina zoals een `<main>`, `<header>`, `<footer>`, `<h1>`-`<h6>`? Maak zo nodig hier een issue voor aan.
<br/>

- Bepaal samen met jullie mentor welke criteria nog toegevoegd kunnen worden aan de code review. Noteer minimaal vijf criteria voor de code review op het whiteboard. Tip: gebruik hiervoor de deeltaak [wcag-audit](https://github.com/fdnd-task/wcag-audit/blob/main/docs/INSTRUCTIONS.md).
- Vorm een duo binnen jouw groep en kies twee andere duo’s waarvan jullie de code gaan reviewen. Samen bespreken jullie de code en schieten jullie issues in. Jullie geven als duo dus feedback op het werk van vier verschillende klasgenoten.

<br/>

#### 2. Design review (vanaf 11:30)
- Als het goed is heb jij een iteratie gemaakt op het ontwerp van de opdrachtgever. Dit kan een geheel nieuw ontwerp zijn, een kleine aanpassing op het bestaande ontwerp of een uitbreiding van het ontwerp op een ander device (je hebt bijvoorbeeld een desktop versie ontworpen). 
- Pak jouw iteratie op het bestaande ontwerp (schetsen of Figma) en de live link erbij van je website.
- Noteer waar in jouw ontwerp je graag feedback op wil ontvangen.
- Ga langs bij minimaal 2 mentoren om feedback te verzamelen. Maak van de feedback issues aan in jouw repo all-human-accessible-website. 

#### Bronnen

- [`<a>`: The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [Het `alt` attribuut](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt#usage_notes)
- [Requirements for providing text to act as an alternative for images @ de HTML specificatie (geavanceerd)](https://html.spec.whatwg.org/multipage/images.html#alt)
- [`<label>`: The Label element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
- - [`<h1>`–`<h6>`: The HTML Section Heading elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)



<!-- 
In de code en design review de "UX van HTML" workshop laten terugkomen 

En misschien studenten optioneel om design feedback laten vragen? Moeten ze zelf bedenken waar ze feedback op willen en dan naar 2 mensen stappen

-->



