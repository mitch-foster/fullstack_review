import axios from 'axios';

const initialState = {
    statuses: [],
}

const STATUS = "STATUS"


export default function (state = initialState, action){
    switch(action.type) {
        case STATUS + "_PENDING":

            return state;
        case STATUS + "_FULFILLED":

            return {
                        statuses: action.payload
                    };
        default:
            return state;
    }

}


export function getStatuses(){
    var promise = axios.get('/api/getstatus').then(response => {return response.data})
    return {
        type: STATUS,
        payload: promise
    }
}

export function submitStatus(newName, newStatus){
    var promise = axios.post('/api/submitstatus',{
                                name: newName,
                                status: newStatus
                            })
      .then(response => response.data)
    
    
    return {
        type: STATUS,
        payload: promise
    }
}







