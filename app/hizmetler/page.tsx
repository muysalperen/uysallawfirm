import { client } from '@/lib/client'

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
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Hizmet Alanlarımız</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-white shadow-card rounded-2xl border border-gray-200 p-6 transition hover:shadow-xl"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
            <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}




