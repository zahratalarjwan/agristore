// الكود الخاص بـ Google Apps Script لربط المتجر بقاعدة بيانات مجانية عبر Google Sheets
// 1. افتح sheets.google.com وأنشئ جدولاً جديداً.
// 2. اذهب إلى Extensions > Apps Script.
// 3. الصق هذا الكود بالكامل هناك واحفظ.
// 4. اضغط على Deploy > New deployment.
// 5. اختر النوع "Web app".
// 6. اختر "Execute as: Me" و "Who has access: Anyone".
// 7. انسخ الرابط (Web App URL) الناتج وضعه في متغير SCRIPT_URL في ملف script.js في موقعك.

function doGet(e) {
  var action = e.parameter.action;
  if(action === "getProducts") {
    return ContentService.createTextOutput(JSON.stringify(getProducts())).setMimeType(ContentService.MimeType.JSON);
  }
  return ContentService.createTextOutput(JSON.stringify({error: "Invalid action"})).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var action = data.action;
    
    if(action === "saveProducts") {
      saveProducts(data.products);
      return ContentService.createTextOutput(JSON.stringify({success: true})).setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({error: "Invalid action"})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({error: err.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}

function getProducts() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Products");
  if (!sheet) return [];
  
  var data = sheet.getDataRange().getValues();
  if (data.length <= 1) return []; // No data except header
  
  var headers = data[0];
  var products = [];
  
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var p = {};
    for (var j = 0; j < headers.length; j++) {
      p[headers[j]] = row[j];
    }
    products.push(p);
  }
  return products;
}

function saveProducts(productsList) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Products");
  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Products");
  }
  sheet.clear(); // Clear existing data
  
  if (!productsList || productsList.length === 0) return;
  
  var headers = Object.keys(productsList[0]);
  sheet.appendRow(headers);
  
  for (var i = 0; i < productsList.length; i++) {
    var row = [];
    for (var j = 0; j < headers.length; j++) {
      row.push(productsList[i][headers[j]]);
    }
    sheet.appendRow(row);
  }
}

