function InsultCtrl(insultService) {
    this.insultService = insultService;
}

InsultCtrl.prototype.replaceInsult = function (){
    this.insult = this.insultService.generateInsult();
}

app.controller('InsultCtrl', InsultCtrl);