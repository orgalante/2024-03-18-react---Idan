
import { Card } from "../Components/Card/Card";
import { Header } from "../Components/Header/Header";
import { characters } from "../Data/characters";

export const Homepage = () => {
    return (
        <>
        <Header/>
            {
                characters.map((ch) => {
                    return (
                        <Card
                            name={ch.name}
                            jobTitle={ch.species}
                            imgSrc={ch.image}
                        />
                    );
                })
            }
        </>
    );
};
