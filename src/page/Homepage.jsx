import { useEffect, useState } from "react";
import axios from "axios";
import NavbarWithStyling from "../components/navbar/navbarWithStyling";
import { Button } from "../components/Elements/button/Button";
import axiosInstance from "../api/axiosInstance";

const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function Homepage() {
  const [shops, setShops] = useState([]); // 1. store data secara state react nya
  const [error, setError] = useState(null); // 9. state untuk menyimpan error
  const [loading, setLoading] = useState(true); // 11. state Loading

  const listMenu = ["Home", "About", "Logout"];

  // 2. fetch data => fetch / axios
  useEffect(() => {
    // 4. function async untuk fetch data lewat API axios
    const fetchShops = async () => {
      setLoading(true);
      try {
        // 3. gunakan axios
        const response = await axiosInstance.get("/shops"); //37. gunakan axiosInstance url dari BE shops

        // 6. menyimpan data ke state (update)
        const data = response.data; // defind ke variabel
        if (data.isSuccess) {
          // set data hasil api ke shops
          setShops(data.data.shops);
        } else {
          setError("error");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        // 12. saat fetch API simpan di Finaly
        setLoading(false);
      }
    };

    // 5. panggil functionya
    fetchShops();
  }, []); // 7. tambah defind dependensi array kosong

  return (
    <>
      <div className="min-h-screen w-full ">
        <div className="bg-white py-24 sm:py-32 shadow-xl rounded-xl mx-6 lg:mx-auto max-w-7xl">
          <div className="grid gap-16 px-6 lg:px-12 xl:grid-cols-3">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold tracking-tight text-teal-800">
                Meet Our Leadership
              </h2>
              <p className="mt-4 text-lg text-teal-600 leading-relaxed">
                We are a dynamic team of passionate individuals dedicated to
                delivering exceptional results.
              </p>
            </div>

            <ul className="grid gap-8 sm:grid-cols-2 xl:col-span-2">
              {people.map((person) => (
                <li
                  key={person.name}
                  className="flex items-center gap-x-6 p-6 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
                >
                  <img
                    src={person.imageUrl}
                    alt={person.name}
                    className="h-16 w-16 rounded-full object-cover border-4 border-teal-500 shadow-md"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-teal-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-medium text-teal-700">
                      {person.role}
                    </p>
                  </div>
                </li>
              ))}
              <div className="max-w-xl flex justify-center items-center text-center">
                <p className="mt-4 text-lg text-teal-600 leading-relaxed">
                  We are a dynamic team of passionate individuals dedicated to
                  delivering exceptional results. Our leadership fosters
                  innovation, collaboration, and excellence in everything we do.
                </p>
              </div>
            </ul>
          </div>
        </div>

        <header className="flex justify-between items-center p-6 bg-teal-700 shadow-xl w-full rounded-b-xl">
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-bold text-white">Binar Car Rental</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-white hover:text-teal-200 transition">
                Our Services
              </a>
              <a href="#" className="text-white hover:text-teal-200 transition">
                Why Us
              </a>
              <a href="#" className="text-white hover:text-teal-200 transition">
                Testimonial
              </a>
              <a href="#" className="text-white hover:text-teal-200 transition">
                FAQ
              </a>
            </nav>
          </div>

          <div className="flex space-x-4">
            <button className="px-5 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition transform hover:scale-105">
              Login
            </button>
            <button className="px-5 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition transform hover:scale-105">
              Register
            </button>
          </div>
        </header>

        <main className="text-center w-full">
          {/* 13. tambah loading untuk UI/UX */}
          {loading && <p>Loading...</p>}
          {/* 10. kondisional rendering */}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && (
            <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 8. panggil shop sebagai data */}
              {shops.map((shop, index) => (
                <div
                  key={index}
                  className="p-5 border rounded-xl bg-teal-50 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  <img
                    src={shop.products[0].images[0]}
                    alt={shop.products[0].name}
                    className="w-full h-40 object-cover mb-4 rounded-md shadow-md"
                  />
                  <h3 className="font-semibold text-teal-900">
                    {shop.products[0].name}
                  </h3>
                  <p className="text-teal-700 font-bold">
                    Rp {shop.products[0].price} / hari
                  </p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
                    <span>4 orang</span>
                    <span>Manual</span>
                    <span>Tahun 2020</span>
                  </div>
                  <button className="w-full px-4 py-2 mt-4 text-white bg-teal-600 rounded-md hover:bg-teal-700 transition transform hover:scale-105">
                    Pilih Mobil
                  </button>
                </div>
              ))}
            </section>
          )}
        </main>
      </div>
    </>
  );
}

export default Homepage;
