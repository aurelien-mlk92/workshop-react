import './Navbar.css'


function Navbar ({nomDuSite , Logo, count, somme }) {



return (
    <>
    <div className='Navbar'>

    <p>{Logo}</p>
    <p>{nomDuSite}</p>
    <p className='count'>Panier:{count}</p>
    <p className='somme'>Total:{somme}</p>

  
    </div>
    </>
)


};

export default Navbar;