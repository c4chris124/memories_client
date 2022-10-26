export default (post = [], action) => {
 switch (action.type) {
    case 'FETCH_ALL':
        return post
 
    default:
        return post
 }
}