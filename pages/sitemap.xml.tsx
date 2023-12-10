import type { GetServerSideProps } from 'next'

import { host } from '@/lib/config'
import { getSiteMap } from '@/lib/get-site-map'
import type { SiteMap } from '@/lib/types'

const formatDateToISO = (date) => {
  return date.toISOString().split('T')[0];
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  if (req.method !== 'GET') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify({ error: 'method not allowed' }))
    res.end()
    return {
      props: {}
    }
  }

  const siteMap = await getSiteMap()
  console.log(siteMap.canonicalPageMap)
  console.log('aa')

  // cache for up to 8 hours
  res.setHeader(
    'Cache-Control',
    'public, max-age=28800, stale-while-revalidate=28800'
  )
  res.setHeader('Content-Type', 'text/xml')
  res.write(createSitemap(siteMap))
  res.end()

  return {
    props: {}
  }
}

const createSitemap = (siteMap: SiteMap) => {
  const lastmod = formatDateToISO(new Date());

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${host}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
        <lastmod>${lastmod}</lastmod>
      </url>
      <url>
        <loc>${host}/</loc>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
        <lastmod>${lastmod}</lastmod>
      </url>
      ${Object.keys(siteMap.canonicalPageMap)
        .map((canonicalPagePath) =>
          `
            <url>
              <loc>${host}/${canonicalPagePath}</loc>
              <changefreq>weekly</changefreq>
              <priority>0.5</priority>
              <lastmod>${siteMap.canonicalPageMap}</lastmod>
            </url>
          `.trim()
        )
        .join('')}
    </urlset>
  `;
}

export default () => null
