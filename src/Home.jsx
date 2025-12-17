import Navbar from "./components/Navbar"
import { useRef, useState, useEffect } from "react"
import Footer from "./components/Footer";
import toast, { Toaster } from "react-hot-toast";
import { v1 as uuidv1 } from 'uuid';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About"
import Feedback from "./Feedback"
function Home() {
  const ref = useRef();
  const [show, setshow] = useState(false)
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [PasswordArray, setPasswordArray] = useState([])


  // to set the passwords


  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])


  //To save the passwords


  const savePassowrd = () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
      setPasswordArray([...PasswordArray, { ...form, id: uuidv1() }])
      localStorage.setItem("passwords", JSON.stringify([...PasswordArray, { ...form, id: uuidv1() }]))
      setform({ site: "", username: "", password: "" })
      toast.success("Password Saved")
    }
    else if (form.site.length === 0 && form.username.length === 0 && form.password.length === 0) {
      toast.error("Field can't be empty")
    }
    else toast.error("Values must be greater the 3")

  }
  // delete password
  const deletePassowrd = (id) => {
    let c = confirm("Do you really want to delete this password?")
    if (c) {
      setPasswordArray(PasswordArray.filter((item) => item.id != id))
      localStorage.setItem("passwords", JSON.stringify(PasswordArray.filter((item) => item.id != id)))
      toast.success("Password Deleted")

    }
  }

  // edit password
  const editPassowrd = (id) => {
    setform(PasswordArray.filter(i => i.id === id)[0])
    setPasswordArray(PasswordArray.filter((item) => item.id != id))

  }

  //To Change the values

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  // to copy the values 
  const copyText = (text) => {
    navigator.clipboard.writeText(text)
    toast.success("Copied to clipboard")
  }



  return (
    <>
    <Navbar/>
      <Toaster position="top-center" />
      <div className="min-h-screen flex flex-col">
        <div className="ml-auto mr-auto w-full md:w-[65vw] p-4 mt-7">
          <h1 className=" text-4xl font-bold text-center">
            <span className="text-green-500">&lt;</span>
            <span>Pass</span><span className='text-green-500'>X/&gt;</span>
          </h1>
          <p className="text-green-900 text-lg text-center">Your Own Password Database</p>
          <div className="text-black flex flex-col p-4 gap-8 items-center">
            <input value={form.site} onChange={handleChange} placeholder="Enter Website URL" className="rounded-full border border-green-500 w-[72vw] md:w-full p-4 py-1 cursor-pointer" type="text" name="site" id="" />
            <div className="flex flex-col md:flex-row md:w-full justify-between gap-8">
              <input value={form.username} onChange={handleChange} placeholder="Enter Username" className="rounded-full border border-green-500 w-[72vw] p-4 py-1 cursor-pointer" type="text" name="username" />
              <div className="relative">
                <input value={form.password} onChange={handleChange} placeholder="Enter Password" className="rounded-full border border-green-500 md:w-[19vw] w-[72vw] p-4 py-1 cursor-pointer" type={show ? "text" : "password"} name="password" />
                <span className="absolute right-[3px] top-[4px] cursor-pointer">
                  <img onClick={() => setshow(!show)} className="p-1 cursor-pointer" width={26} src={show ? "/icons/eye.png" : "icons/hidden.png"} alt="eye" />
                </span>
              </div>
            </div>
            <button onClick={savePassowrd} className="flex justify-center items-center bg-green-500 rounded-full px-5 py-2 w-fit border border-green-900 hover:bg-green-400 transition-all duration-150 gap-2">
              <lord-icon
                src="https://cdn.lordicon.com/efxgwrkc.json"
                trigger="hover">
              </lord-icon>
              Save</button>
          </div>
          <div className="">
            <h2 className="font-bold md:text-2xl text-1xl py-4">Your Passwords</h2>
            {PasswordArray.length === 0 && <div>No Passwords To Show</div>}
            {PasswordArray.length != 0 &&

              <table className="table-auto md:w-full rounded-md overflow-hidden my-2">
                <thead className=" bg-green-800 text-white">
                  <tr>
                    <th className="py-2">Site</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Password</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-green-100">
                  {PasswordArray.map((item, index, copy) => {
                    return <tr key={index}>
                      <td className="text-center w-32 py-2 border border-white text-[16px]">{item.site}
                        <img className="inline w-5 mx-1 cursor-pointer" src="icons/icons8-copy-50.png" alt="copy" onClick={() => { copyText(item.site) }} />
                      </td>
                      <td className="text-center w-32 py-2 border border-white text-[16px]">{item.username}
                        <img className="inline w-5 mx-1 cursor-pointer" src="icons/icons8-copy-50.png" alt="copy" onClick={() => { copyText(item.username) }} />
                      </td>
                      <td className="text-center w-32 py-2 border border-white text-[16px]">{item.password}
                        <img className="inline w-5 mx-1 cursor-pointer" src="icons/icons8-copy-50.png" alt="copy" onClick={() => { copyText(item.password) }} />
                      </td>
                      <td className="text-center w-32 py-2 border border-white">
                        <div className="flex justify-center md:gap-4 gap-2 items-center rounded">
                          <img onClick={() => { editPassowrd(item.id) }} className="md:w-8 w-7 px-[9px] py-[6px] bg-green-400 rounded-lg border border-black" src="icons/pencil.png" alt="pencil" />
                          <img onClick={() => { deletePassowrd(item.id) }} className="md:w-8 w-7 px-[9px] py-[6px] bg-green-400 rounded-lg border border-black" src="icons/bin.png" alt="bin" />
                        </div>
                      </td>
                    </tr>
                  })}
                </tbody>
              </table>}
          </div>
        </div>
           <Footer/>
  
      </div>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  )
}

export default Home
