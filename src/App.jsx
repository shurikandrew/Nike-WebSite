import Hero from "./components/Hero";
import PopularProducts from "./components/PopularProducts";
import SuperQuality from "./components/SuperQuality";
import Services from "./components/Services";
import SpecialOffer from "./components/SpecialOffer";
import CustomerReviews from "./components/CustomerReviews";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Nav from "./components/Nav.jsx";

const App = () => (
    <main className='relative'>
        <Nav/>
        <section className="xl:padding-l wide:padding-r padding-b">
            <Hero/>
        </section>

        <section className="padding">
            <PopularProducts/>
        </section>

        <section className="padding">
            <SuperQuality/>
        </section>

        <section className="padding-x py-10">
            <Services/>
        </section>

        <section className="padding">
            <SpecialOffer/>
        </section>

        <section className="bg-pale-blue padding">
            <CustomerReviews/>
        </section>

        <section className="padding-x sm:py-32 py-16 w-full">
            <Subscribe/>
        </section>

        <section className="padding bg-black padding-x padding-t pb-8">
            <Footer/>
        </section>
    </main>
);

export default App;