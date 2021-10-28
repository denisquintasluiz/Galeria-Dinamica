import './App.css';
//importando as imagens
import male from './male.png';
import alif from './alif.png';
import meezy from './meezy.png';
import short from './short.png';
import xboy from './xboy.png';
import group from './group.png';
import ellboy from './ellboy.png';
import imagem8 from './imagem_8.jpg';
import imagem9 from './imagem_9.jpg';

function App() {
  return (
      <div className="container-galeria">
            <div className="item-galeria w-2 h-2">
                <img src={male} alt="logoMalefico" className="img-galeria"/>
             <span className="title-galeria">
                    Maléfico NBS
                </span>
            </div>
            <div className="item-galeria w-2 h-1">
                <img src={alif}  alt="logoAlif" className="img-galeria"/>
                <span className="title-galeria">
                    Allif NBS
                </span>
            </div>
            <div className="item-galeria w-1 h-2">
                <img src={ellboy}  alt="logoEllboy" className="img-galeria"/>
                <span className="title-galeria">
                    Ellboy NBS
                </span>
            </div>
            <div className="item-galeria w-1 h-1">
                <img src={short}  alt="logoShort" className="img-galeria"/>
                <span className="title-galeria">
                    Short Kharry NBS
                </span>
            </div>
            <div className="item-galeria w-2 h-2">
                <img src={group}  alt="logoGroup" className="img-galeria"/>
                <span className="title-galeria">
                    NBS- Niggas da Black Street
                </span>
            </div>
            <div className="item-galeria w-1 h-2">
                <img src={xboy}  alt="logoXboy" className="img-galeria"/>
                <span className="title-galeria">
                    Xboy NBS
                </span>
            </div>
            <div className="item-galeria w-1 h-1">
                <img src={meezy}  alt="logoMeezy" className="img-galeria"/>
                <span className="title-galeria">
                    Meezy Jay NBS
                </span>
            </div>
            <div className="item-galeria w-1 h-1">
                <img src={imagem8} alt="logoFãs" className="img-galeria"/>
                <span className="title-galeria">
                    NBS com os Fãs
                </span>
            </div>
            <div className="item-galeria w-1 h-1">
                <img src={imagem9}  alt="logoFãs" className="img-galeria"/>
                <span className="title-galeria">
                   NBS com os Fãs
                </span>
            </div>
        </div>
  );
}

export default App;
