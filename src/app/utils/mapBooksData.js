export function mapBoooksData(booksData) {
    return booksData.map(book => {
        const { title, subtitle, authors, description, imageLinks } = book.volumeInfo;
        return {
            title,
            subtitle,
            authors,
            description,
            imageUrl: imageLinks?.smallThumbnail ?? ''
        };
    });
}
