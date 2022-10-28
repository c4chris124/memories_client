import {useState} from 'react'
import { useTheme  } from '@mui/material/styles';
import {TextField, Button, Typography, Paper} from '@mui/material'

const Form = () => {
  const theme=useTheme()
  const [postData, setPostData] = useState({
    creator: '',
    title:'',
    message: '',
    tags: '',
    selectedFile: ''
  })

  const handleSubmit=() => {

  }

  return (
    <Paper sx={{'padding':theme.spacing(2)}}>
     <form autoComplete='off' noValidate onSubmit={handleSubmit} sx={{display: 'flex',flexWrap: 'wrap', justifyContent: 'center'}}>
      <Typography variant='h6'>Creating a Memory</Typography>
      <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e) => setPostData({creator: e.target.value})} />
     </form>
    </Paper>
  )
}

export default Form
// 1:13