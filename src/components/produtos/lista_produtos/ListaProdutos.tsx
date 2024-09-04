import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import { Triangle } from "react-loader-spinner";
import CardProdutos from "../card_produtos/CardProdutos";
import Produto from "../../../models/Produto";
import { toastAlerta } from "../../../utils/ToastAlerta";

function ListaProdutos() {
   const [produtos, setProdutos] = useState<Produto[]>([]);

   async function buscarProdutos() {
      try {
         await buscar('/produtos', setProdutos);
      } catch (error: any) {
         toastAlerta('Erro ao buscar produtos!', "Erro")
      }
   }

   useEffect(() => {
      buscarProdutos();
   }, [produtos.length]);

   return (
      <>
         <div className="bg-cyan-600 min-h-[80vh]">
            {produtos.length === 0 && (
               <Triangle
                  visible={true}
                  height="20%"
                  width="20%"
                  color="#404040"
                  ariaLabel="triangle-loading"
                  wrapperStyle={{
                     'background-color': '#0891b2',
                     'display': 'flex',
                     'justify-content': 'center',
                     'padding-top': '20vh',
                     'padding-bottom': '20vh'
                  }}
                  wrapperClass=""
               />
            )}

            <div className='container mx-auto py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
               {produtos.map((produto) => (
                  <CardProdutos key={produto.id} prod={produto} />
               ))}
            </div>
         </div>
      </>
   );
}

export default ListaProdutos;