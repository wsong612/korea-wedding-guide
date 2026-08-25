# Wuk Jin & Emma's Korean Wedding — Website v6

This version is designed for **GitHub Pages**. The website is static, and all guest responses should be collected with **one combined Google Form**.

## Files

- `index.html` — homepage, RSVP overview, map buttons, WhatsApp group button
- `wedding.html` — traditional wedding, venue, dress code, wedding gift envelope, directions, after-party
- `stay.html` — Seoul/Cheongju/venue accommodation and after-wedding stay
- `travel.html` — travel basics, money, WOWPASS, Tmoney, SIM/eSIM, apps, etiquette
- `explore.html` — Seoul and Korea travel ideas, with a short link to the separate Jeju page
- `jeju.html` — separate Jeju group trip page; participation is collected through the main RSVP form
- `help.html` — emergency numbers, Korean phrases, FAQ
- `success.html` — old thank-you page, not needed when using Google Forms
- `styles.css` — shared styling
- `script.js` — mobile nav, copy buttons, checklist memory
- `google-form-builder.gs` — Apps Script you can paste into script.google.com to create the Google Form
- `google-form-template.md` — manual copy-paste form template

## Main Google Form setup

Use **one combined Google Form** for everything:

1. Attendance: Yes / No / Not sure yet
2. Names of all guests
3. Number of people
4. Dietary restrictions or allergies
5. Approximate arrival date in Korea
6. Approximate departure date from Korea
7. Whether they want to stay at the venue the night before the wedding
8. Whether they want to stay at Saenggeo Jincheon Natural Recreation Forest after the wedding for 1 night
9. Whether they are joining the Jeju trip
10. Best contact for follow-up
11. Other notes

## Fastest way to create the form

1. Go to https://script.google.com/ and create a new project.
2. Open `google-form-builder.gs` from this folder.
3. Copy all of its contents into the Apps Script editor.
4. Click **Run** on `createWeddingRSVPForm`.
5. Approve the Google permissions.
6. Open **View → Logs** to copy the edit URL and responder URL.
7. Paste the responder URL into the RSVP buttons in `index.html` and `jeju.html`.

## Where to paste the Google Form link

In `index.html`, find:

```html
<a class="button button-primary" href="#" aria-disabled="true">Open combined RSVP form</a>
```

Replace it with:

```html
<a class="button button-primary" href="YOUR_GOOGLE_FORM_LINK" target="_blank" rel="noopener">Open combined RSVP form</a>
```

You may also paste the same link into `jeju.html` if you want the Jeju page button to open the form directly.

## GitHub Pages deployment

1. Upload all files to the root of your GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/root`.
5. Save and wait for GitHub to publish the site.

## To update later

- Wedding ceremony time
- Final RSVP Google Form link
- Final venue/night-before accommodation details
- Final after-party and Saenggeo Jincheon Natural Recreation Forest booking details
- Final Jeju trip itinerary
- Latest EUR/KRW rate closer to April 2027
- PDF essentials guide link
