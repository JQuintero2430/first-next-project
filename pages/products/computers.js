function computers(){

        return(
        <div>
            <h1 id="firstTitle">Computers Page</h1>
            <p>This is the Computers page</p>

            <button id="buttonClick" onClick={()=> alert('Clicked')}>
                Click
            </button>
        </div>
    )
}

export default computers;