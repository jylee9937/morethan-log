const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Lofo",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "I develop everything using node.",
    email: "lkj49864@naver.com",
    linkedin: "주영-이-733184263",
    github: "jylee9937",
    instagram: "lord_forever_22",
  },
  projects: [
    {
      name: `machuda`,
      href: "https://machuda.kr/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "lofo-blog",
    description: "welcome to lofo-blog!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://lofo.im",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "notion://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F05a49eee-33f8-4855-ad88-a4f8e25f14d0%2Fda00d2079cd28dae09cd9f74bc5fb8fa-sticker.png?table=block&id=c1dfd392-803b-4bfe-a92d-a8b15e43a9eb&spaceId=ba590aea-941b-4746-8030-5bf3fd286530&width=250&userId=cc8b7831-9799-460d-8183-b727675dea2c&cache=v2", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Lofo", "Christian"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: "8186cda3bff34fabb4b124e335c2bdae",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
