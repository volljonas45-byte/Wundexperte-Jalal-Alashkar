# Kent Stuttgart GmbH — Website Fullbuild Brief
## Für Claude: Alle Seiten bauen

---

## 0. DESIGN-SYSTEM (bereits vorhanden — index.html ist das Master-Template)

Alle Seiten bauen auf `index.html` auf. Gleiche Fonts, gleiche CSS-Variablen, gleiche Nav/Footer.

**Farben:**
- `--bg: #04091A` — tiefstes Dunkelblau, Basis
- `--blue: #1058C0` / `--blue2: #1A76F0` — Logo-Blau
- `--red: #C8221C` / `--red2: #E03530` — Logo-Rot (Swoosh)
- `--white: #FFFFFF` / `--dim: #6088B0` / `--muted: #374F72`

**Fonts:**
- Display: `Barlow Condensed` (Überschriften, groß, uppercase)
- Body: `Barlow` (Fließtext, light/300)
- Mono: `Space Mono` (Technische Labels, Zahlen)

**Design-Prinzipien:**
- Premium, minimal, wie Porsche / Apple
- Viel Leerraum — eine klare Aussage pro Sektion
- Typografie als primäres Design-Element
- Blau/Rot-Spannung wie im Logo
- Kein generisches Layout, keine 3-Karten-Reihen ohne Notwendigkeit
- Subtile Hintergründe mit Radial-Glows (blau + rot)
- Alle Buttons: `border-radius: 10px` (Apple-Stil)
- Alle Karten: `border-radius: 14–16px`

---

## 1. SEITENSTRUKTUR / NAVIGATION

```
Kent Stuttgart GmbH
├── Startseite (index.html) ✅ FERTIG
├── Über uns
├── Maschinen
│   ├── 1. Standardmaschinen
│   │   ├── 1.1 HVA-Serie
│   │   │   ├── 1.1.1 HVA 150
│   │   │   ├── 1.1.2 Kipp 200
│   │   │   └── 1.1.3 HVA Promotor 4
│   │   ├── 1.2 Turbo-Serie
│   │   │   ├── 1.2.1 Turbo 90
│   │   │   ├── 1.2.2 G-Turbo 90
│   │   │   ├── 1.2.3 G-Turbo 90 S/2
│   │   │   ├── 1.2.4 Turbo 125 HVA
│   │   │   ├── 1.2.5 Turbo 165
│   │   │   └── 1.2.6 G-Turbo 350
│   │   ├── 1.3 PP-Serie
│   │   │   ├── 1.3.1 PP 21N
│   │   │   ├── 1.3.2 PP 150
│   │   │   └── 1.3.3 PP 150 SCMIC
│   │   ├── 1.4 IDS-Serie
│   │   │   ├── 1.4.1 PP 150 IDS
│   │   │   ├── 1.4.2 150 IDS-DRE
│   │   │   └── 1.4.3 KIPP 200-IDS
│   │   ├── 1.5 ALPS-200
│   │   ├── 1.6 Alien-Serie
│   │   │   ├── 1.6.1 Alien 100
│   │   │   ├── 1.6.2 Alien 100R
│   │   │   └── 1.6.3 Alf 80-210
│   │   └── 1.7 KCNC
│   ├── 2. Sondermaschinen
│   │   └── ALF-Serie
│   ├── 3. Anwendungsbereiche  ← [SCREENSHOT AUSSTEHEND]
│   ├── 4. Maschinenzubehör    ← [SCREENSHOT AUSSTEHEND]
│   └── 5. Siebdruckmaschinen
│       ├── SP 400
│       └── SP 500
└── Klischees
    ├── Übersicht              ← [SCREENSHOT AUSSTEHEND]
    ├── Stahlklischees
    ├── Bandstahlklischees
    ├── Stahlwalzen
    ├── Kunststoffklischees
    ├── Aluminiumlaserklischee
    └── Laser Repro
```

---

## 2. DATEISTRUKTUR (zu erstellen)

