# not-a-bot.ai — Email Sequence: MQL → SQL
## 3-email nurture flow (Trial gestart → Demo aangevraagd)

**Trigger:** Free trial gestart (MQL event in HubSpot)
**Doel:** Trial-gebruiker converteren naar demo-aanvraag (SQL) of direct betaald abonnement
**Taal:** Engels
**Frameworks:** AIDA + Fogg B=MAP + Cialdini (consistentie, wederkerigheid, sociaal bewijs)

---

## Strategische context

Trial-gebruikers hebben al een drempel genomen — ze zijn MQL. De communicatie verschuift van overtuigen naar activeren. Het risico is niet dat ze het product niet willen; het risico is dat ze vastlopen bij configuratie of de urgentie verliezen voor dag 5 voorbij is.

De drie emails volgen een activeringslogica:

1. **Email 1 (dag 1):** Welkom + één concrete eerste stap. Drempel zo laag mogelijk (Ability). Confettiregen zodra ze iets doen.
2. **Email 2 (dag 3):** Gedragsgestuurde opvolging. Gevorderd of niet-gestart — twee varianten. Waarde verdiepen of blokkade opheffen.
3. **Email 3 (dag 5):** Beslissingsmoment. Loss aversion + anticiperend enthousiasme + duidelijke volgende stap.

---

## Email 1 — Welkom + Eerste Stap
**Timing:** Dag 1 van trial (direct na trial-registratie, max 1 uur)
**Doel:** Activering — zorg dat de gebruiker binnen 24 uur zijn eerste agent configureert

---

### Subject lines (A/B test)

**A:** Your 5-day trial just started — here's your first step
**B:** One thing to do in the next 30 minutes

**Preview text:** Your agent can be live before lunch.

---

### Body (English — plain text)

Hi {{first_name}},

Your free trial is active. You have 5 days.

Here's the one thing that matters most in the next 30 minutes:

**Connect your first channel and add 10 questions.**

That's it. Once those two things are done, your agent is live and you'll start seeing real data within 24 hours.

Here's how:

1. Go to your dashboard → Channels → Add Channel
   Connect email, live chat, or WhatsApp — whatever your team uses most.

2. Go to → Knowledge Base → Add Questions
   Paste in the 10 questions your team answers most often. You don't need perfect answers — good enough is fine to start.

3. Hit "Go Live."

Your agent will handle what it can, flag what it's unsure about, and learn from every interaction.

If you get stuck at any point, just reply to this email. Our onboarding team typically responds within 2 hours on business days — and yes, a real person reads these.

One more thing: your dashboard shows a real-time automation rate. Watch that number. By day 3, most users see it climb past 50%.

[Open your dashboard →]

Talk soon,
Alex
not-a-bot.ai

---

P.S. Most setups take 28 minutes. If you're at 45 minutes and still not live, something's wrong — email us. We'll fix it.

---

### HTML structure notes

- H1: "Welcome to your trial, {{first_name}}"
- Numbered steps (3 steps, bold action per step)
- Primary CTA button: "Open your dashboard →"
- Secondary: reply prompt ("Just reply to this email")
- Progress indicator if applicable: "Day 1 of 5"

---

## Email 2a — Tips voor actieve gebruikers (variant: agent geconfigureerd)
## Email 2b — Hulp voor niet-gestarte gebruikers (variant: geen activiteit gedetecteerd)

**Timing:** Dag 3 van trial
**Gedragscheck:** Heeft de gebruiker een agent geconfigureerd en ten minste 1 vraag verwerkt?

---

### Email 2a — Actieve gebruiker

**Subject lines (A/B test):**

**A:** Day 3: your agent is running — here's how to get more out of it
**B:** Your automation rate is climbing — 3 things to try next

**Preview text:** You've done the hard part. Here's what's next.

---

**Body (English — plain text):**

Hi {{first_name}},

Three days in. Your agent has handled {{automated_count}} questions so far.

That's {{automated_count}} questions your team didn't have to answer manually.

Here are three things worth trying before day 5 to push that number higher:

**1. Review the flagged questions.**
Go to → Inbox → Flagged. These are questions your agent wasn't confident about. Read through them. If the answer is straightforward, add it to your Knowledge Base. Your agent learns immediately.

**2. Add a second channel.**
If you started with email, add chat — or vice versa. Most businesses see a 30–40% increase in automated volume when they cover both main channels.

**3. Set your escalation threshold.**
Go to → Settings → Confidence Threshold. This controls when your agent escalates to a human. Start conservative (80% confidence required) and lower it as your Knowledge Base grows.

One stat worth knowing: businesses with 20+ answers in their Knowledge Base automate 73% of questions on average. Businesses with fewer than 10 automate 41%.

More context = better performance. It's that direct.

[Open your dashboard →]

At the end of your trial — day 5 — I'll send a summary of your results. You'll see your actual automation rate, time saved, and estimated monthly impact.

Then we'll talk about what continuing looks like.

Alex

---

### Email 2b — Niet-gestarte gebruiker

**Subject lines (A/B test):**

**A:** You haven't set up your agent yet — can I help?
**B:** Day 3 of 5 — your trial is running out of runway

**Preview text:** It takes 28 minutes. Let's make sure you have them.

---

**Body (English — plain text):**

Hi {{first_name}},

Your trial started 3 days ago. Your agent isn't live yet.

I'm not going to assume why — setup gets deprioritized, life gets busy, it happens.

But here's the situation: you have 2 days left, and the setup takes 28 minutes. If you start today, you'll still have a full day of real data before the trial ends.

