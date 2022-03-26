import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const App = () => {
    return (
        <div>
            <div style={(margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12; borderRadius: 8)}>
                <label  className="rotulo" htmlFor="nome" style={(display: 'block', marginBottom: 4)}>
                    Nome:
                </label>
            <input id="nome" type"text"style={{paddingTop: 8, paddingBottom:8,} borderStyle: 'hidden', outline: 'none', width: '100%'>
        </div>
    )
}


ReactDOM.render(
    <App/>,
    // document.getElementById("root")
    document.querySelector("#root")
)






{/* <html>
    <head>

    </head>
    <body>
        <div id="root"></div>
    </body>
</html>

function App (){
    return <div>Oi</div>
}

document.getElementById("root") */}