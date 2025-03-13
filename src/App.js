import { useEffect } from "react";
import "./App.css";
import {
  CardScanView,
  CardScanModel,
} from "@cardscan.ai/insurance-cardscan-react";

function App() {
  function onSuccess(card) {
    console.log("New Card: ", card);
  }

  function onError(error) {
    console.error("Error occurred: ", error);
  }

  // See Authentication on where to get this sessionToken.
  const sessionToken =
    "secret_test_cardscan_ai_R49kpmiYUHE7pZYXGjiavx0rIwSa3sOQY1dc";

  // Initializes and warms the model. See CardScanModel for more info.
  useEffect(() => {
    CardScanModel.warm();
  }, []);

  return (
    <div className="App">
      <div className="CardScanContainer">
        <CardScanView
          live={false}
          sessionToken={sessionToken}
          onSuccess={onSuccess}
          onError={onError}
        />
      </div>
    </div>
  );
}

export default App;
