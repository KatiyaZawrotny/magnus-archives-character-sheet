
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