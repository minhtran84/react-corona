import React from 'react';

import { Cards, Chart, CountryPicker, Header } from './components';

import { Typography, createMuiTheme, ThemeProvider } from '@material-ui/core';

import styles from './App.module.css';

import coronaImage from './images/corona.png';

import { fetchData } from './api';

class App extends React.Component {

  state = {
    data: {},
    country: '',
    themeMode: 'light'
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    //fetch the data
    const fetchedData = await fetchData(country);

    //set the state
    this.setState({ 
      data: fetchedData,
      country: country
    })
  }

  render() {

    const { data, country, themeMode } = this.state;    

    const theme = createMuiTheme({
      palette: {
        type: themeMode,
        primary: {
          main: themeMode === 'light' ? '#3f51b5' : '#388e3c'
        }
      }
    })

    const handleLightMode = () => {
      document.querySelector('body').style.backgroundColor = '#fff';
      this.setState({ themeMode: 'light' });
    }

    const handleDarkMode = () => {
      document.querySelector('body').style.backgroundColor = '#2e2e2e';
      this.setState({ themeMode: 'dark' });
    }

    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header themeMode={themeMode} lightMode={handleLightMode} darkMode={handleDarkMode} />
          <div className={styles.container}>
            
            <img src={coronaImage} className={styles.image} alt="COVID-19" />
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} />

            {/* <hr /> */}

            <div className={styles.footer}>
              <Typography color="textSecondary" variant="caption">
                <footer>Minh Tran &copy; 2020</footer>
              </Typography>
            </div>
          </div>
        </div>
      </ThemeProvider>
    )
  }
}

export default App;
