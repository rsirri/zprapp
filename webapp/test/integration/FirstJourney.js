sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onThePurchaseRequisitionList.iSeeThisPage();
            Then.onThePurchaseRequisitionList.onFilterBar().iCheckFilterField("PR Number");
            Then.onThePurchaseRequisitionList.onFilterBar().iCheckFilterField("Document Type");
            Then.onThePurchaseRequisitionList.onFilterBar().iCheckFilterField("PrDate");
            Then.onThePurchaseRequisitionList.onFilterBar().iCheckFilterField("User Name");
            Then.onThePurchaseRequisitionList.onFilterBar().iCheckFilterField("Department");
            Then.onThePurchaseRequisitionList.onFilterBar().iCheckFilterField("Status");
            Then.onThePurchaseRequisitionList.onTable().iCheckColumns(7, {"PrNumber":{"header":"PR Number"},"DocType":{"header":"Document Type"},"PrDate":{"header":"PR Date"},"RequestedBy":{"header":"Requested By"},"Department":{"header":"Department"},"Status":{"header":"Status"},"TotalValue":{"header":"Total Value"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onThePurchaseRequisitionList.onFilterBar().iExecuteSearch();
            
            Then.onThePurchaseRequisitionList.onTable().iCheckRows();

            When.onThePurchaseRequisitionList.onTable().iPressRow(0);
            Then.onThePurchaseRequisitionObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});