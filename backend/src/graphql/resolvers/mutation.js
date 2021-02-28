import Message from '../../models/message'
const Mutation = {
    // async createMessage(_,{input}){
    //     const newMessage = new Message(input);
    //     await newMessage.save();
    //     return newMessage;
    // }
    
    async createMessage(_,{title,content,author}){
        const newMessage = new Message({title,content, author});
        await newMessage.save();
        return newMessage;
    }
}
export default Mutation;