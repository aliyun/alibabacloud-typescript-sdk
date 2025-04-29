// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopApplyTicketList } from "./FlightOrderListQueryV2responseBodyModuleFlightReshopApplyListFlightReshopApplyTicketList";
import { FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopSegmentList } from "./FlightOrderListQueryV2responseBodyModuleFlightReshopApplyListFlightReshopSegmentList";
import { FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopUserFeeList } from "./FlightOrderListQueryV2responseBodyModuleFlightReshopApplyListFlightReshopUserFeeList";


export class FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyList extends $dara.Model {
  flightReshopApplyTicketList?: FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopApplyTicketList[];
  flightReshopSegmentList?: FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopSegmentList[];
  flightReshopUserFeeList?: FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopUserFeeList[];
  /**
   * @example
   * 100231231
   */
  relateReshopApplyId?: number;
  /**
   * @example
   * 123232323
   */
  reshopApplyId?: number;
  /**
   * @example
   * 122312
   */
  reshopApproveId?: string;
  reshopCorpTotalAmount?: number;
  reshopPersonTotalAmount?: number;
  reshopReason?: string;
  /**
   * @example
   * 1002
   */
  reshopReasonCode?: string;
  reshopTotalAmount?: number;
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      flightReshopApplyTicketList: 'flight_reshop_apply_ticket_list',
      flightReshopSegmentList: 'flight_reshop_segment_list',
      flightReshopUserFeeList: 'flight_reshop_user_fee_list',
      relateReshopApplyId: 'relate_reshop_apply_id',
      reshopApplyId: 'reshop_apply_id',
      reshopApproveId: 'reshop_approve_id',
      reshopCorpTotalAmount: 'reshop_corp_total_amount',
      reshopPersonTotalAmount: 'reshop_person_total_amount',
      reshopReason: 'reshop_reason',
      reshopReasonCode: 'reshop_reason_code',
      reshopTotalAmount: 'reshop_total_amount',
      userIdList: 'user_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightReshopApplyTicketList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopApplyTicketList },
      flightReshopSegmentList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopSegmentList },
      flightReshopUserFeeList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopUserFeeList },
      relateReshopApplyId: 'number',
      reshopApplyId: 'number',
      reshopApproveId: 'string',
      reshopCorpTotalAmount: 'number',
      reshopPersonTotalAmount: 'number',
      reshopReason: 'string',
      reshopReasonCode: 'string',
      reshopTotalAmount: 'number',
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.flightReshopApplyTicketList)) {
      $dara.Model.validateArray(this.flightReshopApplyTicketList);
    }
    if(Array.isArray(this.flightReshopSegmentList)) {
      $dara.Model.validateArray(this.flightReshopSegmentList);
    }
    if(Array.isArray(this.flightReshopUserFeeList)) {
      $dara.Model.validateArray(this.flightReshopUserFeeList);
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

