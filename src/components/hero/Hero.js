import '../../style/hero.css'

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-left-side">
                <div className="hero-header">
                    <h1>Sua Jornada Fitness Começa Aqui!</h1>
                </div>
                <div className="hero-text-option">
                    <p>Descubra a revolução no universo dos treinos de academia Seja você um novato ansioso para iniciar sua jornada fitness ou um atleta experiente em busca de desafios mais intensos, nosso aplicativo foi projetado para transformar seus objetivos em conquistas tangíveis.</p>
                </div>
                <div className="hero-option">
                    <button><span>CONHEÇA</span></button>
                </div>
            </div>
            <div className="hero-right-side">
                <div className='hero-right-title'>
                    <h2>COMPARTILHE</h2>
                </div>
                <div className="hero-share-options">
                    <div className="hero-share-option">
                        <button className="hero-share-wrapper-button">
                            <span><i className="fa-brands fa-square-instagram"></i></span>
                        </button>
                    </div>
                    <div className="hero-share-option">
                        <button className="hero-share-wrapper-button">
                            <span><i className="fa-brands fa-twitter"></i></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero