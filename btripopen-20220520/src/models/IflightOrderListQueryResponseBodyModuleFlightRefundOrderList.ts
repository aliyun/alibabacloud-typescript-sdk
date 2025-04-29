// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketList } from "./IflightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketList";
import { IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightRefundSegmentList } from "./IflightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightRefundSegmentList";
import { IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListPassengerFee } from "./IflightOrderListQueryResponseBodyModuleFlightRefundOrderListPassengerFee";


export class IFlightOrderListQueryResponseBodyModuleFlightRefundOrderList extends $dara.Model {
  corpRefundAmount?: number;
  flightOrderRefundTicketList?: IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketList[];
  flightRefundSegmentList?: IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightRefundSegmentList[];
  passengerFee?: IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListPassengerFee[];
  passengerInfo?: string[];
  personRefundAmount?: number;
  refundAmount?: number;
  /**
   * @example
   * 1006200138737069
   */
  refundApplyId?: number;
  refundHandFee?: number;
  serviceFee?: number;
  static names(): { [key: string]: string } {
    return {
      corpRefundAmount: 'corp_refund_Amount',
      flightOrderRefundTicketList: 'flight_order_refund_ticket_list',
      flightRefundSegmentList: 'flight_refund_segment_list',
      passengerFee: 'passenger_fee',
      passengerInfo: 'passenger_info',
      personRefundAmount: 'person_refund_Amount',
      refundAmount: 'refund_Amount',
      refundApplyId: 'refund_apply_id',
      refundHandFee: 'refund_hand_fee',
      serviceFee: 'service_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpRefundAmount: 'number',
      flightOrderRefundTicketList: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketList },
      flightRefundSegmentList: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListFlightRefundSegmentList },
      passengerFee: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightRefundOrderListPassengerFee },
      passengerInfo: { 'type': 'array', 'itemType': 'string' },
      personRefundAmount: 'number',
      refundAmount: 'number',
      refundApplyId: 'number',
      refundHandFee: 'number',
      serviceFee: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flightOrderRefundTicketList)) {
      $dara.Model.validateArray(this.flightOrderRefundTicketList);
    }
    if(Array.isArray(this.flightRefundSegmentList)) {
      $dara.Model.validateArray(this.flightRefundSegmentList);
    }
    if(Array.isArray(this.passengerFee)) {
      $dara.Model.validateArray(this.passengerFee);
    }
    if(Array.isArray(this.passengerInfo)) {
      $dara.Model.validateArray(this.passengerInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