```
/
├── index.html                          ✅ FERTIG
├── ueber-uns.html
├── maschinen/
│   ├── index.html                      (Übersichtsseite Maschinen)
│   ├── standardmaschinen/
│   │   ├── index.html                  (Übersicht Standardmaschinen)
│   │   ├── hva-serie/
│   │   │   ├── index.html              (HVA-Serie Übersicht)
│   │   │   ├── hva-150.html
│   │   │   ├── kipp-200.html
│   │   │   └── hva-promotor-4.html
│   │   ├── turbo-serie/
│   │   │   ├── index.html              (Turbo-Serie Übersicht)
│   │   │   ├── turbo-90.html
│   │   │   ├── g-turbo-90.html
│   │   │   ├── g-turbo-90-s2.html
│   │   │   ├── turbo-125-hva.html
│   │   │   ├── turbo-165.html
│   │   │   └── g-turbo-350.html
│   │   ├── pp-serie/
│   │   │   ├── index.html
│   │   │   ├── pp-21n.html
│   │   │   ├── pp-150.html
│   │   │   └── pp-150-scmic.html
│   │   ├── ids-serie/
│   │   │   ├── index.html
│   │   │   ├── pp-150-ids.html
│   │   │   ├── 150-ids-dre.html
│   │   │   └── kipp-200-ids.html
│   │   ├── alps-200.html
│   │   ├── alien-serie/
│   │   │   ├── index.html
│   │   │   ├── alien-100.html
│   │   │   ├── alien-100r.html
│   │   │   └── alf-80-210.html
│   │   └── kcnc.html
│   ├── sondermaschinen/
│   │   ├── index.html
│   │   └── alf-serie.html
│   ├── anwendungsbereiche/
│   │   └── index.html                  ← [INHALT AUS SCREENSHOT]
│   ├── zubehoer/
│   │   └── index.html                  ← [INHALT AUS SCREENSHOT]
│   └── siebdruck/
│       ├── index.html
│       ├── sp-400.html
│       └── sp-500.html
└── klischees/
    ├── index.html                      (Übersicht ← SCREENSHOT AUSSTEHEND)
    ├── stahlklischees.html
    ├── bandstahlklischees.html
    ├── stahlwalzen.html
    ├── kunststoffklischees.html
    ├── aluminiumlaserklischee.html
    └── laser-repro.html
```

---

## 3. SEITENINHALTE

---

### 3.1 ÜBER UNS (`ueber-uns.html`)

**Hero:**
- Headline: "PRÄZISION. SEIT 1987."
- Sub: "Ein Familienunternehmen aus Stuttgart, das die Welt des Tampondrucks prägt."

**Inhalt-Sektionen:**
1. **Geschichte** — Gegründet 1987 in Stuttgart. Über 35 Jahre Branchenerfahrung. Familiärer Kern, internationaler Anspruch.
2. **Zahlen** — 500+ Installationen, 40 Länder, ±0.01mm Präzision, ISO 9001
3. **Werte** — Präzision, Qualität, Verlässlichkeit. Made in Stuttgart, nicht als Slogan sondern als Versprechen.
4. **Team/Standort** — Stuttgart, Deutschland. Fertigung und Entwicklung unter einem Dach.

---

### 3.2 MASCHINEN-ÜBERSICHT (`maschinen/index.html`)

**Hero:**
- Headline: "MASCHINEN. DIE ARBEITEN."
- Sub: "Tampondruckmaschinen für jeden Anspruch — vom Einzel-Arbeitsplatz bis zur vollautomatischen Linie."

**5 Kategorien als Focus-Blocks:**
1. Standardmaschinen
2. Sondermaschinen
3. Anwendungsbereiche
4. Maschinenzubehör
5. Siebdruckmaschinen

---

### 3.3 STANDARDMASCHINEN-ÜBERSICHT (`standardmaschinen/index.html`)

**Hero:** "STANDARD. AUSSERGEWÖHNLICH."

