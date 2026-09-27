export interface Note {
  readonly title: string;
  readonly summary: string;
  readonly href: string;
}

export const notes: readonly Note[] = [
  {
    title: "Frontend and instant feedback",
    summary: "Ideas on building interfaces that feel alive and responsive.",
    href: "/notes/frontend-and-instant-feedback",
  },
  {
    title: "From brain dump to short video",
    summary: "Turning messy thoughts into simple, helpful clips.",
    href: "/notes/from-brain-dump-to-short-video",
  },
  {
    title: "Figuring out working for myself",
    summary: "Exploring freedom, focus, and building on my own terms.",
    href: "/notes/figuring-out-working-for-myself",
  },
];
