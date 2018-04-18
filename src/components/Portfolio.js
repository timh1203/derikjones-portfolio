import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import '../assets/stylesheets/Portfolio.css'
import modalOne from '../assets/images/modalOne.png'
import building1a from '../assets/images/building1a.png'
import building1b from '../assets/images/building1b.png'
import building1c from '../assets/images/building1c.png'
import building1d from '../assets/images/building1d.png'
import building1e from '../assets/images/building1e.png'
import building1f from '../assets/images/building1f.png'
import building1g from '../assets/images/building1g.png'

import modalTwo from '../assets/images/modalTwo.jpg'
import modalThree from '../assets/images/modalThree.jpg'

class Portfolio extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modalOne: false,
        modalTwo: false,
        modalThree: false
      };
    }
  
    toggleModalOne = () => {
        this.setState({
            modalOne: !this.state.modalOne
        });
    }
  
    toggleModalTwo = () => {
        this.setState({
            modalTwo: !this.state.modalTwo
        });
    }

    toggleModalThree = () => {
        this.setState({
            modalThree: !this.state.modalThree
        });
    }
    render() {
      return (
        <div id="Portfolio">
            <h1>FEATURED PROJECTS</h1>
            <div className="row justify-content-around">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <p>Downtown Brambleton</p>
                    <p>Multi-Family</p>
                    <img id="modalOne" src={modalOne} />
                    <Button id="One" color="success" onClick={this.toggleModalOne}>View plans</Button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <p>Grand Villas-Hudson</p>
                    <p>Single-Family</p>
                    <img id="modalTwo" src={modalTwo} />
                    <Button id="Two" color="success" onClick={this.toggleModalTwo}>View plans</Button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <p>Leesburg South-Foxton</p>
                    <p>Single-Family</p>
                    <img id="modalThree" src={modalThree} />
                    <Button id="Three" color="success" onClick={this.toggleModalThree}>View plans</Button>
                </div>
            </div>

        {/* Modal One */}
          <Modal isOpen={this.state.modalOne} toggle={this.toggleModalOne}>
            <div clasName="modal-content">
                <ModalHeader toggle={this.toggleModalOne}>Building 1</ModalHeader>
                <ModalBody>
                    <h1>building1a</h1>
                    <img id="building1a" src={building1a} />
                    <hr />
                    <h1>building1b</h1>
                    <img id="building1b" src={building1b} />
                    <hr />
                    <h1>building1c</h1>
                    <img id="building1c" src={building1c} />
                    <hr />
                    <h1>building1d</h1>
                    <img id="building1d" src={building1d} />
                    <hr />
                    <h1>building1e</h1>
                    <img id="building1e" src={building1e} />
                    <hr />
                    <h1>building1f</h1>
                    <img id="building1f" src={building1f} />
                    <hr />
                    <h1>building1g</h1>
                    <img id="building1g" src={building1g} />
                </ModalBody>
                <ModalFooter>
                <Button color="secondary" onClick={this.toggleModalOne} >Close</Button>
                </ModalFooter>
            </div>
          </Modal>

        {/* Modal Two */}
          <Modal isOpen={this.state.modalTwo} toggle={this.toggleModalTwo}>
            <div clasName="modal-content">
                <ModalHeader toggle={this.toggleModalTwo}>Building 1</ModalHeader>
                <ModalBody>
                    <h1>building1a</h1>
                    <img id="building1a" src={building1a} />
                    <hr />
                    <h1>building1b</h1>
                    <img id="building1b" src={building1b} />
                    <hr />
                    <h1>building1c</h1>
                    <img id="building1c" src={building1c} />
                    <hr />
                    <h1>building1d</h1>
                    <img id="building1d" src={building1d} />
                    <hr />
                    <h1>building1e</h1>
                    <img id="building1e" src={building1e} />
                    <hr />
                    <h1>building1f</h1>
                    <img id="building1f" src={building1f} />
                    <hr />
                    <h1>building1g</h1>
                    <img id="building1g" src={building1g} />
                </ModalBody>
                <ModalFooter>
                <Button color="secondary" onClick={this.toggleModalTwo} >Close</Button>
                </ModalFooter>
            </div>
          </Modal>

        {/* Modal Three */}
          <Modal isOpen={this.state.ModalThree} toggle={this.toggleModalThree}>
            <div clasName="modal-content">
                <ModalHeader toggle={this.toggleModalThree}>Building 1</ModalHeader>
                <ModalBody>
                    <h1>building1a</h1>
                    <img id="building1a" src={building1a} />
                    <hr />
                    <h1>building1b</h1>
                    <img id="building1b" src={building1b} />
                    <hr />
                    <h1>building1c</h1>
                    <img id="building1c" src={building1c} />
                    <hr />
                    <h1>building1d</h1>
                    <img id="building1d" src={building1d} />
                    <hr />
                    <h1>building1e</h1>
                    <img id="building1e" src={building1e} />
                    <hr />
                    <h1>building1f</h1>
                    <img id="building1f" src={building1f} />
                    <hr />
                    <h1>building1g</h1>
                    <img id="building1g" src={building1g} />
                </ModalBody>
                <ModalFooter>
                <Button color="secondary" onClick={this.toggleModalThree} >Close</Button>
                </ModalFooter>
            </div>
          </Modal>
        </div>
      );
    }
  }

export default Portfolio