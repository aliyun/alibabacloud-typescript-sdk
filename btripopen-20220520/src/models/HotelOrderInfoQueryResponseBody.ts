// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderInfoQueryResponseBodyModuleBaseOrderInfo extends $dara.Model {
  /**
   * @example
   * 0
   */
  bookMode?: string;
  /**
   * @example
   * 1430378
   */
  bookerId?: string;
  bookerName?: string;
  /**
   * @example
   * btripkvxtn1321g49wtul
   */
  btripCorpId?: string;
  /**
   * @example
   * 2
   */
  category?: number;
  /**
   * @example
   * 1721145600000
   */
  checkInTime?: number;
  /**
   * @example
   * 1721145600000
   */
  checkOutTime?: number;
  /**
   * @example
   * true
   */
  isAgreementPrice?: boolean;
  /**
   * @example
   * 4
   */
  nights?: number;
  /**
   * @example
   * 1721145600000
   */
  orderCreateTime?: number;
  /**
   * @example
   * 1012053198307958626
   */
  orderId?: number;
  /**
   * @example
   * 2
   */
  orderStatus?: number;
  orderStatusDesc?: string;
  /**
   * @example
   * 1
   */
  payStatus?: number;
  /**
   * @example
   * 1721145600000
   */
  payTime?: number;
  /**
   * @example
   * 2
   */
  roomNum?: number;
  /**
   * @example
   * 4
   */
  settleType?: number;
  /**
   * @example
   * 1
   */
  tripMode?: number;
  static names(): { [key: string]: string } {
    return {
      bookMode: 'book_mode',
      bookerId: 'booker_id',
      bookerName: 'booker_name',
      btripCorpId: 'btrip_corp_id',
      category: 'category',
      checkInTime: 'check_in_time',
      checkOutTime: 'check_out_time',
      isAgreementPrice: 'is_agreement_price',
      nights: 'nights',
      orderCreateTime: 'order_create_time',
      orderId: 'order_id',
      orderStatus: 'order_status',
      orderStatusDesc: 'order_status_desc',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      roomNum: 'room_num',
      settleType: 'settle_type',
      tripMode: 'trip_mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookMode: 'string',
      bookerId: 'string',
      bookerName: 'string',
      btripCorpId: 'string',
      category: 'number',
      checkInTime: 'number',
      checkOutTime: 'number',
      isAgreementPrice: 'boolean',
      nights: 'number',
      orderCreateTime: 'number',
      orderId: 'number',
      orderStatus: 'number',
      orderStatusDesc: 'string',
      payStatus: 'number',
      payTime: 'number',
      roomNum: 'number',
      settleType: 'number',
      tripMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderInfoQueryResponseBodyModuleBookerInfoDepartment extends $dara.Model {
  /**
   * @example
   * 0rCUI20hjOsk0sTwlu
   */
  cascadeDeptMask?: string;
  cascadeDeptName?: string;
  /**
   * @example
   * 35
   */
  departId?: string;
  departName?: string;
  /**
   * @example
   * 330000001815
   */
  outDepartId?: string;
  static names(): { [key: string]: string } {
    return {
      cascadeDeptMask: 'cascade_dept_mask',
      cascadeDeptName: 'cascade_dept_name',
      departId: 'depart_id',
      departName: 'depart_name',
      outDepartId: 'out_depart_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cascadeDeptMask: 'string',
      cascadeDeptName: 'string',
      departId: 'string',
      departName: 'string',
      outDepartId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderInfoQueryResponseBodyModuleBookerInfo extends $dara.Model {
  /**
   * @example
   * UN_APPLY
   */
  bookerRole?: string;
  /**
   * @example
   * 13311112222@qq.com
   */
  contactEmail?: string;
  /**
   * @example
   * 13311112222
   */
  contactPhone?: string;
  /**
   * @example
   * open12gddn2kn1i47v10wRJNkMFx00
   */
  corpId?: string;
  department?: HotelOrderInfoQueryResponseBodyModuleBookerInfoDepartment;
  /**
   * @example
   * Tom
   */
  enName?: string;
  /**
   * @example
   * 1001
   */
  jobNo?: string;
  /**
   * @example
   * true
   */
  needApply?: boolean;
  realName?: string;
  /**
   * @example
   * 1430378
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bookerRole: 'booker_role',
      contactEmail: 'contact_email',
      contactPhone: 'contact_phone',
      corpId: 'corp_id',
      department: 'department',
      enName: 'en_name',
      jobNo: 'job_no',
      needApply: 'need_apply',
      realName: 'real_name',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookerRole: 'string',
      contactEmail: 'string',
      contactPhone: 'string',
      corpId: 'string',
      department: HotelOrderInfoQueryResponseBodyModuleBookerInfoDepartment,
      enName: 'string',
      jobNo: 'string',
      needApply: 'boolean',
      realName: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.department && typeof (this.department as any).validate === 'function') {
      (this.department as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderInfoQueryResponseBodyModuleHotelInfo extends $dara.Model {
  /**
   * @example
   * 330100
   */
  cityCode?: string;
  cityName?: string;
  /**
   * @example
   * 1
   */
  countryCode?: string;
  countryName?: string;
  /**
   * @example
   * 330183
   */
  districtCode?: string;
  districtName?: string;
  hotelAddress?: string;
  /**
   * @example
   * 3
   */
  hotelBrandCode?: string;
  hotelBrandName?: string;
  /**
   * @example
   * huazhu
   */
  hotelGroup?: string;
  /**
   * @example
   * 55335212
   */
  hotelId?: string;
  hotelName?: string;
  /**
   * @example
   * Test Hotel Name
   */
  hotelNameEn?: string;
  /**
   * @example
   * 5
   */
  star?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
      countryCode: 'country_code',
      countryName: 'country_name',
      districtCode: 'district_code',
      districtName: 'district_name',
      hotelAddress: 'hotel_address',
      hotelBrandCode: 'hotel_brand_code',
      hotelBrandName: 'hotel_brand_name',
      hotelGroup: 'hotel_group',
      hotelId: 'hotel_id',
      hotelName: 'hotel_name',
      hotelNameEn: 'hotel_name_en',
      star: 'star',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      countryCode: 'string',
      countryName: 'string',
      districtCode: 'string',
      districtName: 'string',
      hotelAddress: 'string',
      hotelBrandCode: 'string',
      hotelBrandName: 'string',
      hotelGroup: 'string',
      hotelId: 'string',
      hotelName: 'string',
      hotelNameEn: 'string',
      star: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderInfoQueryResponseBodyModuleHotelOrderFeeInfo extends $dara.Model {
  /**
   * @example
   * 35000
   */
  orderAmount?: number;
  /**
   * @example
   * 0
   */
  otherFee?: number;
  /**
   * @example
   * 35000
   */
  payAmount?: number;
  /**
   * @example
   * 5000
   */
  promotionAmount?: number;
  /**
   * @example
   * 35000
   */
  totalRoomAmount?: number;
  static names(): { [key: string]: string } {
    return {
      orderAmount: 'order_amount',
      otherFee: 'other_fee',
      payAmount: 'pay_amount',
      promotionAmount: 'promotion_amount',
      totalRoomAmount: 'total_room_amount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderAmount: 'number',
      otherFee: 'number',
      payAmount: 'number',
      promotionAmount: 'number',
      totalRoomAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderInfoQueryResponseBodyModuleHotelOrderRefundInfo extends $dara.Model {
  /**
   * @example
   * 1000
   */
  cancelFine?: number;
  /**
   * @example
   * 1000000002578096
   */
  refundApplyId?: number;
  /**
   * @example
   * 1721702353700
   */
  refundEndTime?: number;
  /**
   * @example
   * 34000
   */
  refundPrice?: number;
  refundReason?: string;
  /**
   * @example
   * 1721702353700
   */
  refundStartTime?: number;
  /**
   * @example
   * 5
   */
  refundType?: number;
  static names(): { [key: string]: string } {
    return {
      cancelFine: 'cancel_fine',
      refundApplyId: 'refund_apply_id',
      refundEndTime: 'refund_end_time',
      refundPrice: 'refund_price',
      refundReason: 'refund_reason',
      refundStartTime: 'refund_start_time',
      refundType: 'refund_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelFine: 'number',
      refundApplyId: 'number',
      refundEndTime: 'number',
      refundPrice: 'number',
      refundReason: 'string',
      refundStartTime: 'number',
      refundType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosApplyInfoExceedApply extends $dara.Model {
  exceedReason?: string;
  /**
   * @example
   * 16
   */
  exceedType?: number;
  /**
   * @example
   * 3321
   */
  flowNo?: number;
  /**
   * @example
   * 60853
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      exceedReason: 'exceed_reason',
      exceedType: 'exceed_type',
      flowNo: 'flow_no',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceedReason: 'string',
      exceedType: 'number',
      flowNo: 'number',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosApplyInfo extends $dara.Model {
  /**
   * @example
   * 1001
   */
  applyBusinessId?: string;
  applyBusinessName?: string;
  /**
   * @example
   * 1424031910085891196
   */
  applyId?: string;
  exceedApply?: HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosApplyInfoExceedApply[];
  /**
   * @example
   * ef5e74dc1f1640b08858fb043f64e477-8
   */
  itineraryNo?: string;
  static names(): { [key: string]: string } {
    return {
      applyBusinessId: 'apply_business_id',
      applyBusinessName: 'apply_business_name',
      applyId: 'apply_id',
      exceedApply: 'exceed_apply',
      itineraryNo: 'itinerary_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyBusinessId: 'string',
      applyBusinessName: 'string',
      applyId: 'string',
      exceedApply: { 'type': 'array', 'itemType': HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosApplyInfoExceedApply },
      itineraryNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.exceedApply)) {
      $dara.Model.validateArray(this.exceedApply);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosDepartment extends $dara.Model {
  /**
   * @example
   * 0rCUI20hjOsk0sTwlu
   */
  cascadeDeptMask?: string;
  cascadeDeptName?: string;
  /**
   * @example
   * 35
   */
  departId?: string;
  departName?: string;
  /**
   * @example
   * 330000001815
   */
  outDepartId?: string;
  static names(): { [key: string]: string } {
    return {
      cascadeDeptMask: 'cascade_dept_mask',
      cascadeDeptName: 'cascade_dept_name',
      departId: 'depart_id',
      departName: 'depart_name',
      outDepartId: 'out_depart_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cascadeDeptMask: 'string',
      cascadeDeptName: 'string',
      departId: 'string',
      departName: 'string',
      outDepartId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosTripCostCenter extends $dara.Model {
  /**
   * @example
   * 323431
   */
  costCenterCode?: string;
  /**
   * @example
   * 2312
   */
  costCenterId?: string;
  costCenterName?: string;
  /**
   * @example
   * {"extraKey":"extraVal"}
   */
  externalExtField?: string;
  /**
   * @example
   * 1
   */
  feeType?: number;
  /**
   * @example
   * 123332
   */
  invoiceId?: number;
  invoiceTitle?: string;
  /**
   * @example
   * 1002
   */
  projectCode?: string;
  projectTitle?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterCode: 'cost_center_code',
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      externalExtField: 'external_ext_field',
      feeType: 'fee_type',
      invoiceId: 'invoice_id',
      invoiceTitle: 'invoice_title',
      projectCode: 'project_code',
      projectTitle: 'project_title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterCode: 'string',
      costCenterId: 'string',
      costCenterName: 'string',
      externalExtField: 'string',
      feeType: 'number',
      invoiceId: 'number',
      invoiceTitle: 'string',
      projectCode: 'string',
      projectTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfos extends $dara.Model {
  applyInfo?: HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosApplyInfo;
  /**
   * @example
   * 342229200801010023
   */
  certNo?: string;
  /**
   * @example
   * 0
   */
  certType?: number;
  department?: HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosDepartment;
  /**
   * @example
   * 1001
   */
  jobNo?: string;
  /**
   * @example
   * 13311112222
   */
  telephone?: string;
  /**
   * @example
   * 1430378
   */
  travelerId?: string;
  travelerName?: string;
  /**
   * @example
   * 1
   */
  travelerType?: number;
  tripCostCenter?: HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosTripCostCenter;
  /**
   * @example
   * 0
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      applyInfo: 'apply_info',
      certNo: 'cert_no',
      certType: 'cert_type',
      department: 'department',
      jobNo: 'job_no',
      telephone: 'telephone',
      travelerId: 'traveler_id',
      travelerName: 'traveler_name',
      travelerType: 'traveler_type',
      tripCostCenter: 'trip_cost_center',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyInfo: HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosApplyInfo,
      certNo: 'string',
      certType: 'number',
      department: HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosDepartment,
      jobNo: 'string',
      telephone: 'string',
      travelerId: 'string',
      travelerName: 'string',
      travelerType: 'number',
      tripCostCenter: HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosTripCostCenter,
      userType: 'number',
    };
  }

  validate() {
    if(this.applyInfo && typeof (this.applyInfo as any).validate === 'function') {
      (this.applyInfo as any).validate();
    }
    if(this.department && typeof (this.department as any).validate === 'function') {
      (this.department as any).validate();
    }
    if(this.tripCostCenter && typeof (this.tripCostCenter as any).validate === 'function') {
      (this.tripCostCenter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderInfoQueryResponseBodyModuleRoomTraverInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  liveRoomNo?: string;
  roomTypeName?: string;
  traverInfos?: HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfos[];
  static names(): { [key: string]: string } {
    return {
      liveRoomNo: 'live_room_no',
      roomTypeName: 'room_type_name',
      traverInfos: 'traver_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveRoomNo: 'string',
      roomTypeName: 'string',
      traverInfos: { 'type': 'array', 'itemType': HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfos },
    };
  }

  validate() {
    if(Array.isArray(this.traverInfos)) {
      $dara.Model.validateArray(this.traverInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderInfoQueryResponseBodyModule extends $dara.Model {
  baseOrderInfo?: HotelOrderInfoQueryResponseBodyModuleBaseOrderInfo;
  bookerInfo?: HotelOrderInfoQueryResponseBodyModuleBookerInfo;
  hotelInfo?: HotelOrderInfoQueryResponseBodyModuleHotelInfo;
  hotelOrderFeeInfo?: HotelOrderInfoQueryResponseBodyModuleHotelOrderFeeInfo;
  hotelOrderRefundInfo?: HotelOrderInfoQueryResponseBodyModuleHotelOrderRefundInfo[];
  roomTraverInfo?: HotelOrderInfoQueryResponseBodyModuleRoomTraverInfo[];
  static names(): { [key: string]: string } {
    return {
      baseOrderInfo: 'base_order_info',
      bookerInfo: 'booker_info',
      hotelInfo: 'hotel_info',
      hotelOrderFeeInfo: 'hotel_order_fee_info',
      hotelOrderRefundInfo: 'hotel_order_refund_info',
      roomTraverInfo: 'room_traver_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseOrderInfo: HotelOrderInfoQueryResponseBodyModuleBaseOrderInfo,
      bookerInfo: HotelOrderInfoQueryResponseBodyModuleBookerInfo,
      hotelInfo: HotelOrderInfoQueryResponseBodyModuleHotelInfo,
      hotelOrderFeeInfo: HotelOrderInfoQueryResponseBodyModuleHotelOrderFeeInfo,
      hotelOrderRefundInfo: { 'type': 'array', 'itemType': HotelOrderInfoQueryResponseBodyModuleHotelOrderRefundInfo },
      roomTraverInfo: { 'type': 'array', 'itemType': HotelOrderInfoQueryResponseBodyModuleRoomTraverInfo },
    };
  }

  validate() {
    if(this.baseOrderInfo && typeof (this.baseOrderInfo as any).validate === 'function') {
      (this.baseOrderInfo as any).validate();
    }
    if(this.bookerInfo && typeof (this.bookerInfo as any).validate === 'function') {
      (this.bookerInfo as any).validate();
    }
    if(this.hotelInfo && typeof (this.hotelInfo as any).validate === 'function') {
      (this.hotelInfo as any).validate();
    }
    if(this.hotelOrderFeeInfo && typeof (this.hotelOrderFeeInfo as any).validate === 'function') {
      (this.hotelOrderFeeInfo as any).validate();
    }
    if(Array.isArray(this.hotelOrderRefundInfo)) {
      $dara.Model.validateArray(this.hotelOrderRefundInfo);
    }
    if(Array.isArray(this.roomTraverInfo)) {
      $dara.Model.validateArray(this.roomTraverInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelOrderInfoQueryResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  message?: string;
  module?: HotelOrderInfoQueryResponseBodyModule;
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
   * 210f079e16603757182131635d866a
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
      module: HotelOrderInfoQueryResponseBodyModule,
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

