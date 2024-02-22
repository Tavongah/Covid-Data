
import "./App.css";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import covidDataList from "./CovidData/covid.json";
import { Card, Col, Row } from "antd";

function App() {
  const dates = [];
  const totalConfirmedCases = [];
  const totalDeaths = [];
  const totalRecovered = [];
  const activeCases = [];
  const dailyConfirmedCases = [];
  const dailyDeaths = [];

  covidDataList.forEach((item) => {
    dates.push(item?.Date);
    totalConfirmedCases.push(item?.["Total Confirmed Cases"]);
    totalDeaths.push(item?.["Total Deaths"]);
    totalRecovered.push(item?.["Total Recovered"]);
    activeCases.push(item?.["Active Cases"]);
    dailyConfirmedCases.push(item?.["Daily Confirmed Cases"]);
    dailyDeaths.push(item?.["Daily  deaths"]);
  });

  const chartOptions = {
    title: {
      text: "Covid 19 Trends",
    },

    xAxis: {
      categories: dates,
    },
    yAxis: {
      title: {
        text: "Population",
      },
    },
    series: [
      {
        name: "Total Confirmed Cases",
        data: totalConfirmedCases,
      },
      {
        name: "Total Deaths",
        data: totalDeaths,
      },
      {
        name: "Total Recovered",
        data: totalRecovered,
      },
      {
        name: "Active Cases",
        data: activeCases,
      },
      {
        name: "Daily Confirmed Cases",
        data: dailyConfirmedCases,
      },
      {
        name: "Daily Deaths",
        data: dailyDeaths,
      },
    ],
  };

  return (
    <>
      <div className="container-fluid">
        <Row>
          <Col span={8}></Col>
          <Col span={8} className="d-flex justify-center">
            <h1>SOUTH AFRICA</h1>
          </Col>
          <Col span={8}> </Col>
        </Row>

        <div className="row">
          <div className="col-sm col-md col-lg">
            <Card className="container-fluid">
              <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
