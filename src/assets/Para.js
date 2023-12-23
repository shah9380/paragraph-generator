const Para = (props)=>{
    return(
        <p className="mb-4 text-xl"><span className="font-medium">{props.paranumber}=</span>&gt;{props.content}</p>
    )
};
export default Para;