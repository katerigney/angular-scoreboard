angular
  .module("angularScoreboardApp", [])
  .controller("mainController", ($scope) => {

    $scope.team1 = "Team 1";
    $scope.addTeamName1 = () => {
      $scope.team1 = $scope.team1name;
    }

    $scope.team2 = "Team 2";
    $scope.addTeamName2 = () => {
      $scope.team2 = $scope.team2name;
    }

    $scope.team1score = 0;

    $scope.subScore1 = () => {
      $scope.team1score -= 1;
    }

    $scope.addScore1 = () => {
      $scope.team1score += 1;
    }

    $scope.team2score = 0;

    $scope.addScore2 = () => {
      $scope.team2score += 1;
    }

    $scope.subScore2 = () => {
      $scope.team2score += 1;
    }
  });