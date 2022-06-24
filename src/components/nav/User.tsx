import React from "react"

import { Avatar, Box, Group, UnstyledButton, useMantineTheme, Text } from "@mantine/core"
import { ChevronLeft, ChevronRight } from "tabler-icons-react"

const NavUser = () => {
    const theme = useMantineTheme()

    return (
        <Box
            sx={{
                paddingTop: theme.spacing.xs,
                paddingBottom: theme.spacing.xs,
                borderTop: `1px solid ${
                    theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
                }`,
            }}
        >
            <UnstyledButton
                sx={{
                    display: "block",
                    width: "100%",
                    padding: theme.spacing.xs,
                    borderRadius: theme.radius.sm,
                    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

                    "&:hover": {
                        backgroundColor:
                            theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
                    },
                }}
            >
                <Group>
                    <Avatar
                        // TODO: подключть ссылку на автар юзера
                        src=""
                        radius="xl"
                    />
                    <Box sx={{ flex: 1 }}>
                        <Text size="sm" weight={500}>
                            Admin User
                        </Text>
                        <Text color="dimmed" size="xs">
                            admin@gmail.com
                        </Text>
                    </Box>

                    {theme.dir === "ltr" ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </Group>
            </UnstyledButton>
        </Box>
    )
}

export default NavUser
