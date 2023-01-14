import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import Home from './pages/Home';
import Details from './pages/Details';
import "./styles/App.css"
import "./styles/details.css"
import "./styles/header.css"
import "./styles/home.css"
import "./styles/states.css"
import "./styles/statesData.css"
import "./styles/mediaquery.css"

function App() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='states' element={<Details />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
