import {Data} from "../js/dataset.js"    


    export const Home = () => {
        
        return(
            <>
                <div className="home-container">
                    <div className="home-image">
                        <div className="title">
                            <div className="title-two">
                            <h1>Tell your story today!</h1>
                            <p>Everyone has a story to tell, the world needs to hear your story.</p>
                            <div className="started">
                                <div className="started-container">
                                    <div>Get Started <span><i class="bi bi-arrow-right-circle-fill"></i></span> </div>
                                </div>
                            </div>
                            </div>  
                        </div>
                    </div>

                    <div className="home-image-bottom">
                        <div>More...</div>
                    </div>

                </div>

                <div className="second-home-container">
                    <div className="join">
                        <div>
                            <h1>Your story matters</h1>
                            <p>Unlock the power of your story! 
                                Every experience, challenge, and triumph you’ve faced can inspire others to take action and pursue their dreams. 
                                Share your journey and watch as your words ignite hope and motivation in those who need it most. Your story could 
                                be the spark that changes a life!
                                </p>
                        </div>
                    </div>
                    <div className="second-section">
                        {Data.map((item) => (
                            <div className="sub-section" key={item.id}>
                                <div className="item-image">
                                <img src={item.image} alt="" />
                                <span></span>
                                </div>
                                <div className="info">
                                <h3>{item.name}</h3>
                                <p>Books: {item.no_book}</p>
                                <p>Sold: {item.sold}</p>
                                <p>Genre: {item.genre}</p>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }