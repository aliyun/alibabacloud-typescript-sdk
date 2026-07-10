// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightSearchListRequest extends $dara.Model {
  airlineCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  arrCityCode?: string;
  arrCityName?: string;
  arrDate?: string;
  cabinClass?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depCityCode?: string;
  depCityName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depDate?: string;
  flightNo?: string;
  needMultiClassPrice?: boolean;
  transferCityCode?: string;
  transferFlightNo?: string;
  transferLeaveDate?: string;
  /**
   * @remarks
   * This parameter is required.
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

