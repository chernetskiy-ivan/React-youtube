import React from 'react'
import TodoItem from './TodoItem'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}


export default function TodoList(props) {
    return(
        //jsx code
        <ul style={styles.ul}>
            {/*скобки говорят что мы сейчас будем писать js код*/}
            { props.todos.map(todo => {
                return <TodoItem todo={todo} key={ todo.id }></TodoItem>
            }) }
        </ul>
    )
}
