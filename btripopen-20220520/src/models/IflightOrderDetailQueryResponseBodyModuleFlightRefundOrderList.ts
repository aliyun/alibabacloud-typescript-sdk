// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketList } from "./IflightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketList";
import { IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightPassengerFee } from "./IflightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightPassengerFee";
import { IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightRefundSegmentList } from "./IflightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightRefundSegmentList";


export class IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderList extends $dara.Model {
  corpRefundAmount?: number;
  flightOrderRefundTicketList?: IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketList[];
  flightPassengerFee?: IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightPassengerFee[];
  flightRefundSegmentList?: IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightRefundSegmentList[];
  passengerList?: string[];
  personRefundAmount?: number;
  /**
   * @example
   * 1006200138737069
   */
  refundApplyId?: number;
  refundHandFee?: number;
  /**
   * @example
   * 3
   */
  refundOrderStatus?: number;
  refundServiceFee?: number;
  refundTotalAmount?: number;
  relateModifyApplyId?: number[];
  /**
   * @example
   * 10062001387370
   */
  relateRefundApplyId?: number;
  repeatRefund?: boolean;
  /**
   * @example
   * 2024-10-26 11:25:00
   */
  submitRefundTime?: string;
  voluntary?: boolean;
  static names(): { [key: string]: string } {
    return {
      corpRefundAmount: 'corp_refund_Amount',
      flightOrderRefundTicketList: 'flight_order_refund_ticket_list',
      flightPassengerFee: 'flight_passenger_fee',
      flightRefundSegmentList: 'flight_refund_segment_list',
      passengerList: 'passenger_list',
      personRefundAmount: 'person_refund_Amount',
      refundApplyId: 'refund_apply_id',
      refundHandFee: 'refund_hand_fee',
      refundOrderStatus: 'refund_order_status',
      refundServiceFee: 'refund_service_fee',
      refundTotalAmount: 'refund_total_Amount',
      relateModifyApplyId: 'relate_modify_apply_id',
      relateRefundApplyId: 'relate_refund_apply_id',
      repeatRefund: 'repeat_refund',
      submitRefundTime: 'submit_refund_time',
      voluntary: 'voluntary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpRefundAmount: 'number',
      flightOrderRefundTicketList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightOrderRefundTicketList },
      flightPassengerFee: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightPassengerFee },
      flightRefundSegmentList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightRefundOrderListFlightRefundSegmentList },
      passengerList: { 'type': 'array', 'itemType': 'string' },
      personRefundAmount: 'number',
      refundApplyId: 'number',
      refundHandFee: 'number',
      refundOrderStatus: 'number',
      refundServiceFee: 'number',
      refundTotalAmount: 'number',
      relateModifyApplyId: { 'type': 'array', 'itemType': 'number' },
      relateRefundApplyId: 'number',
      repeatRefund: 'boolean',
      submitRefundTime: 'string',
      voluntary: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.flightOrderRefundTicketList)) {
      $dara.Model.validateArray(this.flightOrderRefundTicketList);
    }
    if(Array.isArray(this.flightPassengerFee)) {
      $dara.Model.validateArray(this.flightPassengerFee);
    }
    if(Array.isArray(this.flightRefundSegmentList)) {
      $dara.Model.validateArray(this.flightRefundSegmentList);
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    if(Array.isArray(this.relateModifyApplyId)) {
      $dara.Model.validateArray(this.relateModifyApplyId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

