import { Link } from 'react-router-dom';
//navbar component
function NavMenu() {
    return (
//HGome nave menu always there by default
        <nav>
            <div className='item' key='Home'>
                <Link to={`/scp/Home`}>
                <span>&#x1F3E0;</span> Home
                </Link>
            </div>
        </nav>
    );

}

export default NavMenu;
