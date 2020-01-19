import Head from 'next/head';
import Navbar from './Navbar';
const Layout = (props) => (
    <div className="body">
        <Head>
            <title>BitzPrice</title>
            {/* <link rel="stylesheet" href="https://bootswatch.com/3/cerulean/bootstrap.min.css"/> */}
        </Head>
        <Navbar />
            <div>
                {props.children}
            </div>
    </div>
);

export default Layout
