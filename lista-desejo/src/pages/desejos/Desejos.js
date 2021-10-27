import { Component } from "react";

export default class Desejos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaDesejos : [],
            titulo : '',
            descricao : ''
        };
    };

    buscarDesejos = () => {
        fetch('http://localhost:5000/api/Desejos')



    }


}