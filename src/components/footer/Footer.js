import { useEffect, useState } from "react"
import FooterIcons from "./FooterIcons";
import '../../style/footer.css'

const Footer = () => {

    const [AnoAtual, setAnoAtual] = useState(null)

    function getAnoAtual() {
        const date = new Date();
        const Year = date.getFullYear()
        setAnoAtual(Year)
    }

    useEffect(() => {
        getAnoAtual()
    }, [])

    return (
        <footer className="footer-start-application">
            <div className="footer-left-side">
                <h2>START</h2>
                <p>Descubra a Revolução Fitness - Transforme Seu Estilo de Vida, Alcance Seus Objetivos!</p>
                <div className="flex-box-icons">
                    <FooterIcons />
                </div>
                <h3>Privacy Policy | © {AnoAtual} StartDesign </h3>
            </div>
            <div className="footer-middle-side">
                <h2>Contato</h2>
            </div>
            <div className="footer-right-side">
                <h2>Sobre</h2>
            </div>
        </footer>
    )
}

export default Footer