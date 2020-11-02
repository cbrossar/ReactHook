import React, {useState, useEffect}  from 'react';

//"https://api.randomuser.me/"

export default function HookBlind() {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect( () => { 
        async function fetchData() {
            const response = await fetch("https://api.randomuser.me/");
            const data = await response.json();
            
            setUser(data.results[0]);
            setLoading(false);
        }
        fetchData();
    }, []);

    return ( <div>
        { loading ? <div>loading...</div> : <div> {user.name.first }</div>}
        </div>
    )
}