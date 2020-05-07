import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Card} from 'react-native-elements';

function Dishdetail(props){
    return(<Renderdish dish={props.dish} /> )
}

function Renderdish(props){
    const dish = props.dish;


if(dish != null){
    return(
        <Card
        featuredTitle={dish.name}
        image={require('./images/uthappizza.png')}>
            <Text>{dish.description}</Text>
        </Card>
    ); }
    else {
       return(<View></View>);
    }

}

export default Dishdetail;