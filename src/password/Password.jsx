import { useState } from 'react';

export const Password = () => {
  const [pass, setPass] = useState(8);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);
  const [display, setDisplay] = useState("");

  const generate = () => {
    let set = "";
    if (upper) set += "ABCDEFGHIJKMNOPQRSTUVWXYZ";
    if (lower) set += "abcdefghijkmnopqrstuvwxyz";
    if (number) set += "0123456789";
    if (symbol) set += "@#$%^&*_";
    let gen = "";
    for (let i = 0; i < pass; i++) {
      const save = Math.floor(Math.random() * set.length);
      gen += set[save];
    }
    setDisplay(gen);
  };
  const copy  =()=>{
    navigator.clipboard.writeText(display)
  }

  return (
    <>
      <div className="container-password">
        <h1>Strong Password Generator</h1>
        <div className="group-input">
          <label htmlFor="pass">Password Length</label>
          <input
            type="number"
            id="pass"
            value={pass}
            onChange={(e) => setPass(parseInt(e.target.value))}
          />
        </div>
        <div className="group-checkbox">
          <input
            type="checkbox"
            id="upper"
            checked={upper}
            onChange={(e) => setUpper(e.target.checked)}
          />
          <label htmlFor="upper">Include UpperCase</label>
        </div>
        <div className="group-checkbox">
          <input
            type="checkbox"
            id="Lower"
            checked={lower}
            onChange={(e) => setLower(e.target.checked)}
          />
          <label htmlFor="Lower">Include LowerCase</label>
        </div>
        <div className="group-checkbox">
          <input
            type="checkbox"
            id="num"
            checked={number}
            onChange={(e) => setNumber(e.target.checked)}
          />
          <label htmlFor="num">Include numbers</label>
        </div>
        <div className="group-checkbox">
          <input
            type="checkbox"
            id="symbol"
            checked={symbol}
            onChange={(e) => setSymbol(e.target.checked)}
          />
          <label htmlFor="symbol">Include symbol</label>
        </div>
        <button className="gen" onClick={generate}>Generate password</button>
        <div className="result">
          <input type="text" readOnly value={display} />
          <button className="btn-cpy" onClick={copy}>Copy</button>
        </div>
      </div>
    </>
  );
};
