import * as React from 'react'
import Head from 'next/head'

import * as config from '@/lib/config'
import * as types from '@/lib/types'
import { getSocialImageUrl } from '@/lib/get-social-image-url'

export const PageHead: React.FC<
  types.PageProps & {
    title?: string
    description?: string
    image?: string
    url?: string
  }
> = ({ site, title, description, pageId, image, url }) => {
  const rssFeedUrl = `${config.host}/feed`

  title = title ?? site?.name
  description = description ?? site?.description

  // const socialImageUrl = getSocialImageUrl(pageId) || image
  const socialImageUrl = image

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fefffe" key="theme-color-light"/>
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#2d3439" key="theme-color-dark"/>

      <meta name='robots' content='index,follow' />
      <meta property='og:type' content='website' />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-4VE5R687E5`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4VE5R687E5', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />

      {site && (
        <>
          <meta property='og:site_name' content={site.name} />
        </>
      )}

      {description && (
        <>
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
        </>
      )}

      {socialImageUrl && (
        <>
          <meta property='og:image' content={socialImageUrl} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      )}

      {url && (
        <>
          <link rel='canonical' href={url} />
          <meta property='og:url' content={url} />
        </>
      )}

      <link
        rel='alternate'
        type='application/rss+xml'
        href={rssFeedUrl}
        title={site?.name}
      />

      <meta property='og:title' content={title} />
      <title>{title}</title>
    </Head>
  )
}
