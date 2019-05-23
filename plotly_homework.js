


function buildMetadata(sample) {
  // @TODO: Complete the following function that builds the metadata panel

  // Use `d3.json` to fetch the metadata for a sample

  d3.json(url).then(function(metadata) {
    console.log(metadata);
  });
  

    // Use d3 to select the panel with id of `#sample-metadata`

    d3.select('#sample-metadata')

    // Use `.html("") to clear any existing metadata

  ?????????

    // Use `Object.entries` to add each key and value pair to the panel

console.log(object.entries(metadata))

    // Hint: Inside the loop, you will need to use d3 to append new

    // tags for each key-value in the metadata.


}
function buildCharts(sample) {
  // @TODO: Use `d3.json` to fetch the sample data for the plots

  d3.json(url).then(function(metadata) {
    console.log(metadata);
  });
  
    // @TODO: Build a Bubble Chart using the sample data

    var bubbleDiv = document.getElementById("bubble-chart");
 
    var traceA = {
      type: "scatter",
      mode: "markers",
      x: "otu_ids",
      y: "sample_values",
      marker: {
        size: "sample_values",
        colors:"otu_ids",
        text: "otu_labels"
      }
    };
     
    var data = [traceA];
     
    var layout = {
      title: "Belly Button Biodiversity"
    };
     
    Plotly.plot(bubbleDiv, data, layout);

    // @TODO: Build a Pie Chart

    var pieDiv = document.getElementById("pie-chart");
 
    var traceA = {
      type: "pie",
      values: "sample_values",
      labels: "otu_ids"
      hovertext: "otu_labels"
    };
     
    var data = [traceA];
     
    var layout = {
      title: "Belly Button Biodiversity"
    };
     
    Plotly.plot(pieDiv, data, layout);


    // HINT: You will need to use slice() to grab the top 10 sample_values,

    const left = names.slice(0, 10);
console.log(left);

    // otu_ids, and labels (10 each).


}
function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");
  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}
function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}
// Initialize the dashboard
init();



=============

Create a Bubble Chart that uses data from your samples route (/samples/<sample>) 
to display each sample.

Use otu_ids for the x values
Use sample_values for the y values
Use sample_values for the marker size
Use otu_ids for the marker colors
Use otu_labels for the text values

var bubbleDiv = document.getElementById("bubble-chart");
 
var traceA = {
  type: "scatter",
  mode: "markers",
  x: "otu_ids",
  y: "sample_values",
  marker: {
    size: "sample_values",
    colors:"otu_ids",
    text: "otu_labels"
  }
};
 
var data = [traceA];
 
var layout = {
  title: "Belly Button Biodiversity"
};
 
Plotly.plot(bubbleDiv, data, layout);