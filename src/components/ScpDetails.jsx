import { useParams } from "react-router-dom";
import scp from "/src/data/scp.json";

function ScpDetails() {
    //get subject details from url
    const { subject } = useParams();
    //default to home
    const currentSubject = subject || "Home";

    const item = scp.find((p) => p.subject.toString() === currentSubject);

    //if no scp's are found
    if (!item) {
        return <p>SCP not found</p>;
    }

    //otherwise display the selected subjects details
    return (
        <>
            <h1>{item.subject}</h1>
            <h3 className="text-center"><strong>Class: </strong>{item.class}</h3>
            <br />
            <p><strong>Description: </strong>{item.desc}</p>
            <p><img src={item.img} alt={item.subject} /></p>
            <p><strong>Containment: </strong>{item.contain}</p>
        </>
    );
}

export default ScpDetails;
