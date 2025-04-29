// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundApplyTicketList } from "./FlightOrderListQueryV2responseBodyModuleFlightRefundApplyListFlightRefundApplyTicketList";
import { FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundSegmentList } from "./FlightOrderListQueryV2responseBodyModuleFlightRefundApplyListFlightRefundSegmentList";
import { FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundUserFeeList } from "./FlightOrderListQueryV2responseBodyModuleFlightRefundApplyListFlightRefundUserFeeList";


export class FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyList extends $dara.Model {
  flightRefundApplyTicketList?: FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundApplyTicketList[];
  flightRefundSegmentList?: FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundSegmentList[];
  flightRefundUserFeeList?: FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundUserFeeList[];
  /**
   * @example
   * 232213
   */
  refundApplyId?: string;
  /**
   * @example
   * 2024122312
   */
  refundApproveId?: string;
  refundCorpTotalAmount?: number;
  refundHandFee?: number;
  refundPersonTotalAmount?: number;
  refundReason?: string;
  /**
   * @example
   * 0
   */
  refundReasonCode?: string;
  refundTotalAmount?: number;
  /**
   * @example
   * 232218
   */
  relateRefundApplyId?: string;
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      flightRefundApplyTicketList: 'flight_refund_apply_ticket_list',
      flightRefundSegmentList: 'flight_refund_segment_list',
      flightRefundUserFeeList: 'flight_refund_user_fee_list',
      refundApplyId: 'refund_apply_id',
      refundApproveId: 'refund_approve_id',
      refundCorpTotalAmount: 'refund_corp_total_amount',
      refundHandFee: 'refund_hand_fee',
      refundPersonTotalAmount: 'refund_person_total_amount',
      refundReason: 'refund_reason',
      refundReasonCode: 'refund_reason_code',
      refundTotalAmount: 'refund_total_amount',
      relateRefundApplyId: 'relate_refund_apply_id',
      userIdList: 'user_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightRefundApplyTicketList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundApplyTicketList },
      flightRefundSegmentList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundSegmentList },
      flightRefundUserFeeList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundUserFeeList },
      refundApplyId: 'string',
      refundApproveId: 'string',
      refundCorpTotalAmount: 'number',
      refundHandFee: 'number',
      refundPersonTotalAmount: 'number',
      refundReason: 'string',
      refundReasonCode: 'string',
      refundTotalAmount: 'number',
      relateRefundApplyId: 'string',
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.flightRefundApplyTicketList)) {
      $dara.Model.validateArray(this.flightRefundApplyTicketList);
    }
    if(Array.isArray(this.flightRefundSegmentList)) {
      $dara.Model.validateArray(this.flightRefundSegmentList);
    }
    if(Array.isArray(this.flightRefundUserFeeList)) {
      $dara.Model.validateArray(this.flightRefundUserFeeList);
    }
    if(Array.isArray(this.userIdList)) {
      $dara.Model.validateArray(this.userIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

