let TextInput = (props) => {
    return (
        <div>
            <label>{props.name}:</label><input type="test" name={props.name} />
        </div>
    )
}

let YesNoRadio = (props) => {
    return (
        <div className="radioButtons">
            <label><input type="radio" name={props.name} value="yes" />Yes</label>
            <label><input type="radio" name={props.name} value="no" />No</label>
        </div>
    )
}

let SubmitButton = () => {
    return (
        <input type="submit" value="Submit" />
    )
}

let Form = () => {
    return (
        <form>
            <TextInput name="Username" />
            <TextInput name="Email" />
            <TextInput name="Password" />
            <YesNoRadio name="FirstRadio" />
            <YesNoRadio name="SecondRadio" />
            <SubmitButton />
        </form>
    )
}


ReactDOM.render(<Form />, document.getElementById('root'))