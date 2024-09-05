import createMiddleware from 'next-intl/middleware';
import { localePrefix } from './navigation';
import { locales } from './config/site';

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'en'
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(en|hi)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};
