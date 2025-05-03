import { FacebookLogo, InstagramLogo, LinkedinLogo, Moon, Sun } from "phosphor-react"
import Button from "./components/Button"
import { useState } from "react";

function App() {
  function getInitialDarkMode() {
    const darkModeLocalStorage = localStorage.getItem("darkMode");
    return darkModeLocalStorage === "true" ? true : false; 
  }

  const [darkMode, setDarkMode] = useState(getInitialDarkMode());

  function redirectPage(url) {
    window.open(url, "_blank");
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);

  localStorage.setItem("darkMode", !darkMode);

  }





  return (
    <div className={` w-full h-screen ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <header className={`flex justify-end p-4 ${darkMode ? "text-white" : "text-black"}`}>
        <Button variant="secondary"
          onClick={toggleDarkMode}>
            {!darkMode  ?  <Moon size={20} /> : <Sun size={20} />}
         
        </Button>
      </header>
      <main className="w-full h-[90%] flex justify-center items-center">
        <section className={`border border-gray-400 ${darkMode ? "bg-gray-900 text-white" : "bg-white"} p-8 rounded-lg w-fit flex flex-col justify-center items-center gap-4">`}>
          <img className="w-32 h-32 rounded-full border-4 border-gray-300" src="https://github.com/AnaMenires.png" alt="Foto de perfil do usuário" />

          <h1 className="font-bold text-2xl p-3">Ana Menires</h1>

{/* Web Developer */}
          <p className="text-slate-500 pb-4">Desenvolvedora Full Stack</p>

          {/* Seção de Links */}
          <div className="space-y-4">
            <Button onClick={ () => redirectPage("https://www.instagram.com/menires/")}>
              <InstagramLogo size={24} />
              <p>Instagram</p>
            </Button>

            <Button onClick={ () => redirectPage("https://www.linkedin.com/in/ana-silva-front-end-developer/")}>
              <LinkedinLogo size={24} />
              <p>Linkedin</p>
            </Button>

            <Button onClick={ () => redirectPage("https://www.facebook.com/ana.menires.1/")}>
              <FacebookLogo size={24} />
              <p>Facebook</p>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
