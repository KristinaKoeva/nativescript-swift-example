var platform = require("platform");

function pageLoaded(args) {
    var page = args.object;
    var chartView = page.getViewById("chartView");
    chartView.ios.frame = page.ios.view.frame;
}

function creatingView(args) {
    _chartView = PieChartView.alloc().init();
    _chartView.usePercentValuesEnabled = true;
    _chartView.holeTransparent = true;
    _chartView.centerTextFont = UIFont.fontWithNameSize("HelveticaNeue-Light", 12);
    _chartView.holeRadiusPercent = 0.58;
    _chartView.transparentCircleRadiusPercent = 0.61;
    _chartView.descriptionText = "";
    _chartView.drawCenterTextEnabled = true;
    _chartView.drawHoleEnabled = true;
    _chartView.rotationAngle = 0.0;
    _chartView.rotationEnabled = true;
    _chartView.centerText = "iOS Charts\nwith {N}";

    _chartView.animateWithXAxisDurationYAxisDurationEasingOption(1.5, 1.5, ChartEasingOptionEaseOutBack);
    
    var parties = [ "Party A", "Party B", "Party C", "Party D" ];
    var mult = 100;
    var count = 4;
    var yVals = [];
    
    // IMPORTANT: In a PieChart, no values (Entry) should have the same xIndex (even if from different DataSets), since no values can be drawn above each other.
    for (var i = 0; i < count; i++)
    {
        yVals.push(BarChartDataEntry.alloc().initWithValueXIndex((arc4random_uniform(mult) + mult / 5), i));
    }
    
    var dataSet = PieChartDataSet.alloc().initWithYValsLabel(yVals, "Election Results");
    dataSet.sliceSpace = 3.0;
    dataSet.colors = ChartColorTemplates.colorful();

    var data = PieChartData.alloc().initWithXValsDataSet(parties, dataSet);
    
    _chartView.data = data;
    _chartView.frame = { size: { width: platform.screen.mainScreen.widthPixels, height: platform.screen.mainScreen.heightPixels } };

    args.view = _chartView;
}

exports.creatingView = creatingView;
exports.pageLoaded = pageLoaded;
