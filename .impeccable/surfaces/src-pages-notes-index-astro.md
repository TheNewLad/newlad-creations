---
version: 1
slug: "src-pages-notes-index-astro"
primary_target: "src/pages/notes/index.astro"
related_targets: ["src/data/notes.ts", "src/layouts/note-layout.astro", "src/layouts/base-layout.astro", "src/pages/index.astro"]
---

# Notes index

Mode: Read. User requested a dedicated `/notes` route and an Impeccable adapt
pass. This extends the approved Open Studio system using the existing Creations
index's open, ruled-list structure. No new visual direction or imagery.

Visitors scan three existing thoughts and open one. Each row is a single full
link with title, summary, and arrow. Preserve the current titles, summaries,
order, and URLs in shared `src/data/notes.ts`. Avoid dates, categories, filters,
or activity claims that the source content does not supply.

Main Notes navigation, article back links, and the homepage All notes link lead
to `/notes`. The homepage retains its preview section and `#notes` anchor.
Active navigation distinguishes the index page from the current notes section.

Responsive behavior inherits the 920px list maximum, natural text wrapping,
44px minimum navigation targets, visible keyboard focus, and pointer-aware
arrow movement. Homepage adaptation keeps project and note body text at least
16px, uses the stacked-image project layout through 1279px, and gives coarse
pointers 44px note-link targets. Preserve the portrait crop and all public copy.

Evidence and the scoped independent ship review are recorded in
`.impeccable/review/notes-adapt/`.
