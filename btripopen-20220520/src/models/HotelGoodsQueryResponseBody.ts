// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelGoodsQueryResponseBodyModuleRoomsRatesBtripCancelRuleBtripHotelCancelPolicyDTOBtripHotelCancelPolicyInfoDTOList extends $dara.Model {
  /**
   * @example
   * 1
   */
  hour?: number;
  /**
   * @example
   * 20
   */
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

export class HotelGoodsQueryResponseBodyModuleRoomsRatesBtripCancelRuleBtripHotelCancelPolicyDTO extends $dara.Model {
  btripHotelCancelPolicyInfoDTOList?: HotelGoodsQueryResponseBodyModuleRoomsRatesBtripCancelRuleBtripHotelCancelPolicyDTOBtripHotelCancelPolicyInfoDTOList[];
  /**
   * @example
   * 1
   */
  cancelPolicyType?: number;
  static names(): { [key: string]: string } {
    return {
      btripHotelCancelPolicyInfoDTOList: 'btrip_hotel_cancel_policy_info_d_t_o_list',
      cancelPolicyType: 'cancel_policy_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripHotelCancelPolicyInfoDTOList: { 'type': 'array', 'itemType': HotelGoodsQueryResponseBodyModuleRoomsRatesBtripCancelRuleBtripHotelCancelPolicyDTOBtripHotelCancelPolicyInfoDTOList },
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

export class HotelGoodsQueryResponseBodyModuleRoomsRatesBtripCancelRule extends $dara.Model {
  btripHotelCancelPolicyDTO?: HotelGoodsQueryResponseBodyModuleRoomsRatesBtripCancelRuleBtripHotelCancelPolicyDTO;
  cancelPolicyTitle?: string;
  /**
   * @example
   * 2023-02-27
   */
  checkIn?: string;
  static names(): { [key: string]: string } {
    return {
      btripHotelCancelPolicyDTO: 'btrip_hotel_cancel_policy_d_t_o',
      cancelPolicyTitle: 'cancel_policy_title',
      checkIn: 'check_in',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripHotelCancelPolicyDTO: HotelGoodsQueryResponseBodyModuleRoomsRatesBtripCancelRuleBtripHotelCancelPolicyDTO,
      cancelPolicyTitle: 'string',
      checkIn: 'string',
    };
  }

  validate() {
    if(this.btripHotelCancelPolicyDTO && typeof (this.btripHotelCancelPolicyDTO as any).validate === 'function') {
      (this.btripHotelCancelPolicyDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelGoodsQueryResponseBodyModuleRoomsRatesBtripHotelCancelDesc extends $dara.Model {
  desc?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
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

export class HotelGoodsQueryResponseBodyModuleRoomsRatesDiscountDescDiscountDetail extends $dara.Model {
  labelName?: string[];
  moneyDesc?: string;
  static names(): { [key: string]: string } {
    return {
      labelName: 'label_name',
      moneyDesc: 'money_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelName: { 'type': 'array', 'itemType': 'string' },
      moneyDesc: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labelName)) {
      $dara.Model.validateArray(this.labelName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelGoodsQueryResponseBodyModuleRoomsRatesDiscountDesc extends $dara.Model {
  cashReduceTotal?: string;
  dinamicLabel?: string;
  discountDetail?: HotelGoodsQueryResponseBodyModuleRoomsRatesDiscountDescDiscountDetail[];
  subTitle?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cashReduceTotal: 'cash_reduce_total',
      dinamicLabel: 'dinamic_label',
      discountDetail: 'discount_detail',
      subTitle: 'sub_title',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cashReduceTotal: 'string',
      dinamicLabel: 'string',
      discountDetail: { 'type': 'array', 'itemType': HotelGoodsQueryResponseBodyModuleRoomsRatesDiscountDescDiscountDetail },
      subTitle: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.discountDetail)) {
      $dara.Model.validateArray(this.discountDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelGoodsQueryResponseBodyModuleRoomsRatesHotelDetailRatePriceDTO extends $dara.Model {
  /**
   * @example
   * 100
   */
  beforeDiscountPrice?: number;
  /**
   * @example
   * demo
   */
  breakfast?: string;
  /**
   * @example
   * 1000
   */
  discountPrice?: number;
  /**
   * @example
   * 100
   */
  lastDiscountsPrice?: number;
  lastDiscountsRoundingPrice?: number;
  /**
   * @example
   * 1
   */
  lastNum?: number;
  /**
   * @example
   * 2023-03-25
   */
  rateStartTime?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      beforeDiscountPrice: 'before_discount_price',
      breakfast: 'breakfast',
      discountPrice: 'discount_price',
      lastDiscountsPrice: 'last_discounts_price',
      lastDiscountsRoundingPrice: 'last_discounts_rounding_price',
      lastNum: 'last_num',
      rateStartTime: 'rate_start_time',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beforeDiscountPrice: 'number',
      breakfast: 'string',
      discountPrice: 'number',
      lastDiscountsPrice: 'number',
      lastDiscountsRoundingPrice: 'number',
      lastNum: 'number',
      rateStartTime: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelGoodsQueryResponseBodyModuleRoomsRates extends $dara.Model {
  bedDesc?: string;
  bedType?: string;
  breakfast?: string;
  btripCancelRule?: HotelGoodsQueryResponseBodyModuleRoomsRatesBtripCancelRule;
  btripHotelCancelDesc?: HotelGoodsQueryResponseBodyModuleRoomsRatesBtripHotelCancelDesc[];
  /**
   * @example
   * true
   */
  canSmoking?: boolean;
  cancelPolicyDesc?: string;
  /**
   * @example
   * 1
   */
  cancelPolicyType?: number;
  /**
   * @example
   * 0
   */
  companyAassist?: string;
  /**
   * @example
   * 0
   */
  confirmType?: number;
  /**
   * @example
   * cny
   */
  currencyCode?: string;
  /**
   * @example
   * demo
   */
  dailyPriceFormatYuan?: string;
  /**
   * @example
   * 400
   */
  dailyPriceView?: string;
  discountDesc?: HotelGoodsQueryResponseBodyModuleRoomsRatesDiscountDesc;
  /**
   * @example
   * demo
   */
  endTimeDaily?: string;
  hotelDetailRatePriceDTO?: HotelGoodsQueryResponseBodyModuleRoomsRatesHotelDetailRatePriceDTO[];
  /**
   * @example
   * true
   */
  instantConfirm?: boolean;
  inventoryDesc?: string;
  /**
   * @example
   * 100
   */
  inventoryPrice?: string;
  /**
   * @example
   * true
   */
  isBusinessPay4Goods?: boolean;
  isGuarantee?: number;
  /**
   * @example
   * true
   */
  isNeedEmail?: boolean;
  /**
   * @example
   * 612673015638
   */
  itemId?: number;
  /**
   * @example
   * demo
   */
  lastCancelTime?: string;
  /**
   * @example
   * 2
   */
  maxOccupancy?: number;
  /**
   * @example
   * 2
   */
  minAdvHours?: number;
  /**
   * @example
   * 3
   */
  minDays?: number;
  /**
   * @example
   * 1
   */
  nod?: number;
  /**
   * @example
   * 2
   */
  nop?: number;
  /**
   * @example
   * 0
   */
  orderShipTime?: number;
  /**
   * @example
   * 1
   */
  paymentType?: number;
  /**
   * @example
   * 0
   */
  priceType?: number;
  /**
   * @example
   * demo
   */
  promotionInfo?: string;
  /**
   * @example
   * 4509447432148
   */
  rateId?: number;
  ratePlanName?: string;
  /**
   * @example
   * 4509447432148
   */
  rpId?: number;
  /**
   * @example
   * 4011822148
   */
  sellerId?: number;
  /**
   * @example
   * demo
   */
  startTimeDaily?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 2321
   */
  supplierCode?: string;
  /**
   * @example
   * demo
   */
  supplierName?: string;
  /**
   * @example
   * true
   */
  supportSpecialInvoice?: boolean;
  /**
   * @example
   * 40000
   */
  unroundingDailyPriceFormatYuan?: string;
  static names(): { [key: string]: string } {
    return {
      bedDesc: 'bed_desc',
      bedType: 'bed_type',
      breakfast: 'breakfast',
      btripCancelRule: 'btrip_cancel_rule',
      btripHotelCancelDesc: 'btrip_hotel_cancel_desc',
      canSmoking: 'can_smoking',
      cancelPolicyDesc: 'cancel_policy_desc',
      cancelPolicyType: 'cancel_policy_type',
      companyAassist: 'company_aassist',
      confirmType: 'confirm_type',
      currencyCode: 'currency_code',
      dailyPriceFormatYuan: 'daily_price_format_yuan',
      dailyPriceView: 'daily_price_view',
      discountDesc: 'discount_desc',
      endTimeDaily: 'end_time_daily',
      hotelDetailRatePriceDTO: 'hotel_detail_rate_price_d_t_o',
      instantConfirm: 'instant_confirm',
      inventoryDesc: 'inventory_desc',
      inventoryPrice: 'inventory_price',
      isBusinessPay4Goods: 'is_business_pay4_goods',
      isGuarantee: 'is_guarantee',
      isNeedEmail: 'is_need_email',
      itemId: 'item_id',
      lastCancelTime: 'last_cancel_time',
      maxOccupancy: 'max_occupancy',
      minAdvHours: 'min_adv_hours',
      minDays: 'min_days',
      nod: 'nod',
      nop: 'nop',
      orderShipTime: 'order_ship_time',
      paymentType: 'payment_type',
      priceType: 'price_type',
      promotionInfo: 'promotion_info',
      rateId: 'rate_id',
      ratePlanName: 'rate_plan_name',
      rpId: 'rp_id',
      sellerId: 'seller_id',
      startTimeDaily: 'start_time_daily',
      status: 'status',
      supplierCode: 'supplier_code',
      supplierName: 'supplier_name',
      supportSpecialInvoice: 'support_special_invoice',
      unroundingDailyPriceFormatYuan: 'unrounding_daily_price_format_yuan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedDesc: 'string',
      bedType: 'string',
      breakfast: 'string',
      btripCancelRule: HotelGoodsQueryResponseBodyModuleRoomsRatesBtripCancelRule,
      btripHotelCancelDesc: { 'type': 'array', 'itemType': HotelGoodsQueryResponseBodyModuleRoomsRatesBtripHotelCancelDesc },
      canSmoking: 'boolean',
      cancelPolicyDesc: 'string',
      cancelPolicyType: 'number',
      companyAassist: 'string',
      confirmType: 'number',
      currencyCode: 'string',
      dailyPriceFormatYuan: 'string',
      dailyPriceView: 'string',
      discountDesc: HotelGoodsQueryResponseBodyModuleRoomsRatesDiscountDesc,
      endTimeDaily: 'string',
      hotelDetailRatePriceDTO: { 'type': 'array', 'itemType': HotelGoodsQueryResponseBodyModuleRoomsRatesHotelDetailRatePriceDTO },
      instantConfirm: 'boolean',
      inventoryDesc: 'string',
      inventoryPrice: 'string',
      isBusinessPay4Goods: 'boolean',
      isGuarantee: 'number',
      isNeedEmail: 'boolean',
      itemId: 'number',
      lastCancelTime: 'string',
      maxOccupancy: 'number',
      minAdvHours: 'number',
      minDays: 'number',
      nod: 'number',
      nop: 'number',
      orderShipTime: 'number',
      paymentType: 'number',
      priceType: 'number',
      promotionInfo: 'string',
      rateId: 'number',
      ratePlanName: 'string',
      rpId: 'number',
      sellerId: 'number',
      startTimeDaily: 'string',
      status: 'number',
      supplierCode: 'string',
      supplierName: 'string',
      supportSpecialInvoice: 'boolean',
      unroundingDailyPriceFormatYuan: 'string',
    };
  }

  validate() {
    if(this.btripCancelRule && typeof (this.btripCancelRule as any).validate === 'function') {
      (this.btripCancelRule as any).validate();
    }
    if(Array.isArray(this.btripHotelCancelDesc)) {
      $dara.Model.validateArray(this.btripHotelCancelDesc);
    }
    if(this.discountDesc && typeof (this.discountDesc as any).validate === 'function') {
      (this.discountDesc as any).validate();
    }
    if(Array.isArray(this.hotelDetailRatePriceDTO)) {
      $dara.Model.validateArray(this.hotelDetailRatePriceDTO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelGoodsQueryResponseBodyModuleRoomsRoomService extends $dara.Model {
  /**
   * @example
   * #000000
   */
  color?: string;
  desc?: string;
  /**
   * @example
   * #4AA900
   */
  highlightColorColor?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'color',
      desc: 'desc',
      highlightColorColor: 'highlight_color_color',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      desc: 'string',
      highlightColorColor: 'string',
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

export class HotelGoodsQueryResponseBodyModuleRooms extends $dara.Model {
  /**
   * @example
   * 27
   */
  area?: string;
  bedTypeString?: string;
  /**
   * @example
   * true
   */
  extraBed?: boolean;
  facility?: string;
  /**
   * @example
   * 1,2,3,4,5,6
   */
  floor?: string;
  /**
   * @example
   * 1
   */
  maxOccupancy?: number;
  name?: string;
  /**
   * @example
   * 0
   */
  networkService?: string;
  pics?: string;
  rates?: HotelGoodsQueryResponseBodyModuleRoomsRates[];
  /**
   * @example
   * demo
   */
  roomDasc?: string;
  roomFacility?: string[];
  roomService?: HotelGoodsQueryResponseBodyModuleRoomsRoomService[];
  /**
   * @example
   * 100929
   */
  srid?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  windowType?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'area',
      bedTypeString: 'bed_type_string',
      extraBed: 'extra_bed',
      facility: 'facility',
      floor: 'floor',
      maxOccupancy: 'max_occupancy',
      name: 'name',
      networkService: 'network_service',
      pics: 'pics',
      rates: 'rates',
      roomDasc: 'room_dasc',
      roomFacility: 'room_facility',
      roomService: 'room_service',
      srid: 'srid',
      status: 'status',
      windowType: 'window_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      bedTypeString: 'string',
      extraBed: 'boolean',
      facility: 'string',
      floor: 'string',
      maxOccupancy: 'number',
      name: 'string',
      networkService: 'string',
      pics: 'string',
      rates: { 'type': 'array', 'itemType': HotelGoodsQueryResponseBodyModuleRoomsRates },
      roomDasc: 'string',
      roomFacility: { 'type': 'array', 'itemType': 'string' },
      roomService: { 'type': 'array', 'itemType': HotelGoodsQueryResponseBodyModuleRoomsRoomService },
      srid: 'number',
      status: 'number',
      windowType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rates)) {
      $dara.Model.validateArray(this.rates);
    }
    if(Array.isArray(this.roomFacility)) {
      $dara.Model.validateArray(this.roomFacility);
    }
    if(Array.isArray(this.roomService)) {
      $dara.Model.validateArray(this.roomService);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelGoodsQueryResponseBodyModule extends $dara.Model {
  address?: string;
  bookingInstructions?: { [key: string]: string };
  /**
   * @example
   * true
   */
  canForeigner?: boolean;
  /**
   * @example
   * 2022-05-15
   */
  checkIn?: string;
  /**
   * @example
   * 2022-05-15
   */
  checkOut?: string;
  descriptions?: string[];
  dinamicBannerPicUrls?: string[];
  /**
   * @example
   * 17:00
   */
  earlyArrivalTime?: string;
  /**
   * @example
   * 29382
   */
  hotelId?: number;
  hotelName?: string;
  /**
   * @example
   * 12:00
   */
  lateArrivalTime?: string;
  rooms?: HotelGoodsQueryResponseBodyModuleRooms[];
  /**
   * @example
   * demo
   */
  searchId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      bookingInstructions: 'booking_instructions',
      canForeigner: 'can_foreigner',
      checkIn: 'check_in',
      checkOut: 'check_out',
      descriptions: 'descriptions',
      dinamicBannerPicUrls: 'dinamic_banner_pic_urls',
      earlyArrivalTime: 'early_arrival_time',
      hotelId: 'hotel_id',
      hotelName: 'hotel_name',
      lateArrivalTime: 'late_arrival_time',
      rooms: 'rooms',
      searchId: 'search_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      bookingInstructions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      canForeigner: 'boolean',
      checkIn: 'string',
      checkOut: 'string',
      descriptions: { 'type': 'array', 'itemType': 'string' },
      dinamicBannerPicUrls: { 'type': 'array', 'itemType': 'string' },
      earlyArrivalTime: 'string',
      hotelId: 'number',
      hotelName: 'string',
      lateArrivalTime: 'string',
      rooms: { 'type': 'array', 'itemType': HotelGoodsQueryResponseBodyModuleRooms },
      searchId: 'string',
    };
  }

  validate() {
    if(this.bookingInstructions) {
      $dara.Model.validateMap(this.bookingInstructions);
    }
    if(Array.isArray(this.descriptions)) {
      $dara.Model.validateArray(this.descriptions);
    }
    if(Array.isArray(this.dinamicBannerPicUrls)) {
      $dara.Model.validateArray(this.dinamicBannerPicUrls);
    }
    if(Array.isArray(this.rooms)) {
      $dara.Model.validateArray(this.rooms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelGoodsQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * None
   */
  message?: string;
  module?: HotelGoodsQueryResponseBodyModule;
  /**
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
   * @example
   * 210e847f16611516748613869de4f6
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
      module: HotelGoodsQueryResponseBodyModule,
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

