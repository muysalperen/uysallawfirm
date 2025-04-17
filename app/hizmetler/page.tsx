import { client } from '../../lib/client'
import Image from 'next/image'

type Service = {
  _id: string
  title: string
  description: string
  icon: string
}

export default async function HizmetlerPage() {
  const query = `*[_type == "service"] | order(_createdAt desc){
    _id,
    title,
    description,
    icon
  }`

  const services: Service[] = await client.fetch(query)

  return (
    <main className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Hizmet Alanlarımız</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc) => (
          <div
            key={svc._id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start"
          >
            {svc.icon && (
              <div className="mb-4">
                <Image src={svc.icon} width={40} height={40} alt={svc.title} />
              </div>
            )}
            <h2 className="text-2xl font-semibold mb-2">{svc.title}</h2>
            <p className="text-gray-700 flex-1">{svc.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}




