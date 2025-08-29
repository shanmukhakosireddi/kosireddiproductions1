const packages = [
  {
    id: 'basic',
    title: 'Basic Package',
    price: '₹269',
    color: 'emerald',
    features: [
      'Shooting',
      'Lighting',
      'Color Grading',
      '1 Video (1–10 mins)'
    ],
    subtext: '⏱ Fast & Simple Delivery',
    idealFor: '👤 Ideal for: Students, Solo Creators',
    accentColor: 'bg-emerald-100 text-emerald-800'
  },
  {
    id: 'standard',
    title: 'Standard Package',
    price: '₹399',
    color: 'blue',
    features: [
      'Shooting',
      'Lighting',
      'Color Grading',
      'Bluetooth Mic',
      'Editing Included',
      '1 Video (1–10 mins)',
      '2 Revisions'
    ],
    subtext: '🎯 Ideal for: Reels, YouTube Shorts, Promo Videos',
    idealFor: '',
    accentColor: 'bg-blue-100 text-blue-800',
    popular: true
  },
  {
    id: 'premium',
    title: 'Premium Package',
    price: '₹699',
    color: 'purple',
    features: [
      'Shooting',
      'Lighting',
      'Color Grading',
      'Bluetooth Mic',
      'Full Editing',
      '1 Video (1–30 mins)',
      '4 Revisions'
    ],
    subtext: '🎬 Ideal for: Vlogs, Interviews, Client Work',
    idealFor: '',
    accentColor: 'bg-purple-100 text-purple-800'
  },
  // New Editing 1 Service
  {
    id: 'editing1',
    title: 'Editing 1',
    price: '₹499',
    color: 'orange',
    features: [
      'Editing Only',
      'Delivery Time: 2–3 Days',
      '2 Revisions',
      'YouTube Channel Optimization'
    ],
    subtext: '✂ Perfect for quick turnaround edits',
    idealFor: '🎯 Ideal for: Short videos, quick projects',
    accentColor: 'bg-orange-100 text-orange-800'
  },
  // New Editing 2 Service
  {
    id: 'editing2',
    title: 'Editing 2',
    price: '₹899',
    color: 'red',
    features: [
      'Full Editing',
      'Delivery Time: 3–5 Days',
      '4 Revisions',
      'YouTube Channel Optimization & Thumbnails'
    ],
    subtext: '🔥 Best for high-quality, longer projects',
    idealFor: '🎥 Ideal for: YouTubers, Vloggers',
    accentColor: 'bg-red-100 text-red-800'
  }
];

const Services = () => {
  return (
    <section className="bg-[#f8f2ea] py-12 px-6 lg:px-12 min-h-screen w-full relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-800">
          MY SERVICES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-500 to-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">{pkg.price}</div>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${pkg.accentColor}`}>
                  {pkg.subtext}
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {pkg.idealFor && (
                <div className="text-sm text-gray-600 mb-6 text-center italic">
                  {pkg.idealFor}
                </div>
              )}
              
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                pkg.popular 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-gray-800 hover:bg-gray-900 text-white'
              }`}>
                Choose Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
