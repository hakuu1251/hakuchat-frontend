import React, { FC, useState } from "react"

import { AppShell, Aside, Header, MediaQuery, Navbar } from "@mantine/core"

import Footer from "../footer/Footer"
import Head from "../header/Header"
import Nav from "../nav/Nav"

type Props = {
    children: React.ReactElement,
    withNav?: boolean,
    withFooter?: boolean,
    pageTitle?: string
}

const MainLayout: FC<Props> = ({ children, withNav = true, withFooter = true, pageTitle }) => {

    document.title = pageTitle ? `App / ${pageTitle}` : "App"

    const [ opened, setOpened ] = useState(false)

    return (
        <AppShell
            padding="md"
            navbarOffsetBreakpoint="xs"
            asideOffsetBreakpoint="xs"
            fixed
            navbar={
                <Navbar p="m" width={{ xs: 250, lg: 300 }} hiddenBreakpoint="xs" hidden={!opened}>
                    <Nav />
                </Navbar>
            }
            header={<Head opened={opened} setOpened={setOpened} /> }
            styles={theme => ({
                main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            <div className="pageWrapper">
                {children}
            </div>
            { withFooter ? <Footer/> : null }
        </AppShell>

    )
}

export default MainLayout
