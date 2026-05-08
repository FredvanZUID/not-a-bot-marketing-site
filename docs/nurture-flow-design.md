# not-a-bot.ai — Nurture Flow Design
## Strategie, ROI Calculator & MQL Mechanisme

---

## 1. Strategisch kader

### Doelstelling
Leads die de ROI Calculator invullen, omzetten naar betalende klanten via gedragsgestuurde nurturing. De funnel is opgebouwd rond waarde leveren voor schaarste push — consistent met Fogg B=MAP en AIDA.

### Lifecycle stages
| Stage | Definitie | Trigger |
|---|---|---|
| Lead | ROI Calculator ingevuld | Form submit op website |
| MQL | Free trial gestart of demo aangevraagd | CTA-klik in email of website |
| SQL | Persoonlijke demo aangevraagd | Demo booking form |
| Customer | Betaald abonnement actief | Stripe/billing event |

### Segmenten (primair)
- **Vacation Rental** — eerste campagnesegment, hoge urgentie, seizoensgebonden
- **General B2B KMO** — brede scope, langere beslissingstijd
- **Scale-up / Enterprise** — hogere deal value, meer stakeholders

### Lead scoring matrix (HubSpot)
| Actie | Score |
|---|---|
| ROI Calculator ingevuld | +20 |
| Email geopend | +2 |
| Email link geklikt | +5 |
| Paginabezoek pricing | +10 |
| Paginabezoek case study | +5 |
| Trial gestart | +40 |
| Demo aangevraagd | +60 |
| Inactief 14 dagen | -10 |

MQL-drempel: score ≥ 60 of expliciete trial/demo aanvraag.

---

## 2. ROI Calculator — Lead Magnet Design

### Rationale
De ROI Calculator werkt als lead magnet omdat hij twee dingen tegelijk doet: hij geeft de lead een gepersonaliseerd, kwantificeerbaar resultaat (motivatie: anticiperend enthousiasme), en hij verzamelt kwalificatiedata die de nurturing segmenteert. Het is de ideale combinatie van waarde leveren en kwalificeren — zonder dat het voelt als een vragenlijst.

Het "aha"-moment: de lead ziet dat hij 18+ uur per maand en duizenden euro's laat liggen. Niet als claim van not-a-bot, maar als berekening op basis van zijn eigen cijfers. Dat is het verschil tussen een marketing pitch en een persoonlijk inzicht.

### Inputvelden (4 velden — Jenga-principe: niet meer dan nodig)

| Veld | Type | Toelichting |
|---|---|---|
| Bedrijfstype | Dropdown | Vacation Rental / E-commerce / SaaS / Professionele diensten / Anders |
| Volume klantvragen per maand | Slider of getal | 100 – 10.000+ |
| Gemiddelde tijd per vraag (minuten) | Slider | 2 – 30 min |
| Naam + Zakelijk e-mailadres | Text input | Voor verzending resultaten |

Optioneel (na submit, niet vereist voor resultaat): bedrijfsnaam, telefoonnummer, huidige aanpak (email / live chat / telefoon).

### Rekenmethodiek

**Aannames (transparant tonen in calculator):**
- Gemiddeld loonkost klantenservice: €25/uur (aanpasbaar)
- AI-afhandelingsgraad: 70% van vragen volledig automatisch
- Resterende 30%: doorgestuurd naar mens (bijgestaan door AI: 40% tijdsbesparing)

**Formules:**

```
Uren per maand (huidig) = volume_vragen × (minuten_per_vraag / 60)

Uren AI-afhandeling = uren_huidig × 0,70
Uren mens-met-AI = uren_huidig × 0,30 × 0,60  [40% sneller]
Uren bespaard = Uren_AI-afhandeling + (uren_huidig × 0.30 - Uren_mens-met-AI)

Kostenbesparing/maand = uren_bespaard × €25
ROI % = (kostenbesparing - abonnementskost) / abonnementskost × 100

Abonnementskost (aanname): volume_vragen < 500 → €19/maand (Basic)
                            volume_vragen 500–2000 → €49/maand (Advanced)
                            volume_vragen > 2000 → €249/maand (Enterprise)
```

### Output / resultaatscherm

Het resultaatscherm toont drie KPIs prominent:

