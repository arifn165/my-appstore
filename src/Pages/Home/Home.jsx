import React from "react";
import appsData from "../../data/appsData";

const Home = () => {
  // টপ রেটেড অ্যাপ বের করা (rating অনুসারে descending)
  const trendingApps = [...appsData].sort((a, b) => b.rating - a.rating).slice(0, 4);

  // ক্যাটাগরি অনুযায়ী অ্যাপ বের করার জন্য ইউনিক ক্যাটাগরি গুলো বের করবো
  const categories = [...new Set(appsData.map(app => app.category))];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Slider Section: তুমি চাইলে পরে যোগ করতে পারো */}

      {/* Trending Apps */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Trending Apps</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {trendingApps.map(app => (
            <div key={app.id} className="border p-4 rounded shadow hover:shadow-lg cursor-pointer">
              <img src={app.thumbnail} alt={app.name} className="w-full h-32 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-2">{app.name}</h3>
              <p>Rating: {app.rating}</p>
              <p>Downloads: {app.downloads.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category-wise Apps */}
      {categories.map(category => (
        <section key={category} className="mt-8">
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {appsData
              .filter(app => app.category === category)
              .map(app => (
                <div key={app.id} className="border p-4 rounded shadow hover:shadow-lg cursor-pointer">
                  <img src={app.thumbnail} alt={app.name} className="w-full h-32 object-cover rounded" />
                  <h3 className="text-lg font-semibold mt-2">{app.name}</h3>
                  <p>Rating: {app.rating}</p>
                  <p>Downloads: {app.downloads.toLocaleString()}</p>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;
