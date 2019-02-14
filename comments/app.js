let ProfilePic = () => {
    return (
        <img src="profile.png" className ="profilePicture"/>
    )
}

let CommentBody = () => {
    return (
        <div>
            <h3>Username</h3>
            <p>Body of text sit in here. This is a comment by a user asjdklahsdjkla djkal shdkjal shdkja shkd alhsjkd ahskdjl ahjskld shdkjlaf anmc nxzcdjal dsfshadkjlf sdvcmx,zv vjksdla vmxc,zvnxm,c vncx,mzv cxjvklsad </p>
        </div>
    )
}

let Comment = () => {
    return (
        <div className="comment">
            <ProfilePic />
            <CommentBody />
        </div>
    )
}

let Comments = () => {
    return (
       <div className="commentSection">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}

ReactDOM.render(<Comments />, document.getElementById('root'))