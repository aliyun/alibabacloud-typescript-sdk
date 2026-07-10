// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderListQueryResponseBodyModuleCostCenter extends $dara.Model {
  corpId?: string;
  id?: number;
  name?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corp_id',
      id: 'id',
      name: 'name',
      number: 'number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      id: 'number',
      name: 'string',
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderListQueryResponseBodyModuleInvoice extends $dara.Model {
  id?: number;
  invoiceType?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      invoiceType: 'invoice_type',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      invoiceType: 'number',
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

export class HotelOrderListQueryResponseBodyModulePriceInfoList extends $dara.Model {
  category?: string;
  categoryCode?: number;
  categoryType?: number;
  gmtCreate?: string;
  passengerName?: string;
  payType?: number;
  price?: number;
  tradeId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      categoryCode: 'category_code',
      categoryType: 'category_type',
      gmtCreate: 'gmt_create',
      passengerName: 'passenger_name',
      payType: 'pay_type',
      price: 'price',
      tradeId: 'trade_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      categoryCode: 'number',
      categoryType: 'number',
      gmtCreate: 'string',
      passengerName: 'string',
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

export class HotelOrderListQueryResponseBodyModuleUserAffiliateList extends $dara.Model {
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderListQueryResponseBodyModule extends $dara.Model {
  applyId?: number;
  btripTitle?: string;
  category?: number;
  checkIn?: string;
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
  gmtCreate?: string;
  gmtModified?: string;
  guest?: string;
  hotelName?: string;
  hotelSupportVatInvoiceType?: number;
  id?: number;
  invoice?: HotelOrderListQueryResponseBodyModuleInvoice;
  night?: number;
  orderStatus?: number;
  orderStatusDesc?: string;
  orderType?: number;
  orderTypeDesc?: string;
  priceInfoList?: HotelOrderListQueryResponseBodyModulePriceInfoList[];
  projectCode?: string;
  projectId?: number;
  projectTitle?: string;
  roomNum?: number;
  roomType?: string;
  supplier?: string;
  thirdpartApplyId?: string;
  thirdpartBusinessId?: string;
  thirdpartItineraryId?: string;
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

export class HotelOrderListQueryResponseBodyPageInfo extends $dara.Model {
  page?: number;
  pageSize?: number;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      pageSize: 'page_size',
      totalNumber: 'total_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      totalNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderListQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: HotelOrderListQueryResponseBodyModule[];
  pageInfo?: HotelOrderListQueryResponseBodyPageInfo;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      pageInfo: 'page_info',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': HotelOrderListQueryResponseBodyModule },
      pageInfo: HotelOrderListQueryResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

