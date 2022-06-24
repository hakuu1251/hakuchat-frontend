import React, { FC } from "react"

import { Group, ThemeIcon, UnstyledButton, Text } from "@mantine/core"
import { Link } from "react-router-dom"
import {Businessplan, Home, Messages} from "tabler-icons-react"

import styles from "./Nav.module.sass"

type Props = {}

interface INavLink {
    color: string,
    icon: React.ReactNode,
    label: string,
    link: string
}

const NavLink = (key: string | number, color: string, icon: React.ReactNode, label: string, link: string): React.ReactNode => (
    <UnstyledButton
        key={key}
        sx={theme => ({
            display: "block",
            width: "100%",
            padding: theme.spacing.xs,
            borderRadius: theme.radius.sm,
            color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

            "&:hover": {
                backgroundColor:
                    theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
            },
        })}
    >
        <Link to={link} className={styles.navLink}>
            <Group>
                <ThemeIcon color={color} variant="light">
                    {icon}
                </ThemeIcon>

                <Text size="sm">{label}</Text>
            </Group>
        </Link>
    </UnstyledButton>
)

const NavLinks: FC<Props> = () =>{

    const links: INavLink[] = [
        {
            icon: <Home size={16} />,
            color: "blue",
            label: "Главная",
            link: "/"
        },
        {
            icon: <Businessplan size={16} />,
            color: "red",
            label: "Аналитика",
            link: "/analytics"
        },
        {
            icon: <Messages size={16} />,
            color: "violet",
            label: "Сообщения",
            link: "/messages"
        },
    ]

    return (
        <div>
            {
                links.map((link, index) => {
                    return NavLink(index, link.color, link.icon, link.label, link.link)
                })
            }
        </div>
    )
}

export default NavLinks
