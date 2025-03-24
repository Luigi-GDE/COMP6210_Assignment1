import {useParams} from 'react-router-dom'
import ScpDetails from './ScpDetails.jsx'

//get subject from url and display it on the page
function DisplayPage(){

    const {subject} = useParams();

return(
    <div className='Display'>
        <ScpDetails subject={subject}/>
    </div>

);

}

export default DisplayPage;
