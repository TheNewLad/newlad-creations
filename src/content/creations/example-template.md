---
title: "Example Creation Template"
blurb: "This is a template showing how to create new creations."
ctaLabel: "Learn More"
ctaHref: "https://example.com"
tags: ["Template", "Example"]
featured: false
publishDate: 2024-03-01
draft: true
---

# Example Creation

This is a template file showing how to create new creations for your site.

## Frontmatter Fields

Each creation markdown file must include these frontmatter fields:

- `title`: The display title of the creation
- `blurb`: A short description for the creations listing page
- `ctaLabel`: The text for the call-to-action button
- `ctaHref`: The URL the button should link to
- `tags`: Array of tags to categorize the creation
- `featured`: Boolean to mark as featured (optional, defaults to false)
- `publishDate`: Date when the creation was published (YYYY-MM-DD format)
- `draft`: Set to true to hide from public listing (optional, defaults to false)

## Content

The main content below the frontmatter is written in markdown and can include:

- Headers
- Lists
- Links
- **Bold** and *italic* text
- Code blocks
- Images

## Adding a New Creation

1. Create a new `.md` file in `src/content/creations/`
2. Copy this template and modify the frontmatter
3. Write your content in markdown
4. Set `draft: false` when ready to publish

The creation will automatically appear on the creations page, sorted by publish date!
