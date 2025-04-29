// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderListQueryResponseBodyModuleCostCenter } from "./TrainOrderListQueryResponseBodyModuleCostCenter";
import { TrainOrderListQueryResponseBodyModuleInvoice } from "./TrainOrderListQueryResponseBodyModuleInvoice";
import { TrainOrderListQueryResponseBodyModulePriceInfoList } from "./TrainOrderListQueryResponseBodyModulePriceInfoList";
import { TrainOrderListQueryResponseBodyModuleUserAffiliateList } from "./TrainOrderListQueryResponseBodyModuleUserAffiliateList";


export class TrainOrderListQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 11367
   */
  applyId?: number;
  arrCity?: string;
  arrCityAdCode?: string;
  arrStation?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  arrTime?: string;
  btripTitle?: string;
  contactName?: string;
  corpId?: string;
  corpName?: string;
  costCenter?: TrainOrderListQueryResponseBodyModuleCostCenter;
  depCity?: string;
  depCityAdCode?: string;
  depStation?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  depTime?: string;
  departId?: string;
  departName?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  gmtModified?: string;
  /**
   * @example
   * 1478652
   */
  id?: number;
  invoice?: TrainOrderListQueryResponseBodyModuleInvoice;
  priceInfoList?: TrainOrderListQueryResponseBodyModulePriceInfoList[];
  /**
   * @example
   * PCXIDF
   */
  projectCode?: string;
  /**
   * @example
   * 12425
   */
  projectId?: number;
  projectTitle?: string;
  riderName?: string;
  /**
   * @example
   * 100
   */
  runTime?: string;
  seatType?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  thirdPartBusinessId?: string;
  /**
   * @example
   * CS-SKPFDS
   */
  thirdPartProjectId?: string;
  /**
   * @example
   * CSIODJUSN
   */
  thirdpartApplyId?: string;
  /**
   * @example
   * CS-IT89D
   */
  thirdpartItineraryId?: string;
  /**
   * @example
   * 1
   */
  ticketCount?: number;
  /**
   * @example
   * CS-663
   */
  ticketNo12306?: string;
  /**
   * @example
   * CS-663
   */
  trainNumber?: string;
  trainType?: string;
  userAffiliateList?: TrainOrderListQueryResponseBodyModuleUserAffiliateList[];
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      arrCity: 'arr_city',
      arrCityAdCode: 'arr_city_ad_code',
      arrStation: 'arr_station',
      arrTime: 'arr_time',
      btripTitle: 'btrip_title',
      contactName: 'contact_name',
      corpId: 'corp_id',
      corpName: 'corp_name',
      costCenter: 'cost_center',
      depCity: 'dep_city',
      depCityAdCode: 'dep_city_ad_code',
      depStation: 'dep_station',
      depTime: 'dep_time',
      departId: 'depart_id',
      departName: 'depart_name',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      id: 'id',
      invoice: 'invoice',
      priceInfoList: 'price_info_list',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      riderName: 'rider_name',
      runTime: 'run_time',
      seatType: 'seat_type',
      status: 'status',
      thirdPartBusinessId: 'thirdPart_business_id',
      thirdPartProjectId: 'third_part_project_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      ticketCount: 'ticket_count',
      ticketNo12306: 'ticket_no12306',
      trainNumber: 'train_number',
      trainType: 'train_type',
      userAffiliateList: 'user_affiliate_list',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      arrCity: 'string',
      arrCityAdCode: 'string',
      arrStation: 'string',
      arrTime: 'string',
      btripTitle: 'string',
      contactName: 'string',
      corpId: 'string',
      corpName: 'string',
      costCenter: TrainOrderListQueryResponseBodyModuleCostCenter,
      depCity: 'string',
      depCityAdCode: 'string',
      depStation: 'string',
      depTime: 'string',
      departId: 'string',
      departName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      invoice: TrainOrderListQueryResponseBodyModuleInvoice,
      priceInfoList: { 'type': 'array', 'itemType': TrainOrderListQueryResponseBodyModulePriceInfoList },
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      riderName: 'string',
      runTime: 'string',
      seatType: 'string',
      status: 'number',
      thirdPartBusinessId: 'string',
      thirdPartProjectId: 'string',
      thirdpartApplyId: 'string',
      thirdpartItineraryId: 'string',
      ticketCount: 'number',
      ticketNo12306: 'string',
      trainNumber: 'string',
      trainType: 'string',
      userAffiliateList: { 'type': 'array', 'itemType': TrainOrderListQueryResponseBodyModuleUserAffiliateList },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.costCenter && typeof (this.costCenter as any).validate === 'function') {
      (this.costCenter as any).validate();
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

