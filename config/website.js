const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Piyush Mehta', // Navigation and Site Title
  siteTitleAlt: 'Piyush Mehta Developer', // Alternative Site title for SEO
  siteUrl: 'http://piyushmehta.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  // siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Piyush Mehta',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@coderwhoknows', // Twitter Username
  ogSiteName: 'pyushh', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
