# NewLad Creations

Astro site configured for Cloudflare Workers Static Assets. Astro builds HTML into
`dist/`; Cloudflare serves those files directly. No server adapter or Worker
entry point is needed for the current static site.

## Local development

Use Node.js 24.18.0 (recorded in `.node-version`) and install with `npm ci`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Astro development server |
| `npm run build` | Generate the static site in `dist/` |
| `npm run preview` | Preview the last build with Astro |
| `npm run preview:cloudflare` | Build and preview with Cloudflare's local runtime |
| `npm run deploy:check` | Build and validate deployment config without uploading |
| `npm run deploy` | Build and publish to Cloudflare |

Wrangler is pinned in `package.json` and `package-lock.json`. Keep its config in
`wrangler.jsonc`. Unknown paths return HTTP 404; adding `src/pages/404.astro`
provides a custom error page. This site does not use an SPA fallback.

## Deploy to Cloudflare

The intended domain is `newladcreations.com`; the target Cloudflare account is
**NewLad Creations**. `wrangler.jsonc` pins account ID
`11cdfab7d0f1edfa5b338013f247a60f`. Keep `www.newladcreations.com` redirecting to
the root domain with a 301 that preserves the path and query string.

For local authentication, use a named Wrangler profile. Run
`npx wrangler auth create newlad-creations`, authorize the NewLad account, then
`npx wrangler auth activate newlad-creations` from this repository. Verify with
`npx wrangler whoami`.

An existing `CLOUDFLARE_API_TOKEN` overrides profiles; an existing
`CLOUDFLARE_ACCOUNT_ID` also affects account selection. If your shell has values
for another project, prefix local commands with
`env -u CLOUDFLARE_API_TOKEN -u CLOUDFLARE_ACCOUNT_ID`, for example
`env -u CLOUDFLARE_API_TOKEN -u CLOUDFLARE_ACCOUNT_ID npm run deploy`.
Do not remove or change another project's credentials globally.

For CI, supply a token scoped to the pinned NewLad account. Named profiles are
local-machine settings and do not configure CI authentication.

The production site is [newladcreations.com](https://newladcreations.com).
Both production hostnames are Worker custom domains in `wrangler.jsonc`;
Cloudflare's redirect rule sends `www` traffic to the root domain. The
[workers.dev URL](https://newlad-creations.newlad-creations.workers.dev) remains
available for direct deployment checks.

Automatic GitHub deployments are not connected yet. After the migration config
is committed and pushed, connect `TheNewLad/newlad-creations` through Cloudflare
Workers Builds with these settings:

| Setting | Value |
| --- | --- |
| Worker name | `newlad-creations` (must match `wrangler.jsonc`) |
| Production branch | `main` |
| Root directory | Repository root |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Node.js | `24.18.0` via `.node-version` or the `NODE_VERSION` build variable |

The separate build/deploy commands avoid rebuilding twice in Workers Builds.
For previews, keep the platform's preview command; do not set a preview build's
command to `npm run deploy`, which publishes production.

## Migration and rollback

Migration completed on 2026-09-27. The Cloudflare zone is active, and both
production hostnames connect to the Worker. Namecheap delegates DNS to
`aaden.ns.cloudflare.com` and
`haley.ns.cloudflare.com`. Domain registration remains at Namecheap. HTTPS is
served by Cloudflare; Netlify is no longer the website origin. Cloudflare's
Always Use HTTPS setting redirects HTTP requests to HTTPS.

The full Netlify DNS inventory was checked against both Cloudflare nameservers:
all three Zoho MX records, SPF, Zoho verification, DMARC, and the
`netlify._domainkey` DKIM TXT record match. The automatic scan missed DKIM;
it was copied separately. Keep that selector name even after leaving Netlify.
The existing Netlify deployment has no functions or forms. Netlify automatic
builds are stopped, and its published deployment is retained for rollback.

The active Cloudflare rule `Redirect www to HTTPS root` matches
`http.host eq "www.newladcreations.com"` and returns a 301 to
`concat("https://newladcreations.com", http.request.uri.path)` with query-string
preservation enabled. It covers both HTTP and HTTPS requests.

Production verification covered all three pages and every built asset, compared
byte-for-byte with the deployed build. HTTPS returned 200, `www` returned 301
with paths and queries preserved, directory URLs normalized with 307, and an
unknown path returned 404. Website responses no longer include Netlify origin
headers. DNS verification does not constitute an end-to-end email delivery test.

The retained Netlify project is
[`newlad-creations`](https://app.netlify.com/projects/newlad-creations), with
[the previous production deployment](https://68f12152a2851f0008f78f3b--newlad-creations.netlify.app).
Do not delete that project or its DNS zone until the migration has settled.
Cloudflare Workers also keeps deployment versions for rollback. The legacy
`netlify.toml` has been removed, and local `.netlify/` state is ignored.

## Cloudflare MCP tools

Start with these two servers:

| Server | Use | Endpoint |
| --- | --- | --- |
| Documentation | Look up current Cloudflare behavior and config | `https://docs.mcp.cloudflare.com/mcp` |
| Cloudflare API | Inspect/manage Workers, DNS, domains, and other account resources | `https://mcp.cloudflare.com/mcp` |

Optional later: Workers Builds (`https://builds.mcp.cloudflare.com/mcp`) for build
failures; Observability (`https://observability.mcp.cloudflare.com/mcp`) for Worker
logs and analytics. Neither is required to host this static site. The API server
already covers a broad range of account operations.

To register the recommended servers globally in Codex, run
`codex mcp add cloudflare-docs --url https://docs.mcp.cloudflare.com/mcp` and
`codex mcp add cloudflare-api --url https://mcp.cloudflare.com/mcp`.
Authenticate account access with `codex mcp login cloudflare-api`, select the
intended account and permissions, then verify with `codex mcp list`.
Registration/authentication is separate from this repository's deploy config.
Use `/mcp` Streamable HTTP endpoints for new connections.

## Astro documentation for AI tools

This project includes the official Astro Docs MCP server in
`.codex/config.toml`, using `https://mcp.docs.astro.build/mcp` over Streamable HTTP.
Open a new Codex session in this trusted repository to load the project config.
Verify registration from the repository with `codex mcp get astro-docs`.

See [Building Astro sites with AI tools](https://docs.astro.build/en/guides/build-with-ai/)
for the official setup guide. Use current Astro documentation for framework APIs
and configuration; the existing Context7 lookup instructions still apply.

## References

- [Astro on Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/)
- [Netlify to Workers migration](https://developers.cloudflare.com/workers/static-assets/migration-guides/netlify-to-workers/)
- [Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
- [Cloudflare MCP servers](https://developers.cloudflare.com/agents/model-context-protocol/cloudflare/servers-for-cloudflare/)
- [Codex MCP configuration](https://developers.openai.com/codex/mcp/)

- [Wrangler account profiles](https://developers.cloudflare.com/workers/wrangler/profiles/)
- [Custom domains and www redirects](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
