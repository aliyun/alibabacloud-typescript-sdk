// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderListQueryResponseBodyModuleCostCenter } from "./FlightOrderListQueryResponseBodyModuleCostCenter";
import { FlightOrderListQueryResponseBodyModuleInsureInfoList } from "./FlightOrderListQueryResponseBodyModuleInsureInfoList";
import { FlightOrderListQueryResponseBodyModuleInvoice } from "./FlightOrderListQueryResponseBodyModuleInvoice";
import { FlightOrderListQueryResponseBodyModulePriceInfoList } from "./FlightOrderListQueryResponseBodyModulePriceInfoList";
import { FlightOrderListQueryResponseBodyModuleUserAffiliateList } from "./FlightOrderListQueryResponseBodyModuleUserAffiliateList";


export class FlightOrderListQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 11774
   */
  applyId?: number;
  arrAirport?: string;
  arrCity?: string;
  arrCityAdCode?: string;
  btripTitle?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  contactName?: string;
  corpId?: string;
  corpName?: string;
  costCenter?: FlightOrderListQueryResponseBodyModuleCostCenter;
  depAirport?: string;
  depCity?: string;
  depCityAdCode?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  depDate?: string;
  departId?: string;
  departName?: string;
  /**
   * @example
   * 30.12%
   */
  discount?: string;
  /**
   * @example
   * MU7854
   */
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
  gmtModified?: string;
  /**
   * @example
   * 200042
   */
  id?: number;
  insureInfoList?: FlightOrderListQueryResponseBodyModuleInsureInfoList[];
  invoice?: FlightOrderListQueryResponseBodyModuleInvoice;
  /**
   * @example
   * 4
   */
  passengerCount?: number;
  passengerName?: string;
  priceInfoList?: FlightOrderListQueryResponseBodyModulePriceInfoList[];
  /**
   * @example
   * CS-PROJECT
   */
  projectCode?: string;
  /**
   * @example
   * CS-PROJECT
   */
  projectId?: number;
  projectTitle?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  retDate?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * CS-PROJECT
   */
  thirdPartProjectId?: string;
  /**
   * @example
   * CS-UMN98989
   */
  thirdpartApplyId?: string;
  thirdpartBusinessId?: string;
  /**
   * @example
   * cs9897766
   */
  thirdpartItineraryId?: string;
  /**
   * @example
   * 0
   */
  tripType?: number;
  userAffiliateList?: FlightOrderListQueryResponseBodyModuleUserAffiliateList[];
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      arrAirport: 'arr_airport',
      arrCity: 'arr_city',
      arrCityAdCode: 'arr_city_ad_code',
      btripTitle: 'btrip_title',
      cabinClass: 'cabin_class',
      contactName: 'contact_name',
      corpId: 'corp_id',
      corpName: 'corp_name',
      costCenter: 'cost_center',
      depAirport: 'dep_airport',
      depCity: 'dep_city',
      depCityAdCode: 'dep_city_ad_code',
      depDate: 'dep_date',
      departId: 'depart_id',
      departName: 'depart_name',
      discount: 'discount',
      flightNo: 'flight_no',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      id: 'id',
      insureInfoList: 'insure_info_list',
      invoice: 'invoice',
      passengerCount: 'passenger_count',
      passengerName: 'passenger_name',
      priceInfoList: 'price_info_list',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      retDate: 'ret_date',
      status: 'status',
      thirdPartProjectId: 'third_part_project_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      tripType: 'trip_type',
      userAffiliateList: 'user_affiliate_list',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      arrAirport: 'string',
      arrCity: 'string',
      arrCityAdCode: 'string',
      btripTitle: 'string',
      cabinClass: 'string',
      contactName: 'string',
      corpId: 'string',
      corpName: 'string',
      costCenter: FlightOrderListQueryResponseBodyModuleCostCenter,
      depAirport: 'string',
      depCity: 'string',
      depCityAdCode: 'string',
      depDate: 'string',
      departId: 'string',
      departName: 'string',
      discount: 'string',
      flightNo: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      insureInfoList: { 'type': 'array', 'itemType': FlightOrderListQueryResponseBodyModuleInsureInfoList },
      invoice: FlightOrderListQueryResponseBodyModuleInvoice,
      passengerCount: 'number',
      passengerName: 'string',
      priceInfoList: { 'type': 'array', 'itemType': FlightOrderListQueryResponseBodyModulePriceInfoList },
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      retDate: 'string',
      status: 'number',
      thirdPartProjectId: 'string',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
      thirdpartItineraryId: 'string',
      tripType: 'number',
      userAffiliateList: { 'type': 'array', 'itemType': FlightOrderListQueryResponseBodyModuleUserAffiliateList },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.costCenter && typeof (this.costCenter as any).validate === 'function') {
      (this.costCenter as any).validate();
    }
    if(Array.isArray(this.insureInfoList)) {
      $dara.Model.validateArray(this.insureInfoList);
    }
    if(this.invoice && typeof (this.invoice as any).validate === 'function') {
      (this.invoice as any).validate();
    }
    if(Array.isArray(this.priceInfoList)) {
      $dara.Model.validateArray(this.priceInfoList);
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

