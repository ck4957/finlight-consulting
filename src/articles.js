export const articles = [
  {
    slug: 'finance-shouldnt-feel-hard',
    title: 'Finance Shouldn’t Feel This Hard',
    date: 'Jun 30',
    author: 'Grusha Butala',
    image: 'assets/blog-hard.jpg',
    excerpt: 'Finance should support your business, not slow it down. Let’s make it easy.',
    content: [
      { type: 'paragraph', text: 'Have you ever had to ask yourself one or more of these questions?', strong: true },
      {
        type: 'ordered-list',
        items: [
          'In an excel spreadsheet with 40 tabs, 100 columns, where is the data that actually matters?',
          'Why do simple questions like “what are our margins?” or “how much money are we making?” turn into days of scavenger hunt?',
          'What are my actual overhead costs?',
          "Why did we invest in an expensive ERP system if it can't even give me basic reporting?",
          'How do I make it easy for my operations team to see data that matters to them?',
          'Why does month-end take three weeks and still leave everyone guessing?',
          'Why are our audits taking so long and costing more every year? Can’t we get the auditors in and out faster?',
          'Why is every budget file different depending on who opens it?',
        ],
      },
      { type: 'paragraph', text: 'If one or more of these hits home, here’s what I can do for you:', strong: true },
      {
        type: 'unordered-list',
        items: [
          [{ text: 'Dig into your business to build systems, processes, and reports that ' }, { text: 'fit your operations', em: true }],
          'Identify your true costs on the floor, fix the gaps, roll them out into a pricing strategy with sales, and build simple models and processes that keep up with changes and guide pricing bids and margin calls',
          'Clean up messy data and create reporting templates that drive decision-making',
          'Make your ERP work by identifying what’s broken, and putting the right fixes in place (re-engage with vendor and IT)',
          'Creating tools and reports that the Ops team can use without emailing the Finance team every time',
          'Create and provide audit-ready financials, always (reducing audit timelines)',
          'Put controls in place to reduce errors, stop rework, and make processes run cleaner (reducing audit timelines)',
          'Shorten month-end by tightening up what matters: reconciliations, cut-offs, accuracy, and ownership',
          'Introduce automation through the facility tailored to your business',
          'Train cross-functional teams to make all of the above sustainable',
        ],
      },
      {
        type: 'paragraph',
        content: [
          { text: 'And I do it all with one goal: ' },
          { text: 'making your finance function work for you, on-site and hands-on.', strong: true },
        ],
      },
      { type: 'paragraph', text: 'Clean numbers. Real insight. Systems that sustain.' },
    ],
  },
  {
    slug: 'why-choose-finlight',
    title: 'Why Finlight',
    date: 'June 26, 2025',
    author: 'Grusha Butala',
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
