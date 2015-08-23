/**
* RankingService
* @namespace crowdsource.ranking.services
*/
(function () {
  'use strict';

  angular
    .module('crowdsource.ranking.services')
    .factory('RankingService', RankingService);

  RankingService.$inject = ['$cookies', '$q', '$location', 'HttpService'];

  /**
  * @namespace RankingService
  * @returns {Factory}
  */

  function RankingService($cookies, $q, $location, HttpService) {
    /**
    * @name RankingService
    * @desc The Factory to be returned
    */
    var RankingService = {
      getPendingRankings: getPendingRankings,
    };

    return RankingService;


    /**
    * @name getRequesterRanking
    * @desc Get requester ranking.
    * @returns {Promise}
    * @memberOf crowdsource.ranking.services.RankingService
    */
    function getPendingRankings() {
      var settings = {
        url: '/api/project/workers_for_projects/',
        method: 'GET',
      };
      return HttpService.doRequest(settings);
    }

  }
})();