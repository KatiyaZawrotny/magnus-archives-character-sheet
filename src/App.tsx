import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Character, CharacterType, Focus } from './Character'
import './App.css'
import './statBox.css'
import { Statistic } from './assets/classes/Ability'
import * as StatBlocks from './assets/components/StatBlocks'

const activeChar = new Character("Elise Taylor", "Bold", CharacterType.Occultist, Focus.FightsDirty);
function CharacterBasicInfo() {
  return (
    <div className="basicInfo">
      <h1>{activeChar._name}</h1>
      <h2>I am a {activeChar._desc?.name} {activeChar._type} that {activeChar._focus} </h2>
    </div>
  );
}

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <CharacterBasicInfo />
      <div className='levelStats'>
        <StatBlocks.CharacterLevelStats num={1} label="Tier" />
        <StatBlocks.CharacterLevelStats num={1} label="Effort" />
        <StatBlocks.CharacterLevelStats num={0} label="XP" />
      </div>
      <br />
      <div className="mainStats">
        <StatBlocks.CharacterMainStats name="Might" defaultCurrent={7} defaultPool={7} defaultEdge={0} />
        <StatBlocks.CharacterMainStats name="Speed" defaultCurrent={15} defaultPool={15} defaultEdge={0} />
        <StatBlocks.CharacterMainStats name="Intelligence" defaultCurrent={11} defaultPool={12} defaultEdge={1} />
      </div>
    </div>
  );

}

export default App
