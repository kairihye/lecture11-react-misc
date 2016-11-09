import React from 'react';
import _ from 'lodash';
import './pet-app.css'; //load CSS for this module

//one SAMPLE_DOGS as the first time, create
var SAMPLE_DOGS = [{
    name: 'Fido',
    sex: 'Male',
    breed: 'Mix',
    img: 'img/069b8257-f9db-4034-908f-12b8cea76693.jpg'
}, {
    name: 'Spot',
    sex: 'Female',
    breed: 'Terrier',
    img: 'img/78e41dd3-4216-47f1-9598-ea8220de354b.jpg'
}, {
    name: 'Rover',
    sex: 'Male',
    breed: 'Mix',
    img: 'img/e2e7ab9d-5a66-446d-8055-c9cc7cedc443.jpg'
}, {
    name: 'Sparky',
    sex: 'Female',
    breed: 'Husky',
    img: 'img/3c86b971-63b3-4b6e-859d-8e11084cca91.jpg'
}, {
    name: 'Koi',
    sex: 'Male',
    breed: 'Hound',
    img: 'img/234ed62e-c7fc-4f53-aa7d-c9e0ad76b9bb.jpg'
}, ];

class PetApp extends React.Component {
    constructor(props) {
        super(props);

        //this ideally would be set up from a Controller
        //pass var SAMPLE_DOGS second time
        //anything that changes will be state
        this.state = {
            pets: SAMPLE_DOGS
        };
    }

    render() {
        //extract the breeds (thanks lodash!)
        var breeds = Object.keys(_.groupBy(this.state.pets, 'breed'));

        return ( <
            h1 > Adopt A Pet < /h1>
        );
    }
}

//webpage components
class Header extends React.Component {


}

//group dogs togethers
class DogGroup extends React.Component {

}

class DogCard extends React.Component {


}

class Navigation extends React.Component {


}



export default PetApp;
oup dogs together
class DogGroup extends React.Component {

}

class DogCard extends React.Component {


}

class Navigation extends React.Component {


}



export default PetApp;
