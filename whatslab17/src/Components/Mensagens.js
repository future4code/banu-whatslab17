import React from 'react'
import styled from 'styled-components'

const Caixa = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 5px solid gray;
    margin-bottom: 10px;
    width: 100vw;
`

const Foto = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`

class Mensagens extends React.Component {


    state = {
   
   mensagens: [
        {
          remetente: "Amigo",
          conteudo: 'Oi, como você está?',
          foto: 'https://picsum.photos/200/150'
        },

        {
            remetente: "Mãe",
            conteudo: 'Não escquece de almoçar',
            foto: 'https://picsum.photos/200/100'
        },

        {
            remetente: "Namorada",
            conteudo: 'Amor, tô grávida',
            foto: 'https://picsum.photos/200/200'
        },
        {
            remetente: "Amigo da Onça",
            conteudo: 'Ei, quer comprar um carro semi-novo?',
            foto: 'https://picsum.photos/100/150'
        },
        {
            remetente: "Médico",
            conteudo: 'Tenho más notícias',
            foto: 'https://picsum.photos/100/180'
          },
    

      ]
    };

    render() {
        let listaMensagens = this.state.mensagens.map((mensagens) => {
            return (
                <Caixa> 
                <Foto src={mensagens.foto}/>
                <div><b>{mensagens.remetente}:</b></div>
                <div> {mensagens.conteudo}</div>
                </Caixa>
            );
        });

        return (
            <div>
                {listaMensagens}
            </div>
  
            
        );
    }
}

export default Mensagens