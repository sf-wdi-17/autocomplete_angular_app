
// Trie implementation:
// https://github.com/mjdesa/autocomplete/blob/master/trie.js

var aCA = angular.module("autoCompleteApp", []);

aCA.controller("MainCtrl", ['$scope', 'autoComplete', function($scope, autoComplete) {

    $scope.q = "";
    $scope.suggestions = null;

    $scope.doAutoComplete = function() {
        // This function will do the work of searching for words 
        // and inserting into the suggestion box.
        $scope.suggestions = [
            "apple",
            "appie",
            "appetizer"
        ];


    }

}]);

aCA.service('autoComplete', [function () {
    // Maybe we implement our Trie here?
    // var wordData = []; // We'll put all the words that go into the Trie here

    // Then we'll insert all the words into the Trie
    // trieInstance.addWord("someWord");

    //

    return {}
}])