# not-a-bot.ai Marketing Site — Project Context

Verkoopswebsite voor not-a-bot.ai (AI chatbot SaaS). Not-a-bot.ai is een klant van ZUID.

**GitHub:** https://github.com/FredvanZUID/not-a-bot-marketing-site
**Staging:** https://fredvanzuid.github.io/not-a-bot-marketing-site
**Stack:** Statische HTML/CSS/JS, Supabase voor lead capture, Netlify deploy

## Supabase
Project: `xzjzhssmoiugiorsnwuf`
Tabellen: `nab_leads`, `nab_mqls`, `nab_demo_requests`

## Sitemap (alle pagina's)

### Core pagina's
| Pagina | Doel |
|---|---|
| `index.html` | Homepage EN |
| `nl/index.html` | Homepage NL |
| `fr/index.html` | Homepage FR |
| `pricing.html` | Prijspagina |
| `roi-calculator.html` | ROI Calculator (lead magnet) |
| `demo.html` | Demo aanvraag (SQL) |
| `thank-you.html` | Post-form redirect pagina (?type=roi of ?type=demo) |
| `compare.html` | Vergelijkingspagina vs Tidio/Chatbase/Intercom |
| `about.html` | Over not-a-bot.ai |
| `case-studies.html` | Casestudies overzicht |
| `privacy.html` | Privacybeleid (GDPR) |
| `terms.html` | Gebruiksvoorwaarden |
| `sitemap.xml` | XML sitemap |
| `robots.txt` | Crawl-instructies |

### Use cases (EN)
| Pagina | Doelgroep |
|---|---|
| `use-cases/vacation-rentals.html` | Vakantieverhuurders (NL) |
| `use-cases/professional-services.html` | Architecten, consultants, adviseurs (EN) |
| `use-cases/hr-recruitment.html` | HR & Recruitment teams (EN) |

### Use cases (NL)
| Pagina | Doel |
|---|---|
| `nl/use-cases/professional-services.html` | NL vertaling |
| `nl/use-cases/hr-recruitment.html` | NL vertaling |
| `nl/compare.html` | NL vergelijkingspagina |
| `nl/thank-you.html` | NL bedankpagina |

### Blog (EN)
| Pagina | SEO-target |
|---|---|
| `blog/index.html` | Blog overzicht |
| `blog/ai-chatbot-small-business.html` | "AI chatbot for small business" |
| `blog/stop-answering-same-questions.html` | "stop answering same questions" |
| `blog/ai-chatbot-no-hallucinations.html` | "AI chatbot no hallucinations" |

### Landing pages (paid traffic, noindex)
| Pagina | Kanaal |
|---|---|
| `lp/vacation-rentals.html` | Meta/Google → vakantieverhuurders |
| `lp/professional-services.html` | LinkedIn → architects/consultants |
| `lp/hr-recruitment.html` | LinkedIn → HR managers |

### Email templates
| Bestand | Flow | Timing |
|---|---|---|
| `emails/lead-mql-1.html` | Lead→MQL | Dag 0, na ROI Calculator |
| `emails/lead-mql-2.html` | Lead→MQL | Dag 2 (case study) |
| `emails/lead-mql-3.html` | Lead→MQL | Dag 4 (bezwaren) |
| `emails/lead-mql-4.html` | Lead→MQL | Dag 7 (trial uitnodiging) |
| `emails/lead-mql-5.html` | Lead→MQL | Dag 14 (last chance) |
| `emails/mql-sql-1.html` | MQL→SQL | Dag 1 van trial |
| `emails/mql-sql-2.html` | MQL→SQL | Dag 3 van trial (2 varianten: actief/niet-gestart) |
| `emails/mql-sql-3.html` | MQL→SQL | Dag 5 van trial (resultaten + upgrade CTA) |

## Deploy
Netlify: verbind via `NETLIFY-SETUP.md` (2 min, Jef doet dit zelf).
Push naar `main` → automatisch live.

## Paid media documenten
| Bestand | Inhoud |
|---|---|
| `docs/paid-media-linkedin-ads.md` | LinkedIn ad copy, 3 campagnes, 9+ varianten |
| `docs/paid-media-google-ads.md` | Google Ads structuur, keywords, RSA ads |
| `docs/paid-media-meta-ads.md` | Meta Ads copy, TOF/BOF strategie |
| `docs/campaign-professional-services.md` | 360° campagnebriefing sector 2 |

## Strategie-documentatie
Alle strategy-docs in `docs/` (buyer personas, value prop, nurture flows, competitive analysis, etc.)

## GitHub
Repo: `FredvanZUID/not-a-bot-marketing-site`
Branch: `main` → auto-deploy Netlify
