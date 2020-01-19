import Link from 'next/link'
const Navbar = () => (
    <div>
        <ul>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/about'><a>About</a></Link></li>
        </ul>
        <style jsx>{
        `@import url('https://fonts.googleapis.com/css?family=Lato');
        ul{
            background: #fff;
            color: #fff;
            list-style:none;
            display:flex;
            margin-left: auto;
            margin-right: auto;
            margin-top:10px;
            border-radius:4px;
            width:95%;
            height:60px;
            background-color:#fff;
            box-shadow: 9px 9px 16px rgb(66, 66, 66,0.6), -9px -9px 16px  rgba(255,255,255, 0.5);
        }
        ul li {
            font-size: 18px;
            margin-right:40px;
            margin-top:14px;

        }
        ul li a {
            color: #616161;
            text-decoration: none;
            text-transform: uppercase;
	        font-family: 'Lato', sans-serif;
        }`}
        </style>
    </div>
);
export default Navbar;
