import View from "./view";
import { Authenticator } from "@aws-amplify/ui-react";
import Navbar from "../../atoms/Navbar";

function ShortContent() {
  return (
    <>
      <Navbar />
      <div>
        <Authenticator>
          {({ signOut, user }) => <View signOut={signOut} user={user} />}
        </Authenticator>
      </div>
    </>
  );
}

export default ShortContent;
