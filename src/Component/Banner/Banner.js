import React, { Component } from 'react'
import "./Banner.css";
import DisplayBanner from './DisplayBanner';
const url = "http://localhost:4000/banner";
export default class Banner extends Component {
    constructor() {
        super();
        this.state = {
            bannerData: "",
        }
    }
    render() {
        return (
            <div className='container'>
                <div className="bannner-Contain">
                    <DisplayBanner showBannerData={this.state.bannerData} />
                </div>

            </div>
        )
    }

    componentDidMount() {
        fetch(`${url}`, { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ bannerData: data })
                console.log(data);
            })
    }
}
