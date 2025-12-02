const Home = () => {
  return (
    <div className="flex  items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 font-sans px-4 py-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-10 lg:p-16 max-w-2xl w-full rounded shadow-2xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 ">
          GET IN TOUCH
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-medium text-gray-700 text-sm sm:text-base">
                Enter your name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full bg-gray-100 px-4 py-3 rounded outline-none "
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-gray-700 text-sm sm:text-base">
                Enter your email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full bg-gray-100 px-4 py-3 rounded outline-none  transition"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="website" className="font-medium text-gray-700 text-sm sm:text-base">
              Your Website
            </label>
            <input
              id="website"
              type="url"
              className="w-full bg-gray-100 px-4 py-3 rounded outline-none  transition"
              placeholder="https://"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-medium text-gray-700 text-sm sm:text-base">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full bg-gray-100 px-4 py-3 rounded outline-none  transition"
              placeholder="Your message here..."
            />
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="w-full sm:w-auto text-white font-bold py-4 px-10 rounded cursor-pointer bg-gradient-to-r from-green-400 to-blue-500  shadow-lg text-lg"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;