Real data is the whole point.

Without a live agent, the trial is just a dashboard with nothing in it. With a live agent, you'll know within 48 hours exactly what your automation rate would be at your volume.

That's the number you need to make a decision.

Here's the fastest path to live:

1. Click the link below — it takes you directly to the setup wizard
2. Connect your main channel (email or chat — pick one)
3. Paste your 5 most common questions with answers
4. Hit Go Live

[Complete your setup in 28 minutes →]

If something blocked you — technical issue, unclear step, wrong channel — reply here and tell me what happened. I'll help you get it sorted today.

Two days. Let's use them.

Alex

---

## Email 3 — Demo Aanvraag + Doorgaan na Trial
**Timing:** Dag 5 van trial (of dag van trial-afloop)
**Doel:** Primaire CTA: demo aanvragen (SQL) | Alternatief: direct upgraden naar betaald plan

---

### Subject lines (A/B test)

**A:** Your trial ends today — here's what your numbers say
**B:** 5 days done. What did you learn?

**Preview text:** The results are in. Here's your next step.

---

### Body (English — plain text)

Hi {{first_name}},

Your trial ends today.

Here's what your agent did in 5 days:

- Questions handled: {{total_questions}}
- Automated without human input: {{automated_count}} ({{automation_rate}}%)
- Estimated time saved: {{trial_hours_saved}} hours
- Projected monthly impact: {{projected_monthly_hours}} hours / €{{projected_monthly_cost}}

If your automation rate is above 50%: your agent is already performing at or above industry average for a 5-day-old deployment. That number typically climbs to 65–75% within the first 30 days as your Knowledge Base grows.

---

**What happens if you continue?**

Your agent keeps running. Your team keeps getting time back. The Knowledge Base keeps improving — with every interaction, the agent gets more accurate.

On the Basic plan (€19/month), your investment breaks even if your agent handles more than {{breakeven_questions}} questions per month that would otherwise take your team 5+ minutes each. Based on your trial data, you crossed that threshold on day {{breakeven_day}}.

**Ready to continue?**

[Upgrade to a paid plan →] — your agent stays live, no interruption

---

**Want to talk through your results first?**

If your trial went well and you want to understand how to scale — add more channels, handle higher volume, integrate with your CRM — book a 30-minute session with one of our specialists.

This isn't a sales call. It's a working session: we look at your actual data and map out what the next 90 days could look like for your specific business.

[Book a 30-minute working session →]

---

If the trial didn't go the way you hoped — or you ran into issues you couldn't resolve — reply to this email. Tell me what happened. I want to know.

Either way, you have data you didn't have 5 days ago.

Alex
not-a-bot.ai

---

P.S. If you'd like to extend your trial by 48 hours to run a second channel, reply with "extend" and I'll activate it manually. This isn't offered publicly — it's only available if you ask.

---

### HTML structure notes

- H1: "Your trial results, {{first_name}}"
- 4-stat block: questions handled / automated / hours saved / projected monthly impact
- Two CTA sections clearly separated:
  - Primary block: "Upgrade" — bold, button, short copy
  - Secondary block: "Book working session" — different visual weight, text link or secondary button
- P.S. as plain text — creates feeling of personal message
- Footer: unsubscribe, GDPR notice

---

## Technische implementatienoten

### Gedragscheck voor Email 2 (dag 3)

In HubSpot (of ActiveCampaign): check property `agent_live = true` AND `questions_processed >= 1`

- Als beide true: verstuur Email 2a
- Als een van beide false: verstuur Email 2b

Property `agent_live` wordt gezet via not-a-bot.ai API-webhook bij eerste Go Live event.
Property `questions_processed` wordt bijgewerkt via dagelijkse sync vanuit not-a-bot.ai platform.

### Personalisatie-tokens (MQL → SQL flow)

| Token | Bron |
|---|---|
| `{{first_name}}` | HubSpot contact |
| `{{automated_count}}` | not-a-bot.ai platform (webhook/sync) |
| `{{automation_rate}}` | berekend: automated / total × 100 |
| `{{total_questions}}` | not-a-bot.ai platform |
| `{{trial_hours_saved}}` | automated_count × avg_time / 60 |
| `{{projected_monthly_hours}}` | trial_hours_saved × 6 |
| `{{projected_monthly_cost}}` | projected_monthly_hours × 25 |
| `{{breakeven_questions}}` | plan_price / (avg_time/60 × 25) |
| `{{breakeven_day}}` | dag waarop threshold bereikt (platform data) |

### Exit-condities

| Conditie | Actie |
|---|---|
| Upgrade naar betaald plan | Stop MQL flow, start customer onboarding |
| Demo aangevraagd (SQL) | Stop MQL flow, notificeer sales, start SQL opvolging |
| Unsubscribe | Stop flow onmiddellijk |
| Trial verlengd (48u) | Verschuif Email 3 met 2 dagen |

### Sales escalatie — Enterprise segment

Als `company_size >= 50` OF `volume >= 2000`: stuur na Email 3 ook een interne HubSpot-notificatie naar sales rep met trial-samenvatting voor persoonlijke opvolging binnen 24 uur.

### A/B test protocol

- Email 1: test subject A vs. B op open rate
- Email 2a/2b: automatisch gesplitst op gedrag (geen A/B — dat is segmentatie)
- Email 3: test subject A vs. B op open rate; ook CTA-volgorde testen (upgrade eerst vs. demo eerst) op 50/50 split

Minimale steekproef per variant: 100 trial-gebruikers (gegeven lagere volumes in MQL fase).
