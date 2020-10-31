const { LotRequest } = require('./lot_pb.js');
const { WaferRequest } = require('./lot_pb.js');
const { DefectRequest } = require('./lot_pb.js');
const { LotServiceClient } = require('./lot_grpc_web_pb.js');

var client = new LotServiceClient(window.location.origin);

var sendInput = document.getElementById('send');
var lotresultText = document.getElementById('lotresult');

var waferInput = document.getElementById('waferid');
var wafersendInput = document.getElementById('wafersend');
var waferresultText = document.getElementById('waferresult');

var waferDefectInput = document.getElementById('waferdefectid');
var defectInput = document.getElementById('defectid');
var defectsendInput = document.getElementById('defectsend');
var defectresultText = document.getElementById('defectresult');

sendInput.onclick = function () {
    var request = new LotRequest();

    client.getLot(request, {}, (err, response) => {
        lotresultText.innerHTML = htmlEscape(response.getName());
    });
};

wafersendInput.onclick = function () {
    var request = new WaferRequest();
    request.setId(parseInt(waferInput.value));

    client.getWafer(request, {}, (err, response) => {
        waferresultText.innerHTML = htmlEscape(response.getName());
    });
};

defectsendInput.onclick = function () {
    var request = new DefectRequest();
    request.setWaferid(parseInt(waferDefectInput.value));
    request.setId(parseInt(defectInput.value));

    client.getDefect(request, {}, (err, response) => {
        defectresultText.innerHTML = htmlEscape('Id:' + response.getId() + ', (x,y):(' + response.getX() + ',' + response.getY() + '), Classcode:' + response.getClasscode() + ', Roughcode:' + response.getRoughcode());
    });
};

function htmlEscape(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}