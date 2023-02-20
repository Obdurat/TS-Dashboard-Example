import { Box } from '@mui/system';
import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const PieComp = () => {
  const [config, setConfig] = useState({
    options: {},
    series: [30, 40, 45, 50, 49, 60, 70, 91],
    labels: ['A', 'B', 'C', 'D', 'E']
  });

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
      <Chart options={config.options} series={config.series} type={"donut"} width="350" height="350" />
    </Box>
  )
}

export default PieComp