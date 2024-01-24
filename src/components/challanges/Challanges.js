import ChallangesList from "./ChallangesList";
import "../../style/challanges.css"

const Challanges = () => {
    return (
        <section className="Challanges-Component">
            <h1>AVANCE E AUMENTE SEU NÍVEL</h1>
            <div className="InsideChallanges">
                <ChallangesList />
            </div>
        </section>
    )
}

export default Challanges