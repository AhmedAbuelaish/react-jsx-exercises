let FirstComponent = () => {
    return (
        <div className="logo">
            <div className="row">
                <div className="orange box"></div>
                <div className="green box"></div>
            </div>
            <div className="row">
                <div className="blue box"></div>
                <div className="yellow box"></div>
            </div>
        </div>
    )
}

ReactDOM.render(<FirstComponent />, document.getElementById('root'))