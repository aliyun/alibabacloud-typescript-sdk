// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightItineraryScanQueryResponseBodyModuleItemsFlights extends $dara.Model {
  /**
   * @remarks
   * 航班至
   */
  arrivalStation?: string;
  /**
   * @remarks
   * 座位等级
   * 
   * @example
   * M
   */
  cabinClass?: string;
  /**
   * @remarks
   * 承运人
   */
  carrier?: string;
  /**
   * @remarks
   * 航班从
   */
  departureStation?: string;
  /**
   * @remarks
   * 日期
   * 
   * @example
   * 2018-11-18
   */
  flightDate?: string;
  /**
   * @remarks
   * 航班号
   * 
   * @example
   * MU2271
   */
  flightNumber?: string;
  /**
   * @remarks
   * 时间
   * 
   * @example
   * 18:25
   */
  flightTime?: string;
  /**
   * @remarks
   * 免费行李
   * 
   * @example
   * 20K
   */
  freeBaggageAllowance?: string;
  /**
   * @remarks
   * 行号
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * 客票级别
   * 
   * @example
   * M
   */
  seatClass?: string;
  /**
   * @remarks
   * 客票生效日期
   * 
   * @example
   * 2023-01-01
   */
  validFromDate?: string;
  /**
   * @remarks
   * 有效截止日期
   * 
   * @example
   * 2023-01-01
   */
  validToDate?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalStation: 'arrival_station',
      cabinClass: 'cabin_class',
      carrier: 'carrier',
      departureStation: 'departure_station',
      flightDate: 'flight_date',
      flightNumber: 'flight_number',
      flightTime: 'flight_time',
      freeBaggageAllowance: 'free_baggage_allowance',
      index: 'index',
      seatClass: 'seat_class',
      validFromDate: 'valid_from_date',
      validToDate: 'valid_to_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalStation: 'string',
      cabinClass: 'string',
      carrier: 'string',
      departureStation: 'string',
      flightDate: 'string',
      flightNumber: 'string',
      flightTime: 'string',
      freeBaggageAllowance: 'string',
      index: 'string',
      seatClass: 'string',
      validFromDate: 'string',
      validToDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

