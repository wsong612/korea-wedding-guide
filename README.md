# Wuk Jin & Emma's Korean Wedding — v9

This version is rebuilt from v7, not from v8. It applies the design guide from the pasted markdown:

- `#FAF7F2` parchment is the default background.
- `#F5E8EF` pale pink is used as a special section background, not the whole site.
- `#2E3C2D` dark green is used for selected dark editorial sections.
- `#F96539` coral is reserved mainly for primary actions such as RSVP.
- Cards are restrained: standard, feature, and dark card types.
- Layout is more editorial: thin borders, minimal shadows, bigger photography slots, and less generic rounded-card styling.

## Files

- `index.html` — Home & RSVP
- `wedding.html` — Wedding & Venue
- `stay.html` — Where to Stay
- `travel.html` — Travel Basics
- `explore.html` — Explore Korea
- `jeju.html` — Jeju Trip
- `help.html` — Help & FAQ
- `success.html` — legacy fallback page
- `styles.css` — complete design system
- `script.js` — mobile menu, copy buttons, checklist persistence
- `.nojekyll` — GitHub Pages helper

## Photo placeholders

The design intentionally includes photo slots instead of hot-linked third-party photos. Before publishing broadly, replace the placeholder blocks with your own photos or properly licensed images.

Recommended photos:

1. Homepage hero: horizontal venue photo.
2. Homepage “A little Korea”: dancheong / roof / eave detail.
3. Wedding page: venue and traditional wedding detail.
4. Accommodation page: Seoul, Cheongju, venue hanok stay, Saenggeo Jincheon Natural Recreation Forest.
5. Explore Korea: Seoul neighbourhoods, palaces, beyond-Seoul cities, Korean food.
6. Jeju page: coast, volcanic landscape, cafés/food, scenic road.

## Replacing a placeholder with an image

Example:

```html
<figure class="photo-card hero-photo">
  <img src="assets/venue.jpg" alt="Chojeong Haenggung in spring">
  <figcaption>Chojeong Haenggung · Cheongju</figcaption>
</figure>
```

Then add this CSS if needed:

```css
.photo-card img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border: 1px solid rgba(91,31,21,.2);
}
.hero-photo img { aspect-ratio: 4 / 5; }
.wide-photo img { aspect-ratio: 16 / 9; }
```

## GitHub Pages deployment

Upload all files to the root of your GitHub repository and enable Pages under Settings → Pages → Deploy from branch → main → root.
