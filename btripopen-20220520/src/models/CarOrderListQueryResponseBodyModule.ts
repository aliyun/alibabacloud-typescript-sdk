// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CarOrderListQueryResponseBodyModulePriceInfoList } from "./CarOrderListQueryResponseBodyModulePriceInfoList";
import { CarOrderListQueryResponseBodyModuleUserAffiliateList } from "./CarOrderListQueryResponseBodyModuleUserAffiliateList";


export class CarOrderListQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 117429516
   */
  applyId?: number;
  /**
   * @example
   * 201802031353000525653
   */
  applyShowId?: string;
  btripTitle?: string;
  /**
   * @example
   * TRAVEL
   */
  businessCategory?: string;
  /**
   * @example
   * 2022-07-04T16:13Z
   */
  cancelTime?: string;
  carInfo?: string;
  /**
   * @example
   * 1
   */
  carLevel?: number;
  corpId?: string;
  corpName?: string;
  /**
   * @example
   * 11376
   */
  costCenterId?: number;
  costCenterName?: string;
  /**
   * @example
   * CT-134JHK
   */
  costCenterNumber?: string;
  deptId?: number;
  deptName?: string;
  /**
   * @example
   * 2022-07-04T16:13Z
   */
  driverConfirmTime?: string;
  /**
   * @example
   * 100
   */
  estimatePrice?: number;
  fromAddress?: string;
  fromCityAdCode?: string;
  fromCityName?: string;
  /**
   * @example
   * 2022-07-04T16:13Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-07-04T16:13Z
   */
  gmtModified?: string;
  /**
   * @example
   * 3615085
   */
  id?: number;
  /**
   * @example
   * 11876
   */
  invoiceId?: number;
  invoiceTitle?: string;
  /**
   * @example
   * true
   */
  isSpecial?: boolean;
  memo?: string;
  orderId?: string;
  orderStatus?: number;
  passengerName?: string;
  /**
   * @example
   * 2022-07-04T16:13Z
   */
  payTime?: string;
  priceInfoList?: CarOrderListQueryResponseBodyModulePriceInfoList[];
  /**
   * @example
   * P- JI87KK
   */
  projectCode?: string;
  /**
   * @example
   * 11546
   */
  projectId?: number;
  projectTitle?: string;
  /**
   * @example
   * 2
   */
  provider?: number;
  /**
   * @example
   * 2022-07-04T16:13Z
   */
  publishTime?: string;
  realFromAddress?: string;
  realFromCityAdCode?: string;
  realFromCityName?: string;
  realToAddress?: string;
  realToCityAdCode?: string;
  realToCityName?: string;
  /**
   * @example
   * 1
   */
  serviceType?: number;
  specialTypes?: string[];
  /**
   * @example
   * 2022-07-04T16:13Z
   */
  takenTime?: string;
  /**
   * @example
   * CS-OIPK34H
   */
  thirdpartApplyId?: string;
  thirdpartBusinessId?: string;
  /**
   * @example
   * CS-112JKDF
   */
  thirdpartItineraryId?: string;
  toAddress?: string;
  toCityAdCode?: string;
  toCityName?: string;
  /**
   * @example
   * 1.2
   */
  travelDistance?: number;
  userAffiliateList?: CarOrderListQueryResponseBodyModuleUserAffiliateList[];
  /**
   * @example
   * 1
   */
  userConfirm?: number;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      applyShowId: 'apply_show_id',
      btripTitle: 'btrip_title',
      businessCategory: 'business_category',
      cancelTime: 'cancel_time',
      carInfo: 'car_info',
      carLevel: 'car_level',
      corpId: 'corp_id',
      corpName: 'corp_name',
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      costCenterNumber: 'cost_center_number',
      deptId: 'dept_id',
      deptName: 'dept_name',
      driverConfirmTime: 'driver_confirm_time',
      estimatePrice: 'estimate_price',
      fromAddress: 'from_address',
      fromCityAdCode: 'from_city_ad_code',
      fromCityName: 'from_city_name',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      id: 'id',
      invoiceId: 'invoice_id',
      invoiceTitle: 'invoice_title',
      isSpecial: 'is_special',
      memo: 'memo',
      orderId: 'order_id',
      orderStatus: 'order_status',
      passengerName: 'passenger_name',
      payTime: 'pay_time',
      priceInfoList: 'price_info_list',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      provider: 'provider',
      publishTime: 'publish_time',
      realFromAddress: 'real_from_address',
      realFromCityAdCode: 'real_from_city_ad_code',
      realFromCityName: 'real_from_city_name',
      realToAddress: 'real_to_address',
      realToCityAdCode: 'real_to_city_ad_code',
      realToCityName: 'real_to_city_name',
      serviceType: 'service_type',
      specialTypes: 'special_types',
      takenTime: 'taken_time',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      toAddress: 'to_address',
      toCityAdCode: 'to_city_ad_code',
      toCityName: 'to_city_name',
      travelDistance: 'travel_distance',
      userAffiliateList: 'user_affiliate_list',
      userConfirm: 'user_confirm',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      applyShowId: 'string',
      btripTitle: 'string',
      businessCategory: 'string',
      cancelTime: 'string',
      carInfo: 'string',
      carLevel: 'number',
      corpId: 'string',
      corpName: 'string',
      costCenterId: 'number',
      costCenterName: 'string',
      costCenterNumber: 'string',
      deptId: 'number',
      deptName: 'string',
      driverConfirmTime: 'string',
      estimatePrice: 'number',
      fromAddress: 'string',
      fromCityAdCode: 'string',
      fromCityName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      invoiceId: 'number',
      invoiceTitle: 'string',
      isSpecial: 'boolean',
      memo: 'string',
      orderId: 'string',
      orderStatus: 'number',
      passengerName: 'string',
      payTime: 'string',
      priceInfoList: { 'type': 'array', 'itemType': CarOrderListQueryResponseBodyModulePriceInfoList },
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      provider: 'number',
      publishTime: 'string',
      realFromAddress: 'string',
      realFromCityAdCode: 'string',
      realFromCityName: 'string',
      realToAddress: 'string',
      realToCityAdCode: 'string',
      realToCityName: 'string',
      serviceType: 'number',
      specialTypes: { 'type': 'array', 'itemType': 'string' },
      takenTime: 'string',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
      thirdpartItineraryId: 'string',
      toAddress: 'string',
      toCityAdCode: 'string',
      toCityName: 'string',
      travelDistance: 'number',
      userAffiliateList: { 'type': 'array', 'itemType': CarOrderListQueryResponseBodyModuleUserAffiliateList },
      userConfirm: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.priceInfoList)) {
      $dara.Model.validateArray(this.priceInfoList);
    }
    if(Array.isArray(this.specialTypes)) {
      $dara.Model.validateArray(this.specialTypes);
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

