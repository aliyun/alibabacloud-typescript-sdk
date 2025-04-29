// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightModifySegmentList } from "./IflightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightModifySegmentList";
import { IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketList } from "./IflightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketList";
import { IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListPassengerFee } from "./IflightOrderListQueryResponseBodyModuleFlightModifyOrderListPassengerFee";


export class IFlightOrderListQueryResponseBodyModuleFlightModifyOrderList extends $dara.Model {
  corpPayPrice?: number;
  flightModifySegmentList?: IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightModifySegmentList[];
  flightOrderModifyTicketList?: IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketList[];
  /**
   * @example
   * 1005200138736000
   */
  modifyApplyId?: number;
  passengerFee?: IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListPassengerFee[];
  passengerList?: string[];
  personPayPrice?: number;
  /**
   * @example
   * 1005200138736028
   */
  relateModifyApplyId?: number;
  serviceFee?: number;
  totalFee?: number;
  static names(): { [key: string]: string } {
    return {
      corpPayPrice: 'corp_pay_price',
      flightModifySegmentList: 'flight_modify_segment_list',
      flightOrderModifyTicketList: 'flight_order_modify_ticket_list',
      modifyApplyId: 'modify_apply_id',
      passengerFee: 'passenger_fee',
      passengerList: 'passenger_list',
      personPayPrice: 'person_pay_price',
      relateModifyApplyId: 'relate_modify_apply_id',
      serviceFee: 'service_fee',
      totalFee: 'total_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpPayPrice: 'number',
      flightModifySegmentList: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightModifySegmentList },
      flightOrderModifyTicketList: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListFlightOrderModifyTicketList },
      modifyApplyId: 'number',
      passengerFee: { 'type': 'array', 'itemType': IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListPassengerFee },
      passengerList: { 'type': 'array', 'itemType': 'string' },
      personPayPrice: 'number',
      relateModifyApplyId: 'number',
      serviceFee: 'number',
      totalFee: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flightModifySegmentList)) {
      $dara.Model.validateArray(this.flightModifySegmentList);
    }
    if(Array.isArray(this.flightOrderModifyTicketList)) {
      $dara.Model.validateArray(this.flightOrderModifyTicketList);
    }
    if(Array.isArray(this.passengerFee)) {
      $dara.Model.validateArray(this.passengerFee);
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

