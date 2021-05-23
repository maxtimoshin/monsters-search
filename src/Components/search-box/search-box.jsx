import styles from './search-box.module.css'

const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input 
        className={styles.search}
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange} 
         />
    )
}

export default SearchBox