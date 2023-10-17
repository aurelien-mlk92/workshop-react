import './Card.css'



function Card ({title , description , image, price, count, setCount, somme , setSomme } ) {

    function handleClick(){
        setCount(count + 1);
        setSomme(somme + price);
    }


    return (

        <div className='container'>
        <img className='img'src={image} alt={title}/>
        <div className='text'>
            <p className='title'>{title}</p>
            <p className='des'>{description}</p>
            <p className='price'>{price}</p>
            <button className='button'onClick={handleClick}>Ajouter au panier</button>
        </div>
     
    
        </div>
    )

};



export default Card;