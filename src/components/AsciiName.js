import React from "react";

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