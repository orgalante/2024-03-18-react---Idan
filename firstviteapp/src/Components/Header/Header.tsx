import "./Header.css";

interface props {
    str?: string;
}

export const Header = (headerProps: props) => {
    const { str } = headerProps;
    if (str) {
        return (
            <div className="header">
                <p>{str}</p>
            </div>
        );
    }
    return <>no text</>

}