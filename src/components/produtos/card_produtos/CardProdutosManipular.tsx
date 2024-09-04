import { Link } from "react-router-dom"
import Produto from "../../../models/Produto"

interface CardProdutoProps {
    prod: Produto
}

function CardProdutosManipular({ prod }: CardProdutoProps) {
    return (
        <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between h-[70vh]'>
                <div className="flex w-full h-[70%] bg-neutral-700 py-2 px-4 items-center gap-4">
                    <img src={prod.foto} className='h-full w-full' alt="" />
                </div>
                <div className='p-4 h-[30%] bg-green-400'>
                    <h3 className='text-2xl font-bold px-4 py-2 text-center uppercase '>{prod.nome}</h3>
                    <p className="text-lg px-4">Preço: {prod.preco}</p>
                    <p className="text-lg px-4">Descrição: </p>
                </div>

            <div className="flex">
                <Link to={`/editarProduto/${prod.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarProduto/${prod.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardProdutosManipular