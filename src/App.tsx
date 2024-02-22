// App.tsx
import { Question } from "./question";
import Rabbit from "./assets/spline";

function App() {
  return (
    <>
      <div className="background">
        <div className="grid-container">
          <Question object="洗衣服" object2="laundry" />
          <Question object="电话震" object2="Phone Vibrate" />
          <Question object="管乐团" object2="Orchestra" />
          <Question object="冲马桶" object2="flush toilet" />
          <Question object="Angry Bird" object2="Angry Bird" />
          <Question object="生气的猫" object2="angry cat" />
          <Question object="自由发挥" object2="freestyle" />
          <Question object="跑车" object2="sport car" />
          <Question object="切菜" object2="chopping" />
          <Question object="舞狮" object2="lion dance" />
          <Question object="放烟花" object2="fireworks" />
          <Question object="电话震" object2="Phone Vibrate" />
          <Question object="自由发挥" object2="freestyle" />
          <Question object="打鼓" object2="drum" />
          <Question object="电脑开机" object2="turn on computer" />
          <Question object="喝水" object2="drink water" />
          <Question object="自由发挥" object2="freestyle" />
          <Question object="哈士奇" object2="husky" />
          <Question object="小提琴" object2="violin" />
          <Question object="射箭" object2="archery" />
          <Question object="吃饭" object2="eating" />
          <Question object="福克斯" object2="21th Century Fox" />
          <Question object="保龄球" object2="bowling" />
          <Question object="钢琴" object2="piano" />
          <Question object="篮球" object2="basketball" />
        </div>

        <Rabbit />
      </div>
    </>
  );
}

export default App;
