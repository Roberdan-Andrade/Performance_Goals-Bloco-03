import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

import Categoria from "../../../models/Categoria";
import Produto from "../../../models/Produto";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormularioProduto() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: '', })
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()

    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto)
        } catch (error: any) {
            ToastAlerta('Erro ao buscar produtos por ID!', "Erro")
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            ToastAlerta('Erro ao buscar categorias por ID!', "Erro")
        }
    }

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias)
        } catch (error: any) {
            ToastAlerta('Erro ao buscar categorias!', "Erro")
        }
    }

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarProdutoPorId(id)
        }
    }, [id])

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        })
    }, [categoria])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria,
        });
    }

    function retornarManipulação() {
        navigate('/ManipularProdutos');
    }

    async function gerarNovaProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto);
                ToastAlerta('Produto atualizado com sucesso', 'Sucesso')

            } catch (error: any) {
                ToastAlerta('Erro ao atualizar o Produto', 'Erro')
            }

        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto)
                ToastAlerta('Produto cadastrado com sucesso', 'Sucesso');

            } catch (error: any) {
                ToastAlerta('Erro ao cadastrar o Produto', 'Erro');
            }
        }

        setIsLoading(false)
        retornarManipulação()
    }

    const carregandoCategoria = categoria.nome === '';

    return (
        <div className="flex flex-col items-center mx-auto bg-cyan-600">
            <h1 className="my-8 text-4xl text-center">
                {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
            </h1>

            <form className="flex flex-col gap-4 w-1/2" onSubmit={gerarNovaProduto}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Nome do Produto</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        required
                        className="border-2 border-slate-700 p-2 rounded"
                        value={produto.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Preço do Produto</label>
                    <input
                        type="text"
                        placeholder="Preço"
                        name="preco"
                        required
                        className="border-2 border-slate-700 p-2 rounded"
                        value={produto.preco}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Foto do produto</label>
                    <input
                        type="text"
                        placeholder="Foto"
                        name="foto"
                        required
                        className="border-2 border-slate-700 p-2 rounded"
                        value={produto.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p>Categoria do Produto</p>
                    <select name="categoria" id="categoria" className='border-slate-800 p-2 border rounded'
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione um Categoria</option>

                        {categorias.map((categoria) => (
                            <>
                                <option value={categoria.id} >{categoria.nome}</option>
                            </>
                        ))}

                    </select>
                </div>
                <div className="flex justify-center ">
                <button
                    type='submit'
                    className='flex justify-center bg-green-400 hover:bg-green-600 disabled:bg-red-300 mx-3 mb-6 py-2 rounded w-1/2 font-bold text-white'
                    disabled={carregandoCategoria}
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
                    }
                </button>

                <button onClick={retornarManipulação} className='bg-red-400 hover:bg-red-600 mx-3 mb-6 py-2 rounded w-1/2 font-bold text-white' >Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default FormularioProduto;