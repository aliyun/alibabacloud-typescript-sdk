// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOtaSearchRequestSearchJourneysSelectedFlights extends $dara.Model {
  /**
   * @example
   * HGH
   */
  arrAirportCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NNG
   */
  arrCityCode?: string;
  /**
   * @example
   * 0
   */
  cabinType?: number;
  /**
   * @example
   * KOW
   */
  depAirportCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CTU
   */
  depCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-08-15 12:00:00
   */
  flightTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * KA5809
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
      cabinType: 'cabin_type',
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
      cabinType: 'number',
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

