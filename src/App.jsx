// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// reset CSS
import './style/reset.css'
import './style/all.css'
import { Route, Routes, HashRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="App vh100 relative">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/offline" element={<OfflinePage />} />
          <Route path="/online/:gameRecordId" element={<Online />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menu" element={<Menu />} /> */}
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
