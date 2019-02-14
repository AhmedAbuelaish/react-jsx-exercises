let Header = () => {
    return <h1>Design a header for your blog</h1>
}
let Article = () => {
    return (
    <div>
        <p>Write and design your blog article</p>
        <p>nklasndl;asn; dnaskld; jakls;jdkla;sdjk ajkld; jskl; jkla; djkl;ajdkl;s ajdkl;a jksl;dnm,x.cn.,vsdjjf;sa dsc;ldkls;djkfls dm,cdsc sdkl;sd lcmds,c ;msdkl;csd c</p>
        <p>Write and design your blog article</p>
        <p>nklasndl;asn; dnaskld; jakls;jdkla;sdjk ajkld; jskl; jkla; djkl;ajdkl;s ajdkl;a jksl;dnm,x.cn.,vsdjjf;sa dsc;ldkls;djkfls dm,cdsc sdkl;sd lcmds,c ;msdkl;csd c</p>
        <p>nklasndl;asn; dnaskld; jakls;jdkla;sdjk ajkld; jskl; jkla; djkl;ajdkl;s ajdkl;a jksl;dnm,x.cn.,vsdjjf;sa dsc;ldkls;djkfls dm,cdsc sdkl;sd lcmds,c ;msdkl;csd c</p>
        <p>Write and design your blog article</p>
    </div>
    )
}
let Footer = () => {
    return <h6>Design a footer for your blog</h6>
}

let Blog = () => {
    return (
        <div>
            <Header />
            <Article />
            <Footer />
        </div>
    )
}


ReactDOM.render(<Blog />, document.getElementById('root'))