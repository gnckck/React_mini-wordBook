
import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";


export default function Day() {
    // dummy.words
    const a= useParams();
    const day = a.day;
    // 위에 두줄을 const { day } = useParams(); 로 바꿀 수 있음
    // 위에 두줄을 const day = useParams().day; 로 바꿀 수 있음
    const wordList = dummy.words.filter(word =>
         word.day === Number(day));

   
    
    console.log(a);

    return (
        <>
        <h2> Day {day}</h2>
    <table>
        <tbody>
            {wordList.map(word => (
                <Word word = {word} key = {word.id} />
            ))}
            </tbody>
            </table>
            </>
    );
        }