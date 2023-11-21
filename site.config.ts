import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'f3bfc392bf8a40d1813fa574355a6d80',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '9b8f3c4d-4be8-4489-a104-0b8a50894b10',
  // basic site info (required)
  name: "googie's tech blog",
  domain: 'tech.googieyu.com',
  author: 'googie',

  // open graph metadata (optional)
  description: "Notion-based blog",

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'googie94',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F9b8f3c4d-4be8-4489-a104-0b8a50894b10%2F8ccd2f2d-ada5-41fa-ae75-7d5ed45fd438%2Frobot.svg?table=block&id=f3bfc392-bf8a-40d1-813f-a574355a6d80&spaceId=9b8f3c4d-4be8-4489-a104-0b8a50894b10&userId=06ffb81e-1596-4870-afa8-e0fab28c3cf1&cache=v2',
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
