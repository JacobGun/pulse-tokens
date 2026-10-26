import { M3eButton } from "@m3e/react/button";
import { M3eDrawerContainer } from "@m3e/react/drawer-container";

function App() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Pulse + M3E Test</h1>

      <M3eButton>
        Login
      </M3eButton>

      <M3eDrawerContainer
      end
      style={
        {
        "--m3e-drawer-container-width": "560px",
        } as React.CSSProperties
      }
      >
        <div>Main content</div>

          <div slot="end">
            <h2>Product Information</h2>
            <p>Ascom Unite View</p>
            <p>Version: 5.3.0</p>
            <p>UDI: ...</p>
        </div>
    </M3eDrawerContainer>

    </div>
  );
}

export default App;
``