import { defineType } from 'sanity'

export const services = defineType({
  name: 'service',
  title: 'Hizmet Alanı',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Başlık',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Açıklama',
      type: 'text',
    },
    {
      name: 'icon',
      title: 'İkon (emoji ya da unicode)',
      type: 'string',
    }
  ]
})
