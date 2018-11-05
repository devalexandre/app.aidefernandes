import render from 'preact-render-to-string';
import { h , Component} from 'preact';
import { Link } from 'preact-router/match';
import style from './style.styl';
import logo from '../../assets/logo.svg';
import bars from '../../assets/bars.svg';


class Header extends Component{

constructor(){
	super();
	this.state = {
		open: true,
		tags:[]
	}
}

componentWillMount(){
	if (typeof window !== "undefined"){
	if(window.innerWidth <= 600){
		this.setState({open:false})
	}else{
		this.setState({open:true})
	}
}
this.load()
}

async load(){
	const { tags } =  await import('../../movies.json')

	this.setState({tags})

}

fechar = () =>{
	if (typeof window !== "undefined"){
	if(window.innerWidth <= 600){
		this.setState({open:false})
	}
}
}


open = () =>{
	this.setState({open:!this.state.open})
}
	render(){
		return(
			<header class={style.header}>
			<section className="container">
			<img src={bars} class={style.bars} onclick={()=> this.open() } alt="menu bar"/>
			<Link href="/" ><img src={logo} class={style.img} alt="indev logo"/></Link>
				<nav style={this.state.open?'display:block':'display:none'}>
				{
					this.state.tags &&
					this.state.tags.map(item =>(
						<Link activeClassName='active' onclick={()=> this.fechar()} href={`/movies/${item.id}`}>{item.name}</Link>
					))
				}
				</nav>
				</section>
			</header>
		)
	}


}

export default Header;
