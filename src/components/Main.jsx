import { Component } from "react";
import './Main.css'

//Form
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Vain extends Component {
  state = {
    novaTarefa: '',
    tarefas: [
      'Fazer café',
      'Beber água',
      'Estudar',
    ],
  };

  inputMudou = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  adicionarTarefa = (e) => {
    e.preventDefault();
    const { novaTarefa, tarefas } = this.state;

    if (novaTarefa.trim() !== '') {
      this.setState({
        tarefas: [...tarefas, novaTarefa],
        novaTarefa: '',
      });
    }
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#" className="form" onSubmit={this.adicionarTarefa}>
          <input
            onChange={this.inputMudou}
            type="text"
            value={novaTarefa}
            placeholder="Adicione uma tarefa"
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={index}>{tarefa}
              <div>
                <FaEdit className="edit"/>
                <FaWindowClose className="delete"/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
