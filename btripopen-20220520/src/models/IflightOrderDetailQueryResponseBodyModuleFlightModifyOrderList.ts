// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListFlightModifySegmentList } from "./IflightOrderDetailQueryResponseBodyModuleFlightModifyOrderListFlightModifySegmentList";
import { IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketList } from "./IflightOrderDetailQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketList";
import { IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListModifyFee } from "./IflightOrderDetailQueryResponseBodyModuleFlightModifyOrderListModifyFee";


export class IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderList extends $dara.Model {
  corpPayPrice?: number;
  flightModifySegmentList?: IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListFlightModifySegmentList[];
  flightOrderModifyTicketList?: IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketList[];
  /**
   * @example
   * 1005200138736000
   */
  modifyApplyId?: number;
  modifyFee?: IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListModifyFee[];
  /**
   * @example
   * 1
   */
  modifyOrderStatus?: number;
  modifyTotalFee?: number;
  passengerList?: string[];
  personPayPrice?: number;
  /**
   * @example
   * 1005200138736028
   */
  relateModifyApplyId?: number;
  serviceFee?: number;
  /**
   * @example
   * 2024-10-26 11:25:00
   */
  submitModifyTime?: string;
  voluntary?: boolean;
  static names(): { [key: string]: string } {
    return {
      corpPayPrice: 'corp_pay_price',
      flightModifySegmentList: 'flight_modify_segment_list',
      flightOrderModifyTicketList: 'flight_order_modify_ticket_list',
      modifyApplyId: 'modify_apply_id',
      modifyFee: 'modify_fee',
      modifyOrderStatus: 'modify_order_status',
      modifyTotalFee: 'modify_total_fee',
      passengerList: 'passenger_list',
      personPayPrice: 'person_pay_price',
      relateModifyApplyId: 'relate_modify_apply_id',
      serviceFee: 'service_fee',
      submitModifyTime: 'submit_modify_time',
      voluntary: 'voluntary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpPayPrice: 'number',
      flightModifySegmentList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListFlightModifySegmentList },
      flightOrderModifyTicketList: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketList },
      modifyApplyId: 'number',
      modifyFee: { 'type': 'array', 'itemType': IFlightOrderDetailQueryResponseBodyModuleFlightModifyOrderListModifyFee },
      modifyOrderStatus: 'number',
      modifyTotalFee: 'number',
      passengerList: { 'type': 'array', 'itemType': 'string' },
      personPayPrice: 'number',
      relateModifyApplyId: 'number',
      serviceFee: 'number',
      submitModifyTime: 'string',
      voluntary: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.flightModifySegmentList)) {
      $dara.Model.validateArray(this.flightModifySegmentList);
    }
    if(Array.isArray(this.flightOrderModifyTicketList)) {
      $dara.Model.validateArray(this.flightOrderModifyTicketList);
    }
    if(Array.isArray(this.modifyFee)) {
      $dara.Model.validateArray(this.modifyFee);
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

