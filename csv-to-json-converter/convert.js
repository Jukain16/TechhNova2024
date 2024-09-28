const csv = require('csvtojson');
const fs = require('fs');
const path = require('path');

// Define the path to the CSV file
const csvFilePath = path.join(__dirname, 'swe-salaries.csv');

// Define the path for the output JSON file
const jsonFilePath = path.join(__dirname, 'swe-salaries.json');

// Function to convert CSV to JSON
const convertCsvToJson = async () => {
  try {
    // Convert CSV to JSON array
    const jsonArray = await csv().fromFile(csvFilePath);

    // Process the JSON data: Convert appropriate fields to numbers
    const processedData = jsonArray.map(entry => ({
      NOC_CNP: entry.NOC_CNP,
      NOC_TITLE_ENG: entry.NOC_TITLE_ENG,
      NOC_TITLE_FRA: entry.NOC_TITLE_FRA,
      prov: entry.prov,
      ER_Code_Code_RE: entry.ER_Code_Code_RE,
      ER_Name: entry.ER_Name,
      Nom_RE: entry.Nom_RE,
      Low_Wage_Salaire_Minium: Number(entry.Low_Wage_Salaire_Minium),
      Median_Wage_Salaire_Median: Number(entry.Median_Wage_Salaire_Median),
      High_Wage_Salaire_Maximal: Number(entry.High_Wage_Salaire_Maximal),
      Average_Wage_Salaire_Moyen: Number(entry.Average_Wage_Salaire_Moyen),
      Data_Source_E: entry.Data_Source_E,
      Data_Source_F: entry.Data_Source_F,
      Reference_Period: Number(entry.Reference_Period),
      Revision_Date_Date_revision: entry.Revision_Date_Date_revision,
      Annual_Wage_Flag_Salaire_annuel: Number(entry.Annual_Wage_Flag_Salaire_annuel),
      Wage_Comment_E: entry.Wage_Comment_E,
      Wage_Comment_F: entry.Wage_Comment_F
    }));

    // Write JSON array to a file with indentation for readability
    fs.writeFileSync(jsonFilePath, JSON.stringify(processedData, null, 2), 'utf8');

    console.log(`Successfully converted ${csvFilePath} to ${jsonFilePath}`);
  } catch (error) {
    console.error('Error converting CSV to JSON:', error);
  }
};

// Execute the conversion
convertCsvToJson(); 
