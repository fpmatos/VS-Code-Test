module app 
{
    export class MainController{
        static $inject = ['TesteService'];    
        constructor(service: app.TesteService){
                alert(service);
        }    

    }
    angular.module('fpmcore').controller('MainController', MainController)
}

