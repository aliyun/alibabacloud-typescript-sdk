// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderQueryResponseBodyModuleFlightChangeTicketInfoList extends $dara.Model {
  applyId?: string;
  arrAirport?: string;
  arrAirportCode?: string;
  arrCity?: string;
  arrCityCode?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  arrTime?: string;
  /**
   * @example
   * V
   */
  changeCabin?: string;
  /**
   * @example
   * Y
   */
  changeCabinLevel?: string;
  /**
   * @example
   * 100
   */
  changeFee?: number;
  /**
   * @example
   * MU7767
   */
  changeFlightNo?: string;
  /**
   * @example
   * 33576
   */
  changeOrderId?: number;
  changeReason?: string;
  /**
   * @example
   * 0
   */
  changeType?: number;
  depAirport?: string;
  depAirportCode?: string;
  depCity?: string;
  depCityCode?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  depTime?: string;
  discount?: string;
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
   * 00-123123
   */
  originTicketNo?: string;
  outApplyId?: string;
  segmentIndex?: number;
  stopCity?: string;
  /**
   * @example
   * 000-123123
   */
  ticketNo?: string;
  ticketStatus?: string;
  ticketStatusCode?: number;
  /**
   * @example
   * 100
   */
  upgradeFee?: number;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      arrAirport: 'arr_airport',
      arrAirportCode: 'arr_airport_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrTime: 'arr_time',
      changeCabin: 'change_cabin',
      changeCabinLevel: 'change_cabin_level',
      changeFee: 'change_fee',
      changeFlightNo: 'change_flight_no',
      changeOrderId: 'change_order_id',
      changeReason: 'change_reason',
      changeType: 'change_type',
      depAirport: 'dep_airport',
      depAirportCode: 'dep_airport_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depTime: 'dep_time',
      discount: 'discount',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      journeyIndex: 'journey_index',
      originTicketNo: 'origin_ticket_no',
      outApplyId: 'out_apply_id',
      segmentIndex: 'segment_index',
      stopCity: 'stop_city',
      ticketNo: 'ticket_no',
      ticketStatus: 'ticket_status',
      ticketStatusCode: 'ticket_status_code',
      upgradeFee: 'upgrade_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      arrAirport: 'string',
      arrAirportCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrTime: 'string',
      changeCabin: 'string',
      changeCabinLevel: 'string',
      changeFee: 'number',
      changeFlightNo: 'string',
      changeOrderId: 'number',
      changeReason: 'string',
      changeType: 'number',
      depAirport: 'string',
      depAirportCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depTime: 'string',
      discount: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      journeyIndex: 'number',
      originTicketNo: 'string',
      outApplyId: 'string',
      segmentIndex: 'number',
      stopCity: 'string',
      ticketNo: 'string',
      ticketStatus: 'string',
      ticketStatusCode: 'number',
      upgradeFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

