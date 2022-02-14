export default ({ env }, inject) => {
  const contentful = require('contentful')
  const client = contentful.createClient({
    space: env.CONTENTFUL_SPACE_ID,
    accessToken: env.CONTENTFUL_ACCESS_TOKEN
  })
  inject('client', client)
}

