import React , {useEffect , useState, useMemo , createContext} from 'react';
const UserContext = createContext();
const HelperContext = (props) => {
  
    const [userData, setData] = useState([]);
    const value = useMemo(
        () => ({userData, setData}),[userData])
    // useEffect(() => {
    //     (async () => {
    //         const response = await fetch("https://gorest.co.in/public-api/users");
    //         const usersData = await response.json();
    //         console.log("users", usersData.data);
    //         console.log("users from state ", usersData.data)
    //         setUserData(usersData.data);
    //         // const user_data = React.useContext(UserContext);
    //     })();
    // }, []);
    return (

        <UserContext.Provider
            value={value}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export  {HelperContext , UserContext};