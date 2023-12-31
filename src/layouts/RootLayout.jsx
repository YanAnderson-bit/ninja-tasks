import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem } from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem as="aside" colSpan={1} bg="purple.400" minHeight="100vh" p={30}>
        <span>sidebar</span>
      </GridItem>
      <GridItem as="main" colSpan={5} p={10}> 
        <Navbar/>
        <Outlet />
      </GridItem>
    </Grid>
  )
}
