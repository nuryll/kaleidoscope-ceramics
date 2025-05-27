'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-white px-6 py-12 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative">
        {/* Text Section */}
        <div>
          <p className="text-sm text-gray-400 mb-2">Kaleidoscope Collection</p>
          <h1 className="text-4xl font-bold text-black mb-4 leading-tight">
            Handcrafted <br /> Beauty in Every <br /> Curve
          </h1>
          <p className="text-gray-600 mb-6">
            Discover our collection of small-batch, uniquely glazed ceramics — made to warm your home and soul.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm">Shop now</button>
            <button className="border border-black text-black px-5 py-2 rounded-full text-sm">Explore</button>
          </div>
        </div>

        {/* Image Stack */}
        <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px]">
          {/* Large image behind */}
          <Image
            src="/images/cup-stack.jpg"
            alt="Cup Stack"
            className="rounded-lg absolute bottom-0 left-0 w-64 md:w-64 shadow-xl z-10 translate-x-4 translate-y-6"
            width={538}
            height={564}
          />

          {/* Small image in front */}
          <Image
            src="/images/mug.jpg"
            alt="Mug"
            className="rounded-lg absolute top-20 right-16  md:left-60 w-52 shadow-xl z-20 -translate-x-6 -translate-y-2"
            width={348}
            height={328}
          />
        </div>
      </div>
    </section>
  )
}
