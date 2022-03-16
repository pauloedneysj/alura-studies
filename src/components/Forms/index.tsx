import React from "react";
import Button from "../Button";

class Forms extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="tarefa">Adicione um nome ao estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você que fazer?"
            required
          />
        </div>
        <div>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button />
      </form>
    );
  }
}

export default Forms;
