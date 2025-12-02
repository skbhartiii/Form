
const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 font-sans">
      <div className="bg-white p-16 max-w-2xl w-full rounded shadow-lg">
        <h2 className="text-3xl font-bold  text-black mb-6">GET IN TOUCH</h2>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name" className="font-medium text-gray-700">Tell us your name</label>
              <input
                id="name"
                type="text"
                className="bg-gray-100 px-3 py-2 rounded outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="font-medium text-gray-700">Enter your email</label>
              <input
                id="email"
                type="email"
                className="bg-gray-100 px-3 py-2 rounded outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="website" className="font-medium text-gray-700">Your Website</label>
            <input
              id="website"
              type="url"
              className="bg-gray-100 px-3 py-2 rounded outline-none"
              placeholder="http://"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="message" className="font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              className="bg-gray-100 px-3 py-2 rounded outline-none"
              placeholder="Your message here"
              rows={4}
            />
          </div>
          <div className="flex justify-center">
            <button className="text-white font-semibold py-3 px-6 rounded cursor-pointer bg-gradient-to-r from-green-400 to-blue-500">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
