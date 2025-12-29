import React,{useState,useEffect,useRef} from 'react'
import './game.css'
import bushBg1 from './images/bushBg1.png'
import bushBg2 from './images/bushBg2.png'
import player from './images/player.png'
import player2 from './images/player2.png'
import snlBoard from './images/snlBoard.avif'
import snllogo from './images/s&lLogo.png'
import dice1 from './images/dice1.png'
import axios from 'axios'

export default function Game(props) {
  const {username,victory,setvictory,username2,victory2,setvictory2}=props;


  const [currentUser, setcurrentUser] = useState(username)
  const [ii, setii] = useState(0)
  const rolling = () => {
    diceBtn.disabled = true;
    diceBtn.style.cursor = 'default'

    dice.style.border = '10px solid red'
    dice.src = '/src/components/images/diceRoll.gif'
    let a;
    setTimeout(() => {
      // a = Math.floor(Math.random() * 6) + 1;
      a = Math.floor(Math.random() * 5) + 2;
      // dice value

      if(ii==0){
        console.log("User1 Dice: "+a);
        logic(a)
        setii(1)
        setcurrentUser(username2)
      }
      else{
        console.log("User2 Dice: "+a);
        logic22(a)
        setii(0)
        setcurrentUser(username)
      }

      dice.src = `/src/components/images/dice${a}.png`
      dice.style.border = 'none';

      diceBtn.disabled = false;
      diceBtn.style.cursor = 'pointer'
    }, 4000);
  }

  const some=()=> {
    logic22(100)
  }

  // Player 1
  const [marginLeft, setMarginLeft] = useState(410)
  const [marginRight, setMarginRight] = useState(410)
  const [marginTop, setMarginTop] = useState(480)
  const [marginBottom, setMarginBottom] = useState(480)

  const [i, seti] = useState(2)
  const [step, setstep] = useState(2)

  const currentStep = useRef(step);
  const currenti = useRef(i);
  useEffect(() => {
    currentStep.current = step;
  }, [step]);
  useEffect(() => {
    currenti.current = i;
  }, [i]);

  const logic=(n)=> {
        let myinterval =  setInterval(() => {
          setstep(step=>step+1)
          seti(i=>i+1)
          console.log("i: "+currenti.current+",step: "+currentStep.current,",n:"+n);


            if(currentStep.current===11||currentStep.current===21||currentStep.current===31||currentStep.current===41||currentStep.current===51||currentStep.current===61||currentStep.current===71||currentStep.current===81||currentStep.current===91){
                moveyu()
            }
            else if((currentStep.current>11&&currentStep.current<21)||(currentStep.current>31&&currentStep.current<41)||(currentStep.current>51&&currentStep.current<61)||(currentStep.current>71&&currentStep.current<81)||(currentStep.current>91&&currentStep.current<101)){
              movexl()
            }
            else if((currentStep.current>1&&currentStep.current<11)||(currentStep.current>21&&currentStep.current<31)||(currentStep.current>41&&currentStep.current<51)||(currentStep.current>61&&currentStep.current<71)||(currentStep.current>81&&currentStep.current<91)){
              movexr()
            }

            if (currenti.current === n) {
              clearInterval(myinterval);
              console.log("Final: i: "+currenti.current,",step: "+currentStep.current+",n: "+n);

              if(currentStep.current==100){
                console.log('Win');
                alert("Win!")
                setvictory(victory+1);
                axios.post("http://localhost:1010/home3",[username,victory+1])
                .then(console.log("Data Submitted"))
                .catch(err=>console.log(err))
                clearInterval(myinterval);
              }
              seti(1)
              n=1;
              ladderCheck()
              snakeCheck()
            }
        }, 500);

        const logic2=(bb)=> {
          setstep(step=>step-2)
            let myinterval2 =  setInterval(() => {
                setstep(step=>step-1)
                seti(i=>i+1)

                if((currentStep.current>0&&currentStep.current<10)||(currentStep.current>20&&currentStep.current<30)||(currentStep.current>40&&currentStep.current<50)||(currentStep.current>60&&currentStep.current<70)||(currentStep.current>80&&currentStep.current<90)||(currentStep.current>100)){
                  movexl();
                }
                else if((currentStep.current>10&&currentStep.current<20)||(currentStep.current>30&&currentStep.current<40)||(currentStep.current>50&&currentStep.current<60)||(currentStep.current>70&&currentStep.current<80)||(currentStep.current>90&&currentStep.current<100)){
                  movexr();
                }
                  else if(currentStep.current===10||currentStep.current===20||currentStep.current===30||currentStep.current===40||currentStep.current===50||currentStep.current===60||currentStep.current===70||currentStep.current===80||currentStep.current===90){
                    moveyd();
                  }

                  if (currentStep.current===bb) {
                    setstep(bb)
                    seti(1);
                    n=2;
                    clearInterval(myinterval2);
                    //add
                    setstep(step=>step+1)
                  }

              console.log("OFinal: i: "+currenti.current,",step: "+currentStep.current+",n: "+n);
            },500);
        }

        const snakeCheck=()=>{
            if(currentStep.current===27){
                logic2(5)
            }
            else if(currentStep.current===40){
                logic2(3)
            }
            else if(currentStep.current===43){
                logic2(18)
            }
            else if(currentStep.current===54){
                logic2(31)
            }
            else if(currentStep.current===66){
                logic2(45)
            }
            else if(currentStep.current===89){
                logic2(53)
            }
            else if(currentStep.current===95){
                logic2(77)
            }
            else if(currentStep.current===99){
                logic2(41)
            }
        }
    }

    // const ladderCheck=(currentStep.current)=>{
    const ladderCheck=()=>{
        if(currentStep.current===4){
            logic(21);
        }
        else if(currentStep.current===13){
            logic(33);
        }
        else if(currentStep.current===42){
            logic(21);
        }
        else if(currentStep.current===50){
            logic(19);
        }
        else if(currentStep.current===62){
            logic(19);
        }
        else if(currentStep.current===74){
            logic(18);
        }
    }

  // move slow step by step
      let b;
      const movexr=()=> {
        setMarginLeft(prev => prev + 47);
        setMarginRight(prev => prev + 47);
      }
      const movexl=()=> {
        setMarginLeft(prev => prev - 47);
        setMarginRight(prev => prev - 47);
      }
      const moveyu=()=> {
        setMarginTop(prev => prev - 47);
        setMarginBottom(prev => prev - 47);
      }
      const moveyd=()=> {
        setMarginTop(prev => prev + 47);
        setMarginBottom(prev => prev + 47);
      }

    // Player 2
    const [marginLeft2, setMarginLeft2] = useState(410)
    const [marginRight2, setMarginRight2] = useState(410)
    const [marginTop2, setMarginTop2] = useState(480)
    const [marginBottom2, setMarginBottom2] = useState(480)

    const [i2, seti2] = useState(2)
    const [step2, setstep2] = useState(2)

    const currentStep2 = useRef(step2);
    const currenti2 = useRef(i2);
    useEffect(() => {
      currentStep2.current = step2;
    }, [step2]);
    useEffect(() => {
      currenti2.current = i2;
    }, [i2]);

    const logic22=(n2)=> {
          let myinterval22 =  setInterval(() => {
            setstep2(step2=>step2+1)
            seti2(i2=>i2+1)
            console.log("i2: "+currenti2.current+",step2: "+currentStep2.current,",n2:"+n2);

              if(currentStep2.current===11||currentStep2.current===21||currentStep2.current===31||currentStep2.current===41||currentStep2.current===51||currentStep2.current===61||currentStep2.current===71||currentStep2.current===81||currentStep2.current===91){
                  moveyu2()
              }
              else if((currentStep2.current>11&&currentStep2.current<21)||(currentStep2.current>31&&currentStep2.current<41)||(currentStep2.current>51&&currentStep2.current<61)||(currentStep2.current>71&&currentStep2.current<81)||(currentStep2.current>91&&currentStep2.current<101)){
                movexl2()
              }
              else if((currentStep2.current>1&&currentStep2.current<11)||(currentStep2.current>21&&currentStep2.current<31)||(currentStep2.current>41&&currentStep2.current<51)||(currentStep2.current>61&&currentStep2.current<71)||(currentStep2.current>81&&currentStep2.current<91)){
                movexr2()
              }

              if (currenti2.current === n2) {
                clearInterval(myinterval22);
                console.log("Final: i2: "+currenti2.current,",step2: "+currentStep2.current+",n2: "+n2);

                if(currentStep2.current==100){
                  console.log('Win');
                  alert("Win!")
                  setvictory2(victory2+1);
                  axios.post("http://localhost:1010/home3",[username2,victory2+1])
                  .then(console.log("Data Submitted"))
                  .catch(err=>console.log(err))
                  clearInterval(myinterval22);
                }
                seti2(1)
                n2=1;
                ladderCheck2()
                snakeCheck2()
              }
          }, 500);

          const logic222=(bb2)=> {
            setstep2(step2=>step2-2)
              let myinterval222 =  setInterval(() => {
                  setstep2(step2=>step2-1)
                  seti2(i2=>i2+1)

                  if((currentStep2.current>0&&currentStep2.current<10)||(currentStep2.current>20&&currentStep2.current<30)||(currentStep2.current>40&&currentStep2.current<50)||(currentStep2.current>60&&currentStep2.current<70)||(currentStep2.current>80&&currentStep2.current<90)||(currentStep2.current>100)){
                    movexl2();
                  }
                  else if((currentStep2.current>10&&currentStep2.current<20)||(currentStep2.current>30&&currentStep2.current<40)||(currentStep2.current>50&&currentStep2.current<60)||(currentStep2.current>70&&currentStep2.current<80)||(currentStep2.current>90&&currentStep2.current<100)){
                    movexr2();
                  }
                    else if(currentStep2.current===10||currentStep2.current===20||currentStep2.current===30||currentStep2.current===40||currentStep2.current===50||currentStep2.current===60||currentStep2.current===70||currentStep2.current===80||currentStep2.current===90){
                      moveyd2();
                    }

                    if (currentStep2.current===bb2) {
                      setstep2(bb2)
                      seti2(2);
                      n2=2;
                      clearInterval(myinterval222);
                      //add
                      setstep2(step2=>step2+1)
                    }
                console.log("OFinal: i2: "+currenti2.current,",step2: "+currentStep2.current+",n2: "+n2);
              },500);
          }

          const snakeCheck2=()=>{
              if(currentStep2.current===27){
                  logic222(5)
              }
              else if(currentStep2.current===40){
                  logic222(3)
              }
              else if(currentStep2.current===43){
                  logic222(18)
              }
              else if(currentStep2.current===54){
                  logic222(31)
              }
              else if(currentStep2.current===66){
                  logic222(45)
              }
              else if(currentStep2.current===89){
                  logic222(53)
              }
              else if(currentStep2.current===95){
                  logic222(77)
              }
              else if(currentStep2.current===99){
                  logic222(41)
              }
          }
      }

      // const ladderCheck=(currentStep.current)=>{
      const ladderCheck2=()=>{
          if(currentStep2.current===4){
              logic22(21);
          }
          else if(currentStep2.current===13){
              logic22(33);
          }
          else if(currentStep2.current===42){
              logic22(21);
          }
          else if(currentStep2.current===50){
              logic22(19);
          }
          else if(currentStep2.current===62){
              logic22(19);
          }
          else if(currentStep2.current===74){
              logic22(18);
          }
      }

    // move slow step by step
        let b2;
        const movexr2=()=> {
          setMarginLeft2(prev2 => prev2 + 47);
          setMarginRight2(prev2 => prev2 + 47);
        }
        const movexl2=()=> {
          setMarginLeft2(prev2 => prev2 - 47);
          setMarginRight2(prev2 => prev2 - 47);
        }
        const moveyu2=()=> {
          setMarginTop2(prev2 => prev2 - 47);
          setMarginBottom2(prev2 => prev2 - 47);
        }
        const moveyd2=()=> {
          setMarginTop2(prev2 => prev2 + 47);
          setMarginBottom2(prev2 => prev2 + 47);
        }


      const [now, setNow] = useState(new Date());
      useEffect(() => {
        // Update the time every second (1000ms)
        const intervalId = setInterval(() => {
          setNow(new Date());
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, [])

  return (
    <>
      <img src={player} alt="" id="player" style={{marginLeft:`${marginLeft}px`,marginRight:`${marginRight}px`,marginTop:`${marginTop}px`,marginBottom:`${marginBottom}px`}}/>
      <img src={player2} alt="" id="player2" style={{marginLeft:`${marginLeft2}px`,marginRight:`${marginRight2}px`,marginTop:`${marginTop2}px`,marginBottom:`${marginBottom2}px`}}/>

      <div className="gameBody">

        <div className="bushBg" id="bushBg1">
          <img src={bushBg1} alt="" />
        </div>

        <div className="board">
          <div className="boardText">
            <img src={snllogo} alt="" />
            <div className="playerDetails">
              <p>{username}</p>
              <p>Victory: {victory}</p>
              <p style={{ color: "#f6f476",paddingTop:"10px",paddingBottom:"10px" }}>Level: Easy</p>
              <p>{username2}</p>
              <p>Victory: {victory2}</p>
            </div>
          </div>

          <div className="boardBg">
            {/* <p>1:02</p> */}
            <p>{now.toLocaleTimeString().slice(0,4)}</p>
            <img src={snlBoard} alt="" id="boardd" />
          </div>

          <div className="boardDice">
            <p>{currentUser}'s Turn</p>
            <button id="diceBtn" onClick={rolling}>
              <img src={dice1} alt="" id="dice" />
            </button>
          </div>
        </div>

        <div className="bushBg">
          <img src={bushBg2} alt="" />
        </div>

      </div>

      {/* <button onClick={some}>Moveee</button> */}
    </>
  )
}