**Serien-Übersicht (7 Serien als Karten):**
- HVA-Serie (3 Modelle)
- Turbo-Serie (6 Modelle)
- PP-Serie (3 Modelle)
- IDS-Serie (3 Modelle)
- ALPS-200 (1 Modell)
- Alien-Serie (3 Modelle)
- KCNC

---

### 3.4 HVA-SERIE (`hva-serie/index.html`)

**Hero:** "HVA-SERIE. BEWÄHRT. PRÄZISE."

Serien-Übersicht mit 3 Maschinenmodellen als Karten:
- HVA 150
- Kipp 200
- HVA Promotor 4

Jede Maschine hat eine eigene Unterseite. Format jeder Maschinendetailseite (Vorlage für ALLE ~30 Maschineneinzelseiten):

---

### 3.5 VORLAGE: MASCHINENDETAILSEITE

**Gilt für alle 30+ Einzelmaschinen-Seiten.**

**Layout-Struktur:**
```
[Breadcrumb: Maschinen > Standardmaschinen > HVA-Serie > HVA 150]

[HERO]
  - Maschinenname groß (z.B. "HVA 150")
  - Serie + Kategorie als Eyebrow (z.B. "HVA-SERIE · STANDARDMASCHINEN")
  - 1-Satz-Beschreibung

[BILD-BEREICH]
  - Großes Produktbild-Platzhalter (aspect-ratio box)
  - Alternativ: technische Illustration / SVG

[TECH-SPECS-TABELLE]
  - Taktzeit
  - Tampon-Durchmesser
  - Druckfarben
  - Steuerung
  - Abmessungen
  - Gewicht
  - Schutzklasse
  (Werte als Platzhalter "[SPEC]" kennzeichnen)

[FEATURES]
  - 3–4 Kernmerkmale als Focus-Blocks

[CTA]
  - "Anfrage stellen" Button
  - "Technisches Datenblatt anfragen" Ghost-Link

[NAVIGATION]
  - Zurück zur Serie
  - Vorheriges Modell / Nächstes Modell
```

**Maschinenmodelle und ihre Seiten:**

#### HVA-Serie:
- **HVA 150** — Einfarbig, kompakt
- **Kipp 200** — Kippkopfmaschine, 200mm Tampon
- **HVA Promotor 4** — 4-farbig, Promotor-Linie

#### Turbo-Serie:
- **Turbo 90** — Schnell, kompakt, 90mm
- **G-Turbo 90** — Geschlossenes Farbsystem, 90mm
- **G-Turbo 90 S/2** — Doppelstation, geschlossen
- **Turbo 125 HVA** — HVA-Druckkopf, 125mm
- **Turbo 165** — 165mm, hohe Taktrate
- **G-Turbo 350** — Großformat, geschlossen, 350mm

#### PP-Serie:
- **PP 21N** — Kompaktmaschine für kleine Motive
- **PP 150** — Standard PP, 150mm
- **PP 150 SCMIC** — Mit SCMIC-Steuerung

#### IDS-Serie (Integrated Drive System):
- **PP 150 IDS** — PP 150 mit IDS-Antrieb
- **150 IDS-DRE** — IDS mit Drehtisch-Integration
- **KIPP 200-IDS** — Kippkopf + IDS

#### ALPS-200:
- Einzelseite — Automatische Linie, 200mm

#### Alien-Serie:
- **Alien 100** — Seitlicher Druckkopf, 100mm
- **Alien 100R** — Rotationsvariante
- **Alf 80-210** — Variabler Hub 80–210mm

#### KCNC:
- CNC-gesteuerte Tampondruckmaschine

---

### 3.6 SONDERMASCHINEN (`sondermaschinen/index.html`)

**Hero:** "SONDER. LÖSUNGEN."
Sub: "Wenn Standardmaschinen nicht ausreichen — wir entwickeln und fertigen nach Ihren Anforderungen."

