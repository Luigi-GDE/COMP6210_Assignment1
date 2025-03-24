import { Link } from 'react-router-dom';
import scp from '/src/data/scp.json';

//card component for home page
function Card(){
    return(<>
    
    {scp.map((item) => (
                <div className='card' key={item.subject}>
                    <Link to={`/scp/${item.subject}`}>
                        <h2>{item.subject}</h2>
                        <p><strong>Class: </strong>{item.class}</p>
                    </Link>
                </div>
            ))}
    
    </>)
}

export default Card;