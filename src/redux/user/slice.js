//Criando slice de user, no arquivo slice.js
import { createSlice } from "@reduxjs/toolkit";

//informações que vai iniciar com a aplicação..
const initialState = {
    user: null
}

// Criando slice user
export const userSlice = createSlice({
    name: 'user', //nome do slice
    initialState, //váriavel de inicialização
    reducers: { //ações do slice para atualizar as informações..
        createUser: (state, action) => {  //action
            
            // Essa action, recebe as informações de login do usuário e guarda na redux user
            return { 
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    adress: null,
                }
             }
        },

        logoutUser: (state) => {

            return {
                ...state,
                user: null,
            }
        },

        addAdress: (state, action) => {
            if(action.payload.location === "" || action.payload.number === ""){
                alert("Preencha todos os campos!!")
                return { ...state }
            }

            if(state.user === null){
                alert("Faça o login!!")
            }

            alert("Dados atualizados com sucesso!")

            return{
                ...state,
                user:{
                    ...state.user,
                    address: {
                        location: action.payload.location,
                        number: action.payload.number,
                    }
                }
            }
        }
    }
})

// Exportando a nossas actions
export const { createUser, logoutUser, addAdress } = userSlice.actions

export default userSlice.reducer