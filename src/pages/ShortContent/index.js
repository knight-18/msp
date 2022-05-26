import View from "./view";
import { Authenticator } from "@aws-amplify/ui-react";
import Navbar from "../../atoms/Navbar";

function ShortContent() {
  return (
    <>
      <Navbar />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Authenticator>
          {({ signOut, user }) => <View signOut={signOut} user={user} />}
        </Authenticator>
      </div>
    </>
  );
}

export default ShortContent;
