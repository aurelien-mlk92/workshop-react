import data from '/Users/Ags92/Documents/WCS/JS/Workshop-React2/react1/src/data/data.json'
import Card from "../Card/Card";
import './cardList.css'




function CardList ({count , setCount, somme , setSomme}) {



    return (
        <>
       
        <div className='cardList'>

        {data.map((article) => (

            
                <Card key={article.id}
                title={article.title}
                description={article.description}
                price = {article.price}
                image = {article.image}
                count = {count}
                setCount = {setCount}
                somme = {somme}
                setSomme = {setSomme}
        
                />
                
            
        ))}


        </div>
        </>

        )
}



export default CardList;