**ALF-Serie Seite:**
- Flexible Sonderlösungen
- Individuell konfigurierbar
- Inline-fähig, Roboterintegration möglich
- Entwicklung und Fertigung in Stuttgart

---

### 3.7 ANWENDUNGSBEREICHE (`anwendungsbereiche/index.html`)

**Hero:** "ANWENDUNGEN. OHNE GRENZEN."
Sub: "Neben standardisierten Maschinen bietet die KENT Stuttgart GmbH auch maßgeschneiderte Sonderlösungen im Tampondruck."

**Intro-Text:**
Hierbei wird anhand einer konkreten Aufgabenstellung ein Konzept erarbeitet, das unter Berücksichtigung der Gegebenheiten beim Anwender, des Automatisierungsgrades, der geforderten Ausbringung und der produktbezogenen Besonderheiten in einem klaren Angebot mündet. Hierbei sind Konstruktion, Maschinenbau, Programmierung und Anwendungstechnik unter einem Dach und arbeiten Hand in Hand.

Stellen Sie uns das Produkt vor, das Sie bedrucken wollen. Gemeinsam erarbeiten wir die Tampondrucklösung.

**Anwendungsbeispiele (18 Bereiche — als Karten oder fokussierte Liste):**
- Baby
- Blenden
- Blenden KCNC
- Filter
- Fokus Pen
- Gehäuse
- Lernpuck
- Modelle Metall
- Motorabdeckung
- Mundschutz
- UV Technik
- Behälter
- Keramische Produkte
- Keramische Bodenstempel
- Kugelschreiber
- Modelle
- Rasierer
- Videoblende

---

### 3.8 MASCHINENZUBEHÖR (`zubehoer/index.html`)

**Hero:** "ZUBEHÖR. KOMPLETT GEDACHT."
Sub: "Als Ergänzungen oder Optionen zu den Tampondruckmaschinen steht eine ganze Reihe an Zubehör zur Verfügung."

**Intro-Text:**
Ionisation und Vorbehandlung schaffen Abhilfe bei einem Problem mit statischer Aufladung oder der Oberflächenspannung des Bedruckmaterials. Viskositätsmessgerät und Kurbelwascher tragen bei zur wiederholgenauigen Produktionsstandards. Mikroskop zur Tiefenmessung bei Klischees hilft bei der Qualitätskontrolle.

**Produkte (15 Positionen — als Karten mit kurzer Beschreibung):**
- Carreetisch — Tisch-Transportsystem für automatisierte Linien
- Beflammung — Vorbehandlung zur Oberflächenaktivierung
- Corona — Elektrische Oberflächenbehandlung
- Ionisation — Beseitigung statischer Aufladung
- Reinigungsautomat M-Serie — Automatische Tamponreinigung
- Reinigungsbehälter Tauchtank — Manuelle Reinigungslösung
- Farbnapf LCIC Keramik — Keramik-Farbnapf für geschlossene Systeme
- Farbnapf TCIC Stahl — Stahl-Farbnapf für geschlossene Systeme
- UV-Trockner mini — Kompakter UV-Trockner
- UV-Trockner — Standard UV-Trockner
- Belichtungsgeräte — Für Kunststoffklischees
- Viskositätsmessgerät — Qualitätskontrolle der Druckfarbe
- Verschiebetisch — Präziser X/Y-Positioniertisch
- Laser — Laser-Klischeebearbeitung
- Laser F-10 — Laser-System F-10

---

### 3.9 SIEBDRUCKMASCHINEN (`siebdruck/index.html`)

**Hero:** "SIEBDRUCK. VON KENT."

**2 Modelle:**
- **SP 400** — Einzelseite (`sp-400.html`)
- **SP 500** — Einzelseite (`sp-500.html`)

Format: Gleiche Maschinendetail-Vorlage wie Standardmaschinen.

---

### 3.10 KLISCHEES-ÜBERSICHT (`klischees/index.html`)

