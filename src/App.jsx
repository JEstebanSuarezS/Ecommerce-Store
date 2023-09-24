import Header from "./components/shared/Header"
import Sidebar from "./components/shared/Sidebar"

function App() {

  return (
    <>
      <div className="bg-[#262837] w-full min-h-screen">
        <Sidebar />
        <Header />
      </div>
    </>
  )
}

export default App
