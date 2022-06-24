import React, { FC } from "react"

import {ActionIcon, Box, Burger, Group, Header, MediaQuery, useMantineColorScheme, useMantineTheme} from "@mantine/core"
import { MoonStars, Sun } from "tabler-icons-react"

import styles from "./Header.module.sass"
import Logo from "./Logo"

type Props = {
    opened: boolean
    setOpened: (p: any) => any
}

const Head: FC<Props> = ({ opened, setOpened }) =>{
    const theme = useMantineTheme()
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()

    return (
        <Header height={65} p="md">
            <Box>
                <Group position="apart">
                    <MediaQuery largerThan="xs" styles={{ display: "none" }}>
                        <Burger
                            opened={opened}
                            onClick={() => setOpened((o: boolean) => !o)}
                            size="sm"
                            color={theme.colors.gray[6]}
                            mr="xl"
                        />
                    </MediaQuery>
                    <Logo colorScheme={colorScheme} />
                    <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                        {colorScheme === "dark" ? <Sun size={16} /> : <MoonStars size={16} />}
                    </ActionIcon>
                </Group>
            </Box>
        </Header>
    )
}

export default Head
