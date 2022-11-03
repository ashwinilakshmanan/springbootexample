const USERS_RESR_API_URL="http://localhost:8080/api/users";

class UserServiceFetch{
    // getUsers(){
    //     return fetch(USERS_RESR_API_URL).then((response=>response.json()));
    // }

    getUsers(){
        return fetch(USERS_RESR_API_URL),{
            method:'get',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }.then((response=>response.json()));
    }
}

export default new UserServiceFetch();