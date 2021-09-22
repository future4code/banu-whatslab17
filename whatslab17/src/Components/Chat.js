import React from 'react'

class Chat extends React.Component {
    state = {
        NomeRemetente : "",
        Conteudo : ""
    }
    enviar = () => {
        this.setState({Conteudo : ""})
        this.setState({NomeRemetente : ""})
    };

    onChangeNomeRemetente = (event) => {
        this.setState({ NomeRemetente : event.target.value });
      };
    
    onChangeConteudo = (event) => {
        this.setState({ Conteudo : event.target.value });
      };

    render() {
        return (
            <div>
                <input
                   placeholder={"Nome do Remetente"}
                    value={this.state.NomeRemetente}
                    onChange={this.onChangeNomeRemetente}
                />
                <input
                    placeholder={"Conteúdo"}
                    value={this.state.Conteudo}
                    onChange={this.onChangeConteudo} 
                />
                <button onClick={this.enviar}>Enviar</button>
            </div>
  
            
        );
    }
}

export default Chat