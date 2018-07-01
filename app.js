var pdfFiller = require('pdffiller'),
    sourcePDF = "form.pdf";
var destinationPDF =  "form_complete.pdf";
var data = {
    "IAIname": '100',
    "status2": 'n',
    "status3": 'n',
    "status1": 'n',
    "status4": 'n',
    "status5": 'n',
    "status6": 'n',
    "status7": 'y',
    "status8": 'y',
    "status9": 'y',
    "status10": 'y',
    "status11": 'y',
    "status12": 'y',
    "status13": 'y',
    "status14": 'y',
    "Button1": '2001/1/1'
};

pdfFiller.fillFormWithFlatten( sourcePDF, destinationPDF, data, false, function(err) {
    if (err) throw err;
    console.log("In callback (we're done).");
});