// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderQueryResponseBodyModuleHotelInfo extends $dara.Model {
  brandCode?: string;
  brandGroup?: string;
  brandName?: string;
  /**
   * @example
   * 1669344020
   */
  checkIn?: number;
  /**
   * @example
   * 1669344020
   */
  checkOut?: number;
  city?: string;
  cityAdCode?: string;
  countryCode?: string;
  countryName?: string;
  hotelAddress?: string;
  hotelName?: string;
  hotelPhone?: string;
  /**
   * @example
   * 11
   */
  hotelSupportVatInvoiceType?: number;
  /**
   * @example
   * 1
   */
  night?: number;
  /**
   * @example
   * 1
   */
  roomNum?: number;
  roomType?: string;
  static names(): { [key: string]: string } {
    return {
      brandCode: 'brand_code',
      brandGroup: 'brand_group',
      brandName: 'brand_name',
      checkIn: 'check_in',
      checkOut: 'check_out',
      city: 'city',
      cityAdCode: 'city_ad_code',
      countryCode: 'country_code',
      countryName: 'country_name',
      hotelAddress: 'hotel_address',
      hotelName: 'hotel_name',
      hotelPhone: 'hotel_phone',
      hotelSupportVatInvoiceType: 'hotel_support_vat_invoice_type',
      night: 'night',
      roomNum: 'room_num',
      roomType: 'room_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandCode: 'string',
      brandGroup: 'string',
      brandName: 'string',
      checkIn: 'number',
      checkOut: 'number',
      city: 'string',
      cityAdCode: 'string',
      countryCode: 'string',
      countryName: 'string',
      hotelAddress: 'string',
      hotelName: 'string',
      hotelPhone: 'string',
      hotelSupportVatInvoiceType: 'number',
      night: 'number',
      roomNum: 'number',
      roomType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderQueryResponseBodyModuleInvoiceInfo extends $dara.Model {
  /**
   * @example
   * 12345678
   */
  id?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderQueryResponseBodyModuleOrderBaseInfo extends $dara.Model {
  /**
   * @example
   * 12345678
   */
  applyId?: string;
  btripTitle?: string;
  category?: number;
  /**
   * @example
   * iscorpId
   */
  corpId?: string;
  corpName?: string;
  /**
   * @example
   * 12345678
   */
  departId?: string;
  departName?: string;
  exceedApplyNos?: string[];
  extendField?: string;
  /**
   * @example
   * 1669344020
   */
  gmtCreate?: number;
  /**
   * @example
   * 1669344020
   */
  gmtModified?: number;
  /**
   * @example
   * 1002145190081005400
   */
  id?: number;
  /**
   * @example
   * 12345678
   */
  itineraryId?: string;
  /**
   * @example
   * 1
   */
  orderStatus?: number;
  /**
   * @example
   * 1
   */
  orderType?: number;
  supplier?: string;
  /**
   * @example
   * 12345678
   */
  thirdpartApplyId?: string;
  thirdpartBusinessId?: string;
  /**
   * @example
   * 12345678
   */
  thirdpartDepartId?: string;
  /**
   * @example
   * 12345678
   */
  thirdpartItineraryId?: string;
  /**
   * @example
   * 12345678
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      btripTitle: 'btrip_title',
      category: 'category',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      exceedApplyNos: 'exceed_apply_nos',
      extendField: 'extend_field',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      id: 'id',
      itineraryId: 'itinerary_id',
      orderStatus: 'order_status',
      orderType: 'order_type',
      supplier: 'supplier',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartDepartId: 'thirdpart_depart_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      btripTitle: 'string',
      category: 'number',
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      exceedApplyNos: { 'type': 'array', 'itemType': 'string' },
      extendField: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      itineraryId: 'string',
      orderStatus: 'number',
      orderType: 'number',
      supplier: 'string',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
      thirdpartDepartId: 'string',
      thirdpartItineraryId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.exceedApplyNos)) {
      $dara.Model.validateArray(this.exceedApplyNos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderQueryResponseBodyModulePassengerList extends $dara.Model {
  applyId?: string;
  /**
   * @example
   * 12345678
   */
  costCenterId?: number;
  costCenterName?: string;
  /**
   * @example
   * 12345678
   */
  costCenterNumber?: string;
  itineraryId?: string;
  occupantType?: number;
  projectCode?: string;
  /**
   * @example
   * 12345678
   */
  projectId?: number;
  projectTitle?: string;
  thirdpartApplyId?: string;
  /**
   * @example
   * 12345678
   */
  thirdpartCostCenterId?: string;
  /**
   * @example
   * 12345678
   */
  thirdpartProjectId?: string;
  /**
   * @example
   * 12345678
   */
  userId?: string;
  userName?: string;
  /**
   * @example
   * 0
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      costCenterNumber: 'cost_center_number',
      itineraryId: 'itinerary_id',
      occupantType: 'occupant_type',
      projectCode: 'project_code',
      projectId: 'project_id',
      projectTitle: 'project_title',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      thirdpartProjectId: 'thirdpart_project_id',
      userId: 'user_id',
      userName: 'user_name',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      costCenterId: 'number',
      costCenterName: 'string',
      costCenterNumber: 'string',
      itineraryId: 'string',
      occupantType: 'number',
      projectCode: 'string',
      projectId: 'number',
      projectTitle: 'string',
      thirdpartApplyId: 'string',
      thirdpartCostCenterId: 'string',
      thirdpartProjectId: 'string',
      userId: 'string',
      userName: 'string',
      userType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderQueryResponseBodyModulePriceInfoList extends $dara.Model {
  /**
   * @example
   * 1
   */
  categoryCode?: number;
  /**
   * @example
   * 1669344020
   */
  gmtCreate?: number;
  /**
   * @example
   * 1
   */
  payType?: number;
  /**
   * @example
   * 200
   */
  price?: number;
  /**
   * @example
   * 12345678910987654321
   */
  tradeId?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'category_code',
      gmtCreate: 'gmt_create',
      payType: 'pay_type',
      price: 'price',
      tradeId: 'trade_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      gmtCreate: 'number',
      payType: 'number',
      price: 'number',
      tradeId: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderQueryResponseBodyModule extends $dara.Model {
  hotelInfo?: HotelOrderQueryResponseBodyModuleHotelInfo;
  invoiceInfo?: HotelOrderQueryResponseBodyModuleInvoiceInfo;
  orderBaseInfo?: HotelOrderQueryResponseBodyModuleOrderBaseInfo;
  passengerList?: HotelOrderQueryResponseBodyModulePassengerList[];
  priceInfoList?: HotelOrderQueryResponseBodyModulePriceInfoList[];
  static names(): { [key: string]: string } {
    return {
      hotelInfo: 'hotel_info',
      invoiceInfo: 'invoice_info',
      orderBaseInfo: 'order_base_info',
      passengerList: 'passenger_list',
      priceInfoList: 'price_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelInfo: HotelOrderQueryResponseBodyModuleHotelInfo,
      invoiceInfo: HotelOrderQueryResponseBodyModuleInvoiceInfo,
      orderBaseInfo: HotelOrderQueryResponseBodyModuleOrderBaseInfo,
      passengerList: { 'type': 'array', 'itemType': HotelOrderQueryResponseBodyModulePassengerList },
      priceInfoList: { 'type': 'array', 'itemType': HotelOrderQueryResponseBodyModulePriceInfoList },
    };
  }

  validate() {
    if(this.hotelInfo && typeof (this.hotelInfo as any).validate === 'function') {
      (this.hotelInfo as any).validate();
    }
    if(this.invoiceInfo && typeof (this.invoiceInfo as any).validate === 'function') {
      (this.invoiceInfo as any).validate();
    }
    if(this.orderBaseInfo && typeof (this.orderBaseInfo as any).validate === 'function') {
      (this.orderBaseInfo as any).validate();
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    if(Array.isArray(this.priceInfoList)) {
      $dara.Model.validateArray(this.priceInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderQueryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * module。
   */
  module?: HotelOrderQueryResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * A5009956-1077-52FB-B520-EA8C7E91D722
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 21041ce316577904808056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: HotelOrderQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

