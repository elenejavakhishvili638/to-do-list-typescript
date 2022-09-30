export interface Todo {
    id: number,
    todo: string,
    isDone: boolean
}

// type Actions =
//     | { type: 'add', payload: string }
//     | { type: "remove", payload: number }
//     | { type: "done", payload: number }

// const reducer = (state: Todo[], action: Actions) => {
//     switch (action.type) {
//         case "add":
//             return [
//                 ...state,
//                 { id: Date.now(), todo: action.payload, isDone: false }
//             ];
//         case "remove":
//             return state.filter((item) => item.id !== action.payload)
//         case "done":
//             return state.map((item) => item.id !== action.payload ? { ...item, isDone: !item.isDone } : item)
//         default:
//             return state
//     }
// }

// import { useReducer } from "react"

// const model = () => {

//     const [state, dispatch] = useReducer(reducer, [])

//     return (
//         <div>model < /div>
//     )
// }

// export default model