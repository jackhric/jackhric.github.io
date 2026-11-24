# jackhric.github.io

The root of `jackhric.github.io`: an index of my open source projects that have a site. My portfolio is at
[jackhric.com](https://jackhric.com).

Built with Astro and Tailwind, styled after the portfolio. Deployed by [.github/workflows/pages.yml](.github/workflows/pages.yml)
on every push to `main` (Settings > Pages > Source must be **GitHub Actions**).

```sh
pnpm install
pnpm dev     # http://localhost:4321
pnpm check && pnpm build
```

## Adding a project

Add an entry to [src/data/projects.ts](src/data/projects.ts) and drop a single-colour SVG silhouette in `public/logos/`
(it is used as a mask, so only its shape matters). Leave `site` out until the project's site is live. Add the
project's sitemap to [public/sitemap.xml](public/sitemap.xml).

## Statistics

Umami at `stats.omnosoftware.com`, website ID `8cda325e-240c-4aa8-9b86-25c3cddbda05`. Every project site lives on the
same host, so all of them share this one website and show up in Umami as `/`, `/r3cui/...`, `/decky-toolkit/...`.
This site loads it from [src/layouts/head/Statistics.astro](src/layouts/head/Statistics.astro), production builds only.

To add statistics and session recording to a project site, put these two tags in its `<head>`:

```html
<script defer src="https://stats.omnosoftware.com/getinfo.js" data-website-id="8cda325e-240c-4aa8-9b86-25c3cddbda05" data-domains="jackhric.github.io"></script>
<script defer src="https://stats.omnosoftware.com/recorder.js" data-website-id="8cda325e-240c-4aa8-9b86-25c3cddbda05" data-sample-rate="1" data-mask-level="moderate" data-max-duration="300000"></script>
```

For a Starlight site (decky-toolkit), add them to `starlight({ head: [...] })` in `astro.config.mjs`:

```js
{ tag: 'script', attrs: { defer: true, src: 'https://stats.omnosoftware.com/getinfo.js', 'data-website-id': '8cda325e-240c-4aa8-9b86-25c3cddbda05', 'data-domains': 'jackhric.github.io' } },
{ tag: 'script', attrs: { defer: true, src: 'https://stats.omnosoftware.com/recorder.js', 'data-website-id': '8cda325e-240c-4aa8-9b86-25c3cddbda05', 'data-sample-rate': '1', 'data-mask-level': 'moderate', 'data-max-duration': '300000' } },
```

`data-domains` keeps localhost out of the numbers. Umami counts client-side route changes (pushState) as page views,
so Starlight's and Astro's navigations are recorded without extra code.
