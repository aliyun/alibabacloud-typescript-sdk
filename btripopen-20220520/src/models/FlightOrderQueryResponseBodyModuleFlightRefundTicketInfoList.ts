// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderQueryResponseBodyModuleFlightRefundTicketInfoList extends $dara.Model {
  applyId?: string;
  arrAirport?: string;
  arrAirportCode?: string;
  arrCity?: string;
  arrCityCode?: string;
  companyRefundTicketFee?: number;
  depAirport?: string;
  depAirportCode?: string;
  depCity?: string;
  depCityCode?: string;
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
  outApplyId?: string;
  personalRefundTicketFee?: number;
  /**
   * @example
   * 43667
   */
  refundOrderId?: number;
  refundReason?: string;
  /**
   * @example
   * 100
   */
  refundTicketFee?: number;
  /**
   * @example
   * 0
   */
  refundType?: number;
  segmentIndex?: number;
  /**
   * @example
   * 000-13232
   */
  ticketNo?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      arrAirport: 'arr_airport',
      arrAirportCode: 'arr_airport_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      companyRefundTicketFee: 'company_refund_ticket_fee',
      depAirport: 'dep_airport',
      depAirportCode: 'dep_airport_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      flightNo: 'flight_no',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      journeyIndex: 'journey_index',
      outApplyId: 'out_apply_id',
      personalRefundTicketFee: 'personal_refund_ticket_fee',
      refundOrderId: 'refund_order_id',
      refundReason: 'refund_reason',
      refundTicketFee: 'refund_ticket_fee',
      refundType: 'refund_type',
      segmentIndex: 'segment_index',
      ticketNo: 'ticket_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      arrAirport: 'string',
      arrAirportCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      companyRefundTicketFee: 'number',
      depAirport: 'string',
      depAirportCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      flightNo: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      journeyIndex: 'number',
      outApplyId: 'string',
      personalRefundTicketFee: 'number',
      refundOrderId: 'number',
      refundReason: 'string',
      refundTicketFee: 'number',
      refundType: 'number',
      segmentIndex: 'number',
      ticketNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

