// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightListingSearchResponseBodyModuleFlightItemListFlightJourneyInfosFlightSegmentInfosFlightStopInfo extends $dara.Model {
  /**
   * @example
   * HGH
   */
  stopAirport?: string;
  stopAirportName?: string;
  /**
   * @example
   * T3
   */
  stopArrTerm?: string;
  /**
   * @example
   * BJS
   */
  stopArrTime?: string;
  /**
   * @example
   * HGH
   */
  stopCityCode?: string;
  /**
   * @example
   * HGH
   */
  stopCityName?: string;
  stopCityNames?: string[];
  /**
   * @example
   * T4
   */
  stopDepTerm?: string;
  /**
   * @example
   * 2023-08-13 07:25
   */
  stopDepTime?: string;
  stopTime?: string;
  static names(): { [key: string]: string } {
    return {
      stopAirport: 'stop_airport',
      stopAirportName: 'stop_airport_name',
      stopArrTerm: 'stop_arr_term',
      stopArrTime: 'stop_arr_time',
      stopCityCode: 'stop_city_code',
      stopCityName: 'stop_city_name',
      stopCityNames: 'stop_city_names',
      stopDepTerm: 'stop_dep_term',
      stopDepTime: 'stop_dep_time',
      stopTime: 'stop_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopAirport: 'string',
      stopAirportName: 'string',
      stopArrTerm: 'string',
      stopArrTime: 'string',
      stopCityCode: 'string',
      stopCityName: 'string',
      stopCityNames: { 'type': 'array', 'itemType': 'string' },
      stopDepTerm: 'string',
      stopDepTime: 'string',
      stopTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.stopCityNames)) {
      $dara.Model.validateArray(this.stopCityNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

