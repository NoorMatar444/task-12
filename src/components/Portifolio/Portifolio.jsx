
import port1 from '../../assets/poert1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'


export default function Portifolio() {
  
  return (
    <>
      <div className="PortifolioParent d-flex justify-content-center">
        <div className="header p-4">
          <h1>portfolio component</h1>
          <div className="icon d-flex justify-content-center p-3">
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <div className="row g-4">
          <div className="col-4">
            <div className="items">
              <div className="image position-relative">
                <img  src={port1} alt='image'/>
              </div>
              <div className="layer d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="items">
              <div className="image position-relative">
                <img src={port2} alt='image'/>
              </div>
              <div className="layer d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="items">
              <div className="image position-relative">
                <img src={port3} alt='image'/>
              </div>
              <div className="layer d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="items">
              <div className="image position-relative">
                <img src={port1} alt='image'/>
              </div>
              <div className="layer d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="items">
              <div className="image position-relative">
                <img src={port2} alt='image'/>
              </div>
              <div className="layer d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="items">
              <div className="image position-relative">
                <img src={port3} alt='image'/>
              </div>
              <div className="layer d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
