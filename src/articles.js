export const articles = [
  {
    slug: 'finance-shouldnt-feel-hard',
    title: 'Finance Shouldn’t Feel This Hard',
    date: 'Jun 30',
    author: 'Grusha Butala',
    image: 'assets/blog-hard.jpg',
    excerpt: 'Finance should support your business, not slow it down. Let’s make it easy.',
    pagination: {
      label: 'Next',
      title: 'Why Finlight',
      href: 'my-take/why-choose-finlight',
    },
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
    date: 'Jun 26',
    author: 'Grusha Butala',
    image: 'assets/blog-why.jpg',
    excerpt: 'Because you built your business to grow and I built Finlight to help finance keep up with that growth.',
    pagination: {
      label: 'Previous',
      title: 'Finance Shouldn’t Feel This Hard',
      href: 'my-take/finance-shouldnt-feel-hard',
      direction: 'previous',
    },
    content: [
      'Because you built your business to grow and I built Finlight to help finance keep up with that growth.',
      'Finance is often seen as a stand-alone department that people don’t fully understand, but in reality, it’s the one function that touches everything. Every number, every process, every decision flows through it. Finance connects with every part of the business, whether it’s operations, sales, supply chain, QA, HR, or IT.',
      {
        type: 'paragraph',
        content: [
          { text: 'This is how I see it:' },
          { text: ' Finance is the heart of the business. Operations is the heartbeat that keeps it moving. At Finlight, we keep both in sync.', strong: true },
        ],
      },
      {
        type: 'unordered-list',
        items: [
          'Whether we’re automating a process, building reports, or implementing a new system, we keep every department in mind. The tools we build need to work for the whole business because that’s how we can drive real clarity, alignment, and results.',
          'I integrate into your business like an internal team member. I take the time to understand how things actually run, your operations, your successes, your challenges, and your goals, so we can build finance that supports you, not slows you down. You get hands-on support, fast execution, and clear communication. We own the outcome and stay with it through delivery.',
          'We know how to leverage AI, automation, and systems and we also know when human insight matters more. This isn’t about fancy dashboards or reporting for the sake of it. It’s about building what helps you and your team act faster and smarter.',
          'Let Finlight help your team get away from the thought process of “this is how it has always been done.” We work hands-on with your team to re-design processes that make their job easier and processes efficient and effective.',
        ],
      },
      'Whether you need fractional finance leadership, support on a special project, clean data, ERP implementation, help navigating growth, change management, or just want to make sure your day-to-day accounting is accurate, we’ve got you covered.',
      {
        type: 'paragraph',
        content: [
          { text: 'At Finlight, I care about your bottom line as much as you do. That’s why I work hands-on, on-site with urgency and precision. Whatever it takes to move the needle and make real change that lasts.', strong: true },
        ],
      },
    ],
  },
];

export function getArticle(slug) {
  return articles.find((article) => article.slug === slug);
}
