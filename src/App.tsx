import SidebarComp from './Components/Sidebar/Sidebar'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from './Context';
import Topbar from './Components/Topbar/Topbar';
import RouteComponent from './Routes/Routes';
// import './App.css'

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode as any}>
      <ThemeProvider theme={theme as any}>
        <CssBaseline />
        <ProSidebarProvider>
          <div className="app">
            <SidebarComp />
            <main className="content">
              <Topbar />
              <RouteComponent />
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
