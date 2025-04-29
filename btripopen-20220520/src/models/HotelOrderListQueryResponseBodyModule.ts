// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderListQueryResponseBodyModuleCostCenter } from "./HotelOrderListQueryResponseBodyModuleCostCenter";
import { HotelOrderListQueryResponseBodyModuleInvoice } from "./HotelOrderListQueryResponseBodyModuleInvoice";
import { HotelOrderListQueryResponseBodyModulePriceInfoList } from "./HotelOrderListQueryResponseBodyModulePriceInfoList";
import { HotelOrderListQueryResponseBodyModuleUserAffiliateList } from "./HotelOrderListQueryResponseBodyModuleUserAffiliateList";


export class HotelOrderListQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 22678
   */
  applyId?: number;
  btripTitle?: string;
  category?: number;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  checkIn?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  checkOut?: string;
  city?: string;
  cityAdCode?: string;
  contactName?: string;
  corpId?: string;
  corpName?: string;
  costCenter?: HotelOrderListQueryResponseBodyModuleCostCenter;
  countryCode?: string;
  countryName?: string;
  departId?: string;
  departName?: string;
  extendField?: string;
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
  guest?: string;
  hotelName?: string;
  /**
   * @example
   * 11
   */
  hotelSupportVatInvoiceType?: number;
  /**
   * @example
   * 13764
   */
  id?: number;
  invoice?: HotelOrderListQueryResponseBodyModuleInvoice;
  /**
   * @example
   * 4
   */
  night?: number;
  /**
   * @example
   * 1
   */
  orderStatus?: number;
  orderStatusDesc?: string;
  /**
   * @example
   * 1
   */
  orderType?: number;
  orderTypeDesc?: string;
  priceInfoList?: HotelOrderListQueryResponseBodyModulePriceInfoList[];
  /**
   * @example
   * CS-PROJECTCODE
   */
  projectCode?: string;
  /**
   * @example
   * 13631
   */
  projectId?: number;
  projectTitle?: string;
  /**
   * @example
   * 4
   */
  roomNum?: number;
  roomType?: string;
  supplier?: string;
  /**
   * @example
   * CS-THIRDAPPLY
   */
  thirdpartApplyId?: string;
  thirdpartBusinessId?: string;
  /**
   * @example
   * CS-ITINEARY
   */
  thirdpartItineraryId?: string;
  /**
   * @example
   * CS-THIRDPROJECT
   */
  thirdpartProjectId?: string;
  userAffiliateList?: HotelOrderListQueryResponseBodyModuleUserAffiliateList[];
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      btripTitle: 'btrip_title',
      category: 'category',
      checkIn: 'check_in',
      checkOut: 'check_out',
      city: 'city',
      cityAdCode: 'city_ad_code',
      contactName: 'contact_name',
      corpId: 'corp_id',
      corpName: 'corp_name',
      costCenter: 'cost_center',
      countryCode: 'country_code',
      countryName: 'country_name',
      departId: 'depart_id',
      departName: 'depart_name',
      extendField: 'extend_field',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      guest: 'guest',
      hotelName: 'hotel_name',
      hotelSupportVatInvoiceType: 'hotel_support_vat_invoice_type',
      id: 'id',
      invoice: 'invoice',
      night: 'night',
      orderStatus: 'order_status',
      orderStatusDesc: 'order_status_desc',
      orderType: 'order_type',
      orderTypeDesc: 'order_type_desc',
      priceInfoList: 'price_info_list',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      roomNum: 'room_num',
      roomType: 'room_type',
      supplier: 'supplier',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      thirdpartProjectId: 'thirdpart_project_id',
      userAffiliateList: 'user_affiliate_list',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      btripTitle: 'string',
      category: 'number',
      checkIn: 'string',
      checkOut: 'string',
      city: 'string',
      cityAdCode: 'string',
      contactName: 'string',
      corpId: 'string',
      corpName: 'string',
      costCenter: HotelOrderListQueryResponseBodyModuleCostCenter,
      countryCode: 'string',
      countryName: 'string',
      departId: 'string',
      departName: 'string',
      extendField: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      guest: 'string',
      hotelName: 'string',
      hotelSupportVatInvoiceType: 'number',
      id: 'number',
      invoice: HotelOrderListQueryResponseBodyModuleInvoice,
      night: 'number',
      orderStatus: 'number',
      orderStatusDesc: 'string',
      orderType: 'number',
      orderTypeDesc: 'string',
      priceInfoList: { 'type': 'array', 'itemType': HotelOrderListQueryResponseBodyModulePriceInfoList },
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      roomNum: 'number',
      roomType: 'string',
      supplier: 'string',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
      thirdpartItineraryId: 'string',
      thirdpartProjectId: 'string',
      userAffiliateList: { 'type': 'array', 'itemType': HotelOrderListQueryResponseBodyModuleUserAffiliateList },
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

