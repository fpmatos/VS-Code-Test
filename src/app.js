var core = angular.module('fpmcore', []);

var app;
(function (app) {
    var MainController = (function () {
        function MainController(service) {
            alert(service);
        }
        MainController.$inject = ['TesteService'];
        return MainController;
    }());
    app.MainController = MainController;
    angular.module('fpmcore').controller('MainController', MainController);
})(app || (app = {}));

var app;
(function (app) {
    var TesteService = (function () {
        function TesteService() {
        }
        return TesteService;
    }());
    app.TesteService = TesteService;
    angular.module('fpmcore').service('TesteService', TesteService);
})(app || (app = {}));

//# sourceMappingURL=app.js.map
