import React from 'react';
import Products from '../../components/Products';

const Home = () => {
    return (
        <div>
            <section>
                <h5 style={{textAlign: "center",margin:"1rem",fontSize:"1.5rem"}}>Students Enrolled</h5>
                <Products />
            </section>
        </div>
    );
};

export default Home;
