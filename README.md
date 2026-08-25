# Korea Wedding Vademecum v4

Static multi-page wedding travel guide for guests travelling from Europe to Korea.

This version is designed for **GitHub Pages**. The website is static, and RSVP collection should be handled with **Google Forms** or another external form service.

## Files

- `index.html` — homepage and RSVP section
- `wedding.html` — traditional wedding, venue, directions, after-party
- `stay.html` — accommodation before and after the wedding
- `travel.html` — travel basics, money, SIM/eSIM, apps, transport
- `explore.html` — Seoul/Korea guide and Jeju trip section
- `help.html` — emergency info, Korean phrases, FAQ
- `success.html` — no longer needed if using Google Forms, but kept as a harmless old thank-you page
- `styles.css` — shared styling
- `script.js` — menu, copy buttons, checklist saving
- `.nojekyll` — tells GitHub Pages to publish the static files as-is

## Recommended form setup: Google Forms

GitHub Pages can host the website, but it does not process form submissions by itself because it is static hosting. Use Google Forms for RSVP and Jeju trip responses.

### Option A — one combined Google Form

Create one form called `Korea Wedding RSVP` with these questions:

1. Names of all guests — paragraph or short answer
2. Number of people — short answer or number
3. Dietary restrictions or allergies — paragraph
4. Approximate arrival date in Korea — date
5. Approximate departure date from Korea — date
6. Are you joining the Jeju trip? — multiple choice: Yes / Maybe / No
7. Do you want to stay at 생거진천자연휴양림 after the wedding for 1 night? — multiple choice: Yes / Maybe / No
8. Best contact for follow-up — short answer

This is the simplest option and avoids duplicate responses.

### Option B — two Google Forms

Use one form for RSVP and another form for Jeju planning.

Jeju trip form questions:

1. Names of people interested in Jeju
2. Number of people
3. Interest level — Yes / Maybe / No
4. Approximate availability after the wedding
5. Accommodation preferences or notes
6. Best contact for follow-up

## How to add the Google Form to the website

1. Create the form in Google Forms.
2. Click **Send**.
3. Use the link icon to copy a share link and replace the placeholder `href="#"` in `index.html` or `explore.html`.
4. Optional: use the `<>` embed tab in Google Forms and copy the iframe code.
5. Replace the commented placeholder block in the relevant HTML file with the iframe.

For a cleaner mobile experience, I recommend using a clear button to open the form in a new tab rather than embedding a long iframe directly in the page.

## GitHub Pages deployment

1. Create a GitHub repository, for example `korea-wedding-guide`.
2. Upload all files from this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Save.
7. GitHub will give you a URL such as `https://yourusername.github.io/korea-wedding-guide/`.

## Updating the website later

Edit the files directly in GitHub or locally, then commit the changes. GitHub Pages will republish the site after the commit.

## Things to update later

- Real WhatsApp group link
- Real Google Form link(s)
- Wedding time
- Final directions from Seoul/Cheongju
- Accommodation booking process and room allocation
- Final Jeju trip itinerary
- Final PDF guide link
- Current EUR/KRW exchange rate closer to April 2027
- Any privacy-sensitive contact details
