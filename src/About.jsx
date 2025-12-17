import React from 'react'
import  Navbar from "./components/Navbar"
import  Footer from "./components/Footer"
const About = () => {
  return (
  <>
  <Navbar/>
 
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">
          About <span className="text-green-500">PassX</span>
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed text-center mb-6">
          Hi, I’m <span className="font-semibold text-slate-900">Raza</span>.  
          I built <span className="font-semibold text-green-500">PassX</span>, a
          simple and secure password manager created using{" "}
          <span className="font-medium">React</span> and{" "}
          <span className="font-medium">Tailwind CSS</span>.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div className="p-5 rounded-xl bg-green-50">
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              🚀 Why PassX?
            </h2>
            <p>
              PassX helps you store and manage your passwords easily in one
              place, with a clean UI and fast performance.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50">
            <h2 className="text-xl font-semibold text-slate-700 mb-2">
              🛠 Tech Stack
            </h2>
            <ul className="list-disc list-inside">
              <li>React (Component-based UI)</li>
              <li>Tailwind CSS (Modern styling)</li>
              <li>LocalStorage (Data persistence)</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-6">
          This project was built to improve my frontend skills and create a
          real-world React application with a smooth user experience.
        </p>
      </div>
    </div>
  <Footer />
  </>
  )
}

export default About