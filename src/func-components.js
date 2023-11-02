import React from 'react'
import './style.css'
const LeftLayerI = () => {
    return (
        <div>
      </div>
    );
  };

  const stitle = {fontFamily:'Papyrus'};
  const CenterLayerI = () => {
    return (<> 
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1 className='title_text' style={stitle}>Portfolio by<br />
          <span style={{color:'#BD0000'}}>Soponvit Kempet</span><br /><br />
          Slogan<br /> <span style={{color:'#BD0000'}}>
            Where there’s a will, there’s a way!</span></h1>
      </div>
      </>
    );
  };
  const RightLayerI = () => {
    return (
      <div className="right-layer-img-about-me">
        <img src="img/Heart.png" className='imgheart' alt="Your Image" />
      </div>
    );
  };
  
export function Content_About_Me() {
    return (<>
        <div className="app-container">
      <LeftLayerI />
      <CenterLayerI/>
      <RightLayerI />
    </div>  
    <div className="AboutMe-container" >
    <LeftLayerB />
    </div>      
    <div className="contract-container" >
    <LeftLayerC />
      <CenterLayerC/>
      <RightLayerC/>
    </div>
    </>
    )
}

const LeftLayerB = () => {
    return (
        <div style={{marginTop:'60px' , marginLeft:'20px', textAlign:'left'}}>
            <h1 style={{color:'#B60000', fontSize:'50px'}}>&nbsp;About Me</h1>
            <br/>
            <div style={{margin:'15px', marginRight:'250px'}}>
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ผมเป็นนักศึกษาระดับปริญญาตรีชั้นปี 1 ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เว็บไซต์นี้จะเกี่ยวกับตัวผม ในด้านสกิล การศึกษาและรายชื่อติดต่อ ในตอนนี้ผมมีความสนใจด้าน ML เกี่ยวกับ Image
                Classification และ NLP ในตอนนี้ผมยังเป็นมือใหม่ในด้านนี้เพราะพึงเข้าวงการ
                จึงทำให้ผมกำลังศึกษาและเรียนรู้ สาเหตุที่ผมอยากทำด้านนี้ เพราะมีความชื่อชอบเกี่ยวกับ
                 AI generations ต่างๆ ทั้ง Image generations และ Text generations 
                 </h2>
                 &nbsp;&nbsp; <img src='./img/fotorAI1.jpg' width={150} style={{marginLeft:'100px'}}></img>
                 &nbsp;&nbsp;<img src='./img/GPT1.png' width={300} style={{marginLeft:'100px'}}></img>
                </div>
    </div>
    );
  };
const LeftLayerC = () => {
    return (<>
        <div style={{ marginLeft:'20px'}}>
            <h1 style={{color:'#B60000', fontSize:'50px', padding:'30px'}}>&nbsp;Contract</h1>
            <div style={{padding:'50px'}}>
            <h3>&nbsp;<img src='img/call.jpg' width={50}/>&nbsp;&nbsp;: 088-006-2507</h3><br /><br />
            <h3>&nbsp;<img src='img/Facebook.png' width={50}/>&nbsp;&nbsp;: น้องฮาร์ท โรบอท</h3><br /><br />
            <h3>&nbsp;<img src='img/Line.png' width={50}/>&nbsp;&nbsp;: heartrobotics</h3><br /><br />
            <h3>&nbsp;<img src='img/Mail.png' width={50}/>&nbsp;&nbsp;: soponvit55@gmail.com</h3>
            </div>
      </div>
      </>
    );
  };

  const CenterLayerC = () => {
    return (<> 
        <div style={{ marginLeft:'-150px'}}>
            <h1 style={{color:'#050000', fontSize:'50px', padding:'30px'}}>&nbsp;Use HTML/CSS</h1>
            <h2>ใช้ ภาษา React, HTML และ CSS ในการทำ</h2>
            <div style={{ marginLeft:'100px'}}>
                <img src='logo192_.png' width={70}/>&nbsp;&nbsp;&nbsp;
                <img src='img/pngwing.png' width={210}/>
            </div>
            <br/><br/><br/>
            <img style={{marginLeft:'200px'}} src='img/vpet.gif' width={150}/>
        </div>
      </>
    );
  };
  const RightLayerC = () => {
    return (
      <div className="right-layer-img-about-me">
        
      </div>
    );
  };