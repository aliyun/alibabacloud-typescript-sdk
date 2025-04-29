// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightSearchListRequest extends $dara.Model {
  /**
   * @example
   * CA
   */
  airlineCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HGH
   */
  arrCityCode?: string;
  /**
   * @example
   * BJS
   */
  arrCityName?: string;
  /**
   * @example
   * 2000-00-00 00:00:00
   */
  arrDate?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HGH
   */
  depCityCode?: string;
  /**
   * @example
   * HGH
   */
  depCityName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2000-00-00 00:00:00
   */
  depDate?: string;
  /**
   * @example
   * CA2323
   */
  flightNo?: string;
  /**
   * @example
   * false
   */
  needMultiClassPrice?: boolean;
  /**
   * @example
   * HGH
   */
  transferCityCode?: string;
  /**
   * @example
   * CA2323
   */
  transferFlightNo?: string;
  /**
   * @example
   * BJS
   */
  transferLeaveDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  tripType?: string;
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrDate: 'arr_date',
      cabinClass: 'cabin_class',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depDate: 'dep_date',
      flightNo: 'flight_no',
      needMultiClassPrice: 'need_multi_class_price',
      transferCityCode: 'transfer_city_code',
      transferFlightNo: 'transfer_flight_no',
      transferLeaveDate: 'transfer_leave_date',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      arrCityCode: 'string',
      arrCityName: 'string',
      arrDate: 'string',
      cabinClass: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depDate: 'string',
      flightNo: 'string',
      needMultiClassPrice: 'boolean',
      transferCityCode: 'string',
      transferFlightNo: 'string',
      transferLeaveDate: 'string',
      tripType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

