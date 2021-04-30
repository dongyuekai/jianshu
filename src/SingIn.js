import React, { useState } from 'react';
import {
  Input,
  InputGroup,
  Stack,
  InputLeftAddon,
  InputRightAddon,
  FormHelperText,
  Button,
  FormControl,
  FormLabel,
  Checkbox
} from '@chakra-ui/react'
import { FaUserAlt, FaLock, FaCheck, FaClinicMedical, FaQq, FaWeixin, FaWeibo } from 'react-icons/fa'

export default function SingIn() {
  const [phoneOrEmail, setPhoneOrEmail] = useState('')
  const [password, setPassword] = useState('')

  function login() {

  }

  return (
    <form>
      <FormControl>
        <InputGroup>
          <InputLeftAddon children={<FaUserAlt />} />
          <Input placeholder='手机号或邮箱' value={phoneOrEmail} onChange={e => setPhoneOrEmail(e.target.value)} />
        </InputGroup>
        <FormHelperText>手机号或邮箱是必填项</FormHelperText>
      </FormControl>
      <InputGroup mt='10px'>
        <InputLeftAddon children={<FaLock />} />
        <Input type='password' placeholder='密码' value={password} onChange={e => setPassword(e.target.value)} />
      </InputGroup>
      <Stack spacing={10} direction='row' justifyContent='space-between' mt='30px'>
        <Checkbox defaultChecked>记住我</Checkbox>
        <FormLabel htmlFor="deal">登录遇到问题？</FormLabel>
      </Stack>
      <Button _hover={{ bgColor: "blue" }} w="100%" mt='30px' colorScheme="teal" borderRadius='lg' onClick={() => { login() }}>
        登录
      </Button>
      <Stack spacing={10} direction='row' mt='30px' justifyContent='center'>
        <FormLabel>社交账号登录</FormLabel>
      </Stack>
      <Stack spacing={10} direction='row' mt='30px' justifyContent='center'>
        <FaQq />
        <FaWeixin />
        <FaWeibo />
      </Stack>
    </form>
  )
}