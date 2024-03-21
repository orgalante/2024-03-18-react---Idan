import "./Container.css";

interface Props {
    name: string;
    jobTitle: string;
}

export const Container = (props: Props) => {
const {name,jobTitle} = props;
    return (
        <div className="container">
            <h4><b>{name}</b></h4>
            <p>{jobTitle}</p>
        </div>
    );

};