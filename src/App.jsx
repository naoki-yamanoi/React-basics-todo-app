import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [study, setStudy] = useState({ title: "", time: "" });
  const [studys, setStudys] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [errorMg, setErrorMg] = useState(false);

  function inputTitle(e) {
    setStudy({ title: e.target.value, time: study.time });
  }
  function inputTime(e) {
    setStudy({ title: study.title, time: e.target.value });
  }
  function addRecords() {
    if (!study.title || !study.time) {
      setErrorMg(true);
      return;
    }
    const newRecords = [...studys, study];
    setStudys(newRecords);
    setStudy({ title: "", time: "" });
    setErrorMg(false);
  }

  useEffect(() => {
    studys.forEach((study) => {
      setTotalTime(totalTime + Number(study.time));
    });
  }, [studys]);

  return (
    <>
      <div>
        <div>
          学習内容
          <input type="text" value={study.title} onChange={inputTitle} />
        </div>
        <div>
          学習時間
          <input
            type="text"
            placeholder="0"
            value={study.time}
            onChange={inputTime}
          />
          時間
        </div>
        <div>入力されている学習内容:{study.title}</div>
        <div>入力されている時間:{study.time}時間</div>
        <div>
          <button onClick={addRecords}>登録</button>
        </div>
        {errorMg && (
          <div style={{ color: "red" }}>入力されていない項目があります</div>
        )}
        <div>合計時間:{totalTime}/1000(h)</div>
      </div>
      <div>
        <h2>勉強一覧</h2>
        {studys.map((record) => {
          return (
            <div key={record.title}>
              <p>タイトル: {record.title}</p>
              <p>時間: {record.time}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
