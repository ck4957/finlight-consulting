export const articles = [
  {
    slug: 'finance-shouldnt-feel-hard',
    title: "Finance Shouldn't Feel This Hard",
    date: 'June 30, 2025',
    image: 'assets/blog-hard.jpg',
    excerpt: "Finance should support your business, not slow it down. Let's make it easy.",
    body: [
      "If your numbers only make sense after a scramble, finance is working too hard and arriving too late.",
      "A good finance function gives leaders clean data, simple reporting, and enough confidence to make decisions before the month is already gone.",
      "The fix usually starts with the basics: consistent close processes, clear ownership, usable dashboards, and costing that reflects how the business actually operates.",
      "Finance should not feel like a separate language. It should feel like a clear operating system for the business.",
    ],
  },
  {
    slug: 'why-choose-finlight',
    title: 'Why Finlight',
    date: 'June 26, 2025',
    image: 'assets/blog-why.jpg',
    excerpt: "I integrate into your team with an owner's mindset and build finance that supports real business growth.",
    body: [
      "Finlight is built for owners and operators who need more than advice. The work is hands-on: clean the data, improve the process, train the team, and build reporting that lasts.",
      "That means finance support that sits close to operations, sales, supply chain, and production, not off to the side.",
      "The goal is practical clarity: better margins, faster closes, cleaner controls, and systems your team can actually use after the engagement ends.",
    ],
  },
];

export function getArticle(slug) {
  return articles.find((article) => article.slug === slug);
}
