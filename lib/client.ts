import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'jnf3wwzm',  // senin Sanity proje ID'n
  dataset: 'production',  // genelde "production"
  useCdn: true,
})

