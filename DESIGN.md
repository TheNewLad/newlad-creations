---
name: NewLad Creations
description: A bright open studio for Karim's creations, experiments, and short notes.
colors:
  plant-green: "#284d20"
  plant-green-deep: "#183714"
  cta-sage: "#687b61"
  cta-sage-deep: "#576a50"
  paper: "#ffffff"
  ink: "#141614"
  muted-cedar-gray: "#62685f"
  cedar-line: "#c9cec5"
  soft-paper: "#f5f6f2"
  selection-green: "#dce6d4"
  scrollbar-olive: "#8f9c87"
typography:
  display:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "70px"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "42px"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "30px"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Kedebideri, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
  handwritten:
    fontFamily: "Caveat, cursive"
    fontSize: "25px"
    fontWeight: 500
    lineHeight: 1.2
rounded:
  control: "4px"
  focus: "2px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
  gutter: "clamp(20px, 4.3vw, 76px)"
components:
  primary-cta:
    backgroundColor: "{colors.cta-sage}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "10px 20px"
  primary-cta-hover:
    backgroundColor: "{colors.cta-sage-deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "10px 20px"
  accent-link:
    textColor: "{colors.plant-green}"
    typography: "{typography.body}"
  primary-navigation:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  project-title:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "0"
  portrait:
    rounded: "{rounded.circle}"
    size: "450px"
  footer-brand:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  reading-column:
    typography: "{typography.body}"
    width: "720px"
---

# Design System: NewLad Creations

## Overview

**Creative North Star: "Open Studio"**

NewLad Creations presents Karim through the things he makes: a bright, daytime studio with room for experiments, unfinished work, and short notes. The implemented homepage opens with a candid original color portrait, a clear introduction, and a direct path into three creations. White space, black type, and one plant-green thread keep the page personal and easy to enter.

Material character comes from local concept-art plates, a cedar-and-stone visual temperature in the imagery, fine gray rules, and one handwritten Caveat accent. Interior creation and note pages keep the same light canvas and move into a centered reading column. Motion is brief and optional: one underline draws in and arrows shift slightly, with a reduced-motion fallback.

**Key Characteristics:**
- Bright white studio canvas with black text and plant-green links.
- Candid original portrait in a circle and optimized local image plates.
- Kedebideri for display and body copy, with Caveat for short process marks.
- Open desktop grids that become linear, touch-friendly sections on mobile.
- Fine gray rules and whitespace provide structure; surfaces stay flat.

## Colors

The palette is a white, black, and plant-green foundation with restrained gray-green utility tones; cedar and stone belong to the local image plates rather than the UI chrome.

