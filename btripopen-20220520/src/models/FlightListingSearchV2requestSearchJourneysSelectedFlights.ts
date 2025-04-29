// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightListingSearchV2RequestSearchJourneysSelectedFlights extends $dara.Model {
  /**
   * @example
   * HGH
   */
  arrAirportCode?: string;
  /**
   * @example
   * HGH
   */
  arrCityCode?: string;
  /**
   * @example
   * PKX
   */
  depAirportCode?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @example
   * 2023-09-01 07:10:00
   */
  flightTime?: string;
  /**
   * @example
   * HO3925
   */
  marketFlightNo?: string;
  /**
   * @example
   * CX601
   */
  operateFlightNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrAirportCode: 'arr_airport_code',
      arrCityCode: 'arr_city_code',
      depAirportCode: 'dep_airport_code',
      depCityCode: 'dep_city_code',
      flightTime: 'flight_time',
      marketFlightNo: 'market_flight_no',
      operateFlightNo: 'operate_flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrAirportCode: 'string',
      arrCityCode: 'string',
      depAirportCode: 'string',
      depCityCode: 'string',
      flightTime: 'string',
      marketFlightNo: 'string',
      operateFlightNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

