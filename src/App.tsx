import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"

import ListaCategorias from "./components/categorias/lista_categorias/ListaCategorias"
import FormularioCategoria from "./components/categorias/form_categoria/FormCategoria"
import DeletarCategoria from "./components/categorias/deletar_categoria/DeletarCategoria"

import ListaProdutos from "./components/produtos/lista_produtos/ListaProdutos"
import FormularioProduto from "./components/produtos/form_produto/FormProduto"
import DeletarProduto from "./components/produtos/deletar_produto/DeletarProduto"

import { ToastContainer } from "react-toastify"

function App() {
   return (
      <>
         <ToastContainer />
         <BrowserRouter>
            <Navbar />
            <div className="min-h-[80vh]">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Home" element={<Home />} />
                  <Route path="/Categorias" element={<ListaCategorias />} />
                  <Route path="/CadastroCategoria" element={<FormularioCategoria />} />
                  <Route path="/EditarCategoria/:id" element={<FormularioCategoria />} />
                  <Route path="/DeletarCategoria/:id" element={<DeletarCategoria />} />

                  <Route path="/produtos" element={<ListaProdutos />} />
                  <Route path="/cadastroProduto" element={<FormularioProduto />} />
                  <Route path="/editarProduto/:id" element={<FormularioProduto />} />
                  <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
               </Routes>
            </div>
            <Footer />
         </BrowserRouter>
      </>
   )
}

export default App