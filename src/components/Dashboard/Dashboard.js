import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="w-3/4 mx-auto">
      <p className="text-5xl text-center font-bold my-10">Dashboard</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar stackId={"a"} fill="#0455d8" dataKey={"investment"}></Bar>
              <Bar stackId={"a"} fill="#09a837" dataKey={"revenue"}></Bar>
            </BarChart>
          </ResponsiveContainer>
       

          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="investment" stroke="#8884d8"></Line>
              <Line type="monotone" dataKey="revenue" stroke="#09a837"></Line>
            </LineChart>
          </ResponsiveContainer>
        
      </div>
    </div>
  );
};

export default Dashboard;
