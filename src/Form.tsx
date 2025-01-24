import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Character, CharacterType, Focus } from './Character'
import './App.css'


function handleForm(){
    return;
}
function CharacterForm() {
    return (
        <form onSubmit={handleForm}>
            <input type="text" placeholder="John Doe" required /> <br />
            <fieldset>
                <legend>Select a Descriptor:</legend>
                <label><input type="radio" name="descriptor" value="Bold" /> Bold</label><br />
                <label><input type="radio" name="descriptor" value="Brave" /> Brave</label><br />
                <label><input type="radio" name="descriptor" value="Caring" /> Caring</label><br />
                <label><input type="radio" name="descriptor" value="Cautious" /> Cautious</label><br />
                <label><input type="radio" name="descriptor" value="Cheerful" /> Cheerful</label><br />
                <label><input type="radio" name="descriptor" value="Cynical" /> Cynical</label><br />
                <label><input type="radio" name="descriptor" value="Enigmatic" /> Enigmatic</label><br />
                <label><input type="radio" name="descriptor" value="Energetic" /> Energetic</label><br />
                <label><input type="radio" name="descriptor" value="Fastidious" /> Fastidious</label><br />
                <label><input type="radio" name="descriptor" value="Fearless" /> Fearless</label><br />
                <label><input type="radio" name="descriptor" value="Ferocious" /> Ferocious</label><br />
                <label><input type="radio" name="descriptor" value="Hopeful" /> Hopeful</label><br />
                <label><input type="radio" name="descriptor" value="Inquisitive" /> Inquisitive</label><br />
                <label><input type="radio" name="descriptor" value="Intimidating" /> Intimidating</label><br />
                <label><input type="radio" name="descriptor" value="Likeable" /> Likeable</label><br />
                <label><input type="radio" name="descriptor" value="Muscular" /> Muscular</label><br />
                <label><input type="radio" name="descriptor" value="Nervous" /> Nervous</label><br />
                <label><input type="radio" name="descriptor" value="NoNonsense" /> No Nonsense</label><br />
                <label><input type="radio" name="descriptor" value="Obsessive" /> Obsessive</label><br />
                <label><input type="radio" name="descriptor" value="Pretentious" /> Pretentious</label><br />
                <label><input type="radio" name="descriptor" value="Quick" /> Quick</label><br />
                <label><input type="radio" name="descriptor" value="Ruthless" /> Ruthless</label><br />
                <label><input type="radio" name="descriptor" value="Scholarly" /> Scholarly</label><br />
                <label><input type="radio" name="descriptor" value="Smart" /> Smart</label><br />
                <label><input type="radio" name="descriptor" value="Sturdy" /> Sturdy</label><br />
                <label><input type="radio" name="descriptor" value="Superstitious" /> Superstitious</label><br />
                <label><input type="radio" name="descriptor" value="Suspicious" /> Suspicious</label><br />
                <label><input type="radio" name="descriptor" value="TechSavvy" /> Tech Savvy</label><br />
            </fieldset>
            <fieldset>
                <legend>Select a Type:</legend>
                <label>
                    <input type="radio" name="type" value="Investigator" />
                    Investigator
                </label>
                <br />
                <label>
                    <input type="radio" name="type" value="Protector" />
                    Protector
                </label>
                <br />
                <label>
                    <input type="radio" name="type" value="Elocutionist" />
                    Elocutionist
                </label>
                <br />
                <label>
                    <input type="radio" name="type" value="Occultist" />
                    Occultist
                </label>
                <br />
            </fieldset>
            <fieldset>
                <legend>Select a Focus:</legend>
                <label>
                    <input type="radio" name="focus" value="Carries a Gun" />
                    Carries a Gun
                </label>
                <br />
                <label>
                    <input type="radio" name="focus" value="Does a Bit of This and That" />
                    Does a Bit of This and That
                </label>
                <br />
                <label>
                    <input type="radio" name="focus" value="Explores Dark Places" />
                    Explores Dark Places
                </label>
                <br />
                <label>
                    <input type="radio" name="focus" value="Fights Dirty" />
                    Fights Dirty
                </label>
                <br />
                <label>
                    <input type="radio" name="focus" value="Helps Their Friends" />
                    Helps Their Friends
                </label>
                <br />
                <label>
                    <input type="radio" name="focus" value="Infiltrates" />
                    Infiltrates
                </label>
                <br />
                <label>
                    <input type="radio" name="focus" value="Leads" />
                    Leads
                </label>
                <br />
                <label>
                    <input type="radio" name="focus" value="Learns Quickly" />
                    Learns Quickly
                </label>
                <br />
                <label>
                    <input type="radio" name="focus" value="Looks for Trouble" />
                    Looks for Trouble
                </label>
                <br />
                <label>
                    <input type="radio" name="focus" value="Moves Like a Cat" />
                    Moves Like a Cat
                </label>
                <br />
                <label>
                    <input type="radio" name="focus" value="Needs No Weapon" />
                    Needs No Weapon
                </label>
                <br />
                <label>
                    <input type="radio" name="focus" value="Never Says Die" />
                    Never Says Die
                </label>
                <br />
                <label>
                    <input type="radio" name="focus" value="Practically Lives Online" />
                    Practically Lives Online
                </label>
                <br />
                <label>
                    <input type="radio" name="focus" value="Runs Away" />
                    Runs Away
                </label>
                <br />
                <label>
                    <input type="radio" name="focus" value="Solves Mysteries" />
                    Solves Mysteries
                </label>
                <br />
                <label>
                    <input type="radio" name="focus" value="Wears a Badge" />
                    Wears a Badge
                </label>
                <br />
                <label>
                    <input type="radio" name="focus" value="Works the Back Alleys" />
                    Works the Back Alleys
                </label>
                <br />
                <label>
                    <input type="radio" name="focus" value="Would Rather Be Reading" />
                    Would Rather Be Reading
                </label>
                <br />
            </fieldset>
            <input type="submit" name="submit" />
        </form>
    );
}

function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <CharacterForm />
        </div>
    );

}

export default App;