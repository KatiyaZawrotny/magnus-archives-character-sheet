import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Character, CharacterType, Focus } from './Character'
import './App.css'
import './statBox.css'
import { Statistic } from './assets/classes/Ability'

const activeChar = new Character("Elise Taylor", "Bold", CharacterType.Occultist, Focus.FightsDirty);
function CharacterBasicInfo() {
  return (
    <div className="basicInfo">
      <h1>{activeChar._name}</h1>
      <h2>I am a {activeChar._desc?.name} {activeChar._type} that {activeChar._focus} </h2>
    </div>
  );
}

function CharacterLevelStats() {
  return (
    <div className="levelStatsContainer">
      <h2>Basic Stats</h2>
      <div className="statBox basicStats">
        <StatBoxEditable num={1} label="Tier" boxClass='mainBox' statClass='mainStat' labelClass='mainLabel' />
        <StatBoxEditable num={1} label="Effort" boxClass='mainBox' statClass='mainStat' labelClass='mainLabel' />
        <StatBoxEditable num={1} label="XP" boxClass='mainBox' statClass='mainStat' labelClass='mainLabel' />
      </div>
    </div>
  );
}

interface StatBoxProps {
  num: number,
  label: string,
  boxClass?: string,
  statClass?: string,
  labelClass?: string
}

interface NameProps {
  name: string
}
function StatBoxName(props: NameProps) {
  return <h1 className="statNameBox">{props.name}</h1>;
}

function StatBoxLevel(props: StatBoxProps) {
  return (

    <div className="statBox">
      {props.label ?
        <StatBoxName name={String(props.label)} /> :
        ""
      }
      <div className="mainBoxLevel">
        <div className="statBoxContentLevel">
          <div className="mainStat stat">
            <p contentEditable="plaintext-only" className="editable">{props.num}</p>
          </div>
        </div>
      </div>
    </div>

  );
}
//must be nested in a classname="statBox" div
function StatBoxEditable(props: StatBoxProps) {
  return (

    <div className={props.boxClass}>
      <div className="statBoxContent">
        <div className={props.statClass + " stat"}>
          <p contentEditable="plaintext-only" className="editable">{props.num}</p>
        </div>
        <div className={props.labelClass + " label"}>
          <p>{props.label}</p>
        </div>
      </div>
    </div>

  );
}

interface CharacterMainStatsProps {
  name?: string | null;
  defaultCurrent: number,
  defaultPool: number,
  defaultEdge: number,
}

function CharacterMainStats(props: CharacterMainStatsProps) {
  return (
    <div className="statBox statGridBox">

      {props.name ?
        <StatBoxName name={String(props.name)} /> :
        ""
      }

      <StatBoxEditable num={props.defaultCurrent} label="Current" boxClass='mainBox' statClass='mainStat' labelClass='mainLabel' />
      <StatBoxEditable num={props.defaultPool} label="Pool" boxClass='subBoxA' statClass='subStat' labelClass='subLabel' />
      <StatBoxEditable num={props.defaultEdge} label="Edge" boxClass='subBoxB' statClass='subStat' labelClass='subLabel' />
    </div>
  );
}

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <CharacterBasicInfo />

      <div className='levelStats'>

        <StatBoxLevel num={1} label="Tier" />
        <StatBoxLevel num={1} label="Effort" />
        <StatBoxLevel num={0} label="XP" />

      </div>
      <br />
      <div className="mainStats">
        <CharacterMainStats name="Might" defaultCurrent={7} defaultPool={7} defaultEdge={0} />
        <CharacterMainStats name="Speed" defaultCurrent={15} defaultPool={15} defaultEdge={0} />
        <CharacterMainStats name="Intelligence" defaultCurrent={11} defaultPool={12} defaultEdge={1} />

      </div>
    </div>
  );

}

export default App
