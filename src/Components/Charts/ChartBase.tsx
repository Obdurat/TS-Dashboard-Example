import { Box } from '@mui/system';
import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const ChartComp = ({ type }: { type: any } ) => {
  const [config, setConfig] = useState({
    options: {
      chart: {
        id: "basic-pie"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });

  return (
    <Box>
      <Chart options={config.options} series={config.series} type={"line"} width="500" />
    </Box>
  )
}

export default ChartComp