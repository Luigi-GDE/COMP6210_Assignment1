import { Link } from 'react-router-dom';
//navbar component
function NavMenu() {
    return (
//HGome nave menu always there by default
        <nav>
            <div className='item' key='Home'>
                <Link to={`/scp/Home`}>
                <i class="bi bi-house"></i> Home
                </Link>
            </div>
        </nav>
    );

}

export default NavMenu;
