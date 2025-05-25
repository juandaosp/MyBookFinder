export function mapBoooksData(booksData) {
    return booksData.map(book => {
        const { title, subtitle, authors, description, imageLinks } = book.volumeInfo;
        console.log('book', book);
        console.log('imageLinks', imageLinks);
        console.log('authors', authors);
        return {
            title,
            subtitle,
            authors,
            description,
            imageUrl: imageLinks?.smallThumbnail ?? ''
        };
    });
}