1. **Uren bespaard per maand** — bijv. "23,4 uur"
2. **Kostenbesparing per maand** — bijv. "€586/maand"
3. **ROI in eerste jaar** — bijv. "1.370% ROI"

Onder de KPIs:
- Subtekst: "Gebaseerd op jouw bedrijfstype en volume — berekend op industriegemiddelden."
- Aanbevolen plan (Basic / Advanced / Enterprise) + maandelijkse kost
- Netto besparing na abonnementskosten: "Je houdt €537/maand over"

### Follow-up na submit

Directe actie:
1. Resultaat getoond op scherm (onmiddellijk)
2. Email 1 verstuurd binnen 5 minuten (resultaat + toelichting)
3. Lead aangemaakt in HubSpot met alle ingevoerde data + gesegmenteerd op bedrijfstype
4. Lead score: +20 punten

Wat de lead krijgt per email:
- Persoonlijk ROI-rapport (tekst, geen PDF — lagere friction)
- Uitleg hoe de berekening werkt
- Eerste CTA: "Start je gratis 5-daagse trial"

---

## 3. MQL Conversie Mechanisme

### Beste MQL offer: de gratis 5-daagse trial

**Argumentatie:**

De keuze voor de free trial boven een video demo of case study download is gebaseerd op drie overwegingen:

1. **Gedragspsychologie (Fogg):** Een trial verlaagt de Ability-drempel maximaal — geen verkoopsgesprek, geen afspraak, geen verplichting. De lead ervaart de waarde zelf. Zelf-ervaren waarde overtuigt sterker dan beschreven waarde (consistentieprincipe: zodra ze begonnen zijn, willen ze doorgaan).

2. **Productfit:** not-a-bot.ai is een platform waarbij de "aha"-ervaring pas optreedt bij gebruik. Een video kan de interface tonen; een werkende agent die vragen beantwoordt voor jóuw bedrijf is een kwalitatief ander overtuigingsmiddel.

3. **Kwalificatie:** Een lead die een trial start, toont intentie. Dat is een betere MQL-indicator dan een download of een bekeken video.

Video demo blijft relevant als alternatief voor leads die niet willen configureren (te druk, enterprise aankoopproces). Implementeer als Hobson+1: primaire CTA = trial, secundaire CTA = "Liever eerst een demo bekijken? →"

### Upgrade-trigger: Lead → MQL

De upgrade-trigger is een gedragsgestuurde beslissing, niet puur kalendergebaseerd:

**Primaire trigger:** Lead klikt op trial-CTA in een van de emails → MQL-status in HubSpot
**Secundaire trigger:** Lead bereikt lead score ≥ 60 → marketing automation stuurt proactieve trial-uitnodiging (Email 4)
**Tertiaire trigger:** Lead bezoekt pricing-pagina 2x binnen 7 dagen → directe trial-CTA popup + email

### Kwalificatievragen bij MQL conversie (trial signup)

Gevraagd bij trial-registratie (max 3 extra velden, na naam/email al bekend):

| Veld | Type | Doel |
|---|---|---|
| Bedrijfsnaam | Text | CRM + personalisatie |
| Hoeveel klantvragen verwerk je gemiddeld per week? | Dropdown (< 100 / 100–500 / 500–2000 / 2000+) | Planaanbeveling + SQL-prioritering |
| Wat is je grootste uitdaging nu? | Dropdown (Te veel volume / Kwaliteit inconsistent / Team te duur / 24/7 dekking) | Segmentatie messaging |

Na trial-start: automatische onboarding flow (MQL → SQL sequentie) + directe lead score +40.

---

## 4. Automation Workflow — Overzicht

### Flow A: Lead Nurture (Lead → MQL)

