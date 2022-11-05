function svgFileToString(iconpath){
    fetch(iconpath)
      .then(response => response.text())
      .then(text => {
        console.log(text);
        // do whatever
      });
  }
  svgFileToString(assets/icon_temperature.svg)