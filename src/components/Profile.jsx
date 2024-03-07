export function Profile({ name, age, place }){
    console.log(name)
    return <div className="back-div">
        <div className="image-container">
            <img className="back-image" src="src\assets\background.jpeg" ></img>
        </div>
        <div className="back-color"></div>
        <div className="pic-container">
            <img src="src\assets\profile-pic.jpeg" className="profile-pic"></img>
        </div>
        <div className="detail-container">
            <span><b className="big">{name}</b> <span className="light">{age}</span></span><br></br>
            <span className="light">{place}</span>
        </div>
        <BottomBar />
    </div>
}

function BottomBar(){
    return <div className="bottom-container">
        <div className="bottom-detail">
            <span className="big"><b>80K</b></span>
            <span className="light">Followers</span>
        </div>
        <div className="bottom-detail">
            <span className="big"><b>803K</b></span>
            <span className="light">Likes</span>
        </div>
        <div className="bottom-detail">
            <span className="big"><b>1.4K</b></span>
            <span className="light">Photos</span>
        </div>
    </div>
}