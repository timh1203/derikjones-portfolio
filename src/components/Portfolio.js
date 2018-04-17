import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import '../assets/stylesheets/Portfolio.css'
import modalOne from '../assets/images/modalOne.png'
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
  
    toggle = (e) => {
        e.preventDefault();
        const modalNum = e.target.id;
        if(modalNum === "One"){
            this.setState({
                modalOne: !this.state.modalOne
            });
        } else if (modalNum === "Two"){
            this.setState({
                modalTwo: !this.state.modalTwo
            });
        } else if (modalNum === "Three"){
            this.setState({
                modalThree: !this.state.modalThree
            });
        }
    }
  
    render() {
      return (
        <div id="Portfolio">
            <div className="row justify-content-around">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <p>Downtown Brambleton</p>
                    <p>Multi-Family</p>
                    <img id="modalOne" src={modalOne} />
                    <Button id="One" color="success" onClick={e => this.toggle(e)}>View plans</Button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <p>Grand Villas-Hudson</p>
                    <p>Single-Family</p>
                    <img id="modalTwo" src={modalTwo} />
                    <Button id="Two" color="success" onClick={e => this.toggle(e)}>View plans</Button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <p>Leesburg South-Foxton</p>
                    <p>Single-Family</p>
                    <img id="modalThree" src={modalThree} />
                    <Button id="Three" color="success" onClick={e => this.toggle(e)}>View plans</Button>
                </div>
            </div>
          <Modal isOpen={this.state.modalOne} onClick={e => this.toggle(e)} id="One">
            <ModalHeader>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={e => this.toggle(e)} id="One">Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }

// const Portfolio = (props) => {
//   return (
//     <div id="Portfolio">
//         <h1>Portfolio</h1>
//         <div className="row justify-content-around">
//             <div className="col-lg-3 col-md-3 col-sm-12">1</div>
//             <div className="col-lg-3 col-md-3 col-sm-12">2</div>
//             <div className="col-lg-3 col-md-3 col-sm-12">3</div>
//         </div>
//     </div>
//   );
// };

export default Portfolio