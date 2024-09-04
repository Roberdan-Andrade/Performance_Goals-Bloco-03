import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer() {
    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-neutral-700 text-white">
                <div className="container flex justify-around items-center py-4">
                    <div>
                    <p className='text-xl font-bold'>
                        The Healing Pad | Copyright: {data}
                    </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className='text-lg'>Acesse nossas redes sociais</p>
                        <div className='flex gap-2'>
                            <a href="" target="_blank">
                                <LinkedinLogo size={48} weight='bold' />
                            </a>
                            <a href="" target="_blank">
                                <InstagramLogo size={48} weight='bold' />
                            </a>
                            <a href="" target="_blank">
                                <FacebookLogo size={48} weight='bold' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer