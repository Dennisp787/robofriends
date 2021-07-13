import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/searchBox';
import Scroll from '../components/scroll';
import './App.css';



class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(robots => this.setState({robots: robots}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }
    render() {
        const {robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes( searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App