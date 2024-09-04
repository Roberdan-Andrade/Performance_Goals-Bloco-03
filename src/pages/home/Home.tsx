import { Link } from "react-router-dom"
import ModalProduto from "../../components/produtos/modal_produto/ModalProduto"

function Home() {
    return (
        <div className="bg-cyan-600 flex justify-center min-h-[80vh]"> {/*Inicio div 1*/}

            <div className="container grid grid-cols-2 text-white"> {/*Inicio div 2*/}

                <div className="flex flex-col gap-4 items-center justify-center py-4"> {/*Inicio div 3.1*/}
                    <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
                    <p className="text-xl">Encontre aqui os remedios mais avançados</p>

                    <div className="flex justify-around gap-4">
                        <Link to='/produtos' className='hover:underline'>Ver Remedios e Produtos</Link>
                        <ModalProduto />
                    </div>
                </div> {/*Final div 3.1*/}

                <div className="flex justify-center items-center"> {/*Inicio div 3.2*/}
                    <img className="w-2/3 h-2/3 rounded-[25%]" src="https://ik.imagekit.io/Roberdan42/Outros/Cruz_Verde.jpg?updatedAt=1725453174733" alt="Imagem pagina home" />
                </div>
            </div>
        </div>
    )
}

export default Home