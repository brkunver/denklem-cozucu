import React, { useState } from 'react';

let BirinciDerece = (props) => {
    //Değerlerin tutulduğu değişken stateler
    const [a, seta] = useState("")
    const [b, setb] = useState("")
    const [c, setc] = useState("")
    const [sonuc, setsonuc] = useState("")

    // girişler her değiştiğinde state' i değiştiren fonksiyonlar
    let aDegisim = (event) => {
        seta(event.target.value)
    }
    let bDegisim = (event) => {
        setb(event.target.value)
    }
    let cDegisim = (event) => {
        setc(event.target.value)
    }
    
    // butona tıklanınca sonucu hesaplayan fonksiyon
    let hesapla = () => {
        if(a != "" && b != "" && c != "" ){
            let delta = Number(b) * Number(b)  - (4 * Number(a) * Number(c));
            console.log(delta);
            if(delta < 0 ){
                setsonuc("Reel kök yok")
            }
            else{
                let x1 = (-Number(b) - Math.sqrt(delta)) / (2*Number(a))
                let x2 = (-Number(b) + Math.sqrt(delta)) / (2*Number(a))
                setsonuc( "x1 = " + x1 + ", x2 = " + x2 )

            } 
        }
        else{
            setsonuc("Lütfen geçerli değer giriniz")
        }
    }

    return (
        <div >
            <h2 className='mt-5'>İkinci Derece Denklem Çözücü</h2>
            <p>Denklem için A, B ve C katsayılarını giriniz</p>
            <p>Örnek : "3x^2 + 9x + 6 = 0" için -{'>'} A = 3 , B = 9 , C = 6 </p>

            <div class="input-group">
                <input type="number" class="form-control me-2" placeholder="A değerini girin" onChange={aDegisim} />
                <span className='fs-3'> + </span>
                <input type="number" class="form-control ms-2 me-2" placeholder="B Değerini girin" onChange={bDegisim} />
                <span className='fs-3'> + </span>
                <input type="number" class="form-control ms-2 me-2" placeholder="C Değerini girin" onChange={cDegisim} />
                <span className='fs-3'> =  0</span>
            </div>

            <button className='btn btn-primary btn-lg mt-3 mb-3' onClick={hesapla}> Hesapla  <i class="fas fa-check-circle"></i></button>
            <div class="alert alert-success w-50" >
                Sonuç : <span className='fw-bold'>{sonuc}</span>
            </div>
        </div>
    )
}


export default BirinciDerece