import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import React,{useState} from 'react'
 
const CREATE_MESSAGE = gql`
    mutation CreateMessage($title:String!, $content:String!, $author:String!){
        createMessage(title:$title, content:$content, author:$author){
            _id
            title
            content
            author
        }
    }
`;
function MessageForm() {
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [CreateMessage] = useMutation(CREATE_MESSAGE)
    const handlerSubmit = async(e)=>{
        e.preventDefault();
        await CreateMessage({
            variables:{title, author, content}
        })
        window.location.href='/';
    }
    return (
        <div className="row">
            <div className="col-md-4 offset-md-3">
                <div className="card-body">
                    <form onSubmit={handlerSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder="Autor..." onChange={(e)=> setAuthor(e.target.value)} value={author} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Titulo..." onChange={(e)=>setTitle(e.target.value)} className="form-control" value={title}/>
                        </div>
                        <div className="form-group">
                            <textarea  rows="2" placeholder="Contenido..." onChange={(e)=>setContent(e.target.value)} className="form-control" value={content}></textarea>
                        </div>
                        <button className="btn btn-primary btn-block btn-success">Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MessageForm
