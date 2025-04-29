// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureOrderCreateRequestInsPersonAndSegmentListInsureSegment extends $dara.Model {
  /**
   * @example
   * YNT
   */
  arrAirportCode?: string;
  /**
   * @example
   * CKG
   */
  arrCity?: string;
  /**
   * @example
   * HGH
   */
  arrCityCode?: string;
  /**
   * @example
   * 2023-10-31 13:10:00
   */
  arrTime?: string;
  /**
   * @example
   * HGH
   */
  depAirportCode?: string;
  /**
   * @example
   * HGH
   */
  depCity?: string;
  /**
   * @example
   * CAN
   */
  depCityCode?: string;
  /**
   * @example
   * 2023-10-31 10:55:00
   */
  depTime?: string;
  /**
   * @example
   * ZH9891
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

