import BirinciDerece from "./BirinciDerece";
import İkinciDerece from "./İkinciDerece";
import Hakkinda from "./Hakkinda";

// Ana Öğe
function App() {
  return (
    <div className="container">
      <div className="text-center mt-3 ">
        <h1>Bir Bilinmeyenli Denklem Çözücü</h1>
        <p className="fs-5"> Birinci ve ikinci derece bir bilinmeyenli denklemleri çözmek için katsayıları uygun yerlere yazıp hesaplayınız </p>
      </div>

      <BirinciDerece />
      <İkinciDerece />

      
      <Hakkinda/>
    </div>
  );
}

export default App;
