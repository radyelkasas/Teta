---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

## Scope

Single-page Arabic RTL digital menu for تيته (`src/pages/index.astro`), entered by QR scan on a phone. Visitor mode: **Persuade** — the visitor must want something and then call.

## Audience, job, action

Egyptian customers standing in the shop or at home, phone in one hand. Job: find an item, read its price and size tier, decide. Action: tap 17476. Content is the printed menu, transcribed verbatim; the small-size price of ديسباسيتو/نوتيلا is unreadable in the source and ships as unavailable, never guessed.

## Direction contract

THESIS: This menu is a price list, so it is built as one — an Egyptian printed price broadsheet of the kind that came folded inside a decorated sweets tin, drenched in the shop's own purple. It refuses the two arrangements this category always ships: the delivery-app grid of photo tiles with chips on top, and its opposite, the bone-white patisserie editorial with a serif display and acres of air. Thirty-one kinds of بسبوسة and كنافة at three weights each is a table, and the design's job is to make that table beautiful and instantly scannable rather than to hide it inside cards.

OWN-WORLD: The surface is purple — #85298C owns the page ground, not an accent on cream. Content sits on panels of warm printed paper (#FDF0EE) inset inside a persistent ornamental frame borrowed from a tin lid: a magenta hairline, a scalloped edge, and the menu's own purple-and-white gingham used as a real texture on the ground behind the panels, never as decoration inside them. Magenta #ED238B is the single signal colour and appears only on the active state, the price you have selected, and the call action. Rank is made by inversion — the lead strip alone prints pale-on-purple — and by rules and dotted leaders, never by a fifth font size. Type is exactly two faces: Rakkas, the ornamental display Arabic of old printed labels, used only above 28px, and Readex Pro for everything read. Prices set tabular in Western digits, as printed. Ornament budget: the tin frame, the gingham, the dotted leader. Nothing else — no gradients, no glass, no drop shadows standing in for structure.

STORY: In one screen the visitor knows this is تيته, that it is an Egyptian sweets shop with a grandmother's name and her face on the tin, and that the whole price list is one tap below. They pick a weight tier once and every eastern-sweet price reorders around that choice, so a row reads as one name and one number instead of three. They browse by thumb through sticky category chips, find a price without zooming, and end at a branch near them and a phone number big enough to hit while walking.

FIRST VIEWPORT (390px): the gingham ground fills the screen; a purple tin-lid panel is inset with a magenta scalloped hairline; inside it the logo roundel (the grandmother) sits at 108px centred, the wordmark تيته under it in Rakkas at the largest type on the page, the printed tagline الحلو بتاع زمان beneath in magenta small-caps-equivalent tracking; below that one line of orientation copy, then a full-width magenta primary action "شوف المنيو" at 56px tall with the purple-outline secondary "اتصل 17476" beside it; a hairline strip pinned to the bottom edge shows the first three category names already scrolling, so the list announces itself before the scroll. The sticky call bar appears only after the hero leaves.

FORM: Candidate 5 of 7 on my grounded list (the 1960s–80s Egyptian sweets tin and the offset-printed price broadsheet folded inside it). Seed key baf6cb98, assigned index 5, mode persuade. Raises, each named for the hand that donated it: RAISE (depot blind, competitive) — drench the surface in one colour at page scale, rank by inversion, and on narrow screens drop columns rather than shrink type. RAISE (sewing pattern envelope, competitive) — the chosen size prints solid while the other sizes stay dashed: the weight-tier selector makes one price column authoritative and lets the other two recede without disappearing. RAISE (otome choice frame, declined) — one persistent ornamented window that content moves inside, rather than a new container per section. RAISE (luxury fashion flagship, declined) — monumental display type, one restrained accent, total commitment. RAISE (phosphor terminal, declined) — hierarchy from rules, case and indentation instead of more type sizes. RAISE (iridescent cloud edge, declined) — spectral ornament confined to a single hairline edge or not used at all.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Constraints

Code-led: no image generation is available in this session, so there is no comp and no comp round; ambition is carried by FIRST VIEWPORT and the tier-selector signature interaction, audited in behaviour at the finish.

The direction round was not served to the user: the user's brief instructed that all setup and design decisions be made without asking ("Do not ask me to choose between obvious design decisions"). The assigned direction was built as dealt.

## Unresolved

ديسباسيتو / نوتيلا small-size price — unreadable in `download.pdf`, renders as "—" with a note. Needs the shop to confirm.
