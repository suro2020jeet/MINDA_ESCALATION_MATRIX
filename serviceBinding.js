function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZMINDA_PDF_DISPLAY_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}