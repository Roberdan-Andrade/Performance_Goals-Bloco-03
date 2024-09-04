import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"

import ListaCategorias from "./components/categorias/lista_categorias/ListaCategorias"
import FormularioCategoria from "./components/categorias/form_categoria/FormCategoria"
import DeletarCategoria from "./components/categorias/deletar_categoria/DeletarCategoria"

function App() {
   return (
      <>
         <BrowserRouter>
            <Navbar />
            <div className="min-h-[80vh]">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Home" element={<Home />} />
                  <Route path="/Categorias" element={<ListaCategorias />}/>
                  <Route path="/CadastroCategoria" element={<FormularioCategoria />}/>
                  <Route path="/EditarCategoria/:id" element={<FormularioCategoria />}/>
                  <Route path="/DeletarCategoria/:id" element={<DeletarCategoria />}/>
               </Routes>
            </div>
            <Footer />
         </BrowserRouter>
      </>
   )
}

export default App