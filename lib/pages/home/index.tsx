import { Box, Input } from '@mui/material'



const Home =()=>{
    return(
        <Box>
            Home Page
            <Input placeholder='entity' value={'foo'} />
            <Input placeholder='busArea' value={'bar'} />
        </Box>
    )
}

export default Home