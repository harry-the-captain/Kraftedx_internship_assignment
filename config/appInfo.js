// config/appInfo.js
export const websiteDomain = process.env.NEXT_PUBLIC_APP_DOMAIN;

export const appInfo = {
  appName: 'SuperTokens Demo App',
  // websiteDomain,
  // apiDomain: websiteDomain,
  // apiBasePath: '/api/auth',

  apiDomain: process.env.NEXT_PUBLIC_API_DOMAIN || "http://localhost:3000",
  websiteDomain: process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || "http://localhost:3000",
  apiBasePath: "/api/auth",
  websiteBasePath: '/auth',
};
