import { useState } from "react";

export interface DataImg {
    path: string;

}

function App(): JSX.Element {
    const [images, setImages] = useState<DataImg[]>([]);
    const [counter, setCounter] = useState<number>(0);

    const onClick = async () => {

        const data = await window.electronAPI.selectPath();
        setImages(data);

        setCounter(counter + 1);
    }



    return (
        <div className="container">
            <h1>Hola mundo!</h1>
            <h3>{counter}</h3>
            {
                images.map((image, index) => {
                    return (
                        <ul key={index}>
                            <li>{image.path}</li>
                        </ul>
                    )
                })
            }
            <button onClick={onClick}>Read files</button>
        </div>
    )
}

export default App;