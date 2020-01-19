class Prices extends React.Component{
    state={
        currency:'USD'
    }
    render(){
       let list = '';
       if(this.state.currency === 'USD'){
           list = (<li>Bitcoin rate for {this.props.bpi.USD.description}:<span> {this.props.bpi.USD.code}</span>
           <strong>   {this.props.bpi.USD.rate}</strong></li>)
       }else if(this.state.currency === 'GBP'){
            list = (<li>Bitcoin rate for {this.props.bpi.GBP.description}:<span> {this.props.bpi.GBP.code}</span>
            <strong>   {this.props.bpi.GBP.rate}</strong></li>)
       }else if(this.state.currency === 'EUR'){
            list = (<li>Bitcoin rate for {this.props.bpi.EUR.description}:<span> {this.props.bpi.EUR.code}</span>
            <strong>   {this.props.bpi.EUR.rate}</strong></li>)
       }
       return( 
        <div>
            <ul>
                {list}
            </ul>
            <br/>
            <select onChange={e=>this.setState({currency:e.target.value})}>
                <option value='USD'>USD</option>
                <option value='GBP'>GBP</option>
                <option value='EUR'>EUR</option>
            </select>
            <style jsx>
                {
                `@import url('https://fonts.googleapis.com/css?family=Lato');
                ul{
                    color:#424242;
                    margin-left: 25%;
                    margin-top: 2%;
	                font-family: 'Lato', sans-serif;
                }
                select{
                    color:#424242;
                    margin-left:37%;
                    width:100px;
                    height:50px;
                    border-radius:20px;
                    background-color:#fff;
                    box-shadow: 9px 9px 16px rgb(66, 66, 66,0.6), -9px -9px 16px  rgba(255,255,255, 0.5);
                    border: none;
                    outline:none;
                    text-transform: uppercase;
	                font-family: 'Lato', sans-serif;
                }`
                }
            </style>
        </div>)
    }
}
export default Prices
