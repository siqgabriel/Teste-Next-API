import Image from 'next/image';
import Menu from '@/components/Menu/Menu'

export default function Cabecalho() {

    return (
        <header className='flex w-full h-20 shadow-lg bg-stone-900 shadow-black-500/50 '>
            <div className='flex flex-row items-center'>
                <Image src='/img/logo.png' alt='Logo' width={80} height={50} className='p-2'></Image>
                <Menu />
            </div>
        </header>
    )
}