**Hero:** "KLISCHEES. UNSER MATERIAL."
Sub: "In langer Tradition fertigt Kent Klischees für das Tampondruckverfahren. Hochqualifizierte Fachkräfte sorgen für eine hervorragende Qualität der Druckplatten."

**Intro-Text:**
Unsere Reproabteilung verfügt über jahrzehntelange Erfahrung bei der Herstellung von Farbsätzen und schwierigen Druckmotiven. Auf modernen EDV-Anlagen verarbeiten wir Dateien in allen gängigen Grafikformaten für Mac und PC. Unsere Ätzerei verfügt über modernste Anlagen zur Herstellung von allen Arten von Stahlklischees — Stahlwalzen, Klischeestäbe, Flachklischees, massiver Stahl, Bandstahl oder Kunststoffklischees. Kürzeste Liefertermine bei gleichbleibend hoher Qualität und vernünftigen Preisen.

**6 Kategorien (als fokussierte Karten mit Beschreibung):**
1. Stahlklischees — Erste Wahl wenn es um Top-Qualität und extrem lange Lebensdauer geht.
2. Bandstahlklischees — Hohe Qualität, hergestellt nach demselben Qualitätsverfahren, lange Lebensdauer.
3. Stahlwalzen — Im Rotationstampondruck kommen hochwertige Stahlwalzen zum Einsatz.
4. Kunststoffklischees — Für kleine Auflagen ideal und unschlagbar im Preis-/Leistungsverhältnis.
5. Aluminiumlaserklischee — Dicke 0,3mm, magnetisch, direkte Laserbearbeitung vom PC.
6. Repro (Laser Repro) — Reproabteilung mit hochqualifizierten Fachleuten für präzise Druckvorlagen.

---

### 3.11 STAHLKLISCHEES (`klischees/stahlklischees.html`)

**Hero:** "STAHL. UNÜBERTROFFEN."

**Vollständiger Inhalt:**

Stahlklischees sind die unübertroffenen Druckplatten für hohe Qualität und hohe Druckauflagen. Bereits seit der Firmengründung liefern wir Stahlklischees für fast alle am Markt befindlichen Tampondruckmaschinen. Unser 30-jähriges Know-How auf diesem Gebiet ist unübertroffen.

**Material:**
Unser Ausgangsmaterial ist eine spezielle Legierung mit einer Härte von ca. 65 Rc. Wir bearbeiten das Rohmaterial vom Walzwerk im eigenen Haus selbst, um den wichtigsten Teil der Fertigung der Stahlklischeerohlinge bestimmen zu können.

**Abmessungen:**
- Dicke: ca. 10 mm
- Länge × Breite: abhängig von Maschinentyp und eingesetztem Farbbecken
- Maximale Klischee-Größe: bis 1.000 mm (dank Stahlqualität)

**Haltbarkeit:** Bei optimalen Bedingungen weit über 500.000 Drucke.

**Haupteinsatzgebiet:**
- Industrie
- Hohe Druckauflagen
- Geschlossene Farbsysteme

Unser Lieferprogramm umfasst alle gängigen Größen. Sondermaße auf Anfrage.

---

### 3.12 BANDSTAHLKLISCHEES (`klischees/bandstahlklischees.html`)

**Hero:** "BANDSTAHL. FLEXIBEL."

**Vollständiger Inhalt:**

Bandstahlklischees haben ähnliche Eigenschaften wie Stahlklischees. Die Härte liegt bei ca. 50 RC. Sie werden aus einem speziellen, gut ätzbaren Bandstahl bei einem ausgesuchten Lieferanten gefertigt.

**Stärken:** 0,25 mm / 0,3 mm / 0,5 mm
- 0,25 mm und 0,3 mm Platten werden auch gelocht geliefert
- Geeignet für geschlossene Farbsysteme dank geringer Dicke

**Haltbarkeit:** Ca. 20.000 – 50.000 Drucke bei optimalen Bedingungen.

**Haupteinsatzgebiet:**
- Industrie, mittlere Druckauflagen
- 0,5 mm → Offene Farbsysteme
- 0,25 mm & 0,3 mm → Geschlossene Farbsysteme

Lieferprogramm umfasst alle gängigen Größen und Lochungen. Sondermaße auf Anfrage.

---

### 3.13 STAHLWALZEN (`klischees/stahlwalzen.html`)

**Hero:** "STAHLWALZEN. ROTATIONSDRUCK."

**Vollständiger Inhalt:**

Stahlwalzen werden im Rotationstampondruck eingesetzt. Qualität und Lebensdauer sind ähnlich wie bei Stahlklischees. Die Verarbeitung ist sehr aufwändig und wird bei uns im Haus mit größter Sorgfalt gefertigt.

**Haupteinsatzgebiet:**
- Industrie
- Hohe Druckauflagen
- Schnell laufende Rotationsdruckmaschinen

Lieferprogramm umfasst alle gängigen Größen. Sondermaße auf Anfrage.

---

### 3.14 KUNSTSTOFFKLISCHEES (`klischees/kunststoffklischees.html`)

**Hero:** "KUNSTSTOFF. VIELSEITIG."

**Vollständiger Inhalt:**

Kent Kunststoffklischees gibt es druckfertig oder als Set zum Selbst-Herstellen. Sie werden in ca. 0,5 mm Stärke geliefert und benötigen eine Magnetplatte zur Fixierung (oder Platte mit Stiften mit Lochung).

**Haupteinsatzgebiet:**
- Werbemittelbedruckung
- Kleine Druckauflagen
- Offene und geschlossene Farbsysteme

**Qualitätsvarianten (nach Farbe):**
- **Hellrot** — Wasserwaschbar, sehr gute Druckeigenschaften & hohe Standzeiten
- **Dunkelrot** — Alkoholwaschbar, beste Druckeigenschaften, höchste Auflösung & höchste Standzeiten
- **Grün** — Wasserwaschbar, besonders günstig im Preis

Alle gängigen Größen und handelsüblichen Lochungen lieferbar. Sondermaße auf Anfrage.

**Zubehörprogramm zur Eigenherstellung:**
- Kent Belichtungsgerät 360
- Kent Belichtungsgerät 520
- Kent Handkurbelwascher
- Kent Auswaschgerät
- Kent Messmikroskop CIL-300
- Kent Messmikroskop ZX
- Kent Plattenschere
- Alkohol für den Auswaschvorgang

---

### 3.15 ALUMINIUMLASERKLISCHEE (`klischees/aluminiumlaserklischee.html`)

**Hero:** "LASER. DIE ZUKUNFT DES KLISCHEES."

**Vollständiger Inhalt:**

Das Aluminiumlaserklischee hat eine Dicke von 0,3 mm / 0,6 mm, ist magnetisch und kann in Kombination mit einer Grundplatte in magnetischen Farbsystemen verwendet werden. Besonders geeignet für alle KENT Tampondruckmaschinen.

**Verfügbarkeit:** Alle Standardformate für KENT Tampondruckmaschinen. Max. Größe 150×300 mm (ausbaubar). Andere Formate und Fremdfabrikate auf Anfrage.

**Der entscheidende Vorteil — Herstellungsart:**
Im Gegensatz zu Stahl- oder Kunststoffklischees wird nicht belichtet/ausgewaschen/geätzt, sondern die Kundendatei direkt vom PC per Laser ins Klischee graviert.

**Laser-Spezifikationen:**
- Strahldurchmesser: 5 Microns
- Auflösung: 175 lpi
- Geeignet für feinste Motive und Schriften
- Internationaler Hersteller mit lokalem Service

**Vorteile gegenüber klassischen Verfahren:**
- Kein Reprofilm notwendig
- Kein Einsatz von Chemikalien
- Keine Wartezeiten für Aushärtung
- Kostengünstige, schnelle Produktion
- Auflagenzahl über alkoholwaschbaren Kunststoffklischees
- Einsetzbar für geschlossene und offene Farbsysteme
- Mittlere Druckauflagen

