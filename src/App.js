import './App.css';
import { useState } from 'react';
import Box from './component/Box';
import Button from './component/Button';

// 박스 2개 (타이틀, 사진, 결과값)
// 가위 바위 보 버튼,
// 버튼 클릭 -> 클릭한 값 좌측(나)에게 보임. 컴퓨터는 랜덤하게 아이템 선택
// 두 값을 결과를 가지고 승패를 따진다.
// 승패결과에 따라 테두리 색 바뀐다.(이기면-초록, 지면-빨강, 타이=검정색)
function App() {
  const btnImage =['/img/r1.png','/img/p1.png','/img/s1.png' ];
  const gameImage =[`/img/rock.png`,`/img/paper.png`,`/img/scissors.png`]
  const [you, setYou] = useState(0)
  const [computer, setComputer] = useState(0)  // 컴퓨터 인덱스
  const [myResult, setMyResult] = useState('Tie')
  const [comResult, setComResult] = useState('Tie')
  const [gameResult, setGameResult] = useState('Tie')

  return (
    <div className="main">
      <div className="match">
        <Box who="You" image={gameImage[0]} result={myResult}/>
        <Box who="Computer" image={gameImage[0]} result={comResult}/>
      </div>
      <div className="btns">
        {btnImage.map((img, index) =>
          <Button key={index} image={img} />
        )}
      </div>
      <div className="game-result">
        <div>{gameResult}</div>
      </div>
    </div>
  );
}

export default App;