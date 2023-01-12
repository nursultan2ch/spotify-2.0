export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
   // token:"BQAxH5BP45hATmnJ1QN0eF6Q8QKl_IpdFSxVWPF7SjgKnER2sBtevx0WNPxjVGjUqV6uRoweJUKWmp4CKmXmDflbhGqw43v--y5AwBa3WaD1XQa23-DD1fsBUfNZ1r6pcg_vrPzqVUo6yHZ_agga3y4niKIVtPQLnvHVQXgkcoRxWTH9h8VqxqP-8rY5bHjulpJ4wpUpt8LSZW94Gxda"
}

const reducer = (state, action) => {
console.log(action);

    switch(action.type) {
        case "SET_USER":
        return {
            ...state,
            user:action.user
        }
        case "SET_TOKEN":
        return {
            ...state,
            token:action.token
        }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists:action.playlists
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly:action.discover_weekly,
            }

       default:
        return state;

    }

}

export default reducer;