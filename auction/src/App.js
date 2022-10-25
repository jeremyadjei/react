import React, {Component} from 'react';
import './App.css'
import Form from './form.js'
import Navara from './images/navara.jpg'
import Corolla from './images/corolla.jpg'
import container from './images/20container.jpg'
import secondcontainer from './images/40container.jpg'
import tricycle from './images/tricycle.jpeg'
import generator from './images/generator.jpg'



class App extends Component {


    render() {
        return (
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-10">
                        <div className="row p-2 bg-white border rounded">
                            <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={Navara} /></div>
                            <div className="col-md-6 mt-1">
                                <h5>Nissan Navara 4WD DC Pickup</h5>
                                <div className="d-flex flex-row">
                                </div>
                                <div className="mt-1 mb-1 spec-1"><span>Details</span><span className="dot" /><span>Details</span><span className="dot" /><span>Details<br /></span></div>
                                <div className="mt-1 mb-1 spec-1"><span>Details</span><span className="dot" /><span>Details</span><span className="dot" /><span>Details<br /></span></div>
                            </div>
                            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">                                 
                                        <h5 className="mr-1">Current Bid: <br /> GH₵ 30,000</h5>
                                </div>
                                <div className="d-flex flex-column mt-4">
                                   <Form />
                                </div>
                            </div>
                        </div>
                        <div className="row p-2 bg-white border rounded mt-2">
                            <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={Corolla} /></div>
                            <div className="col-md-6 mt-1">
                                <h5>Toyota Corolla Saloon Car</h5>
                                <div className="d-flex flex-row">
                                </div>
                                <div className="mt-1 mb-1 spec-1"><span>Details</span><span className="dot" /><span>Details</span><span className="dot" /><span>Details<br /></span></div>
                                <div className="mt-1 mb-1 spec-1"><span>Details</span><span className="dot" /><span>Details</span><span className="dot" /><span>Details<br /></span></div>
                            </div>
                            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                    <h5 className="mr-1">Current Bid: <br /> {}</h5>
                                </div>
                                <div className="d-flex flex-column mt-4">
                                    <Form />
                                </div>
                            </div>
                        </div>
                        <div className="row p-2 bg-white border rounded mt-2">
                            <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={tricycle} /></div>
                            <div className="col-md-6 mt-1">
                                <h5>Apsonic Tricycles</h5>
                                <div className="d-flex flex-row">
                                </div>
                                <div className="mt-1 mb-1 spec-1"><span>Details</span><span className="dot" /><span>Details</span><span className="dot" /><span>Details<br /></span></div>
                                <div className="mt-1 mb-1 spec-1"><span>Details</span><span className="dot" /><span>Details</span><span className="dot" /><span>Details<br /></span></div>
                            </div>
                            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                    <h5 className="mr-1">Current Bid: <br /> GH₵ 7,200</h5>
                                </div>
                                <div className="d-flex flex-column mt-4">
                                    <Form />
                                </div>
                            </div>
                        </div>
                        <div className="row p-2 bg-white border rounded mt-2">
                            <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={generator} /></div>
                            <div className="col-md-6 mt-1">
                                <h5>Generator</h5>
                                <div className="d-flex flex-row">
                                </div>
                                <div className="mt-1 mb-1 spec-1"><span>Details</span><span className="dot" /><span>Details</span><span className="dot" /><span>Details<br /></span></div>
                                <div className="mt-1 mb-1 spec-1"><span>Details</span><span className="dot" /><span>Details</span><span className="dot" /><span>Details<br /></span></div>
                            </div>
                            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                    <h5 className="mr-1">Current Bid: <br /> GH₵ 50,000</h5>
                                </div>
                                <div className="d-flex flex-column mt-4">
                                    <Form />
                                </div>
                            </div>
                        </div>
                        <div className="row p-2 bg-white border rounded mt-2">
                            <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={container} /></div>
                            <div className="col-md-6 mt-1">
                                <h5>20 foot container</h5>
                                <div className="d-flex flex-row">
                                </div>
                                <div className="mt-1 mb-1 spec-1"><span>Details</span><span className="dot" /><span>Details</span><span className="dot" /><span>Details<br /></span></div>
                                <div className="mt-1 mb-1 spec-1"><span>Details</span><span className="dot" /><span>Details</span><span className="dot" /><span>Details<br /></span></div>
                            </div>
                            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                    <h5 className="mr-1">Current Bid: <br /> GH₵ 20,500</h5>
                                </div>
                                <div className="d-flex flex-column mt-4">
                                    <Form />
                                </div>
                            </div>
                        </div>
                        <div className="row p-2 bg-white border rounded mt-2">
                            <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={secondcontainer} /></div>
                            <div className="col-md-6 mt-1">
                                <h5>40 foot container</h5>
                                <div className="d-flex flex-row">
                                </div>
                                <div className="mt-1 mb-1 spec-1"><span>Details</span><span className="dot" /><span>Details</span><span className="dot" /><span>Details<br /></span></div>
                                <div className="mt-1 mb-1 spec-1"><span>Details</span><span className="dot" /><span>Details</span><span className="dot" /><span>Details<br /></span></div>
                            </div>
                            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                    <h5 className="mr-1">Current Bid: <br /> GH₵ 32,000</h5>
                                </div>
                                <div className="d-flex flex-column mt-4">
                                    <Form />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default App;

