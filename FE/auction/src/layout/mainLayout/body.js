import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Porsche from '../../asset/Porsche.png';
import Nissan from '../../asset/nissan.jpg';
const TopBody = () => {
    return (
        <div className="body row mt-4" style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <div className="image-section col-7" >
                <div className="main-image" style={{ marginBottom: '10px', justifyContent:'center', display:'flex'}}>
                    <img src={Porsche} alt="Main" style={{ width: '60%', height: 'auto', display: 'block', borderRadius:'20px' }} />
                </div>
                <div className="carousel-images" style={{ marginBottom: '10px', justifyContent:'center', display:'flex' }}>
                    <img src={Nissan} alt="Carousel" style={{ width: '20%', height: 'auto' , borderRadius:'20px'}} />
                </div>
            </div>
            <div className="details-section col-4" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px', backgroundColor: 'white', height:'500px'}}>
                <div className="title-row row" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div className="title col-10" style={{ margin: '0' }}>
                        <h4><b>Porsche Lenru</b></h4>
                    </div>
                    <div className="add-button col-2">
                        <button style={{ backgroundColor: '#FF6262', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer', borderRadius:'5px' }}>Add</button>
                    </div>
                </div>
                <div className="auction-info">
                    <h5 style={{ margin: '10px 0' }}>Sale/Lot Type: Online Auction</h5>
                    <div className="time-left">
                        <h5 style={{ margin: '10px 0' }}>Time left</h5>
                    </div>
                    <div className="starting-bid">
                        <h5 style={{ margin: '10px 0' }}>Starting Bid: 800.000$</h5>
                    </div>
                    <div className="location">
                        <h5 style={{ margin: '10px 0' }}>Location : Los Angerless</h5>
                    </div>
                </div>
                <div className="bid-input" style={{ paddingLeft:'10%' }}>
                    <input type="text" placeholder="$" style={{ width: '80%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>
                <div className="place-bid-button" style={{ paddingLeft:'35%' }}>
                    <button style={{ backgroundColor:  '#FF6262', color: 'white', border: 'none', padding: '10px 40px', cursor: 'pointer', borderRadius:'5px' }}>Place bid</button>
                </div>
            </div>
            <div className="description-section" style={{ marginTop: '70px',marginLeft:'100px' ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px', backgroundColor: 'white', width:'86%',height:'auto'}}>
                <h4 style={{ marginBottom: '10px'}}><b>Description:</b></h4>
                <h5>rigtdjmsle,;kflri;yuntgurvgklfjgnudyhuitrityftrygbjiuy   oirmoeute emoefutoem ectfue849ute98 vt9 vtyut89eyrt7 evt5 vty45vt 5y4t cituj iue4 vte4ty  cvtewtciewy ty vtywer vytywc e7rwytwt 7wc w7 wvyc w7t vyt7r tv wcyw cv 7vt v v t vtyer7tyerw7t </h5>
            </div>
        </div>
    );
}

export default TopBody;
