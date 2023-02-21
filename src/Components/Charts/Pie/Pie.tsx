import { Box } from '@mui/system';
import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const PieComp = () => {
  const [config, setConfig] = useState({
    options: {},
    series: [30, 40, 45, 50, 49, 60, 70, 91],
  });

  return (
    <Box sx={{ display: "block", justifyContent: "center", height: "100%",  }}>
      <Chart options={config.options} series={config.series} type={"donut"} width="100%" height="100%" />
    </Box>
  )
}

export default PieComp
