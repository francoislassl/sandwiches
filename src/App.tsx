import React from 'react';

const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header Section */}
            <header className="bg-blue-600 text-white p-6">
                <h1 className="text-3xl font-bold text-center">Delicious Sandwiches</h1>
                <p className="text-lg text-center mt-2">Taste the best sandwiches made with love!</p>
            </header>

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center flex-grow bg-white p-6">
                <h2 className="text-2xl font-semibold mb-4">Our Specialties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Sandwich Cards */}
                    {['Club Sandwich', 'BLT', 'Veggie Delight', 'Turkey Avocado', 'Grilled Cheese', 'Italian Hoagie'].map((sandwich) => (
                        <div key={sandwich} className="bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-xl font-bold mb-2">{sandwich}</h3>
                            <p className="text-gray-700">A delicious choice for everyone!</p>
                            <button className="mt-4 bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-300">Order Now</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-blue-600 text-white p-6 text-center">
                <p>Contact us at: <a href="mailto:info@sandwiches.com" className="underline">info@sandwiches.com</a></p>
                <p className="mt-2">Follow us on social media!</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="text-white hover:text-blue-300">Facebook</a>
                    <a href="#" className="text-white hover:text-blue-300">Instagram</a>
                    <a href="#" className="text-white hover:text-blue-300">Twitter</a>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;