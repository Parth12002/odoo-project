import {  Box ,Button,Icon} from "@chakra-ui/react"
import {BsArrowRightCircle,BsArrowLeftCircle} from "react-icons/bs";
import styled from"./Carousel3.module.css"
import { Card, CardBody, CardFooter,Image,Avatar,Stack,Heading,Text,Divider } from '@chakra-ui/react'
import Quotes from "../Photos/Icons/Quotes.png"
let data=[
    
]

export const FurnitureSlider2=()=>{
  const btnpressprev=()=>{
    let boxel=document.querySelector(`.${styled.product_container}`);
    boxel.scrollLeft-=540
  }
  const btnpressnext=()=>{
    let boxel=document.querySelector(`.${styled.product_container}`);
    boxel.scrollLeft+=540
  }
    return(
        <Box className={styled.carousel} py="60px" >
            <Box>
            <Text width={"130px"} textAlign={"left"} color="black" fontSize={"lg"} ml="10%"> <b>Over 1.5 Lakh</b> Happy subscribers</Text>
            <hr className={styled.line} />
            <br />
            <Text width={"130px"} textAlign={"left"} color="grey" ml="10%">Here's what they have to say about rentomojo</Text>
            <Box className={styled.Button_container} mt="20px"  >
            <Button className={styled.buttons} onClick={btnpressnext}><Icon as={BsArrowRightCircle}/></Button>
            <Button className={styled.buttons} onClick={btnpressprev}><Icon as={BsArrowLeftCircle}/></Button>
            </Box>
            </Box>
            <Box className={styled.product_container}>
                {data.map(el=><Cards image={el.image} key={Date.now()+el.id} name={el.name} details={el.details}></Cards>)}
            </Box>
        </Box>
    )
}

const Cards=({image,
  name,
  details,
  })=>{

return <Card minWidth={"500px"} bg="#f5f7fa" rounded="3xl" className={styled.card}>
  <CardBody >
    <Stack mt='6' spacing='3'>
      <Heading size='xs'>{}</Heading>
      <Box display="flex" gap={"10px"}>
      <Avatar name={name} src={image} size="lg" />
      <Text textAlign={"left"} mt="18px">{name}</Text>
      <Image position={"absolute"}  top={0} right={20}  w={"100px"} src={Quotes}></Image>
      </Box>
      <Box >
      <Text marginTop={"30px"} color="black" lineHeight={"20px"} fontSize={"xs"} textAlign={"left"}>{details}</Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
}