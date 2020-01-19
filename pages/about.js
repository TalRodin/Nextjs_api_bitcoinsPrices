import Layout from '../components/Layout'

const About = () => (
    <Layout>
        <div className='background_body'>
            <h2>About Prices of Bitcoin</h2>
            <p>Application to view Bitcoin prices</p>
        <style jsx>
            {
            `@import url('https://fonts.googleapis.com/css?family=Lato');
            .background_body{
                background-image: radial-gradient(#d7ccc8 2%, transparent 2%),
                radial-gradient(#d7ccc8 2%, transparent 2%);
                background-color: #fff;
                background-position: 0 0, 50px 50px;
                background-size: 100px 100px;
                height: 650px;
                width: 100%;}
              h2{
                 color:#424242;
                 margin-left: 30%;
                 margin-top: 2%;
                 text-transform: uppercase;
	             font-family: 'Lato', sans-serif;
              }
              p{
                 color:#424242;
                 margin-left: 30%;
                 margin-top: 2%;
                 text-transform: uppercase;
	             font-family: 'Lato', sans-serif;
              }`}
        </style>
        </div>
    </Layout>
    );
export default About
