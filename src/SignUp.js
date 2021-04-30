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
import { FaUserAlt, FaLock, FaCheck, FaClinicMedical, FaPhone, FaQq, FaWeibo, FaWeixin } from 'react-icons/fa'
import axios from 'axios'

export default function SingUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function signUp() {
    if (!username) {
      return
    } else if (!email) {
      return
    } else if (!password) {
      return
    } else {
      const data = {
        "user": {
          "username": username,
          "email": email,
          "password": password
        }
      }
      axios.post('https://conduit.productionready.io/api/users', data).then(res => {
        alert('注册成功')
      })
    }
  }
  return (
    <form>
      <FormControl>
        <InputGroup>
          <InputLeftAddon children={<FaUserAlt />} />
          <Input placeholder='你的昵称' value={username} onChange={e => setUsername(e.target.value)} />
        </InputGroup>
        <FormHelperText>昵称是必填项</FormHelperText>
      </FormControl>
      <InputGroup mt='10px'>
        <InputLeftAddon children={<FaPhone />} />
        <Input placeholder='手机号或邮箱' value={email} onChange={e => setEmail(e.target.value)} />
      </InputGroup>
      <InputGroup mt='10px'>
        <InputLeftAddon children={<FaLock />} />
        <Input type='password' placeholder='设置密码' value={password} onChange={e => setPassword(e.target.value)} />
      </InputGroup>
      <Button _hover={{ bgColor: "blue" }} w="100%" mt='30px' colorScheme="teal" borderRadius='lg' onClick={() => { signUp() }}>
        注册
      </Button>
      <Stack mt='20px' textAlign='center' mt='20px'>
        <FormLabel >
          点击 “注册” 即表示您同意并愿意遵守简书
          用户协议 和 隐私政策 。
      </FormLabel>
      </Stack>
      <Stack spacing={10} direction='row' mt='30px' justifyContent='center'>
        <FormLabel>社交账号登录</FormLabel>
      </Stack>
      <Stack spacing={10} direction='row' mt='30px' justifyContent='center'>
        <FaWeixin />
        <FaQq />
      </Stack>
    </form>
  )
}