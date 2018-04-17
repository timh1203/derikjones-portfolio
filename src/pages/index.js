import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Portfolio from '../components/Portfolio'

class Index extends React.Component {
    render(){
        return(
            <div className="IndexPage">
                <Navigation />
                <Header />
                <Portfolio />
            </div>
        )
    }
}

export default Index
