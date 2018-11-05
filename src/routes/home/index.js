import { h ,Component} from 'preact';
import style from './style.styl';

class  Home extends Component
{

	constructor(){
		super();
		this.state = {
			movies:[]
		}
	}
componentWillMount(){
	this.load()
}

async load(){
	const { movies } =  await import('../../movies.json')

	this.setState({movies})

}

render(){
	return(
		<div class={style.home}>
		
			<h1>App Aide Fernandes</h1>
		
			<div class={style.container}>
			
				{
					this.state.movies &&
					this.state.movies.map(movies =>(
						<video controls class={style.movie}>
							<source src={movies.source} type="video/mp4"/>
								
							Your browser does not support the video tag.
							</video>
					))
				}
				</div>
	</div>
	)
}

}

export default Home;
