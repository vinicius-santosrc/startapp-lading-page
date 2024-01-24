import AboutUs from "../components/aboutus/AboutUs";
import Challanges from "../components/challanges/Challanges";
import Featured from "../components/featured/Featured";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import PersonalTrainer from "../components/personal-trainer/PersonalTrainer";

const LandingPage = () => {
    return (
        <>
            <Hero />
            <AboutUs />
            <Featured />
            <PersonalTrainer />
            <Challanges />
            <Footer />
        </>
    )
}

export default LandingPage;