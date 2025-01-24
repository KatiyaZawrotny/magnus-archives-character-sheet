import React, { useRef } from "react";

interface CharacterMainStats2Props {
  initialMight: number; // Initial value for Might
  onMightChange?: (newValue: number) => void; // Callback to notify when the Might value changes
}

const CharacterMainStats2: React.FC<CharacterMainStats2Props> = ({
  initialMight,
  onMightChange,
}) => {
  const editableRef = useRef<HTMLParagraphElement>(null);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLParagraphElement>) => {
    // Prevent non-numeric input
    if (!/^\d$/.test(event.key) && event.key !== "Enter" && event.key !== "Tab") {
      event.preventDefault();
    }

    // Prevent line breaks and blur on Enter
    if (event.key === "Enter") {
      event.preventDefault();
      editableRef.current?.blur();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLParagraphElement>) => {
    // Blur on Tab
    if (event.key === "Tab") {
      editableRef.current?.blur();
      event.preventDefault();
    }
  };

  const handleInput = () => {
    if (editableRef.current) {
      // Remove non-numeric characters and update value
      const cleanedValue = editableRef.current.textContent?.replace(/\D/g, "") || "";
      editableRef.current.textContent = cleanedValue;

      // Notify parent component of the change
      if (onMightChange && cleanedValue) {
        onMightChange(parseInt(cleanedValue, 10));
      }
    }
  };

  return (
    <div className="statBox">
      <h1 className="statNameBox">Might</h1>
      <div className="currentBox">
        <div className="statBoxContent">
          <div className="mainStat">
            <p
              contentEditable="plaintext-only"
              className="editable"
              ref={editableRef}
              onKeyPress={handleKeyPress}
              onKeyDown={handleKeyDown}
              onInput={handleInput}
            >
              {initialMight}
            </p>
          </div>
          <div className="statLabel">
            <p>Current</p>
          </div>
        </div>
      </div>
      <div className="poolBox">
        <div className="statBoxContent">
          <div className="subStat">
            <p>12</p>
          </div>
          <div className="statLabel subStatLabel">
            <p>Pool</p>
          </div>
        </div>
      </div>
      <div className="edgeBox">
        <div className="statBoxContent">
          <div className="subStat">
            <p>1</p>
          </div>
          <div className="statLabel subStatLabel">
            <p>Edge</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterMainStats2;
