interface CardProps{
    name:string;
    description:string;
    image:string;
}

export const Card = (props:CardProps)=> {
    const {name,description, image}=props;
    return (
    < div className="card">
    {name}
    </div>
    );
};