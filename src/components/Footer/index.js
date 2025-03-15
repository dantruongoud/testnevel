
export default function Footer() {
    return (
        <footer className="text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Help Center */}
                    <div>
                        <h3 className="text-lg font-semibold">Help Center</h3>
                        <p className="text-sm text-gray-300 mt-2">If you have any questions?</p>
                        <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
                            GET ANSWERS
                        </button>
                        <div className="flex space-x-3 mt-4">
                            <a href="#" className="text-blue-300 hover:text-white"><i className="fab fa-telegram-plane"></i></a>
                            <a href="#" className="text-blue-300 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-blue-300 hover:text-white"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-blue-300 hover:text-white"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>

                    {/* Games */}
                    <div>
                        <h3 className="text-lg font-semibold">Games</h3>
                        <ul className="mt-2 space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white">Game 1</a></li>
                            <li><a href="#" className="hover:text-white">Game 2</a></li>
                            <li><a href="#" className="hover:text-white">Game 3</a></li>
                            <li><a href="#" className="hover:text-white">Game 14</a></li>
                        </ul>
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="text-lg font-semibold">About</h3>
                        <ul className="mt-2 space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Promotions</a></li>
                            <li><a href="#" className="hover:text-white">VIP</a></li>
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Awards & Certificates</a></li>
                            <li><a href="#" className="hover:text-white">App</a></li>
                        </ul>
                    </div>

                    {/* Legal Information */}
                    <div>
                        <h3 className="text-lg font-semibold">Legal Information</h3>
                        <ul className="mt-2 space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white">General Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white">Responsible Gaming Policy</a></li>
                            <li><a href="#" className="hover:text-white">Sports Betting Rules</a></li>
                            <li><a href="#" className="hover:text-white">Privacy and Cookies Policy</a></li>
                            <li><a href="#" className="hover:text-white">Payment Methods</a></li>
                            <li><a href="#" className="hover:text-white">Limits</a></li>
                        </ul>
                    </div>
                </div>

                {/* App Download */}
                <div className="mt-6 flex justify-center md:justify-end space-x-4">
                    <button className="bg-gray-700 px-4 py-2 rounded-md flex items-center space-x-2">
                        <i className="fab fa-apple"></i>
                        <span>Mac OS</span>
                    </button>
                    <button className="bg-gray-700 px-4 py-2 rounded-md flex items-center space-x-2">
                        <i className="fab fa-android"></i>
                        <span>Android</span>
                    </button>
                    <button className="bg-gray-700 px-4 py-2 rounded-md flex items-center space-x-2">
                        <i className="fab fa-apple"></i>
                        <span>iOS</span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
