import { getTranslations } from 'next-intl/server';

export type SiteConfig = typeof siteConfig;

export const basePath = 'https://zenlearn.ai/';

export const supportEmail = 'zenlearn.tech@gmail.com';

export type Language = {
  code: string;
  name: string;
  countryCode?: string;
  map?: string[];
};

export const languages: Language[] = [
  { code: 'en', name: 'English', countryCode: 'us', map: ['en-GB'] },
  { code: 'hi', name: 'Hindi', countryCode: 'in' },
];

export const locales = languages.map((lang) => lang.code) as string[];

export const siteConfig = {
  name: 'Big Five Personality Test',
  creator: '@maccyber',
  description:
    'Learn to know yourself better with a free personality test.',
  navItems: [
    {
      label: 'home',
      href: '/'
    },
    {
      label: 'result',
      href: '/result'
    },
    {
      label: 'compare',
      href: '/compare'
    },
    {
      label: 'articles',
      href: '/articles'
    },
    {
      label: 'about',
      href: '/about'
    }
  ],
  navMenuItems: [
    {
      label: 'home',
      href: '/'
    },
    {
      label: 'see_results',
      href: '/result'
    },
    {
      label: 'compare_with',
      href: '/compare'
    },
    {
      label: 'articles',
      href: '/articles'
    },
    {
      label: 'about',
      href: '/about'
    },
    {
      label: 'faq',
      href: '/faq'
    }
  ],
  footerLinks: [
    {
      label: 'home',
      href: '/'
    },
    {
      label: 'articles',
      href: '/articles'
    },
    {
      label: 'about',
      href: '/about'
    },
    {
      label: 'faq',
      href: '/faq'
    }
  ],
  links: {
    github: 'https://github.com/zenlearn.ai',
    twitter: 'https://x.com/zenlearn.ai',
    linkedIn: 'https://www.linkedin.com/in/zenlearn.ai/',
    facebook: 'https://www.facebook.com/profile.php?id=100011312194742'
  }
};

export const getNavItems = async ({
  locale,
  linkType
}: {
  locale: string;
  linkType: 'navItems' | 'navMenuItems' | 'footerLinks';
}) => {
  const t = await getTranslations({ locale, namespace: 'toolbar' });
  return siteConfig[linkType].map((link) => ({
    label: t(`${link.label}`),
    href: link.href
  }));
};
