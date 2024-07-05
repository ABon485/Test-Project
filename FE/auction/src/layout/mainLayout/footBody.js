import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Porsche from '../../asset/Porsche.png';

const FootBody = () => {
    return (
        <div className="p-5 py-4" style={{ fontFamily: 'Arial, sans-serif' }}>
            <h3><b>Recommend other products</b></h3>
            <div className="row  row-cols-md-4 mt-4">
                <div className="col-3">
                    <div className="details-section" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px', backgroundColor: '#ebedef', height: '430px', width: '350px' }}>
                        <div className="title-row row mb-3">
                            <img src={Porsche} alt="Product" className="img-fluid" style={{ borderRadius: '10px 10px 0 0', maxHeight: '280px' }}/>
                        </div>
                        <div className="row" style={{paddingLeft:'20px'}}>
                            <h5 className="col-12">Qing Dynasty Vase</h5>
                            <h5 className="col-12">Los Angeles</h5>
                            <p className="col-12" style={{paddingLeft:'200px'}}>2 P.m 07/2024</p>
                        </div>
                        <div className="place-bid-button text-center mt-2">
                            <button style={{ backgroundColor: '#FF6262', color: 'white', border: 'none', padding: '10px 70px', cursor: 'pointer', borderRadius: '30px' }}>Add</button>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="details-section" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px', backgroundColor: '#ebedef', height: '430px', width: '350px' }}>
                        <div className="title-row row mb-3">
                            <img src={Porsche} alt="Product" className="img-fluid" style={{ borderRadius: '10px 10px 0 0', maxHeight: '280px' }}/>
                        </div>
                        <div className="row" style={{paddingLeft:'20px'}}>
                            <h5 className="col-12">Qing Dynasty Vase</h5>
                            <h5 className="col-12">Los Angeles</h5>
                            <p className="col-12" style={{paddingLeft:'200px'}}>2 P.m 07/2024</p>
                        </div>
                        <div className="place-bid-button text-center mt-2">
                            <button style={{ backgroundColor: '#FF6262', color: 'white', border: 'none', padding: '10px 70px', cursor: 'pointer', borderRadius: '30px' }}>Add</button>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="details-section" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px', backgroundColor: '#ebedef', height: '430px', width: '350px' }}>
                        <div className="title-row row mb-3">
                            <img src={Porsche} alt="Product" className="img-fluid" style={{ borderRadius: '10px 10px 0 0', maxHeight: '280px' }}/>
                        </div>
                        <div className="row" style={{paddingLeft:'20px'}}>
                            <h5 className="col-12">Qing Dynasty Vase</h5>
                            <h5 className="col-12">Los Angeles</h5>
                            <p className="col-12" style={{paddingLeft:'200px'}}>2 P.m 07/2024</p>
                        </div>
                        <div className="place-bid-button text-center mt-2">
                            <button style={{ backgroundColor: '#FF6262', color: 'white', border: 'none', padding: '10px 70px', cursor: 'pointer', borderRadius: '30px' }}>Add</button>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="details-section" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px', backgroundColor: '#ebedef', height: '430px', width: '350px' }}>
                        <div className="title-row row mb-3">
                            <img src={Porsche} alt="Product" className="img-fluid" style={{ borderRadius: '10px ', maxHeight: '280px' }}/>
                        </div>
                        <div className="row" style={{paddingLeft:'20px'}}>
                            <h5 className="col-12">Qing Dynasty Vase</h5>
                            <h5 className="col-12">Los Angeles</h5>
                            <p className="col-12" style={{paddingLeft:'200px'}}>2 P.m 07/2024</p>
                        </div>
                        <div className="place-bid-button text-center mt-2">
                            <button style={{ backgroundColor: '#FF6262', color: 'white', border: 'none', padding: '10px 70px', cursor: 'pointer', borderRadius: '30px' }}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FootBody;
