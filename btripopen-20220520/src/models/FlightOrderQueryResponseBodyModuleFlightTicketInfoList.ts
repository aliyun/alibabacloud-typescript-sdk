// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderQueryResponseBodyModuleFlightTicketInfoList extends $dara.Model {
  arrAirport?: string;
  arrAirportCode?: string;
  arrCity?: string;
  arrCityCode?: string;
  /**
   * @example
   * 100
   */
  buildPrice?: number;
  /**
   * @example
   * false
   */
  changed?: boolean;
  depAirport?: string;
  depAirportCode?: string;
  depCity?: string;
  depCityCode?: string;
  /**
   * @example
   * 10
   */
  discount?: number;
  flightNo?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  gmtModify?: string;
  journeyIndex?: number;
  /**
   * @example
   * 100
   */
  oilPrice?: number;
  /**
   * @example
   * 1
   */
  payType?: number;
  personalPrice?: number;
  segmentIndex?: number;
  /**
   * @example
   * 100
   */
  settlePrice?: number;
  /**
   * @example
   * 000-123
   */
  ticketNo?: string;
  /**
   * @example
   * 100
   */
  ticketPrice?: number;
  /**
   * @example
   * OPEN
   */
  ticketStatus?: string;
  /**
   * @example
   * 1
   */
  ticketStatusCode?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      arrAirport: 'arr_airport',
      arrAirportCode: 'arr_airport_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      buildPrice: 'build_price',
      changed: 'changed',
      depAirport: 'dep_airport',
      depAirportCode: 'dep_airport_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      discount: 'discount',
      flightNo: 'flight_no',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      journeyIndex: 'journey_index',
      oilPrice: 'oil_price',
      payType: 'pay_type',
      personalPrice: 'personal_price',
      segmentIndex: 'segment_index',
      settlePrice: 'settle_price',
      ticketNo: 'ticket_no',
      ticketPrice: 'ticket_price',
      ticketStatus: 'ticket_status',
      ticketStatusCode: 'ticket_status_code',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrAirport: 'string',
      arrAirportCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      buildPrice: 'number',
      changed: 'boolean',
      depAirport: 'string',
      depAirportCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      discount: 'number',
      flightNo: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      journeyIndex: 'number',
      oilPrice: 'number',
      payType: 'number',
      personalPrice: 'number',
      segmentIndex: 'number',
      settlePrice: 'number',
      ticketNo: 'string',
      ticketPrice: 'number',
      ticketStatus: 'string',
      ticketStatusCode: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

