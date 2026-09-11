# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Astro 5 + TypeScript, hand-authored CSS with a token layer, zero client-side framework. Chosen because the surface is content-driven and read-mostly: Astro ships static HTML with no runtime framework cost, which serves the mobile-first requirement directly, while still giving components and typed menu data for maintainability. The user explicitly delegated all setup decisions ("answer all questions yourself... You are responsible for making those decisions"), so no interview round was run.

## Users

Walk-in and phone-ordering customers of an Egyptian sweets shop, almost all arriving on a phone by scanning a QR code at the counter or opening a shared link. They are standing in a shop or sitting at home deciding what to order, often with family. They read Arabic. The job is: find the item, see its price and available sizes, and decide — in under a minute, one-handed.

A second, smaller audience is someone ordering for an occasion (a torte for a birthday) who needs sizes, serving counts, starting prices, and a phone number.

## Product Purpose

Replace a flat PDF menu with a browsable digital menu for تيته. Success is a customer finding any item and its price without pinch-zooming, and being one tap away from calling the shop.

## Positioning

تيته's own tagline is "الحلو بتاع زمان" — the sweets of the old days. The range is genuinely split between traditional Egyptian/Levantine sweets (الشرقي: بسبوسة، كنافة، بقلاوة، بلح الشام) and modern café desserts (الغربي: تشيز كيك، مولتن، ترى ليتشي), sold from the same counter by a family shop with five branches. That pairing — a grandmother's kitchen that also sells Dubai chocolate cake — is the thing no neighboring shop's menu can truthfully copy.

## Operating Context

- Primary entry: QR code scanned in-store, or a link shared on WhatsApp/Facebook. Rarely a search result.
- Network conditions are Egyptian mobile data; the page must be usable immediately.
- The menu is priced in Egyptian pounds (جنيه). Eastern sweets are sold by weight with three tiers: طبق, ½ كيلو, كيلو. Western desserts, bakery items and rice pudding are single-price per piece/portion. Tortes are priced "تبدأ من" by size and serving count.
- There is no online ordering, no cart, no delivery integration, and no account. The conversion action is a phone call.

## Capabilities and Constraints

- Content is the six-page printed menu in `download.pdf`, transcribed verbatim. Categories: الشرقي، رز بلبن، ترى ليتشي، الغربي، المخبوزات، التورتة، اضافات.
- Prices, item names, sizes and serving counts may not be altered, rounded, translated or supplemented.
- One known gap: the small-size price of "ديسباسيتو / نوتيلا" is printed white-on-pink in the source PDF and is unreadable at native resolution. It must render as unavailable, never guessed.
- Confirmed contact: 17476. Confirmed branches: ترسا (الهرم — أمام شارع العمدة), الحوامدية (شارع جمال عبد الناصر), الهرم (فاطمة رشدي — خاتم المرسلين), حدائق حلوان (شارع جمال عبد الناصر), القناطر الخيرية (الكورنيش).
- No social accounts, opening hours, delivery service, prices-subject-to-change policy, founding date, or customer reviews are known. None may be invented.
- Arabic only, RTL. No language switcher is required.

## Brand Commitments

- Name: تيته. Tagline: الحلو بتاع زمان.
- Logo (`logo.jpg`): white brushed Arabic wordmark and a magenta roundel holding an illustrated grandmother in a chef's bonnet holding a plate, on a deep purple field.
- Brand colors sampled from the logo: purple #85298C, magenta #ED238B, white. The printed menu adds a purple-and-white gingham tablecloth pattern on its cover and a pale pink table ground.
- The grandmother character and the gingham are existing, ownable brand assets and should survive into the website.
- Voice: warm, familiar, Egyptian colloquial — the register of the printed tagline. Not formal Modern Standard Arabic marketing copy.

## Evidence on Hand

- `download.pdf` — the full printed menu, 6 pages, raster.
- `logo.jpg` — official logo, 960×959.
- Six product photographs are embedded in the printed menu pages at roughly 54 ppi (rice pudding, tres leches, molten cake, two tortes, a baklava tray). They are authentic but low-resolution: usable only at small sizes, never as a full-bleed hero.
- No other photography, no brand guidelines, no copy deck. Absent: hours, social handles, delivery, reviews, history.

## Product Principles

1. The price is the answer. Every layout decision is judged by how fast a standing customer can find a name and its price.
2. Transcription is sacred. The printed menu outranks any design convenience; a gap stays a gap.
3. The grandmother is the brand. Warmth and Egyptian familiarity come from her and from the shop's own colors, not from generic food-app styling.
4. A phone call is the conversion. 17476 is reachable from anywhere on the page.
5. It loads on a shop's Wi-Fi on a mid-range Android. Weight is a design constraint, not a cleanup task.

## Accessibility & Inclusion

Arabic RTL throughout with correct numeral direction. Text must stay legible for an older audience at arm's length in a bright shop: generous Arabic line-height, no price smaller than body text, touch targets at least 44px, and WCAG AA contrast on the brand purple and magenta (both are dark enough for white text; neither may carry small text on a light ground without darkening).
