import Image from 'next/image'

const Gallery: React.FC = () => {
  const images: string[] = [
    '/gallery1.jpg',
    '/gallery2.jpg',
    '/gallery3.jpg',
    '/gallery4.jpg',
    '/gallery5.jpg',
    '/gallery6.jpg',
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Lazy Footage</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative h-64">
              <Image src={src} alt={`Gallery image ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery