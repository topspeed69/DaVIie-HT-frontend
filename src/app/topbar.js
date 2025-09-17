export default function Topbar() {
  return (
    <div className="w-full flex justify-between items-center bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">ChatLLM</h1>
        <div className="space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
        </div>
    </div>
  );
}