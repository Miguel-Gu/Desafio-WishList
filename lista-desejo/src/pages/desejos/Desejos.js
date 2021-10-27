import { Component } from "react";

export default class Desejos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaDesejos: [],
            titulo: '',
            descricao: '',
            idUsuario: ''
        };
    };

    buscarDesejos = () => {
        console.log("chamando a API")
        fetch('http://localhost:5000/api/Desejos')
            .then(resposta => resposta.json())
            .then(dados => this.setState({ listaDesejos: dados }))
            .catch(erro => console.log(erro))
    };

    cadastrarDesejo = (desejo) => {
        desejo.preventDefault();

        fetch('http://localhost:5000/api/Desejos', {
            method: 'POST',
            body: JSON.stringify({ NomeDesejo: this.state.titulo, Descricao: this.state.descricao, IdUsuarios: this.state.idUsuario }),
            headers: { "Content-Type": "application/json" }
        })
            .then(console.log("Desejo cadastrado"))
            .catch(erro => console.log(erro))
            .then(this.buscarDesejos)
            .then(this.limparCampos());

    };

    limparCampos = () => {
        this.setState({
            titulo: '',
            descricao: '',
            idUsuario: ''
        })
        console.log('Os states foram resetados!')
    };

    render() {
        return (
            <div>
                <main>
                </main>
            </div>
        )
    }
}