'use strict';
var shopcart = angular.module("shopCart", []);

shopcart.controller('cartController', ['$scope', '$http', '$window', function($scope, $http, $window) {
  var cart_info;
  $scope.edit = false;
  $http.get("/assets/cart.json")
  .then(function(response) {
    $scope.cart = response["data"]["productsInCart"];
    // local storage
    $window.localStorage["cart_info"] = JSON.stringify(response["data"]["productsInCart"]);
    // showing everything from local storage
    $scope.myCart = JSON.parse($window.localStorage["cart_info"]);
    // $scope.cart_total_items = $scope.myCart.length;
    $scope.$watch(function() {
      if ($scope.myCart != undefined) {
        $scope.cart_total_items = $scope.myCart.length;
      }
    });

    // edit modal
    $scope.showEditModal = function(i) {
      $scope.editModalShown = true;
      $scope.edit = true;
      $scope.productDetail = $scope.myCart[i];
    }
    $scope.hideEditModalCallback = function(dialogID) {
      if (dialogID == 'editModalShown') {
        $scope.editModalShown = false;
      }
    };

    var product = 
  { "productList":[  
      {  
         "p_id":"5",
         "p_name":"paisley jean",
         "p_image" : "/assets/P1.jpg",
         "p_variation":"paisley",
         "p_style":"ms13kt1906",
         "p_selected_color":{  
            "name":"cream",
            "hexcode":"#f3f3db"
         },
         "p_selected_size":{  
            "name":"small",
            "code":"s"
         },
         "p_available_options":{  
            "colors":[  
               {  
                  "name":"cream",
                  "hexcode":"#f3f3db"
               },
               {  
                  "name":"pista-green",
                  "hexcode":"#a9d0a1"
               }
            ],
            "sizes":[  
               {  
                  "name":"small",
                  "code":"s"
               },
               {  
                  "name":"medium",
                  "code":"m"
               },
               {  
                  "name":"large",
                  "code":"l"
               },
               {  
                  "name":"extra large",
                  "code":"xl"
               }
            ]
         },
         "p_quantity":1,
         "p_originalprice":21.0,
         "p_price":21.0,
         "c_currency":"$"
      }
    ]};

    $scope.showModal = function() {
      $scope.addModalShown = true;
      $scope.productDetail = product["productList"][0];
      $scope.edit = false;
    }

    $scope.hideModalCallback = function(dialogID) {
      if (dialogID == 'addModalShown') {
        $scope.addModalShown = false;
      }
    };

    $scope.select = false;
    
    $scope.selectColor = function () {
      $scope.select = true;
    }
    $scope.addToCart = function(i) {
      // code
      var selected_index = i;
      $scope.myCart.push($scope.productDetail);
      $window.localStorage["cart_info"] = JSON.stringify($scope.myCart);
    }

    $scope.editProduct = function() {
      // code
    }
    $scope.removeProduct = function(i) {
      // code
      var selected_index = i;
      $scope.myCart.splice(selected_index, 1);
      $window.localStorage["cart_info"] = JSON.stringify($scope.myCart);
      $scope.subTotal();
    }

    // finding subtotal
    $scope.subTotal = function() {
      // initiating variables
      var st = 0;
      var loop_item = 0;
      var product_item = [];
      if ($scope.myCart.length > 0) {
        for (loop_item; loop_item < $scope.myCart.length; loop_item++) {
          // iteration through each item in the hash - myCart
          product_item = $scope.myCart[loop_item];
          // finding subtotal st = st + (price*qty)
          st += (product_item.p_price * product_item.p_quantity);
        }
      } else {
        st = 0;
      }
      return st;
    }

    // discount logic
    $scope.discountLogic = function() {
      var discount = 0;
      var subtotal = $scope.subTotal();
      //  3 items in cart - 5% discount on subtotal amount
      if ($scope.myCart.length === 3) {
        return discount = subtotal * 0.5;
      } 
      // 3-6 items in cart - 10% discount on subtotal amount
      else if ($scope.myCart.length > 3 && $scope.myCart.length <= 6) {
        return discount = subtotal * 0.10;
      } 
      // Above 10 items in cart – 25% discount on subtotal amount
      else if ($scope.myCart.length > 10) {
        return discount = subtotal * 0.25;
      } 
      // handling other scenarios
      else {
        return discount;
      }
    }
    if ($scope.myCart.length === 3) {
      $scope.percentage = 5;
    } else if ($scope.myCart.length > 3 && $scope.myCart.length <= 6) {
      $scope.percentage = 10;
    } else if ($scope.myCart.length > 10) {
      $scope.percentage = 25;
    } else {
      $scope.percentage = 25;
    }

    // Finding estimated total
    $scope.estTotal = $scope.subTotal() - $scope.discountLogic();
  });
}]);


// modal box directive
shopcart.directive('sapModal', [function() {
  return {
    restrict: 'E',
    scope: {
      show: '=',
      onClosed :'&onClosed'
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
        scope.onClosed();
      };
    },
    template : "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='float-clear'></div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
}]);

