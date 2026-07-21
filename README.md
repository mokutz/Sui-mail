# SuiMail Landing Page

Static landing-page preview for the SuiMail concept.

## Files

- `index.html` - main page markup
- `styles.css` - local styles, no CDN dependency
- `app.js` - mobile navigation, demo dialog, and configurable signup submission
- `whitepaper.pdf` - linked with a relative path for static hosting

## Local preview

Any static server works. For example:

```powershell
cd C:\Users\mokut\Downloads\suimail-landing
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Early-access form

The form is in preview mode until you set a real endpoint:

1. Open `index.html`.
2. Find the `form` element with `id="signup-form"`.
3. Set `data-endpoint="https://your-endpoint.example/collect"`.
4. Ensure the endpoint accepts JSON `POST` requests and returns a `2xx` response.

No API keys or private credentials should be committed into this repository.

## Walrus/static hosting notes

- Keep links relative, for example `whitepaper.pdf`, `styles.css`, and `app.js`.
- Avoid root-relative paths like `/whitepaper.pdf` because they can break on static or content-addressed hosts.
- Bundle any future images or fonts locally under an `assets/` directory.

## Git workflow

Suggested branch for this pass:

```text
codex/landing-refresh
```

Review the diff before merging into `main`.
