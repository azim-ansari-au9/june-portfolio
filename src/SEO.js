import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SEOTags({
  title = 'Azim Ansari | Software Development Engineer',
  description = 'Portfolio of Azim Ansari, Node.js and JavaScript developer specializing in backend development, scalable systems, and modern web applications.',
  path = '/',
  image = '/azim.jpg'
}) {
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
  const url = origin ? origin + path : path;

  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Azim Ansari',
    url: url,
    sameAs: [
      'https://github.com/azim-ansari-au9',
      'https://www.linkedin.com/in/azim-ansari-37aa421a6/',
      'https://twitter.com/azimpanjwar'
    ],
    jobTitle: 'Software Development Engineer',
    knowsAbout: ['Node.js', 'JavaScript', 'Express', 'MongoDB', 'AWS', 'React']
  };

  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Azim Ansari Portfolio',
    url: origin || '/',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${origin}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <meta name="author" content="Azim Ansari" />
      <meta name="keywords" content="Azim Ansari, Node.js, JavaScript, Backend Developer, React, Express, MongoDB, Portfolio" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image.startsWith('http') ? image : origin + image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : origin + image} />

      <script type="application/ld+json">
        {JSON.stringify(jsonLdPerson)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(jsonLdWebsite)}
      </script>
    </Helmet>
  );
}

export default SEOTags; 