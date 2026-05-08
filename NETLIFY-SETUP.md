# Netlify Deploy Instructies

## Snelste manier (2 minuten)

1. Ga naar [app.netlify.com](https://app.netlify.com) en log in
2. Klik **"Add new site"** → **"Import an existing project"**
3. Kies **GitHub** → selecteer `FredvanZUID/not-a-bot-marketing-site`
4. Build settings:
   - **Build command:** (leeg laten)
   - **Publish directory:** `.`
5. Klik **"Deploy site"**

Netlify detecteert automatisch de `netlify.toml` configuratie.

## Environment variables (optioneel)
Geen env vars nodig — de Supabase anon key staat al in de JS (veilig voor client-side).

## Custom domain
1. In Netlify: **Domain settings** → **Add custom domain**
2. Vul in: jouw verkoopsdomein (bijv. `try.not-a-bot.ai` of apart domein)
3. Netlify geeft DNS-instellingen die je bij je domeinregistrar instelt

## Na deploy
Controleer:
- [ ] Homepage laadt op desktop + mobiel
- [ ] ROI Calculator berekening werkt
- [ ] Form submit gaat naar Supabase (test op `/roi-calculator.html`)
- [ ] Language switcher werkt (EN → /nl/ → /fr/)
- [ ] Demo form stuurt naar `nab_demo_requests` tabel

## Supabase Dashboard
Check binnenkomende leads op:
https://supabase.com/dashboard/project/xzjzhssmoiugiorsnwuf/editor
Tabellen: `nab_leads`, `nab_mqls`, `nab_demo_requests`
