import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useState } from "react";



const Home = () => {
    const IncrementCount = () => {
        setCount(count+1);
    }


    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Je'SQL</h1>
            <Button onClick={IncrementCount}>The current count is: {count}</Button>
            <ModeToggle></ModeToggle>
        </div>
    );
};

export default Home;