```
TRIGGER: ROI Calculator submit
    |
    ├── HubSpot contact aanmaken (of updaten)
    ├── Segmenteren op bedrijfstype (vacation_rental / general_b2b)
    ├── Lead score +20
    |
    → Email 1 (dag 0, direct) — ROI resultaat
        |
        ├── [Geklikt op trial CTA] → EXIT: start MQL flow
        |
        → Wacht 2 dagen
        |
        → Email 2 (dag 2) — Use case / klantvoorbeeld
            |
            ├── [Geklikt op trial CTA] → EXIT: start MQL flow
            |
            → Wacht 2 dagen
            |
            → Email 3 (dag 4) — Social proof + objection handling
                |
                ├── [Geklikt op trial CTA] → EXIT: start MQL flow
                |
                → Wacht 3 dagen
                |
                → Email 4 (dag 7) — Free trial uitnodiging
                    |
                    ├── [Trial gestart] → EXIT: start MQL flow
                    |
                    → Wacht 7 dagen
                    |
                    → Email 5 (dag 14) — Last chance / FOMO
                        |
                        ├── [Trial gestart] → EXIT: start MQL flow
                        |
                        → Wacht 30 dagen (inactief)
                        |
                        → Re-engagement flow
```

### Flow B: MQL Nurture (MQL → SQL)

```
TRIGGER: Trial gestart (MQL event)
    |
    ├── HubSpot lifecycle stage → MQL
    ├── Lead score +40
    ├── Assign to sales rep (voor Enterprise-segment)
    |
    → Email 1 (dag 1 trial) — Welkom + eerste stap
        |
        → Wacht 2 dagen
        |
        → Gedragscheck: heeft lead agent geconfigureerd?
            |
            ├── [Ja] → Email 2a — Tips voor gevorderde gebruikers
            ├── [Nee] → Email 2b — Hulp bij eerste stap (met lage friction)
        |
        → Wacht 2 dagen (dag 5 = laatste dag trial)
        |
        → Email 3 — Demo uitnodiging + doorgaan na trial
            |
            ├── [Demo aangevraagd] → EXIT: SQL flow / sales opvolging
            ├── [Betaald abonnement] → EXIT: customer onboarding
            |
            → Trial afgelopen zonder conversie → re-engagement flow
```

### Exit-condities (stop sequentie)

| Conditie | Actie |
|---|---|
| Trial gestart | Stop Lead flow, start MQL flow |
| Demo aangevraagd | Stop MQL flow, notificeer sales |
| Betaald abonnement actief | Stop alle nurture flows, start customer flow |
| Unsubscribe | Stop alle flows, markeer in HubSpot |
| Hard bounce | Alert naar Jef, stop flow |

### Re-engagement na 30 dagen inactiviteit

Trigger: lead heeft 30 dagen geen email geopend en geen paginabezoek geregistreerd.

Re-engagement flow (2 emails, 7 dagen apart):
1. Email RE-1: "Nog steeds [X uur] aan het mislopen?" — persoonlijke ROI-herinnering
2. Email RE-2: "Laatste bericht van ons" — opt-down of clean exit

Na RE-2: geen reactie → markeer als "inactive", verwijder uit actieve flows, behoud in HubSpot voor toekomstige campagnes.

### Segmentatie: Vacation Rental vs. Algemeen B2B

In alle emails wordt de use case-sectie gesegmenteerd op `bedrijfstype = vacation_rental`:

- **Vacation Rental variant:** gastenvragen, check-in/check-out, schoonmaakcoördinatie, seizoenspieken
- **Algemene B2B variant:** klantenservice, interne helpdesk, leadkwalificatie, orderopvolging

Technisch: HubSpot personalisatie-tokens of conditional content blocks per segment.

---

## 5. KPIs per flow

### Lead → MQL (Email 1–5)
| KPI | Benchmark | Target not-a-bot.ai |
|---|---|---|
| Open rate | 35–45% (B2B SaaS) | ≥ 40% |
| Click rate | 5–8% | ≥ 6% |
| Trial conversie uit flow | 8–15% | ≥ 10% |
| Unsubscribe rate | < 0,5% | < 0,3% |

### MQL → SQL (Email 1–3)
| KPI | Benchmark | Target not-a-bot.ai |
|---|---|---|
| Open rate | 50–65% (trial users) | ≥ 55% |
| Click rate | 10–18% | ≥ 12% |
| Demo conversie uit flow | 20–35% | ≥ 25% |
| Trial → betaald (direct) | 10–20% | ≥ 15% |

### Platform-aanbeveling
HubSpot (primair): lifecycle stages, lead scoring, conditional content, A/B testing, CRM-integratie.
ActiveCampaign als alternatief voor kleinere budgets met geavanceerde automation-logica.
