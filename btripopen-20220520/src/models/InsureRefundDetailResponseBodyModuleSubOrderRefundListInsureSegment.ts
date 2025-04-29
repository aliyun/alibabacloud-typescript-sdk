// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureRefundDetailResponseBodyModuleSubOrderRefundListInsureSegment extends $dara.Model {
  /**
   * @example
   * WHA
   */
  arrAirportCode?: string;
  arrCity?: string;
  /**
   * @example
   * YTY
   */
  arrCityCode?: string;
  /**
   * @example
   * 2023-05-27 23:00:00
   */
  arrTime?: string;
  /**
   * @example
   * NGB
   */
  depAirportCode?: string;
  depCity?: string;
  /**
   * @example
   * NGB
   */
  depCityCode?: string;
  /**
   * @example
   * 2023-05-27 20:30:00
   */
  depTime?: string;
  /**
   * @example
   * CZ3501
   */
  flightNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrAirportCode: 'arr_airport_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrTime: 'arr_time',
      depAirportCode: 'dep_airport_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depTime: 'dep_time',
      flightNo: 'flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrAirportCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrTime: 'string',
      depAirportCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depTime: 'string',
      flightNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

