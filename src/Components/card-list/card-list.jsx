import styles from './card-list.module.css'
import Card from '../card/card'
   
   let CardList = (props) => {
        return (
        <div className={styles.cardlist}>
            {props.monsters.map(monster=>(
            <Card key={monster.id} monster={monster}/>
            ))}</div>
    )
}

export default CardList