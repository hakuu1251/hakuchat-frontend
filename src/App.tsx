import React, { FC, useState } from "react"

import "./styles/root.sass"
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core"

import AppRouter from "./router"

const App: FC = () => {
    const [ colorScheme, setColorScheme ] = useState<ColorScheme>("light")

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

    return (
        <div className="App">
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                    <AppRouter />
                </MantineProvider>
            </ColorSchemeProvider>
        </div>
    )
}

export default App
