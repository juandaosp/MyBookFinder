import { Book, } from 'lucide-react';

export default function MainHeader({ title, theme }) {
    const splitIndex = Math.floor(title.length * 0.4); 
    const firstPart = title.slice(0, splitIndex);
    const secondPart = title.slice(splitIndex);
    const themeClasses = theme === 'dark' ? 'bg-slate-50' : 'bg-white';
    
    return (
        <section className='w-full'>
            <h1 className='w-full px-6 lg:px-8 py-14 flex items-center justify-center border-b border-solid border-slate-500'>
                <span className='font-bold text-3xl sm:text-4xl mr-2 text-slate-800'>
                    { firstPart }
                </span>
                <span className='font-bold text-3xl sm:text-4xl text-slate-800 underline decoration-wavy decoration-emerald-400 underline-offset-3'>
                    { secondPart }
                </span>
                <Book className='ml-6'/>
            </h1>
        </section>
    )
}
