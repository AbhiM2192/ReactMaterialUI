
import {useSelector,useDispatch} from 'react-redux'

 const useItems = () => {
     
    const items = useSelector(state => state.item);
    return items
 }
    
    


export default useItems
