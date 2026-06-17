# Design QA

Final result: passed

Checked:

- Home page renders at desktop and mobile sizes without horizontal overflow.
- Calendly booking section is present on the home page and uses the live Finlight Calendly URL.
- Blog index route renders at `#/my-take` with the two captured source articles.
- Article route renders at `#/my-take/finance-shouldnt-feel-hard`.
- Production build completes with `npm run build`.

Notes:

- Blog content is file-based in `src/articles.js` so it works on Vercel's free static hosting without a paid CMS.
- The contact form opens the visitor's email client with a prefilled message.
