type ButtonPropsType={
    sum:(car:string,mark:string) =>void
    car:string
    mark:string
}
export function Button({sum,car,mark}:ButtonPropsType) {
    const sum3=()=>{
        document.write("<a>" + sum(car,mark) + "</a>")

    }
    return(
        <>
            <div className="result1">
            <button onClick={sum3}>кнопка</button>
            </div>
        </>
    )
}