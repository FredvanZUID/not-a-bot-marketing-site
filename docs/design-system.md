# Not-a-bot.ai — Design System (Marketing Site)

Gebaseerd op visuele analyse van www.not-a-bot.ai (screenshot + DOM analyse, mei 2026).

---

## Kleuren

### Primair
| Token | Hex | Gebruik |
|---|---|---|
| `--color-dark` | `#1C1B2E` | Sidebar, headers, donkere secties |
| `--color-accent` | `#7C3AED` | Primary CTA buttons, actieve elementen |
| `--color-accent-light` | `#8B5CF6` | Hover states, highlights |
| `--color-teal` | `#0EA5E9` | `.ai` logo accent, badges, links |

### Neutraal
| Token | Hex | Gebruik |
|---|---|---|
| `--color-bg` | `#F8F9FA` | Pagina-achtergrond |
| `--color-white` | `#FFFFFF` | Cards, formulieren |
| `--color-text` | `#1A1A2E` | Body tekst |
| `--color-text-muted` | `#6B7280` | Subtekst, labels |
| `--color-border` | `#E5E7EB` | Borders, dividers |

### Tier badges
| Tier | Kleur | Hex |
|---|---|---|
| Basic | Teal | `#0EA5E9` |
| Advanced | Purple | `#7C3AED` |
| Enterprise | Amber | `#F59E0B` |

### Status
| Status | Kleur | Hex |
|---|---|---|
| Success | Green | `#10B981` |
| Warning | Orange | `#F59E0B` |
| Error | Red | `#EF4444` |

---

## Typografie

### Font Stack
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```
Laad via: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap`

### Schaalverdeling
| Niveau | Size | Weight | Gebruik |
|---|---|---|---|
| H1 | 56px / 3.5rem | 800 | Hero headline |
| H2 | 40px / 2.5rem | 700 | Sectie titels |
| H3 | 28px / 1.75rem | 600 | Card titels |
| H4 | 20px / 1.25rem | 600 | Sub-secties |
| Body L | 18px / 1.125rem | 400 | Lead tekst |
| Body | 16px / 1rem | 400 | Standaard tekst |
| Small | 14px / 0.875rem | 400 | Labels, captions |
| XSmall | 12px / 0.75rem | 500 | Badges, tags |

### Line heights
- Headings: 1.1–1.2
- Body: 1.6–1.7

---

## Spacing

Basisunit: **8px**

| Token | Waarde |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-24` | 96px |

### Container
- Max breedte: `1200px`
- Padding inline: `24px` (mobile), `48px` (desktop)

---

## Componenten

### Buttons

**Primary (CTA)**
```css
background: #7C3AED;
color: white;
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;
font-size: 16px;
transition: background 0.2s;
/* hover: #6D28D9 */
```

**Secondary (Outline)**
```css
background: transparent;
color: #7C3AED;
border: 2px solid #7C3AED;
padding: 10px 22px;
border-radius: 8px;
font-weight: 600;
```

**Ghost**
```css
background: transparent;
color: #1A1A2E;
padding: 10px 20px;
border-radius: 8px;
font-weight: 500;
/* hover: rgba(124,58,237,0.08) */
```

### Cards
```css
background: #FFFFFF;
border: 1px solid #E5E7EB;
border-radius: 12px;
padding: 24px;
box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
/* hover: box-shadow: 0 4px 12px rgba(0,0,0,0.1) */
```

### Pricing Cards
```css
/* Standaard */
border: 2px solid #E5E7EB;
border-radius: 16px;
/* Popular/highlighted */
border: 2px solid #7C3AED;
box-shadow: 0 0 0 4px rgba(124,58,237,0.08);
```

### Nav
- Logo: "Not-a-bot" (donker) + ".ai" (teal `#0EA5E9`)
- Links: `#6B7280`, hover `#1A1A2E`
- CTA nav button: `#7C3AED`
- Background: `#FFFFFF` met `border-bottom: 1px solid #E5E7EB`

### Forms
```css
/* Input */
border: 1.5px solid #D1D5DB;
border-radius: 8px;
padding: 12px 16px;
font-size: 16px;
/* focus */
border-color: #7C3AED;
box-shadow: 0 0 0 3px rgba(124,58,237,0.12);
```

### Badges/Tags
```css
border-radius: 20px;
padding: 4px 12px;
font-size: 12px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em;
```

---

## Iconen
- Library: **Heroicons** of **Lucide Icons** (MIT licentie)
- Stijl: Outline (24px) voor UI, Solid voor feature highlights
- CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`

---

## Animaties

```css
/* Standaard transition */
transition: all 0.2s ease;

/* Hover lift voor cards */
transform: translateY(-2px);

/* Fade in on scroll */
opacity: 0;
transform: translateY(20px);
/* → */
opacity: 1;
transform: translateY(0);
transition: opacity 0.5s ease, transform 0.5s ease;
```

---

## Grid / Layout

- **Desktop:** 12-kolommen grid, gap 24px
- **Tablet (768px):** 8 kolommen
- **Mobile (480px):** 4 kolommen / 1 kolom stacking

### Sectie padding
- **Desktop:** `padding: 96px 0`
- **Mobile:** `padding: 64px 0`

---

## Taal & Tone of Voice

- **EN:** Professional, direct, benefit-first. "Deploy in minutes, not months."
- **NL:** Professioneel maar warm, jij/je. "In minuten live, geen technische kennis nodig."
- **FR:** Formel mais accessible, vous. "Déployez en quelques minutes, sans expertise technique."

**Verboden:** Jargon, lange zinnen (>20 woorden), passieve constructies, "wij" zonder benefit.

---

## Logo (placeholder)

Zolang geen officieel logo bestand beschikbaar:
```html
<span class="logo-text">
  Not-a-bot<span class="logo-accent">.ai</span>
</span>
```
```css
.logo-text { font-weight: 800; font-size: 22px; color: #1A1A2E; }
.logo-accent { color: #0EA5E9; }
```

---

## Favicon
Gebruik een eenvoudige `🤖` emoji favicon als placeholder:
```html
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤖</text></svg>">
```
