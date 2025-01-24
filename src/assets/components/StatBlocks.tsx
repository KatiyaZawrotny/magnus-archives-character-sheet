//INTERFACES FOR BOXES

//For the main stat boxes
interface StatBoxProps {
    num: number,
    label: string,
    boxClass?: string,
    statClass?: string,
    labelClass?: string
}

//For the optional name boxes to label stat boxes
interface NameProps {
    name: string
}

//For the main stat boxes
interface CharacterMainStatsProps {
    name?: string | null;
    defaultCurrent: number,
    defaultPool: number,
    defaultEdge: number,
}

//Optional name box that takes a name and adds a title to a box
function StatBoxName(props: NameProps) {
    return <h1 className="statNameBox">{props.name}</h1>;
}

//BOX COMPONENTS 

/** Component for a non-gridded stat box used for the level stats
* 
* 
* @component
* @param {StatBoxProps} props - The properties object for the component.
* @param {string | undefined} props.label - The label displayed above the statistic box. If not provided, no label is rendered.
* @param {string | number} props.num - The numeric value or content displayed in the statistic box, which is editable.
* 
* @returns {JSX.Element} A JSX element rendering the statistic box with optional label and editable content.
* 
* @example
* // Example usage of StatBoxLevel:
* <StatBoxLevel 
*   label="Level"
*   num="10"
* />
*/
function CharacterLevelStats(props: StatBoxProps) {
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

/** Component for a single editable box used for the main stats
 * A React functional component that renders an editable statistic box with a label.
 * 
 * @component
 * @param {StatBoxProps} props - The properties object for the component.
 * @param {string} props.boxClass - The CSS class for the outermost container of the statistic box.
 * @param {string} props.statClass - The CSS class for the statistic value container.
 * @param {string} props.labelClass - The CSS class for the label container.
 * @param {string | number} props.num - The numeric value or content displayed in the statistic box, which is editable.
 * @param {string} props.label - The label text associated with the statistic value.
 * 
 * @returns {JSX.Element} A JSX element rendering the statistic box with editable content and a label.
 * 
 * @example
 * // Example usage of StatBoxEditable:
 * <StatBoxEditable 
 *   boxClass="boxStyle"
 *   statClass="statStyle"
 *   labelClass="labelStyle"
 *   num="42"
 *   label="Score"
 * />
 */

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


/** A combined component for the full grid with 3 editable fields per box. Current, Pool, and Edge.
 * A React functional component that renders the main stats of a character, including Current, Pool, and Edge values,
 * with each stat being editable. Optionally displays a name for the box.
 * 
 * @component
 * @param {CharacterMainStatsProps} props - The properties object for the component.
 * @param {string | undefined} props.name - The name of the box. If provided, it is displayed above the stats.
 * @param {number} props.defaultCurrent - The default value for the "Current" stat.
 * @param {number} props.defaultPool - The default value for the "Pool" stat.
 * @param {number} props.defaultEdge - The default value for the "Edge" stat.
 * 
 * @returns {JSX.Element} A JSX element rendering the main character stats in a grid-like layout.
 * 
 * @example
 * // Example usage of CharacterMainStats:
 * <CharacterMainStats 
 *   name="Might" 
 *   defaultCurrent={10} 
 *   defaultPool={20} 
 *   defaultEdge={5} 
 * />
 */
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



export { CharacterLevelStats, CharacterMainStats };