### Primary
- **Plant Green** (#284d20): The thread for navigation state, linked actions, arrows, underlines, and short handwritten annotations.
- **Plant Green Deep** (#183714): The darker hover and selection text state.
- **CTA Sage** (#687b61): Muted sage button backgrounds with white underlined text.
- **CTA Sage Deep** (#576a50): Button hover and active background.

### Neutral
- **Paper** (#ffffff): The default page and reading surface.
- **Ink** (#141614): Headings, body copy, wordmark, and the primary footer mark.
- **Muted Cedar Gray** (#62685f): Supporting descriptions, captions, reading metadata, and footer copy.
- **Cedar Line** (#c9cec5): One-pixel section rules, project dividers, and reading-footer separators.
- **Soft Paper** (#f5f6f2): A quiet supporting surface when a soft neutral is needed.
- **Selection Green** (#dce6d4): Text selection and tap-highlight feedback.
- **Scrollbar Olive** (#8f9c87): The browser scrollbar thumb on the paper canvas.

### Named Rules

**The Green Thread Rule.** Plant green is reserved for navigation state, linked action, underlines, and handwritten annotations; the deeper green is a hover state.

**The Light Studio Rule.** Paper is the default canvas. Soft neutrals support feedback and quiet surfaces without turning the page into a card stack.

## Typography

**Display Font:** Kedebideri (with Arial, sans-serif fallback)  
**Body Font:** Kedebideri (with Arial, sans-serif fallback)  
**Label/Handwritten Font:** Caveat for short annotations

**Character:** Kedebideri keeps the voice open, human, and legible across the homepage and reading pages. Caveat appears as a small handwritten trace of process beside a project, never as a replacement for content text.

### Hierarchy
- **Display** (700, 70px and 60px second line, 1.04–1.12 line-height): The homepage greeting and the statement that Karim likes making things.
- **Headline** (500, 42px, 1.15 line-height): Section headings such as About and larger interior titles; it scales down to 30–36px on smaller screens.
- **Title** (400, 30px, 1.1 line-height): Project names and compact feature headings; it becomes 22–26px on smaller screens.
- **Body** (400, 18px, 1.5 line-height): Navigation, supporting copy, notes, and general page text. Long reading copy uses 20px with 1.75 line-height in a column capped at 68ch.
- **Label** (400, 14px, 1.4 line-height): Concept captions, tags, and muted utility links.
- **Handwritten** (500, Caveat, 25px, 1.2 line-height): Short project annotations such as “Testing” and “The story so far.”

### Named Rules

**The Handmade Accent Rule.** Use Caveat only for a short annotation or process cue; keep explanations, navigation, and project titles in Kedebideri.

## Layout

The page uses a centered fluid shell: the page wrapper is the viewport width minus two clamp(20px, 4.3vw, 76px) gutters, capped at 1512px. The desktop header is 76px tall with 3% inline padding and a maximum width of 1680px. Interior pages use a centered reading column capped at 720px, with 64px vertical padding on desktop and 32px on mobile.

The homepage introduction is a two-column grid on wide screens, with the copy on the left and a 450px-or-fluid circular portrait on the right. At 1536px, the approved composition places the introduction near x=66/y=151 and the portrait near x=880/y=104; the three-project row begins near y=627. The project strip uses three columns with fine right-hand dividers, and the notes strip uses four columns with the heading as its first column. About and contact are separated by the same rules and generous vertical gaps.

Between 701px and 1279px, the introduction remains two columns, the projects use three columns with imagery above text, and notes use two columns beneath their heading. At 700px and below, the page becomes linear. The header wraps its navigation, projects use a 128px media column beside copy, notes stack with one-pixel separators, and the About and contact sections become single-column reading blocks. Navigation links have a minimum 44px width and height. On coarse pointers, homepage note links also have a minimum 44px height. Between 1280px and 1535px, homepage project and note body text stays at least 16px; titles can wrap instead of shrinking to fit.

## Elevation & Depth

This is a flat-by-default system. The source CSS defines no box shadows, gradients, or raised UI surfaces. Depth comes from white space, one-pixel cedar-gray rules, the tactile lighting in local concept-art plates, and the circular portrait. Links respond with a short arrow movement or color shift rather than a lift.

### Named Rules

**The Flat-by-Default Rule.** Keep UI surfaces flat at rest; use whitespace, rules, imagery, and restrained state changes to create depth.

## Shapes

The form language is open and lightly geometric. The portrait uses a 50% circle. Filled CTA links use a restrained 4px corner radius. The rest of the interface is mostly square and editorial: project media keeps its source geometry, section boundaries are one-pixel rules, and links use a small 2px focus radius only when focused. There are no pill controls or rounded card containers in the implemented system.

## Components

Navigation and CTAs retain link semantics. Primary CTAs have the sage-button treatment requested by Karim: white underlined text on muted sage. Inputs and chips have no established visual yet.

### Navigation
- **Style:** The wordmark sits at left and a small horizontal nav sits at right on desktop; the nav wraps below the wordmark on mobile.
- **Typography:** Kedebideri at 18px on desktop and 16px on mobile, with a minimum 44px link height.
- **States:** Current and hovered links turn plant green and underline. “Say hello” uses the filled sage CTA treatment with white underlined text.
- **Mobile treatment:** The header is at least 108px tall, with nav links spread across the available width.

### Primary CTAs
- **Shape:** 4px corners, 10px by 20px padding, and a minimum 48px height. The mobile header CTA uses 8px by 12px padding and a 44px minimum height.
- **Color and type:** Muted sage background, white text and arrows, weight 500, and a persistent one-pixel underline offset by 4px.
- **States:** Hover and active use deeper sage with white text; keyboard focus retains a visible green outline outside the button. Reduced motion removes the color transition.
- **Usage:** Explore the creations, Say hello, email conversation actions, and external project CTAs. Ordinary navigation, back links, and content rows keep their text-link treatment.

### Accent Links
- **Shape:** Inline-flex text and a 22px inline SVG arrow, with a 44px minimum height where the global link class applies.
- **Color:** Plant green at rest; the deeper green on hover. Underlines are one pixel with a 9px offset, with a separate 4px underline offset for filled CTAs.
- **States:** The arrow moves 4px over 180ms on hover. Focus uses a 2px plant-green outline with a 6px offset. Reduced motion removes the transition.

### Project Tiles
- **Structure:** Each of the three selected creations pairs a local image plate with a title, short description, caption, and arrow link.
- **Desktop:** A three-column strip uses one-pixel right rules; the title link expands to the tile bounds while the arrow sits at the lower edge.
- **Mobile:** Each tile becomes a 128px media column plus copy, with 24px vertical padding and a one-pixel bottom rule.
- **Editorial marks:** Concept captions are muted and italic. Caveat marks “Testing” and “The story so far” in plant green with a short underline.

### Notes
- **Style:** The notes heading shares the first grid column with three compact note entries. Each note uses a green title, a restrained summary, and a muted italic “Read the note” link.
- **Responsive behavior:** The four-column row stacks at 700px, with each note separated by a one-pixel cedar-gray rule and generous touch-friendly spacing.

The `/notes` index inherits the Creations index: a 920px maximum column, a large heading, and open rows divided by one-pixel rules. Each row is one full-width link containing the note title, summary, and arrow. Both index and homepage previews use `src/data/notes.ts`. Main navigation, the homepage All notes link, and article back links lead to `/notes`.

### Reading Pages
- **Column:** Centered 720px maximum width with a 56px maximum interior heading and a muted 24px description.
- **Body:** Kedebideri prose is 20px with 1.75 line-height on desktop, 18px on mobile, and paragraphs separate with 1.25em margins.
- **Metadata:** Creation tags use muted text and slash separators; back links use the same green arrow language as the homepage.
- **Footer:** A one-pixel rule separates the reading CTA from the article body, followed by the shared site footer.

### Footer
- **Style:** The footer is a horizontal, rule-led closing band with the meaningful NewLad Creations cube mark, muted supporting text, and a right-aligned copyright on desktop.
- **Responsive behavior:** It stacks on mobile with a 48px top margin, 26px vertical padding, and 16px gaps.

## Do's and Don'ts

### Do:
- **Do** keep the page on paper white with ink-black text and a plant-green interaction thread.
- **Do** preserve the original color portrait as a circular image and keep local image plates optimized.
- **Do** label concept artwork and game concept imagery so it reads as illustrative context rather than working hardware or a product screenshot.
- **Do** use one-pixel cedar-gray rules, open spacing, and the responsive grid-to-linear rhythm to organize content.
- **Do** keep the underline entrance and arrow movement optional, with the reduced-motion fallback intact.
- **Do** retain the cube mark in the footer as a meaningful NewLad Creations identity element.

### Don't:
- **Don't** add pill controls, rounded cards, box shadows, or decorative gradients to this flat studio system.
- **Don't** replace Kedebideri body and display text with a system display face; use Caveat only for short handwritten annotations.
- **Don't** treat concept artwork as documentary photography or imply a project is more finished than the copy says.
- **Don't** add newly public health or therapy details to copy, imagery, metadata, or project stories.
- **Don't** make motion necessary to understand a link or section; all content and navigation must remain available with reduced motion.
