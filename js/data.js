const portfolioConfig = {
  personal: {
    name: "Usman Ghani",
    headline: "Crafting Seamless <br><span class='gradient-text'>Mobile Experiences</span>",
    subtitle: "Mobile Application Engineer | 2+ Years Experience | Specializing in Flutter  ecosystems. Developed and deployed numerous high-performance apps.",
    email: "usmanghani2176@gmail.com",
    phone: "923027541741", // WhatsApp number format (no +)
    bio: "I am a dedicated Mobile Application Engineer with over 2 years of experience in crafting high-performance, user-centric mobile applications. My expertise lies in the Flutter and Native (Swift/Kotlin) ecosystems, where I've successfully delivered numerous projects across various industries including Education, Entertainment, and Productivity. I am passionate about clean code, intuitive UI/UX design, and staying at the forefront of mobile technology."
  },
  socials: {
    github: "#",
    linkedin: "https://www.linkedin.com/in/usman-ghani-6535a4237",
    email: "usmanghani2176@gmail.com"
  },
  skills: {
    orbit: {
      inner: [
        { icon: "devicon-swift-plain colored", angle: "0deg" },
        { icon: "devicon-kotlin-plain colored", angle: "120deg" },
        { icon: "devicon-flutter-plain colored", angle: "240deg" }
      ],
      middle: [
        { icon: "devicon-flutter-plain colored", angle: "45deg" },
        { icon: "devicon-firebase-plain colored", angle: "135deg" },
        { icon: "devicon-graphql-plain colored", angle: "225deg" },
        { icon: "devicon-apple-original colored", angle: "315deg" }
      ],
      outer: [
        { icon: "devicon-git-plain colored", angle: "0deg" },
        { icon: "devicon-java-plain colored", angle: "51deg" },
        { icon: "devicon-supabase-plain colored", angle: "102deg" },
        { icon: "devicon-xcode-plain colored", angle: "153deg" },
        { icon: "devicon-android-plain colored", angle: "204deg" },
        {
          type: "svg",
          angle: "255deg",
          content: `<svg viewBox="0 0 512 512" width="48px" height="48px"><path fill="#00e676" d="M32.1,33.1c-3.1,3.4-4.9,8.7-4.9,15.5v414.8c0,6.8,1.8,12.1,4.9,15.5l1.6,1.4l231.1-231.1V246L33.7,14.9L32.1,33.1z"/><path fill="#ffeb3b" d="M331.6,332.7L264.8,266v-20l66.8-66.7l1.6,0.9l78.8,44.7c22.5,12.8,22.5,33.7,0,46.5L333.2,331.8L331.6,332.7z"/><path fill="#ff5252" d="M33.7,497.1l231.1-231.1l66.8,66.7L83.3,501.9c-7.9,4.5-16.1,6-24.8,6C48.7,507.9,39.6,503.9,33.7,497.1z"/><path fill="#03a9f4" d="M33.7,14.9l231.1,231.1l66.8-66.7L83.3,10.1c-7.9-4.5-16.1-6-24.8-6C48.7,4.1,39.6,8.1,33.7,14.9z"/></svg>`
        },
        {
          type: "img",
          angle: "306deg",
          src: "assets/appstore_logo.png",
          alt: "App Store"
        }
      ]
    },
    categories: [
      {
        title: "Technical Expertise",
        items: [
          { name: "Flutter / Dart", icon: "devicon-flutter-plain colored" },
          { name: "Firebase", icon: "devicon-firebase-plain colored" },
          { name: "API Integration", icon: "devicon-graphql-plain colored" },
          { name: "CI/CD & Git", icon: "devicon-git-plain colored" }
        ]
      }
    ]
  },
  benefits: [
    {
      title: "Boost Customer Engagement",
      description: "Direct communication through push notifications keeps your customers engaged and informed about offers, updates, and news.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
    },
    {
      title: "Increase Revenue",
      description: "Mobile apps provide seamless shopping experiences, in-app purchases, and subscription models that drive sales 24/7.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`
    },
    {
      title: "Build Brand Recognition",
      description: "A professional app on customers' devices increases brand visibility and establishes your business as modern and customer-focused.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>`
    },
    {
      title: "Gain Valuable Insights",
      description: "Track user behavior, preferences, and analytics to make data-driven decisions that grow your business strategically.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`
    },
    {
      title: "Instant Updates",
      description: "Reach customers instantly with real-time notifications about promotions, new products, or important business updates.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`
    },
    {
      title: "Stay Competitive",
      description: "Stand out from competitors by offering the convenience and accessibility that modern customers expect from businesses.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
    }
  ],
  pricing: [
    {
      name: "Silver",
      price: "$199",
      subtitle: "Perfect for MVPs and startups",
      features: [
        "Basic UI/UX Design",
        "Android & iOS (Flutter)",
        "5 Screens",
        "Firebase Integration",
        "1 Month Support"
      ],
      btnClass: "btn-secondary"
    },
    {
      name: "Gold",
      price: "$999",
      subtitle: "Full-featured production apps",
      isPopular: true,
      features: [
        "Premium Custom Design",
        "Advanced State Management",
        "API Integration",
        "Push Notifications",
        "3 Months Support"
      ],
      btnClass: "btn-primary"
    },
    {
      name: "Platinum",
      price: "$1999+",
      subtitle: "Enterprise scale solutions",
      features: [
        "Complete Product Strategy",
        "Admin Panel Web App",
        "CI/CD Pipeline Setup",
        "Analytics & Monitoring",
        "6 Months Support"
      ],
      btnClass: "btn-secondary"
    }
  ],


  projects: [
    {
      id: "neeat",
      title: "Neeat App",
      category: "Food & Delivery",
      tags: [
        "FLUTTER & DART",
        "BLOC STATE MANAGEMENT",
        "GOOGLE MAPS & TRACKING",
        "STRIPE & PAYPAL INTEGRATION",
        "FIREBASE CLOUD SERVICES",
        "Api Integration"
      ],
      image: "assets/neeat/neeat 1.jpg",
      gallery: [
        "assets/neeat/neeat 1.jpg",
        "assets/neeat/neeat 2.jpg",
        "assets/neeat/neeat 3.jpg",
        "assets/neeat/neeat 4.jpg",
        "assets/neeat/neeat 5.jpg",
        "assets/neeat/neeat 6.jpg",
        "assets/neeat/neeat 7.jpg"
      ],
      shortDesc: "Neeat is a premium express delivery service for high-quality, healthy frozen meals that are faster and more affordable than traditional delivery options.\nWith a focus on restaurant-quality food, the app allows users in Berlin to order from a selection of over 50 natural, nutrient-rich dishes delivered in under 60 minutes.\nThe service eliminates the need for long-term planning or subscriptions, offering complete flexibility with no hidden commitments.\nEvery meal is crafted without preservatives or artificial additives, ensuring a 100% natural and guilt-free dining experience at home.\nThe app features real-time tracking, secure payments with Stripe and PayPal, and a seamless ordering flow available daily.\nPreparation is quick and easy, taking only 8-10 minutes to transform a frozen meal into a gourmet feast.\nNeeat also prioritizes sustainability, utilizing eco-friendly packaging and climate-neutral delivery methods for every order.\nIt’s the smart alternative for busy professionals, students, or anyone looking for a fast, healthy, and high-quality meal prep solution.",
      links: {
        playStore: "https://play.google.com/store",
        appStore: "https://apps.apple.com/app"
      }
    },
    {
      id: "zorxx",
      title: "Zorxx Live",
      category: "Entertainment",
      tags: [
        "FLUTTER & DART",
        "AGORA SDK",
        "LIVE STREAMING",
        "FIREBASE CLOUD SERVICES",
        "REALTIME CHAT",
        "API INTEGRATION"
      ],
      image: "assets/zorxxLive/Zorxx 1.jpg",
      gallery: [
        "assets/zorxxLive/Zorxx 1.jpg",
        "assets/zorxxLive/Zorxx 2.jpg",
        "assets/zorxxLive/Zorxx 3.jpg",
        "assets/zorxxLive/Zorxx 4.jpg",
        "assets/zorxxLive/Zorxx 5.jpg",
        "assets/zorxxLive/Zorxx 6.jpg",
        "assets/zorxxLive/Zorxx 7.jpg",
        "assets/zorxxLive/Zorxx 8.jpg"
      ],
      shortDesc: "Zorxx Live is a dynamic streaming ecosystem designed to bridge the gap between creative talent and global audiences through high-quality video and audio content.\nThe platform empowers storytellers to turn their passions into careers by providing a comprehensive suite of creator tools, including a dedicated performance dashboard and advanced monetization features.\nWith integrated support for live streaming, movie uploads, and podcasts, creators can build real-time connections with fans while showcasing their unique artistic visions.\nViewers enjoy a personalized entertainment experience with access to exclusive movies, TV series, documentaries, and live concerts, all curated to suit their specific tastes.\nInteractive social features such as real-time chat, fan gifting, and co-creation opportunities foster an authentic community where inspiration and engagement thrive simultaneously.\nThe app also introduces 'Klipz,' a creative trailer-making tool that helps creators grow their fan base by highlighting their best moments in short, eye-catching clips.\nBuilt on a robust architecture for low-latency broadcasting, Zorxx Live ensures a seamless and immersive viewing experience across any mobile device at any time.\nWhether you are here to discover captivating stories or to share your own creative journey, the platform provides everything you need to unite, create, and inspire.",
      links: {
        playStore: "https://play.google.com/store",
        appStore: "https://apps.apple.com/app"
      }
    },
    {
      id: "quranandislam",
      title: "Quran & Islam",
      category: "Education",
      tags: [
        "Flutter",
        "Local Storage",
        "Audio Streaming",
        "Offline Mode",
        "Multi-Language Support",
        "Qibla Direction",
        "Compass Sensors"
      ],
      image: "assets/quranandislam/1.png",
      gallery: [
        "assets/quranandislam/1.png",
        "assets/quranandislam/2.png",
        "assets/quranandislam/4.png",
        "assets/quranandislam/3.png",
        "assets/quranandislam/5.png",
      ],
      shortDesc: "A comprehensive Quran app featuring color-coded Tajweed, multi-language translations, multiple reciters with offline audio, and built-in Qibla direction tracking.",
      links: {
        playStore: "https://play.google.com/store",
        appStore: "https://apps.apple.com/app"
      }
    },
    {
      id: "GeoMinder",
      title: "GeoMinder",
      category: "Alarm & Productivity",
      tags: ["Flutter", "Google Maps", "Location Services", "Local Storage", "Task Automation"],
      image: "assets/geominder/1.png",
      gallery: [
        "assets/geominder/1.png",
        "assets/geominder/2.png",
        "assets/geominder/4.png",
        "assets/geominder/3.png",
        "assets/geominder/5.png",
        "assets/geominder/6.png",
        "assets/geominder/7.png",
      ],
      shortDesc: "A smart alarm app that triggers alerts based on location and tasks, helping users remember important actions exactly when and where they need them.",
      links: {
        playStore: "https://play.google.com/store",
        appStore: "https://apps.apple.com/app"
      }
    },
    {
      id: "JawRadio",
      title: "Jaw Radio",
      category: "Entertainment",
      tags: ["Flutter", "Live Audio Streaming", "Firebase Auth", "Realtime Chat", "Local Storage"],
      image: "assets/jawradio/1.png",
      gallery: [
        "assets/jawradio/1.png",
        "assets/jawradio/2.png",
        "assets/jawradio/4.png",
        "assets/jawradio/3.png",
        "assets/jawradio/5.png",
        "assets/jawradio/6.png",
        "assets/jawradio/7.png",
      ],
      shortDesc: "A live streaming radio app with user login, real-time admin chat support, and a unique sleep-lock feature to control listening habits.",
      links: {
        playStore: "https://play.google.com/store",
        appStore: "https://apps.apple.com/app"
      }
    },

  ]
};
