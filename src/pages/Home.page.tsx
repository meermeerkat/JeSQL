import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import selectedScriptState from "@/state/SelectedScript";
import { useState } from "react";
import { useRecoilValue } from "recoil";



const Home = () => {
    const IncrementCount = () => {
        setCount(count+1);
    }

    const selectedScript = useRecoilValue(selectedScriptState)
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>

            <h1>Je'SQL</h1>
            <Button onClick={IncrementCount}>The current count is: {count}</Button>
            </div>
            <div>
                <Label>The selected script is: {selectedScript.name}</Label>
            </div>
        </div>
    );
};

export default Home;
