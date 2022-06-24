import React, {FC, useState} from "react"

import { Navbar } from "@mantine/core"

import styles from "./Nav.module.sass"
import NavLinks from "./NavLinks"
import NavUser from "./User"

type Props = {}

const Nav: FC<Props> = () =>{
    return (
        <>
            <Navbar.Section grow mt="md">
                <NavLinks />
            </Navbar.Section>
            <Navbar.Section>
                <NavUser />
            </Navbar.Section>
        </>
    )
}

export default Nav
