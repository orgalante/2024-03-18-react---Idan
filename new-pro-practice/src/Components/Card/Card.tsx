
import "./Card.css";
import { Container } from "../Container/Container";

interface Props {
    name: string;
    jobTitle: string;
    imgSrc:string;
}

export const Card = (props:Props) => {
const {name,jobTitle,imgSrc} = props;
    return (
        <div className="card">
            <img src={imgSrc} alt="Avatar" style={{width:"100%"}}/>
            <Container name={name} jobTitle={jobTitle} />
        </div>
    );

};