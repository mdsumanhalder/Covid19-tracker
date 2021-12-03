import React, { Component } from 'react'
import styles from './App.module.css';
import {Cards,Chart,CountryPicker} from './components'
import { fetchData } from './api';

export class App extends Component {
  state={
    data:{},
    country:'',
  }
  async componentDidMount(){
    const fetcheData=await fetchData()
    this.setState({data:fetcheData})
    
  }
  handleCountryChange=async(country)=>{
    const fetcheData=await fetchData(country)
    this.setState({data:fetcheData,country:country})
  }

  render() {
    const {data,country}=this.state
    
    return (
      <div className={styles.container}>
        <h2>Covid-19 Tracker </h2>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} country={country}/>
    </div>
    )
  }
}

export default App
