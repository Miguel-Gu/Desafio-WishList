import './css/Desejos.css'
import { Component } from "react";

//imagens
import logo from './assets/logoWL.png'
import cloud from './assets/cloud_card.png'

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

    componentDidMount() {
        this.buscarDesejos();
    }

    buscarDesejos = () => {
        console.log("chamando a API")
        fetch('https://localhost:5001/api/Desejos')
            .then(resposta => resposta.json())
            .then(dados => this.setState({ listaDesejos: dados }))
            .catch(erro => console.log(erro))
    };

    cadastrarDesejo = (desejo) => {
        desejo.preventDefault();

        fetch('http://localhost:5000/api/Desejos', {
            method: 'POST',
            body: JSON.stringify({ nomeDesejo: this.state.titulo, Descricao: this.state.descricao, IdUsuarios: this.state.idUsuario }),
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

    AdicionarTitulo = (prop) => {
        this.setState({
            titulo: prop.target.value
        })
    }

    AdicionarDescricao = (prop) => {
        this.setState({
            descricao: prop.target.value
        })
    }

    render() {
        return (
            <div>
                <header>
                    <div className="container container_header">
                        <img src={logo} />
                    </div>
                </header>
                <main>
                    <section className="posicao">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                    </section>
                    <section className="posicao_3">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                    </section>
                    <section className="box-cadastro container">
                        <div className="form">
                            <div className="posicao-inputs">
                                <h1>Qual o Nome do Seu sonho?</h1>
                                <input onChange={this.AdicionarTitulo}
                                    value={this.state.titulo}
                                    className="titulo"
                                    placeholder="Todo desejo merece um título..."
                                    type="text" />
                            </div>
                            <div className="posicao-inputs">
                                <h1>Id do Sonhador </h1>
                                <input className="id" placeholder="Id do Usuário" type="text" />
                            </div>
                            <button onClick={this.cadastrarDesejo}  type="submit">Criar novo sonho!</button>
                        </div>
                        <div>
                            <textarea onChange={this.AdicionarDescricao} value={this.state.descricao} placeholder="Nos conte os detalhes do seu sonho aqui..." name="" id="" cols="30"
                                rows="10"></textarea>
                        </div>
                    </section>
                    <hr className="container" />
                    <section className=" container cards_desejos">
                        <section className="posicao">
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                        </section>
                        <section className="posicao_2">
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                        </section>


                        <div className="line">
                        {this.state.listaDesejos.map(desejos =>
                            
                                <div className="card">
                                    <div className="face front">
                                        <img src={cloud} />
                                        <h2>{desejos.nomeDesejo}</h2>
                                    </div>

                                    <div className="face back">
                                        <p>{desejos.descricao}</p>
                                    </div>
                                </div>
                            
                        )}
                        </div>

                    </section>
                    <footer>
                    </footer>
                </main>
            </div>
        )
    }
}