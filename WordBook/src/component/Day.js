
import { useParams } from "react-router-dom";
import  useFetch from "../hooks/useFetch";
import Word from "./Word";


export default function Day() {
    // dummy.words
    const {day}= useParams();
    // 위에 두줄을 const { day } = useParams(); 로 바꿀 수 있음
    // 위에 두줄을 const day = useParams().day; 로 바꿀 수 있음
    // const wordList = dummy.words.filter(word =>
    //      word.day === Number(day));

   


    const words = useFetch(`http://localhost:3001/words?day=${day}`);


    // console.log(a);

    return (
        <>
        <h2> Day {day}</h2>
        {words.length === 0 && (<span>Loading...</span>)}
    <table>
        <tbody>
            {words.map(word => (
                <Word word = {word} key = {word.id} />
            ))}
            </tbody>
            </table>
            </>
    );
        }