import React,{Component} from 'react';
import {DISHES} from '../shared/Dish';
import Menu from './menucompo';
import Dishdetail from './dishdetail';
import { View } from 'react-native';

class Main extends Component{
constructor(props){
    super(props);
    this.state={ 
        dishes : DISHES,
        sel_id : null
    };
}
    handleselect(dishid){
        this.setState( {sel_id: dishid} );
  
    }

render(){
    return(<View style={{}}>
        <Menu dishes={this.state.dishes} 
        onPress={(dishid)=>this.handleselect(dishid)}
        />
        <Dishdetail
            dish={this.state.dishes.filter((dish) => 
                dish.id === this.state.sel_id)[0]}
        
        />
        </View>
        );
};
}

export default Main;