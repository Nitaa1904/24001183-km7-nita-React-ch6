import { useState } from "react";
import "./NavbarWithStyling.css";
import About from "../about/About";
import { Button } from "../Elements/button/Button";

// 23. propstnya simpan (onLogout)
const NavbarWithStyling = ({ menu, username, age, address, onLogout }) => {
  const [biodata, setBiodata] = useState({});

  function handleClick(username) {
    console.log(`clicked ${username}`);
    setBiodata({ ...biodata, username, age, address });
  }

  return (
    <div className="flex flex-col items-center  w-full">
      <nav className="navbar w-full bg-gradient-to-r from-teal-500 to-cyan-600 shadow-xl rounded-b-2xl p-6 flex justify-between items-center fixed top-0 left-0 z-50">
        <ul className="list flex flex-wrap space-x-6">
          <li className="item">
            <a
              href="#"
              className="link text-white hover:text-gray-300 transition-all"
            >
              Akun
            </a>
          </li>
        </ul>
        <header className="text-white font-bold text-2xl">Welcome</header>
        <h1 className="title text-white text-3xl font-extrabold drop-shadow-md">
          FSW 2 - {username}
        </h1>
        {/* 22. buat button onclick={onLogout} */}
        <Button handlerAction={onLogout}>Logout</Button>
      </nav>
      <main className="w-full max-w-4xl p-6 bg-white rounded-xl shadow-2xl drop-shadow-lg shadow-teal-900/50 m-16">
        <About name={biodata.username} address={biodata.address} />
      </main>
    </div>
  );
};

export default NavbarWithStyling;
