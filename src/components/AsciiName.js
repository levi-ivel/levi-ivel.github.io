import React from "react";
import "./AsciiName.css";

// Store the visual of my name in ASCII
function AsciiName() {
  return (
    <pre className="ascii-art">
      {`
     ___       ___           ___                 
    /\\__\\     /\\  \\         /\\__\\          ___   
   /:/  /    /::\\  \\       /:/  /         /\\  \\  
  /:/  /    /:/\\:\\  \\     /:/  /          \\:\\  \\ 
 /:/  /    /::\\~\\:\\  \\   /:/__/  ___      /::\\__\\
/:/__/    /:/\\:\\ \\:\\__\\  |:|  | /\\__\\  __/:/\\/__/
\\:\\  \\    \\:\\~\\:\\ \\/__/  |:|  |/:/  / /\\/:/  /   
 \\:\\  \\    \\:\\ \\:\\__\\    |:|__/:/  /  \\::/__/    
  \\:\\  \\    \\:\\ \\/__/     \\::::/__/    \\:\\__\\    
   \\:\\__\\    \\:\\__\\        ~~~~         \\/__/    
    \\/__/     \\/__/                              
      `}
    </pre>
    );
}

export default AsciiName;