*Hinweis: Auch 10 mm dicke Stahlklischees können mit dem Laser bearbeitet werden.*

---

### 3.16 LASER REPRO (`klischees/laser-repro.html`)

**Hero:** "REPRO. PRÄZISION BEGINNT VOR DEM DRUCK."

**Vollständiger Inhalt:**

Um präzise Druckergebnisse zu erhalten, ist es in erster Linie wichtig, präzise Druckvorlagen zu erstellen. Unsere Reproabteilung beschäftigt hochqualifizierte Fachleute.

**Technische Ausstattung:**
Modernste EDV-Anlagen. Alle gängigen Grafik- und Bildprogramme unter Mac und Windows.

**Bevorzugte Programme:**
- Adobe Photoshop
- Adobe Illustrator
- Adobe Acrobat / PDF
- Macromedia FreeHand
- CorelDRAW

**Dateiformate:**
TIFF, EPS, PDF, BMP, JPEG/JPG

**Anforderungen:**
- Mindestauflösung: 300 dpi bei 100%
- Bei eingebundenen Bildern (z.B. in FreeHand/Illustrator): Originaldateien mitliefern
- Schriften als Zeichenwege umwandeln

**Datenübermittlung:**
- E-Mail: av@kent-stuttgart.de
- FTP
- CD / DVD

Bei anderen Programmen oder Formaten: Bitte telefonisch anfragen.

---

## 4. ANWEISUNGEN FÜR CLAUDE (Bau-Prompt)

Wenn du Claude bittest, die Seiten zu bauen, gib ihm diesen Kontext:

```
Du baust das komplette Website-System für Kent Stuttgart GmbH,
einen deutschen Hersteller von Tampondruckmaschinen.

Das Design-System ist in index.html definiert.
Alle Seiten erben: Nav, Footer, CSS-Variablen, Fonts.

Design-Prinzipien:
- Premium, minimal (Porsche / Apple Niveau)
- Dunkel: bg #04091A
- Blau #1A76F0 + Rot #C8221C als Akzente (Logo-Farben)
- Große Typografie (Barlow Condensed, uppercase, bold)
- Viel Leerraum — eine Aussage pro Sektion
- border-radius: 10px Buttons, 14–16px Karten
- Subtile Radial-Glows im Hintergrund (blau + rot)

[Hier den kompletten WEBSITE_BRIEF.md Inhalt einfügen]

Baue jetzt: [SEITENNAME]
```

---

## 5. AUSSTEHENDE SCREENSHOTS / INHALTE

Die folgenden Inhalte wurden erwähnt aber noch nicht übermittelt:

| Seite | Status |
|-------|--------|
| Anwendungsbereiche — Inhalt/Kategorien | ✅ ERHALTEN |
| Maschinenzubehör — Inhalt/Produkte | ✅ ERHALTEN |
| Klischees-Übersicht — Layout-Referenz | ✅ ERHALTEN |
| Einzelne Maschinenspezifikationen (alle ~30 Modelle) | ⏳ Technische Daten ausstehend |
| Produktbilder / Maschinenfotografien | ⏳ Bilder ausstehend |

---

## 6. PRIORITÄTEN-REIHENFOLGE (empfohlen)

1. `ueber-uns.html` — Einfachste Seite, gutes erstes Template
2. `maschinen/index.html` — Übersicht, Navigation für den Maschinenbereich
3. `maschinen/standardmaschinen/index.html` — Serien-Übersicht
4. `maschinen/standardmaschinen/hva-serie/index.html` — Erste Serien-Seite
5. `maschinen/standardmaschinen/hva-serie/hva-150.html` — Erstes Maschinendetail (wird Template für alle ~30)
6. Restliche Maschinendetailseiten (per Template multiplizieren)
7. `klischees/index.html` + alle 6 Klischee-Unterseiten
8. Sondermaschinen, Siebdruck, Anwendungen, Zubehör
