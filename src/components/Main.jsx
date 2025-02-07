import { Component } from "react";
import './Main.css'
export default class Vain extends Component{
  state = {
    novaTarefa: '',
  };

  inputMudou = (e) => {
    this.setState({
        novaTarefa: e.target.value,
      });
  }

  render() {
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#">
          <input onChange={this.inputMudou} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

