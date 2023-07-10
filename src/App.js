import "./style.css"
import img from "./ia.jpg"
import linkedin from "./linkedin.jpg"
import github from "./github.png"
import {useState, useEffect} from "react";




function App() {
  const [blog, setBlog] = useState ([]);

  useEffect(()=> {
    function loadApi (){
      fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
      .then((r)=> r.json())
      .then((json)=> {
        setBlog(json)
      })
    }
    loadApi()
  }, [])
  
  
  
  
  return (
    <div className="App">
    
     <header>
      <a href="/">
        <h1 className="titulo">Blog</h1>
      </a>
      <div className="contato">
        <a href="https://www.linkedin.com/in/gabrielemmel/" target="_blank"><img className="social" src={linkedin}/></a>
        <a href="https://github.com/Gabriel-DSE" target="_blank"><img className="social" src={github}/></a>
      </div>
     </header>
     
     <main>
      
      {blog.map((item)=>{
        
        return(
      
      <article key={item.id}>
        <h1>{item.titulo}</h1>
        <h2>{item.categoria}</h2>
        <img src={item.capa} alt={item.titulo} tittle={item.titulo}/>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </article>
       
        ) 
     
      })}
    
     </main>
     
     <footer>
        
     </footer>
    
    </div>
  );
}

export default App;
