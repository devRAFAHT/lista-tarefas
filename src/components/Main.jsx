import { Component } from "react";
import './Main.css'

//Form
import { FaPlus } from 'react-icons/fa';

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
    const { novaTarefa } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#" className="form">
          <input onChange={this.inputMudou} type="text" value={novaTarefa}/>
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}

