class App extends React.component{
    cnstructor(props){
        super(props);
        this.state={
            x=0,
             y=0,
        }
    }
    render(){
        return(
            <div>
              <Square x={0} y={0}/>
            <Square x={1} y={0}/>
            <Square x={2} y={0}/>  
            </div>
        )
    }
}
class Square extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var squ=[];
        for(var i=0;i<9;i++){
        for(var a=0;a<10;a++){
        squ.push(
            <square
            x={i}
            y={a}
            ></square>
        )

    }
}
return <div>{squ}</div>
    }
}



ReactDOM.render(<App/>, document.getElementById('app'));