//create a Message component using Function based declaration

function Message (){
    const name = 'Erick';
    if (name){
        return(
            <div>Hello {name}</div>
        )
    }else{
        return(
            <div>Hello world</div>
        )
    }
}

export default Message;