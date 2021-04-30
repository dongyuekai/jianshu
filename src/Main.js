import React from 'react'
import { Box, Stack, Button, useColorMode, useColorModeValue, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react'
import SignIn from './SingIn'
import SignUp from './SignUp'

export default function Main() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('gray.200', 'gray.700')
  return (
    <Box>
      <Box
        w='30%'
        m='auto'
        overflow='hidden'
        bgColor='white'
        boxShadow='lg'
        borderRadius='lg'
        p={3}
        mt={3}
      >
        <Tabs isFitted>
          <TabList>
            <Tab _hover={{ boxShadow: 'none' }}>登录</Tab>
            <Tab _hover={{ boxShadow: 'none' }}>注册</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SignIn />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box >
  )
}