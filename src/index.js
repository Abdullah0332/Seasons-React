import React from 'react';
import ReactDOM from 'react-dom'
import SeasonsDisplay from './SeasonsDisplay'
import Loading from './Loading'



class App extends React.Component{

    state={ lat: null , ErrorMessage: ''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=>{
                this.setState({ lat : position.coords.latitude })
            },
            err=>{
                this.setState({ ErrorMessage:err.message})
            }
        )  
    } 

    render(){
        if(this.state.lat && !this.state.ErrorMessage){
            return <SeasonsDisplay 
            lat={this.state.lat} />;
        }

        if(!this.state.lat && this.state.ErrorMessage){
            return <div>Error : {this.state.ErrorMessage}</div>;
        }

        return <Loading message='Please accept location request'/>;
    }
}


// const App=()=>{
//     window.navigator.geolocation.getCurrentPosition(
//         position=>console.log(position),
//         err=>console.log(err)
//     )
//     return(
//         <div>Latitude : </div>
//     )
// }

// class App extends React.Component{

//     constructor(props){
//         super(props)

//         this.state={
//             lat: null,
//             ErrorMessage: ''
//         }

//         window.navigator.geolocation.getCurrentPosition(
//             position=>{
//                 this.setState({ lat : position.coords.latitude })
//             },
//             err=>{
//                 this.setState({ ErrorMessage:err.message})
//             }
//         )   
//     }

//     render(){
//         if(this.state.lat && !this.state.ErrorMessage){
//             return <div>Latitude : {this.state.lat}</div>;
//         }

//         if(!this.state.lat && this.state.ErrorMessage){
//             return <div>Error : {this.state.ErrorMessage}</div>;
//         }

//         return <div>Loading!!!</div>;
//     }
// }

ReactDOM.render(<App />,document.getElementById('root'))