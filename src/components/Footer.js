import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import avatarSrc from "../assets/dp.png"


const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"} p={"16"} py={["16","8"]}>
    
    <Stack direction={["column","row"]} h={"full"} alignItems={"center"}>

      <VStack w ={"full"} alignItems={["center","flex-start"]}>
      <Text fontWeight={"bold"}>About Us</Text>
      <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>UbCrypto is the world's most-referenced price-tracking website for crypto assets in the rapidly growing cryptocurrency space. Its mission is to make crypto discoverable and efficient globally by empowering retail users with unbiased, high quality and accurate information for drawing their own informed conclusions. </Text>

      </VStack>
      <VStack>
        <Avatar boxSize={"28"} mt={["4","0"]} src={avatarSrc}  />
        <Text>Our Founder</Text>
      </VStack>
    </Stack>   
    </Box>
  )
}

export default Footer