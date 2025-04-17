import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'jnf3wwzm', // ← senin gerçek Sanity proje ID'in (doğru bu)
  dataset: 'production',
  apiVersion: '2023-01-01', // eski tarihler yerine productiona yakın sabit bir tarih
  useCdn: false, // her zaman en güncel veri
})

