// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderDetailResponseBodyModuleJourneyListSegmentListStopCityList extends $dara.Model {
  /**
   * @example
   * PVG
   */
  stopAirport?: string;
  stopAirportName?: string;
  /**
   * @example
   * T1
   */
  stopArrTerminal?: string;
  /**
   * @example
   * 2024-07-06 11:10:00
   */
  stopArrTime?: string;
  /**
   * @example
   * SHA
   */
  stopCityCode?: string;
  stopCityName?: string;
  /**
   * @example
   * T1
   */
  stopDepTerminal?: string;
  /**
   * @example
   * 2024-07-06 11:10:00
   */
  stopDepTime?: string;
  static names(): { [key: string]: string } {
    return {
      stopAirport: 'stop_airport',
      stopAirportName: 'stop_airport_name',
      stopArrTerminal: 'stop_arr_terminal',
      stopArrTime: 'stop_arr_time',
      stopCityCode: 'stop_city_code',
      stopCityName: 'stop_city_name',
      stopDepTerminal: 'stop_dep_terminal',
      stopDepTime: 'stop_dep_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopAirport: 'string',
      stopAirportName: 'string',
      stopArrTerminal: 'string',
      stopArrTime: 'string',
      stopCityCode: 'string',
      stopCityName: 'string',
      stopDepTerminal: 'string',
      stopDepTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

