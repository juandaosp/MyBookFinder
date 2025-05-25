import MiniBook from "../components/MiniBook";
import { mapBoooksData } from "../utils/mapBooksData";

export default function MiniBookContainer({items}) {
    const books = mapBoooksData(items);
    return (
        <section className='w-full flex flex-wrap px-6 gap-6'>
            {
                books && books?.map((book, key) => {
                    const { title, subtitle, description, imageUrl, authors} = book;
                    return (
                        <MiniBook
                            key={key}
                            title={title || ''}
                            subtitle={subtitle || ''}
                            description={description || ''}
                            imageUrl={imageUrl || null}
                            authors={authors || []}
                        />
                    )
                })
            }
        </section>
    )
}