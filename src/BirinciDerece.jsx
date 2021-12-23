import React, { useState } from 'react';

let BirinciDerece = (props) => {
    //Değişkenlerin tutulduğu stateler
    const [a, seta] = useState("")
    const [b, setb] = useState("")
    const [c, setc] = useState("")
    const [sonuc, setsonuc] = useState("")

    //Giriş değiştiğinde değişkenlere atayan fonksiyonlar
    let aDegisim = (event) => {
        seta(event.target.value)
    }
    let bDegisim = (event) => {
        setb(event.target.value)
    }
    let cDegisim = (event) => {
        setc(event.target.value)
    }

    //Butona tıklanınca hesaplayan fonksiyon
    let hesapla = () => {
        if(a != "" && b != "" && c != ""){
            setsonuc("  X = " + (Number(c) - Number(b)) / Number(a))
        }
        else{
            setsonuc("Lütfen geçerli değer giriniz")
        }
    }

    // dinamik html + js kodu
    return (
        <div>
            <h2>Birinci Derece Denklem Çözücü</h2>
            <p>Denklem için A, B ve C katsayılarını giriniz</p>
            <p>Örnek : "2x + 5 = 7" için -{'>'} A = 2 , B = 5 , C = 7</p>

            <div class="input-group">
                <input type="number" class="form-control me-2" placeholder="A değerini girin" onChange={aDegisim} />
                <span className='fs-3'> + </span>
                <input type="number" class="form-control ms-2 me-2" placeholder="B Değerini girin" onChange={bDegisim} />
                <span className='fs-3'> = </span>
                <input type="number" class="form-control ms-2" placeholder="C Değerini girin" onChange={cDegisim} />
            </div>

            <button className='btn btn-primary btn-lg mt-3 mb-3' onClick={hesapla}> Hesapla  <i class="fas fa-check-circle"></i></button>
            <div class="alert alert-success w-50" >
                Sonuç : <span className='fw-bold'>{sonuc}</span>
            </div>
        </div>
    )
}


export default BirinciDerece