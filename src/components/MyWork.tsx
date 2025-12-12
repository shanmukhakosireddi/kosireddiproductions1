<section className="bg-[#f8f2ea] py-16 px-6 min-h-screen">
  <div className="max-w-6xl mx-auto">

    {/* TITLE */}
    <h1 className="text-4xl lg:text-5xl font-bold text-center uppercase mb-20">
      My Work
    </h1>

    {/* SHORTS SECTION */}
    <section className="mb-24">
      <h2 className="text-2xl lg:text-3xl font-bold uppercase mb-8">
        Short Form
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="aspect-[9/16] bg-gray-300 rounded-xl 
            flex items-center justify-center text-black/50
            hover:scale-[1.03] transition-transform"
          >
            Short {i + 1}
          </div>
        ))}
      </div>
    </section>

    {/* LONGS SECTION */}
    <section>
      <h2 className="text-2xl lg:text-3xl font-bold uppercase mb-8">
        Long Form
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="aspect-video bg-gray-900 rounded-xl
            flex items-center justify-center text-white/60
            hover:scale-[1.02] transition-transform"
          >
            Long Video {i + 1}
          </div>
        ))}
      </div>
    </section>

  </div>
</section>
