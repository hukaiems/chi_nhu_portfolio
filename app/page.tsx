import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full px-6 text-center">


      {/* Main Content Content */}
      <div className="z-10 flex flex-col items-center max-w-3xl">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-slate-900 mb-6">
          Hi, I'm Natalie
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-10 font-light max-w-2xl leading-relaxed">
          A PhD in English language. I am passionate about literature, linguistics, and exploring the world.
        </p>
        
      </div>
      
    </div>
  );
}