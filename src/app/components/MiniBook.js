
export default function MiniBook({title, description, imageUrl, authors, subtitle}) {
    const sliceDescription = description ? `${description.slice(0, 150)}...` : '';
    return (
        <section className='flex flex-col flex-1/6 gap-4'>
            <div className="w-full flex">
                { imageUrl && 
                    <img 
                        className='w-[100px] h-fit object-cover'
                        src={imageUrl}
                        alt={description}
                    />
                }
                <div className='flex flex-col'>
                    <h1 className='text-lg font-bold'>{title}</h1>
                    {subtitle && <h2 className='text-sm'>{subtitle}</h2>}
                </div>
            </div>
            <p className='text-sm'>{sliceDescription}</p>
            <p className='text-sm'>{authors?.[0] ?? ''}</p>
            <p className='text-sm'>{authors?.[1] ?? ''}</p>
        </section>
    )
}
