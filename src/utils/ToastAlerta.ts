import { toast } from "react-toastify";

export function ToastAlerta(mensagem: string, tipo: string){
    switch(tipo){
        case "Sucesso":
            toast.success(mensagem, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });

            break;

        case "Erro":
            toast.error(mensagem, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });

            break;

        case "Info":
        default:
            toast.info(mensagem, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });

            break;
    }
}