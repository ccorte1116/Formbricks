import formbricks from '@formbricks/js'

if (typeof window !== 'undefined') {
  formbricks.init({
    environmentId: 'clzgrdq8j000673lkpg1pa78u',
    userId: 'testUser',
    apiHost: 'https://app.formbricks.com',
    Headers: { 'x-Api-Key': '509fcfa39ba57cfdc1365ec3bb3a6c2c' }
  })
}

export default formbricks
