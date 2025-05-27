'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-12 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <p className="bg-primaryblue border inline-block text-black px-2 py-1 mb-10 tracking-wide">Kaleidoscope Collection</p>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Handcrafted <br /> Beauty in Every <br /> Curve
          </h1>
          <p className="text-gray-600 mb-6 max-w-md">
            Discover our collection of small-batch, uniquely glazed ceramics — made to warm your home and soul.
          </p>
          <div className="flex gap-4">
            <button className="bg-primaryblue border border-black text-black px-5 py-2 rounded-full text-sm">Shop now</button>
            <button className="border border-black text-black px-5 py-2 rounded-full text-sm">Explore</button>
          </div>
        </div>

        {/* Images */}
        <div className="relative h-[420px]">
          <Image
            src="/images/cup-stack.jpg"
            alt="Cup Stack"
            className="rounded-lg absolute bottom-0 left-0 w-56 md:w-64 shadow-xl z-0"
            width={538}
            height={564}
          />
          <Image
            src="/images/mug.jpg"
            alt="Mug"
            className="left-20 md:left-60 rounded-lg absolute w-44 md:w-52 shadow-2xl z-10"
            width={348}
            height={328}
          />
        </div>
      </div>
    </section>
  );
}

