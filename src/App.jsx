import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");
  const values=(color1)=>{
    setColor(color1)
  }


  return (
    <div
      className="w-full h-screen duration-300 transition-all border-4 grid place-content-center" 
      style={{ backgroundColor: color }}
    >
      <div className='flex mb-0 flex-wrap shadow-lg rounded-lg p-2 border-2 bg-white border-black '>
      <div className='  flex  flex-wrap gap-5 items-center justify-center mx-2 '>
        <button className='text-xl font-bold p-2 bg-red-500 text-white ' onClick={()=>values("red")}>RED</button>
        <button className='text-xl font-bold p-2 bg-green-500 text-white ' onClick={()=>values("green")}>green</button>
        <button className='text-xl font-bold p-2 bg-violet-500 text-white ' onClick={()=>values("violet")}>violet</button>
        <button className='text-xl font-bold p-2 bg-sky-500 text-white ' onClick={()=>values("blue")}>blue</button>
        <button className='text-xl font-bold p-2 bg-indigo-500 text-white ' onClick={()=>values("indigo")}>indigo</button>
        <button className='text-xl font-bold p-2 bg-pink-500 text-white ' onClick={()=>values("pink")}>pink</button>
        <button className='text-xl font-bold p-2 bg-gray-500 text-white ' onClick={()=>values("gray")}>gray</button>
        <button className='text-xl font-bold p-2 bg-slate-900 text-white ' onClick={()=>values("black")}>black</button>


      </div>
      </div>
    </div>
  );
}

export default App;
