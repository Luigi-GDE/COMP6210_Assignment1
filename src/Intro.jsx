function Intro(){//Introduction component
    return(

        <div className="intro">
        <h1>SCP Home Page</h1>
        <img src="/media/logo.png" className="logo" alt="SCP Logo" />
        <br />
        <p className="text-center">
            Here, you'll find a collection of abnormal and mysterious anomalies—creatures, objects, and places that defy logic and reality.
            The SCP Foundation works tirelessly to secure, contain, and protect these secrets.
        </p>
    </div>

    );
}

export default Intro;