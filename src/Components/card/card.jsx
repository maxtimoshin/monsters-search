import styles from './card.module.css'

const Card = (props) =>{
    return (
        <div className={styles.cardcontainer}>
            <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`}/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Card