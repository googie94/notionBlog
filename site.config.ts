import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'c428d508e951416cb19110eb73562afe',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'e3cae29d-95d5-4502-84dc-2d62d30f1f81',

  // basic site info (required)
  name: '플랩풋볼',
  domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
  author: '플랩풋볼',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  // defaultPageIcon: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe3cae29d-95d5-4502-84dc-2d62d30f1f81%2F66125c74-f2ea-47c4-9025-9bdca849074f%2Fplab_logo_eng.svg?table=block&id=c428d508-e951-416c-b191-10eb73562afe&spaceId=e3cae29d-95d5-4502-84dc-2d62d30f1f81&userId=&cache=v2',
  // defaultPageCover: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe3cae29d-95d5-4502-84dc-2d62d30f1f81%2F071f07f2-d773-4bc3-a4ed-249d8bb8bd0b%2Fnotion_cover.png?table=block&id=c428d508-e951-416c-b191-10eb73562afe&spaceId=e3cae29d-95d5-4502-84dc-2d62d30f1f81&width=2000&userId=06ffb81e-1596-4870-afa8-e0fab28c3cf1&cache=v2',
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/agreement': '3f4e17a0f36f4dde8c803b5b01628eca',
    '/guideline': '6cebf9e7c2824b98aaa569f0a74c3afa'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
