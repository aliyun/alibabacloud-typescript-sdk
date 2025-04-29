// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightExceedApplyQueryResponseBodyModuleApplyIntentionInfoDo extends $dara.Model {
  arrAirportName?: string;
  /**
   * @example
   * SHA
   */
  arrCity?: string;
  arrCityName?: string;
  /**
   * @example
   * 2022-01-12T16:47Z
   */
  arrTime?: string;
  /**
   * @example
   * F
   */
  cabin?: string;
  /**
   * @example
   * 1
   */
  cabinClass?: number;
  cabinClassStr?: string;
  depAirportName?: string;
  /**
   * @example
   * SHA
   */
  depCity?: string;
  depCityName?: string;
  /**
   * @example
   * 2022-01-12T16:47Z
   */
  depTime?: string;
  /**
   * @example
   * 4
   */
  discount?: string;
  /**
   * @example
   * MU2759
   */
  flightNo?: string;
  /**
   * @example
   * 300
   */
  price?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      arrAirportName: 'arr_airport_name',
      arrCity: 'arr_city',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassStr: 'cabin_class_str',
      depAirportName: 'dep_airport_name',
      depCity: 'dep_city',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      discount: 'discount',
      flightNo: 'flight_no',
      price: 'price',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrAirportName: 'string',
      arrCity: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      cabin: 'string',
      cabinClass: 'number',
      cabinClassStr: 'string',
      depAirportName: 'string',
      depCity: 'string',
      depCityName: 'string',
      depTime: 'string',
      discount: 'string',
      flightNo: 'string',
      price: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

