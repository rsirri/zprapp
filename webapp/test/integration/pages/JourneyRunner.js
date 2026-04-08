sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zprapp/test/integration/pages/PurchaseRequisitionList",
	"zprapp/test/integration/pages/PurchaseRequisitionObjectPage"
], function (JourneyRunner, PurchaseRequisitionList, PurchaseRequisitionObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zprapp') + '/test/flp.html#app-preview',
        pages: {
			onThePurchaseRequisitionList: PurchaseRequisitionList,
			onThePurchaseRequisitionObjectPage: PurchaseRequisitionObjectPage
        },
        async: true
    });

    return runner;
});

