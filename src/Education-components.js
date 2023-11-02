import React from 'react'
import './style.css'
const LeftLayer = () => {
    return (
        <div style={{ marginLeft:'20px', marginTop:'30px'}}>
          <div class="container">
  <div class="row">
    <div class="col-3">
      <img src="img/Asa.png" width="120" alt="รูปภาพ" />
    </div>
    <div class="col-6">
      <h3 class="border p-2 card" style={{textAlign:'left',width:'620px'}}>ระดับประถมศึกษา<br /><br />โรงเรียนอาษาวิทยา</h3>
    </div>
  </div><br /><br />
  <div class="row">
  <div class="col-3">
      <img src='img/skt.png' width="120" alt="รูปภาพ" />
    </div>
    <div class="col-6">
      <h3 class="border p-2 card" style={{textAlign:'left',width:'620px'}}>ระดับมัธยมศึกษา<br />
      สายวิทย์คณิต<br />
      โรงเรียนสวนกุหลาบวิทยาลัย ธนบุรี</h3>
    </div>
  </div><br /><br />
  </div>
  <div class="row">
    <div class="col-3">
      <img src='img/kmutt.jpeg' width="120" alt="รูปภาพ" />
    </div>
    <div class="col-6">
      <h3 class="border p-2 card" style={{textAlign:'left',width:'620px'}}>ระดับปริญญาตรี ชั้นปี 1<br />
      คณะวิศวะกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์<br />
      มหาวิทยาลัยพระจอมเกล้าธนบุรี</h3>
    </div>
  </div>
  </div>
    );
  };

  const stitle = {fontFamily:'Papyrus'};
  const CenterLayer = () => {
    return (<> 
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src='/img/study-book.gif' width={'300px'}/>
      </div>
      </>
    );
  };
  const RightLayer = () => {
    return (
      <div className="right-layer-img-about-me">
        d
      </div>
    );
  };
  
export function Education_Page() {
    return (<>
        <div className="education-container">
      <LeftLayer/>
      <CenterLayer/>
      <RightLayer/>
    </div>  
    </>
    )
}