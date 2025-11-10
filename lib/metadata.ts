import { Metadata } from "next";

export const metadata: Metadata = {
    // Basic metadata
    title: {
      default: 'IMO Digital City - Smart Urban Innovation Hub',
      template: '%s | IMO Digital City'
    },
    description: 'Experience the future of urban living at IMO Digital City. A revolutionary smart city ecosystem featuring cutting-edge technology, sustainable infrastructure, and connected communities in Imo State, Nigeria.',
    // Application metadata
    applicationName: 'IMO Digital City',
    authors: [
      { name: 'IMO Digital City Development Team' },
      { url: 'https://imodigitalcity.gov.ng' }
    ],
    generator: 'Next.js',
    keywords: [
      'IMO Digital City',
      'Smart City Nigeria',
      'Digital Infrastructure',
      'IoT City',
      'Sustainable Urban Development',
      'Tech Hub Nigeria',
      'Innovation District',
      'Smart Transportation',
      'Digital Government',
      'Connected Community',
      'Imo State Technology',
      'African Smart City',
      'Urban Planning',
      'Digital Economy',
      'Smart Buildings'
    ],
    
    // Referrer policy
    referrer: 'origin-when-cross-origin',
    
    // Theme and color scheme
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#00A651' },
      { media: '(prefers-color-scheme: dark)', color: '#00D365' }
    ],
    colorScheme: 'light dark',
    
    // Viewport
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
      userScalable: false,
    },
    
    // Creator and publisher
    creator: 'IMO State Government',
    publisher: 'IMO Digital City Authority',
    
    // Format detection
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    
    // Category
    category: 'Smart City Technology',
    
    // Classification
    classification: 'Government, Technology, Urban Development',
    
    // Open Graph metadata
    openGraph: {
      title: 'IMO Digital City - Smart Urban Innovation Hub',
      description: 'Experience the future of urban living at IMO Digital City. A revolutionary smart city ecosystem featuring cutting-edge technology, sustainable infrastructure, and connected communities.',
      url: 'https://imodigitalcity.gov.ng',
      siteName: 'IMO Digital City',
      locale: 'en_NG',
      type: 'website',
      countryName: 'Nigeria',
      images: [
        {
          url: '/og-image-main.jpg',
          width: 1200,
          height: 630,
          alt: 'IMO Digital City - Aerial view of the smart city infrastructure',
          type: 'image/jpeg',
        },
        {
          url: '/og-image-square.jpg',
          width: 1200,
          height: 1200,
          alt: 'IMO Digital City Logo and Skyline',
          type: 'image/jpeg',
        }
      ],
      videos: [
        {
          url: '/videos/imo-digital-city-overview.mp4',
          width: 1280,
          height: 720,
          type: 'video/mp4',
        }
      ]
    },
    
    // Twitter Card metadata
    twitter: {
      card: 'summary_large_image',
      site: '@IMODigitalCity',
      creator: '@IMOStateGov',
      title: 'IMO Digital City - Smart Urban Innovation Hub',
      description: 'Experience the future of urban living at IMO Digital City. Revolutionary smart city ecosystem with cutting-edge technology and sustainable infrastructure.',
      images: [
        {
          url: '/twitter-image.jpg',
          alt: 'IMO Digital City - Smart Urban Innovation Hub',
          width: 1200,
          height: 630,
        }
      ]
    },
    
    // Facebook App ID (if applicable)
    other: {
      'fb:app_id': '123456789012345', // Replace with actual Facebook App ID
    },
    
    // Robots metadata
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Icons
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
      ],
      shortcut: '/favicon.ico',
      other: [
        {
          rel: 'mask-icon',
          url: '/safari-pinned-tab.svg',
          color: '#00A651'
        }
      ]
    },
    
    // Manifest
    manifest: '/site.webmanifest',
    
    // App Links (Deep Linking)
    appLinks: {
      web: {
        url: 'https://imodigitalcity.gov.ng',
        should_fallback: true
      }
    },
    
    // Archives and bookmarking
    archives: ['https://imodigitalcity.gov.ng/archive'],
    bookmarks: ['https://imodigitalcity.gov.ng/bookmarks'],
    
    // Additional metadata for rich snippets
    alternates: {
      canonical: 'https://imodigitalcity.gov.ng',
      languages: {
        'en-NG': 'https://imodigitalcity.gov.ng',
        'ig-NG': 'https://imodigitalcity.gov.ng/ig',
      },
      media: {
        'only screen and (max-width: 600px)': 'https://m.imodigitalcity.gov.ng'
      },
      types: {
        'application/rss+xml': 'https://imodigitalcity.gov.ng/rss'
      }
    },
    
    // Verification
    verification: {
      google: 'google-site-verification-code-here', // Replace with actual verification code
      yandex: 'yandex-verification-code-here', // Replace with actual verification code
      yahoo: 'yahoo-site-verification-code-here', // Replace with actual verification code
      other: {
        'msvalidate.01': 'bing-verification-code-here', // Replace with actual Bing verification code
        'p:domain_verify': 'pinterest-verification-code-here' // Replace with actual Pinterest verification code
      }
    }
  }