import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-200 font-sans">
      <div className="bg-white p-4 max-w-2xl w-full rounded">
        <h2 className="text-black font-bold">GET IN TOUCH</h2>
        <div className="flex flex-col items-center gap-5 mt-5">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="">Tell us your name</label>
              <input
                type="text"
                className="bg-gray-100 px-2 py-1 rounded"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="">Enter your email</label>
              <input
                type="text"
                className="bg-gray-100 px-2 py-1 rounded"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="">Your website name</label>
            <input
              type="text"
              className="bg-gray-100 px-2 py-1 rounded"
              placeholder="http://"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="">Message</label>
            <textarea
              className="bg-gray-100 px-2 py-1 rounded"
              placeholder="Your message here"
            />
          </div>
          <div>
            <button className="text-white font-semibold py-2 px-4 rounded bg-gradient-to-r from-blue-400 to-green-400">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
