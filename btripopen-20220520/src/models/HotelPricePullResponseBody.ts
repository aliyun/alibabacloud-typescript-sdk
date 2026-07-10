// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesBtripHotelCancelPolicyBtripHotelCancelPolicyInfoDTOList extends $dara.Model {
  hour?: number;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      hour: 'hour',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hour: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesBtripHotelCancelPolicy extends $dara.Model {
  btripHotelCancelPolicyInfoDTOList?: HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesBtripHotelCancelPolicyBtripHotelCancelPolicyInfoDTOList[];
  cancelPolicyType?: number;
  static names(): { [key: string]: string } {
    return {
      btripHotelCancelPolicyInfoDTOList: 'btrip_hotel_cancel_policy_info_d_t_o_list',
      cancelPolicyType: 'cancel_policy_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripHotelCancelPolicyInfoDTOList: { 'type': 'array', 'itemType': HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesBtripHotelCancelPolicyBtripHotelCancelPolicyInfoDTOList },
      cancelPolicyType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.btripHotelCancelPolicyInfoDTOList)) {
      $dara.Model.validateArray(this.btripHotelCancelPolicyInfoDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesRateDailys extends $dara.Model {
  discountPrice?: number;
  lastDiscountsPrice?: number;
  price?: number;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'discount_price',
      lastDiscountsPrice: 'last_discounts_price',
      price: 'price',
      startDate: 'start_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      lastDiscountsPrice: 'number',
      price: 'number',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRates extends $dara.Model {
  breakfast?: string;
  breakfastCount?: number;
  btripHotelCancelPolicy?: HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesBtripHotelCancelPolicy;
  cancelPolicyDesc?: string;
  companyAassist?: string;
  currencyCode?: string;
  instantConfirm?: boolean;
  itemId?: string;
  maxAdvHours?: number;
  maxDays?: number;
  minAdvHours?: number;
  minDays?: number;
  nod?: number;
  nop?: number;
  paymentType?: number;
  price?: number;
  promotionInfo?: string;
  quota?: number;
  rateDailys?: HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesRateDailys[];
  rateId?: string;
  ratePlanName?: string;
  rpId?: string;
  sellerId?: string;
  supportSpecialInvoice?: boolean;
  static names(): { [key: string]: string } {
    return {
      breakfast: 'breakfast',
      breakfastCount: 'breakfast_count',
      btripHotelCancelPolicy: 'btrip_hotel_cancel_policy',
      cancelPolicyDesc: 'cancel_policy_desc',
      companyAassist: 'company_aassist',
      currencyCode: 'currency_code',
      instantConfirm: 'instant_confirm',
      itemId: 'item_id',
      maxAdvHours: 'max_adv_hours',
      maxDays: 'max_days',
      minAdvHours: 'min_adv_hours',
      minDays: 'min_days',
      nod: 'nod',
      nop: 'nop',
      paymentType: 'payment_type',
      price: 'price',
      promotionInfo: 'promotion_info',
      quota: 'quota',
      rateDailys: 'rate_dailys',
      rateId: 'rate_id',
      ratePlanName: 'rate_plan_name',
      rpId: 'rp_id',
      sellerId: 'seller_id',
      supportSpecialInvoice: 'support_special_invoice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakfast: 'string',
      breakfastCount: 'number',
      btripHotelCancelPolicy: HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesBtripHotelCancelPolicy,
      cancelPolicyDesc: 'string',
      companyAassist: 'string',
      currencyCode: 'string',
      instantConfirm: 'boolean',
      itemId: 'string',
      maxAdvHours: 'number',
      maxDays: 'number',
      minAdvHours: 'number',
      minDays: 'number',
      nod: 'number',
      nop: 'number',
      paymentType: 'number',
      price: 'number',
      promotionInfo: 'string',
      quota: 'number',
      rateDailys: { 'type': 'array', 'itemType': HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRatesRateDailys },
      rateId: 'string',
      ratePlanName: 'string',
      rpId: 'string',
      sellerId: 'string',
      supportSpecialInvoice: 'boolean',
    };
  }

  validate() {
    if(this.btripHotelCancelPolicy && typeof (this.btripHotelCancelPolicy as any).validate === 'function') {
      (this.btripHotelCancelPolicy as any).validate();
    }
    if(Array.isArray(this.rateDailys)) {
      $dara.Model.validateArray(this.rateDailys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelPricePullResponseBodyModuleHotelPriceInfosRooms extends $dara.Model {
  area?: string;
  bed?: string;
  bedTypeString?: string;
  facility?: string;
  floor?: string;
  maxOccupancy?: number;
  networkService?: string;
  pics?: string[];
  rates?: HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRates[];
  roomId?: string;
  roomName?: string;
  status?: number;
  windowType?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'area',
      bed: 'bed',
      bedTypeString: 'bed_type_string',
      facility: 'facility',
      floor: 'floor',
      maxOccupancy: 'max_occupancy',
      networkService: 'network_service',
      pics: 'pics',
      rates: 'rates',
      roomId: 'room_id',
      roomName: 'room_name',
      status: 'status',
      windowType: 'window_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      bed: 'string',
      bedTypeString: 'string',
      facility: 'string',
      floor: 'string',
      maxOccupancy: 'number',
      networkService: 'string',
      pics: { 'type': 'array', 'itemType': 'string' },
      rates: { 'type': 'array', 'itemType': HotelPricePullResponseBodyModuleHotelPriceInfosRoomsRates },
      roomId: 'string',
      roomName: 'string',
      status: 'number',
      windowType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pics)) {
      $dara.Model.validateArray(this.pics);
    }
    if(Array.isArray(this.rates)) {
      $dara.Model.validateArray(this.rates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelPricePullResponseBodyModuleHotelPriceInfos extends $dara.Model {
  address?: string;
  hotelId?: string;
  hotelName?: string;
  rooms?: HotelPricePullResponseBodyModuleHotelPriceInfosRooms[];
  searchId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      hotelId: 'hotel_id',
      hotelName: 'hotel_name',
      rooms: 'rooms',
      searchId: 'search_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      hotelId: 'string',
      hotelName: 'string',
      rooms: { 'type': 'array', 'itemType': HotelPricePullResponseBodyModuleHotelPriceInfosRooms },
      searchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rooms)) {
      $dara.Model.validateArray(this.rooms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelPricePullResponseBodyModule extends $dara.Model {
  hotelPriceInfos?: HotelPricePullResponseBodyModuleHotelPriceInfos[];
  static names(): { [key: string]: string } {
    return {
      hotelPriceInfos: 'hotel_price_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelPriceInfos: { 'type': 'array', 'itemType': HotelPricePullResponseBodyModuleHotelPriceInfos },
    };
  }

  validate() {
    if(Array.isArray(this.hotelPriceInfos)) {
      $dara.Model.validateArray(this.hotelPriceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelPricePullResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: HotelPricePullResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'request_id',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: HotelPricePullResponseBodyModule,
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

