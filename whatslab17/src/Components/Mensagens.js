import React from 'react'
import styled from 'styled-components'

const Caixa = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    border: 5px solid gray;
    margin-bottom: 10px;
    width: auto;
    background-color: white 
`
const CaixaEu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: right;
    justify-content: right;
    border: 5px solid gray;
    margin-bottom: 10px;
    width: auto;
    background-color: #DDF7C8 
`

const Foto = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`


class Mensagens extends React.Component {


    state = {
        NomeRemetente : "",
        Conteudo : "",
   
   mensagens: [
        {
          remetente: "Amigo",
          conteudo: 'Oi, como você está?',
          foto: 'https://picsum.photos/200/150',
          id: 0,
        },

        {
            remetente: "Mãe",
            conteudo: 'Não escquece de almoçar',
            foto: 'https://picsum.photos/200/100',
            id: 1,
        },

        {
            remetente: "Namorada",
            conteudo: 'Amor, tô grávida',
            foto: 'https://picsum.photos/200/200',
            id: 2,
        },
        {
            remetente: "Amigo da Onça",
            conteudo: 'Ei, quer comprar um carro semi-novo?',
            foto: 'https://picsum.photos/100/150',
            id: 3,
        },
        {
            remetente: "Médico",
            conteudo: 'Tenho más notícias',
            foto: 'https://picsum.photos/100/180',
            id: 4,
          },
        {
            remetente: "eu",
            conteudo: 'Conta',
            foto: 'https://img.ibxk.com.br/2017/06/22/22100428046161.jpg?w=1200&h=675&mode=crop&scale=both',
            id: 5,
        },

    

      ]
    };

    enviar = () => {
        const mensagem = {
            remetente: this.state.NomeRemetente,
            conteudo: this.state.Conteudo,
            id: this.state.mensagens.length,
            foto: 'https://picsum.photos/100/'+this.state.mensagens.length}
            this.setState({Conteudo : ""})
            this.setState({NomeRemetente : ""});
            const novaMensagem = [...this.state.mensagens, mensagem];
            this.setState({mensagens : novaMensagem})
    
    };
    
    onChangeNomeRemetente = (event) => {
        this.setState({ NomeRemetente : event.target.value });
    };
        
    onChangeConteudo = (event) => {
        this.setState({ Conteudo : event.target.value });
    };

    onKeyUp = (event) => {
        if (event.charCode === 13) {
            this.enviar();
        }    
    }

  onClickRemover = (id) => {
    const novoArray = this.state.mensagens.filter((mensagem) => {
      return mensagem.id !== id;
    });
    this.setState({ mensagens: novoArray });
  };

    
    render() {
        let listaMensagens = this.state.mensagens.map((mensagens) => {
            if(mensagens.remetente === "eu"){
                return (
                    <CaixaEu onDoubleClick = { () => this.onClickRemover(mensagens.id)}> 
                    <div> {mensagens.conteudo}</div>
                    <Foto src={'https://img.ibxk.com.br/2017/06/22/22100428046161.jpg?w=1200&h=675&mode=crop&scale=both'}/>
                    </CaixaEu>
                )
            }
            
            return (
                <Caixa onDoubleClick = { () => this.onClickRemover(mensagens.id)}> 
                <Foto src={mensagens.foto}/>
                <div><b>{mensagens.remetente}:</b></div>
                <div> {mensagens.conteudo}</div>
                </Caixa>
            );
        });

        return (
            <div>
                {listaMensagens}
            <div onKeyPress={this.onKeyUp}>
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
                <button type="submit" onClick={this.enviar}>Enviar</button>
            </div>
            </div>
  
            
        );
    }
}

export default Mensagens