# Content Collections Guide

This project uses Astro v5's Content Collections with the new Content Layer API for strongly typed, markdown-based content management.

## 🗂️ Directory Structure

```
src/
├── content.config.ts          # Content collections configuration
├── content/                   # Content directory
│   └── creations/            # Creations collection
│       ├── adhd-task-planner.md
│       ├── notion-work-planner.md
│       └── example-template.md
└── pages/
    └── creations/
        └── index.astro       # Displays all published creations
```

## 🚀 Key Features

- **✅ Strongly Typed**: Zod schema validation with full TypeScript support
- **✅ Markdown Content**: Rich content with frontmatter and markdown body
- **✅ Draft System**: Hide content during development with `draft: true`
- **✅ Automatic Sorting**: Content sorted by publish date (newest first)
- **✅ Built-in Loaders**: Uses Astro v5's `glob()` loader for optimal performance
- **✅ Type Safety**: Full IntelliSense and compile-time validation

## 📝 Content Schema

Each creation must have the following frontmatter fields:

```yaml
---
title: "Your Creation Title"           # string (required)
blurb: "Short description"             # string (required)
ctaLabel: "Button Text"                # string (required)
ctaHref: "https://your-link.com"       # string (required)
tags: ["Tag1", "Tag2"]                 # string[] (required)
featured: true                         # boolean (optional)
publishDate: 2024-01-15                # date (required)
draft: false                           # boolean (optional)
---
```

## 🔧 Technical Implementation

### Configuration (`src/content.config.ts`)
```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const creations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/creations" }),
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    ctaLabel: z.string(),
    ctaHref: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().optional(),
    publishDate: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { creations };
```

### Usage in Pages (`src/pages/creations/index.astro`)
```typescript
---
import { getCollection, type CollectionEntry } from 'astro:content';

const allCreations = await getCollection('creations');

// Filter and sort (order is non-deterministic in v5)
const publishedCreations: CollectionEntry<'creations'>[] = allCreations
  .filter((creation) => !creation.data.draft)
  .sort((a, b) => 
    b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );
---

<ul>
  {publishedCreations.map((creation) => (
    <li id={creation.id}>
      <h2>{creation.data.title}</h2>
      <p>{creation.data.blurb}</p>
      {creation.data.tags.map((tag: string) => (
        <span>{tag}</span>
      ))}
      <a href={creation.data.ctaHref}>{creation.data.ctaLabel}</a>
    </li>
  ))}
</ul>
```

## 📋 Adding New Creations

### Step-by-Step Process

1. **Create a new markdown file** in `src/content/creations/`
   ```bash
   touch src/content/creations/my-new-creation.md
   ```

2. **Add frontmatter and content**:
   ```markdown
   ---
   title: "My Amazing Creation"
   blurb: "A brief description of what this creation does"
   ctaLabel: "Get It Now"
   ctaHref: "https://example.com"
   tags: ["Productivity", "Tool"]
   featured: false
   publishDate: 2024-01-15
   draft: true
   ---
   
   # My Amazing Creation
   
   Detailed description and content here...
   ```

3. **Test locally** with `draft: true`

4. **Publish** by setting `draft: false`

### Content will automatically:
- ✅ Appear on the creations page when `draft: false`
- ✅ Be sorted by `publishDate` (newest first)
- ✅ Be validated against the schema
- ✅ Provide full TypeScript support

## 🎯 Best Practices

### File Naming
- Use kebab-case: `my-creation.md`
- Keep names descriptive but concise
- Avoid special characters

### Frontmatter
- Always use valid YAML syntax
- Date format: `2024-01-15` (YYYY-MM-DD)
- Keep blurbs concise (1-2 sentences)
- Use descriptive CTA labels ("Get PDF", "Try Template", etc.)

### Tags
- Use consistent tag names across creations
- Capitalize properly ("PDF", not "pdf")
- Keep tags specific but not too granular

### Content
- Write in markdown for rich formatting
- Include clear headings and structure
- Add examples and usage instructions
- Keep content focused and actionable

## 🚨 Important Notes

### Astro v5 Changes
- **Non-deterministic ordering**: Collections don't have a guaranteed order, so manual sorting is required
- **New loader system**: Uses `glob()` loader instead of file-based collections
- **Content Layer API**: More performant and flexible than legacy collections

### TypeScript Support
- Full type safety with `CollectionEntry<'creations'>`
- IntelliSense for all frontmatter fields
- Compile-time validation of schema

### Development Workflow
1. Create content with `draft: true`
2. Test locally with dev server
3. Set `draft: false` to publish
4. Content automatically appears on site

## 🔍 Troubleshooting

### Common Issues
- **Schema validation errors**: Check frontmatter syntax and required fields
- **TypeScript errors**: Ensure all required fields are present
- **Content not appearing**: Check `draft` field and restart dev server
- **Date parsing errors**: Use YYYY-MM-DD format for dates

### Dev Server Sync
If schema changes don't appear, restart the dev server or sync content:
```bash
npm run dev
# Or press 's' + 'enter' in the dev server to sync
```

## 🎉 Benefits Over Previous System

| Feature | Old Array | Content Collections |
|---------|-----------|-------------------|
| Type Safety | ❌ | ✅ Full TypeScript |
| Content Management | ❌ Hardcoded | ✅ File-based |
| Schema Validation | ❌ | ✅ Zod validation |
| Performance | ⚠️ Runtime | ✅ Build-time optimized |
| Extensibility | ❌ | ✅ Easy to extend |
| Developer Experience | ⚠️ | ✅ IntelliSense + validation |
| Version Control | ❌ | ✅ Git-friendly |

This system provides a robust, type-safe, and maintainable way to manage your creations content!
