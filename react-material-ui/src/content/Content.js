import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {Grid,Typography} from '@material-ui/core'
import Carda from './Card/Card';
import useItems from '../hooks/useItems';

function Content() {
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch({type:'ITEMS_REQUESTED'})
    },[dispatch])

    const {loading,error,itemsList} = useItems()
    // console.log(itemsList)
    const CardData = () =>{
         if(loading) return <Typography>Loading .....</Typography>
         if(error) return <Typography>Try Again Next Time</Typography>
         return itemsList.map(items => <Grid item xs={12} sm={4} key={items.id}><Carda items={items}/></Grid>)
    }
    return (
        <Grid container direction='row' justify="space-evenly" spacing={5}>
            {CardData()}
        </Grid>
    )
}

export default Content
