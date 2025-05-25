import SearchBar from "../components/SearchBar";

export default function SearchBarContainer({searchString, setSearchString}) {
    const inputHandler = searchString => {
        setSearchString(searchString);
    };
    return <SearchBar searchString={searchString} onInput={inputHandler} />

}
