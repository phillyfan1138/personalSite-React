import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandableComponent from './ExpandableComponent';
import {GridList, GridTile} from 'material-ui/GridList';
import update from 'immutability-helper';
import SelectField from 'material-ui/SelectField';
import GenericProject from './GenericProject';
import {TextFieldPositiveReals, TextFieldPositiveIntegers} from './CustomTextFields';
/*const fieldKeys=[
    'numAssets',
    'timeHorizon',
    'x0',
    'systemicDrift',
    'systemicVol',
    'q',
    'lambda',
    'StepsX',
    'StepsU'
];*/
const fields={
    numAssets:{
        isGood:true,
        value:100000,
        label:"Number of Assets",
        component:TextFieldPositiveIntegers
    },
    timeHorizon:{
        isGood:true,
        value:1,
        label:"Time Horizon",
        component:TextFieldPositiveReals
    },
    xO:{
        isGood:true,
        value:1,
        label:"X0",
        component:TextFieldPositiveReals
    },
    systemicDrift:{
        isGood:true,
        value:.1,
        label:"Systemic Drift",
        component:TextFieldPositiveReals
    },
    systemicVol:{
        isGood:true,
        value:.3,
        label:"Systemic Volatility",
        component:TextFieldPositiveReals
    },
    q:{
        isGood:true,
        value:.05,
        label:"q",
        component:TextFieldPositiveReals
    },
    lambda:{
        isGood:true,
        value:.05,
        label:"lambda",
        component:TextFieldPositiveReals
    },
    StepsX:{
        isGood:true,
        value:1024,
        label:"Steps in X",
        component:TextFieldPositiveReals
    },
    StepsU:{
        isGood:true,
        value:128,
        label:"Steps in U",
        component:TextFieldPositiveReals
    }
};
export default class CreditProject extends Component{
    render(){
        return(
            <GenericProject fields={fields} onSubmit={this.props.onSubmit} project="creditrisk"/>
        );
    }

}