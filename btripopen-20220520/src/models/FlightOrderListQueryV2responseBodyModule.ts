// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderListQueryV2ResponseBodyModuleApprove } from "./FlightOrderListQueryV2responseBodyModuleApprove";
import { FlightOrderListQueryV2ResponseBodyModuleFlightOrderTicketList } from "./FlightOrderListQueryV2responseBodyModuleFlightOrderTicketList";
import { FlightOrderListQueryV2ResponseBodyModuleFlightOrderUserFeeList } from "./FlightOrderListQueryV2responseBodyModuleFlightOrderUserFeeList";
import { FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyList } from "./FlightOrderListQueryV2responseBodyModuleFlightRefundApplyList";
import { FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyList } from "./FlightOrderListQueryV2responseBodyModuleFlightReshopApplyList";
import { FlightOrderListQueryV2ResponseBodyModuleFlightSegmentList } from "./FlightOrderListQueryV2responseBodyModuleFlightSegmentList";
import { FlightOrderListQueryV2ResponseBodyModuleInsureInfoList } from "./FlightOrderListQueryV2responseBodyModuleInsureInfoList";
import { FlightOrderListQueryV2ResponseBodyModulePriceInfoList } from "./FlightOrderListQueryV2responseBodyModulePriceInfoList";
import { FlightOrderListQueryV2ResponseBodyModuleUserAffiliateList } from "./FlightOrderListQueryV2responseBodyModuleUserAffiliateList";


export class FlightOrderListQueryV2ResponseBodyModule extends $dara.Model {
  approve?: FlightOrderListQueryV2ResponseBodyModuleApprove;
  corpId?: string;
  corpName?: string;
  departId?: string;
  departName?: string;
  flightOrderTicketList?: FlightOrderListQueryV2ResponseBodyModuleFlightOrderTicketList[];
  flightOrderUserFeeList?: FlightOrderListQueryV2ResponseBodyModuleFlightOrderUserFeeList[];
  flightRefundApplyList?: FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyList[];
  flightReshopApplyList?: FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyList[];
  flightSegmentList?: FlightOrderListQueryV2ResponseBodyModuleFlightSegmentList[];
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  gmtCreate?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  gmtModified?: string;
  /**
   * @example
   * 200042
   */
  id?: string;
  insureInfoList?: FlightOrderListQueryV2ResponseBodyModuleInsureInfoList[];
  /**
   * @example
   * true
   */
  mixPay?: boolean;
  orderReserveAmount?: number;
  /**
   * @example
   * 1
   */
  passengerCount?: number;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  payTime?: string;
  priceInfoList?: FlightOrderListQueryV2ResponseBodyModulePriceInfoList[];
  /**
   * @example
   * 0
   */
  status?: number;
  supplier?: string;
  /**
   * @example
   * cs9897766
   */
  thirdpartItineraryId?: string[];
  ticketCorpReserveAmount?: number;
  ticketPersonReserveAmount?: number;
  /**
   * @example
   * 1
   */
  tripMode?: number;
  /**
   * @example
   * 0
   */
  tripType?: number;
  userAffiliateList?: FlightOrderListQueryV2ResponseBodyModuleUserAffiliateList[];
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      approve: 'approve',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      flightOrderTicketList: 'flight_order_ticket_list',
      flightOrderUserFeeList: 'flight_order_user_fee_list',
      flightRefundApplyList: 'flight_refund_apply_list',
      flightReshopApplyList: 'flight_reshop_apply_list',
      flightSegmentList: 'flight_segment_list',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      id: 'id',
      insureInfoList: 'insure_info_list',
      mixPay: 'mix_pay',
      orderReserveAmount: 'order_reserve_amount',
      passengerCount: 'passenger_count',
      payTime: 'pay_time',
      priceInfoList: 'price_info_list',
      status: 'status',
      supplier: 'supplier',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      ticketCorpReserveAmount: 'ticket_corp_reserve_amount',
      ticketPersonReserveAmount: 'ticket_person_reserve_amount',
      tripMode: 'trip_mode',
      tripType: 'trip_type',
      userAffiliateList: 'user_affiliate_list',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approve: FlightOrderListQueryV2ResponseBodyModuleApprove,
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      flightOrderTicketList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightOrderTicketList },
      flightOrderUserFeeList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightOrderUserFeeList },
      flightRefundApplyList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyList },
      flightReshopApplyList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyList },
      flightSegmentList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightSegmentList },
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      insureInfoList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleInsureInfoList },
      mixPay: 'boolean',
      orderReserveAmount: 'number',
      passengerCount: 'number',
      payTime: 'string',
      priceInfoList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModulePriceInfoList },
      status: 'number',
      supplier: 'string',
      thirdpartItineraryId: { 'type': 'array', 'itemType': 'string' },
      ticketCorpReserveAmount: 'number',
      ticketPersonReserveAmount: 'number',
      tripMode: 'number',
      tripType: 'number',
      userAffiliateList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleUserAffiliateList },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.approve && typeof (this.approve as any).validate === 'function') {
      (this.approve as any).validate();
    }
    if(Array.isArray(this.flightOrderTicketList)) {
      $dara.Model.validateArray(this.flightOrderTicketList);
    }
    if(Array.isArray(this.flightOrderUserFeeList)) {
      $dara.Model.validateArray(this.flightOrderUserFeeList);
    }
    if(Array.isArray(this.flightRefundApplyList)) {
      $dara.Model.validateArray(this.flightRefundApplyList);
    }
    if(Array.isArray(this.flightReshopApplyList)) {
      $dara.Model.validateArray(this.flightReshopApplyList);
    }
    if(Array.isArray(this.flightSegmentList)) {
      $dara.Model.validateArray(this.flightSegmentList);
    }
    if(Array.isArray(this.insureInfoList)) {
      $dara.Model.validateArray(this.insureInfoList);
    }
    if(Array.isArray(this.priceInfoList)) {
      $dara.Model.validateArray(this.priceInfoList);
    }
    if(Array.isArray(this.thirdpartItineraryId)) {
      $dara.Model.validateArray(this.thirdpartItineraryId);
    }
    if(Array.isArray(this.userAffiliateList)) {
      $dara.Model.validateArray(this.userAffiliateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

