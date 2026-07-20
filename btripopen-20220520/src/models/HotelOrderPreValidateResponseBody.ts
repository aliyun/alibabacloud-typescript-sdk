// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderPreValidateResponseBodyModuleItemInvoice extends $dara.Model {
  /**
   * @example
   * true
   */
  supportSpecial?: boolean;
  static names(): { [key: string]: string } {
    return {
      supportSpecial: 'support_special',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportSpecial: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderPreValidateResponseBodyModulePromotionInfoPromotionDetailInfoList extends $dara.Model {
  /**
   * @example
   * true
   */
  checkStatus?: boolean;
  /**
   * @example
   * true
   */
  needCheck?: boolean;
  /**
   * @example
   * wjdj11
   */
  promotionCode?: string;
  /**
   * @example
   * 12893
   */
  promotionId?: string;
  /**
   * @example
   * demo
   */
  promotionName?: string;
  /**
   * @example
   * 100
   */
  promotionPrice?: number;
  /**
   * @example
   * 1
   */
  promotionType?: string;
  static names(): { [key: string]: string } {
    return {
      checkStatus: 'check_status',
      needCheck: 'need_check',
      promotionCode: 'promotion_code',
      promotionId: 'promotion_id',
      promotionName: 'promotion_name',
      promotionPrice: 'promotion_price',
      promotionType: 'promotion_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkStatus: 'boolean',
      needCheck: 'boolean',
      promotionCode: 'string',
      promotionId: 'string',
      promotionName: 'string',
      promotionPrice: 'number',
      promotionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderPreValidateResponseBodyModulePromotionInfo extends $dara.Model {
  extAttrMap?: { [key: string]: string };
  promotionDetailInfoList?: HotelOrderPreValidateResponseBodyModulePromotionInfoPromotionDetailInfoList[];
  /**
   * @example
   * 100
   */
  promotionTotalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      extAttrMap: 'ext_attr_map',
      promotionDetailInfoList: 'promotion_detail_info_list',
      promotionTotalPrice: 'promotion_total_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extAttrMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      promotionDetailInfoList: { 'type': 'array', 'itemType': HotelOrderPreValidateResponseBodyModulePromotionInfoPromotionDetailInfoList },
      promotionTotalPrice: 'number',
    };
  }

  validate() {
    if(this.extAttrMap) {
      $dara.Model.validateMap(this.extAttrMap);
    }
    if(Array.isArray(this.promotionDetailInfoList)) {
      $dara.Model.validateArray(this.promotionDetailInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderPreValidateResponseBodyModuleRatePlanDaily extends $dara.Model {
  /**
   * @example
   * 2份早餐
   */
  board?: string;
  /**
   * @example
   * 100
   */
  discountPrice?: string;
  /**
   * @example
   * 1
   */
  maxBookingNum?: number;
  /**
   * @example
   * 100
   */
  price?: number;
  /**
   * @example
   * 2023-01-19
   */
  rateStartTime?: string;
  /**
   * @example
   * 1
   */
  roomCount?: number;
  /**
   * @example
   * 100
   */
  roundingDiscountPrice?: string;
  /**
   * @example
   * 100
   */
  roundingPrice?: string;
  /**
   * @example
   * 100
   */
  serviceFee?: number;
  static names(): { [key: string]: string } {
    return {
      board: 'board',
      discountPrice: 'discount_price',
      maxBookingNum: 'max_booking_num',
      price: 'price',
      rateStartTime: 'rate_start_time',
      roomCount: 'room_count',
      roundingDiscountPrice: 'rounding_discount_price',
      roundingPrice: 'rounding_price',
      serviceFee: 'service_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      board: 'string',
      discountPrice: 'string',
      maxBookingNum: 'number',
      price: 'number',
      rateStartTime: 'string',
      roomCount: 'number',
      roundingDiscountPrice: 'string',
      roundingPrice: 'string',
      serviceFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderPreValidateResponseBodyModuleRatePlanInfoBtripHotelCancelPolicyDTOBtripHotelCancelPolicyInfoDTOList extends $dara.Model {
  /**
   * @example
   * 1
   */
  hour?: number;
  /**
   * @example
   * 1
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

export class HotelOrderPreValidateResponseBodyModuleRatePlanInfoBtripHotelCancelPolicyDTO extends $dara.Model {
  btripHotelCancelPolicyInfoDTOList?: HotelOrderPreValidateResponseBodyModuleRatePlanInfoBtripHotelCancelPolicyDTOBtripHotelCancelPolicyInfoDTOList[];
  /**
   * @example
   * 1（类型查看报价详情）
   */
  cancelPolicyType?: number;
  /**
   * @example
   * 预订成功后，不可变更/取消，未入住将收取全额费用。
   */
  content?: string;
  /**
   * @example
   * 免费取消
   */
  shortDesc?: string;
  static names(): { [key: string]: string } {
    return {
      btripHotelCancelPolicyInfoDTOList: 'btrip_hotel_cancel_policy_info_d_t_o_list',
      cancelPolicyType: 'cancel_policy_type',
      content: 'content',
      shortDesc: 'short_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripHotelCancelPolicyInfoDTOList: { 'type': 'array', 'itemType': HotelOrderPreValidateResponseBodyModuleRatePlanInfoBtripHotelCancelPolicyDTOBtripHotelCancelPolicyInfoDTOList },
      cancelPolicyType: 'number',
      content: 'string',
      shortDesc: 'string',
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

export class HotelOrderPreValidateResponseBodyModuleRatePlanInfoHourItemArrivalTimeInfo extends $dara.Model {
  actualLiveHour?: string;
  /**
   * @example
   * 2026-05-07 12:00:00
   */
  earliestCheckInTime?: string;
  latestCheckInTime?: string;
  latestCheckOutTime?: string;
  /**
   * @example
   * 2
   */
  liveHour?: string;
  static names(): { [key: string]: string } {
    return {
      actualLiveHour: 'actual_live_hour',
      earliestCheckInTime: 'earliest_check_in_time',
      latestCheckInTime: 'latest_check_in_time',
      latestCheckOutTime: 'latest_check_out_time',
      liveHour: 'live_hour',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualLiveHour: 'string',
      earliestCheckInTime: 'string',
      latestCheckInTime: 'string',
      latestCheckOutTime: 'string',
      liveHour: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderPreValidateResponseBodyModuleRatePlanInfo extends $dara.Model {
  /**
   * @example
   * 1张大床
   */
  bedDesc?: string;
  btripHotelCancelPolicyDTO?: HotelOrderPreValidateResponseBodyModuleRatePlanInfoBtripHotelCancelPolicyDTO;
  certTypeList?: string[];
  /**
   * @example
   * 12:00
   */
  earliestCheckInTime?: string;
  hourItemArrivalTimeInfo?: HotelOrderPreValidateResponseBodyModuleRatePlanInfoHourItemArrivalTimeInfo;
  /**
   * @example
   * 17:00
   */
  latestCheckOutTime?: string;
  /**
   * @example
   * 1
   */
  maxBookingNum?: number;
  /**
   * @example
   * 1
   */
  maxOccupancyNum?: number;
  /**
   * @example
   * false
   */
  needCertificate?: boolean;
  /**
   * @example
   * false
   */
  needEmail?: boolean;
  /**
   * @example
   * false
   */
  needEnglishName?: boolean;
  /**
   * @example
   * 1
   */
  rpType?: number;
  /**
   * @example
   * 100
   */
  totalOrderPrice?: number;
  /**
   * @example
   * 100
   */
  totalRoomPrice?: number;
  static names(): { [key: string]: string } {
    return {
      bedDesc: 'bed_desc',
      btripHotelCancelPolicyDTO: 'btrip_hotel_cancel_policy_d_t_o',
      certTypeList: 'cert_type_list',
      earliestCheckInTime: 'earliest_check_in_time',
      hourItemArrivalTimeInfo: 'hour_item_arrival_time_info',
      latestCheckOutTime: 'latest_check_out_time',
      maxBookingNum: 'max_booking_num',
      maxOccupancyNum: 'max_occupancy_num',
      needCertificate: 'need_certificate',
      needEmail: 'need_email',
      needEnglishName: 'need_english_name',
      rpType: 'rp_type',
      totalOrderPrice: 'total_order_price',
      totalRoomPrice: 'total_room_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedDesc: 'string',
      btripHotelCancelPolicyDTO: HotelOrderPreValidateResponseBodyModuleRatePlanInfoBtripHotelCancelPolicyDTO,
      certTypeList: { 'type': 'array', 'itemType': 'string' },
      earliestCheckInTime: 'string',
      hourItemArrivalTimeInfo: HotelOrderPreValidateResponseBodyModuleRatePlanInfoHourItemArrivalTimeInfo,
      latestCheckOutTime: 'string',
      maxBookingNum: 'number',
      maxOccupancyNum: 'number',
      needCertificate: 'boolean',
      needEmail: 'boolean',
      needEnglishName: 'boolean',
      rpType: 'number',
      totalOrderPrice: 'number',
      totalRoomPrice: 'number',
    };
  }

  validate() {
    if(this.btripHotelCancelPolicyDTO && typeof (this.btripHotelCancelPolicyDTO as any).validate === 'function') {
      (this.btripHotelCancelPolicyDTO as any).validate();
    }
    if(Array.isArray(this.certTypeList)) {
      $dara.Model.validateArray(this.certTypeList);
    }
    if(this.hourItemArrivalTimeInfo && typeof (this.hourItemArrivalTimeInfo as any).validate === 'function') {
      (this.hourItemArrivalTimeInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderPreValidateResponseBodyModule extends $dara.Model {
  /**
   * @example
   * demo
   */
  extendInfo?: string;
  itemInvoice?: HotelOrderPreValidateResponseBodyModuleItemInvoice;
  /**
   * @example
   * fb5e1abf33924b6c912bd6d80deec0eb-4
   */
  itineraryNo?: string;
  promotionInfo?: HotelOrderPreValidateResponseBodyModulePromotionInfo;
  ratePlanDaily?: HotelOrderPreValidateResponseBodyModuleRatePlanDaily[];
  /**
   * @example
   * 5314280514218
   */
  ratePlanId?: number;
  ratePlanInfo?: HotelOrderPreValidateResponseBodyModuleRatePlanInfo;
  /**
   * @example
   * nonUltron_1673575241156_d91ea8ad16735752359161037bf6cf_c54d3768312a4b249b719f126377bf82
   */
  validateResKey?: string;
  static names(): { [key: string]: string } {
    return {
      extendInfo: 'extend_info',
      itemInvoice: 'item_invoice',
      itineraryNo: 'itinerary_no',
      promotionInfo: 'promotion_info',
      ratePlanDaily: 'rate_plan_daily',
      ratePlanId: 'rate_plan_id',
      ratePlanInfo: 'rate_plan_info',
      validateResKey: 'validate_res_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfo: 'string',
      itemInvoice: HotelOrderPreValidateResponseBodyModuleItemInvoice,
      itineraryNo: 'string',
      promotionInfo: HotelOrderPreValidateResponseBodyModulePromotionInfo,
      ratePlanDaily: { 'type': 'array', 'itemType': HotelOrderPreValidateResponseBodyModuleRatePlanDaily },
      ratePlanId: 'number',
      ratePlanInfo: HotelOrderPreValidateResponseBodyModuleRatePlanInfo,
      validateResKey: 'string',
    };
  }

  validate() {
    if(this.itemInvoice && typeof (this.itemInvoice as any).validate === 'function') {
      (this.itemInvoice as any).validate();
    }
    if(this.promotionInfo && typeof (this.promotionInfo as any).validate === 'function') {
      (this.promotionInfo as any).validate();
    }
    if(Array.isArray(this.ratePlanDaily)) {
      $dara.Model.validateArray(this.ratePlanDaily);
    }
    if(this.ratePlanInfo && typeof (this.ratePlanInfo as any).validate === 'function') {
      (this.ratePlanInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderPreValidateResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  /**
   * @example
   * 成功
   */
  message?: string;
  module?: HotelOrderPreValidateResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * B72B39C8-32DE-558D-AD1C-D53F11F6ADFE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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
      module: HotelOrderPreValidateResponseBodyModule,
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

