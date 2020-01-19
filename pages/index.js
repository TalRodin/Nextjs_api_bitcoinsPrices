import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = (props) => (
    <Layout>
        <div className='background_body'> 
            <h2>Welcome to ... !</h2>
            <p>Check current Bitcoin rate</p>

            <Prices bpi={props.bpi} />
            <style jsx>
            {   `.background_body{
                    background-image: radial-gradient(#d7ccc8 2%, transparent 2%),
                    radial-gradient(#d7ccc8 2%, transparent 2%);
                    background-color: #fff;
                    background-position: 0 0, 50px 50px;
                    background-size: 100px 100px;
                    height: 650px;
                    width: 100%;
                }
                h2{
                    color:#424242;
                    margin-left: 35%;
                    margin-top: 2%;
                    text-transform: uppercase;
                    font-family: 'Lato', sans-serif;
                }
                p{
                    color:#424242;
                    margin-left: 33%;
                    margin-top: 2%;
                    text-transform: uppercase;
                    font-family: 'Lato', sans-serif;
                }`}
            </style>
            </div>
    </Layout>   
    );

Index.getInitialProps = async function(){
    const res=await Fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    const data=await res.json()
    return {
        bpi: data.bpi
    }
}
export default Index;
