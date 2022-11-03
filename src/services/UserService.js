import axios from "axios";

const USERS_RESR_API_URL="http://localhost:8080/api/users";

class UserService{

    getUsers(){
        return axios.get(USERS_RESR_API_URL);
    }
}

export default new UserService();