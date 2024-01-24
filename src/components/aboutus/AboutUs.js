import '../../style/aboutus.css'
import ListAbout from './ListAbout'

const AboutUs = () => {
    return (
        <section className="section-component-large">
            <div className='inside-component-large'>
                <div className="component-right-side">
                    <div className="component-title">
                        <h1>QUEM SOMOS NÓS?</h1>
                    </div>
                    <div className="component-body">
                        <h2>START - Desenvolvimento Pessoal ao Seu Alcance</h2>
                        <p>
                            No coração da era digital, apresentamos o Start, um aplicativo inovador dedicado ao seu crescimento pessoal. Nossa missão é inspirar e capacitar indivíduos a atingirem seu potencial máximo. Com uma abordagem holística, oferecemos ferramentas abrangentes que abarcam desde o desenvolvimento de habilidades profissionais até o bem-estar emocional.
                            Nosso time de especialistas em desenvolvimento pessoal e tecnologia trabalha incessantemente para criar uma plataforma intuitiva e personalizável. Seja você um profissional em ascensão, um estudante ambicioso ou alguém em busca de equilíbrio, o Start é seu companheiro confiável. Explore cursos, práticas de meditação guiada, e metas personalizadas para transformar cada desafio em uma oportunidade de crescimento.
                            Junte-se a nós na jornada de autodescoberta e evolução contínua. Com o Start, a excelência pessoal está ao alcance de todos, promovendo uma comunidade conectada e capacitada para enfrentar os desafios do século 21. Transforme sua vida hoje com o Start - porque o seu potencial é nossa prioridade.</p>
                    </div>
                    <div className='component-bottom'>
                        <ListAbout />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
