var app = angular.module('BergIt', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';


          $scope.dataPicture = [
            {
                src: './picture/f1.png',
                indexElm:0
            },
            {
                src: './picture/p2.png',
                indexElm:1
            },
            {
                src: './picture/p3.png',
                indexElm:2
            },
            {
                src: './picture/f2.png',
                indexElm:3
            },
            {
                src: './picture/p1.png',
                indexElm:4
            }
        ];

        $scope.containerWidth = 'calc(50% * '+$scope.dataPicture.length+')';
        $scope.childWidth = 'calc(100% / '+$scope.dataPicture.length+')'
        $scope.containerFloat = '0';
        $scope.currentIndexPic = 0;
        $scope.leftOrRight='animate-slideout-left'  
		$scope.disablePrevButton = true;
        $scope.disableNextButton = false;

        $scope.nextStat = nextStat;
         $scope.previousStat = previousStat;


	/**
     * show the next slide
     */
    function nextStat() {
        var vmConDet = $scope;
        if(vmConDet.currentIndexPic < (vmConDet.dataPicture.length - 1)) {
            vmConDet.currentIndexPic++;
            vmConDet.disablePrevButton = false;
            vmConDet.containerFloat = 'calc( 50% * (-'+vmConDet.currentIndexPic+') )';
            vmConDet.disableNextButton=false;
            if(vmConDet.currentIndexPic === (vmConDet.dataPicture.length - 1)){
                vmConDet.disableNextButton=true;
            }
        }
    }

    /**
     * show the previous slide
     */
    function previousStat(){
        var vmConDet = $scope;
        if (vmConDet.currentIndexPic > 0) {
            vmConDet.currentIndexPic--;
            vmConDet.disableNextButton=false;
            vmConDet.containerFloat = 'calc( 50% * (-' + vmConDet.currentIndexPic + ') )';
            vmConDet.disablePrevButton = false;
            if (vmConDet.currentIndexPic === 0) {
                vmConDet.disablePrevButton = true;
            }
        }
    }




});
