// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelBillSettlementQueryResponseBodyModuleDataList extends $dara.Model {
  agreementPromotionFee?: number;
  /**
   * @example
   * 234432432
   */
  alipayTradeNo?: string;
  applyArrCityCode?: string;
  applyArrCityName?: string;
  applyDepCityCode?: string;
  applyDepCityName?: string;
  /**
   * @remarks
   * 审批扩展自定义字段
   */
  applyExtendField?: string;
  /**
   * @example
   * 103208648
   */
  applyId?: string;
  averageNights?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  billRecordTime?: string;
  billingEntity?: string;
  bookChannel?: string;
  bookMode?: string;
  bookReason?: string;
  /**
   * @example
   * 2021-10-12 23:58:48
   */
  bookTime?: string;
  bookerId?: string;
  bookerJobNo?: string;
  bookerName?: string;
  brandGroup?: string;
  brandName?: string;
  businessTripResult?: string;
  cancelOrModifyReason?: string;
  cancelOrModifyScene?: string;
  /**
   * @example
   * 1
   */
  capitalDirection?: string;
  cascadeDepartment?: string;
  categoryDesc?: string;
  /**
   * @example
   * 2021-10-14 00:00:00
   */
  checkInDate?: string;
  /**
   * @example
   * 2021-10-16 00:00:00
   */
  checkoutDate?: string;
  city?: string;
  /**
   * @example
   * 110100
   */
  cityCode?: string;
  cityCounty?: string;
  cityCountyCode?: string;
  /**
   * @example
   * 12
   */
  corpRefundFee?: number;
  /**
   * @example
   * 1000
   */
  corpTotalFee?: number;
  costCenter?: string;
  /**
   * @example
   * 8b7f3cd-24324-097
   */
  costCenterNumber?: string;
  deductibleTax?: number;
  department?: string;
  departmentId?: string;
  exceedReason?: string;
  /**
   * @example
   * 20101
   */
  feeType?: string;
  feeTypeDesc?: string;
  /**
   * @example
   * 0
   */
  fees?: number;
  fines?: number;
  /**
   * @example
   * 12
   */
  fuPointFee?: number;
  hotelName?: string;
  /**
   * @example
   * 5038018
   */
  index?: string;
  insOrderId?: string;
  insuranceNumber?: string;
  insurancePrice?: number;
  insuranceProductName?: string;
  invoiceTitle?: string;
  isEarlyDeparture?: string;
  isNegotiation?: string;
  isShareStr?: string;
  /**
   * @example
   * 2
   */
  nights?: number;
  noAdvanceBookingReason?: string;
  /**
   * @example
   * 223423423432422
   */
  orderId?: string;
  /**
   * @example
   * 1088.96
   */
  orderPrice?: number;
  orderType?: string;
  originalReserveRule?: string;
  /**
   * @example
   * 4234324
   */
  overApplyId?: string;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  /**
   * @example
   * 34
   */
  personRefundFee?: number;
  /**
   * @example
   * 88.96
   */
  personSettlePrice?: number;
  /**
   * @example
   * 5038018
   */
  primaryId?: number;
  /**
   * @example
   * 223423432
   */
  projectCode?: string;
  projectName?: string;
  /**
   * @example
   * 113.02
   */
  promotionFee?: number;
  recoverMoneyReceiptAmt?: number;
  remark?: string;
  reserveRule?: string;
  roomNo?: string;
  /**
   * @example
   * 1
   */
  roomNumber?: number;
  /**
   * @example
   * 1201.98
   */
  roomPrice?: number;
  roomType?: string;
  sceneId?: string;
  sceneName?: string;
  /**
   * @example
   * 0
   */
  serviceFee?: number;
  settleTypeDesc?: string;
  /**
   * @example
   * 1000
   */
  settlementFee?: number;
  /**
   * @example
   * 5.68
   */
  settlementGrantFee?: number;
  /**
   * @example
   * 2021-10-12 23:58:56
   */
  settlementTime?: string;
  /**
   * @example
   * 4
   */
  settlementType?: string;
  star?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  statusDesc?: string;
  /**
   * @remarks
   * 税率
   * 
   * @example
   * 6%
   */
  taxRate?: string;
  thirdItineraryId?: string;
  /**
   * @example
   * 2
   */
  totalNights?: number;
  tradeActionDesc?: string;
  travelerId?: string;
  /**
   * @example
   * 326246
   */
  travelerJobNo?: string;
  travelerMemberType?: string;
  travelerMemberTypeName?: string;
  travelerName?: string;
  unbookedLowestPriceReason?: string;
  /**
   * @example
   * 11
   */
  voucherType?: number;
  voucherTypeDesc?: string;
  static names(): { [key: string]: string } {
    return {
      agreementPromotionFee: 'agreement_promotion_fee',
      alipayTradeNo: 'alipay_trade_no',
      applyArrCityCode: 'apply_arr_city_code',
      applyArrCityName: 'apply_arr_city_name',
      applyDepCityCode: 'apply_dep_city_code',
      applyDepCityName: 'apply_dep_city_name',
      applyExtendField: 'apply_extend_field',
      applyId: 'apply_id',
      averageNights: 'average_nights',
      billRecordTime: 'bill_record_time',
      billingEntity: 'billing_entity',
      bookChannel: 'book_channel',
      bookMode: 'book_mode',
      bookReason: 'book_reason',
      bookTime: 'book_time',
      bookerId: 'booker_id',
      bookerJobNo: 'booker_job_no',
      bookerName: 'booker_name',
      brandGroup: 'brand_group',
      brandName: 'brand_name',
      businessTripResult: 'business_trip_result',
      cancelOrModifyReason: 'cancel_or_modify_reason',
      cancelOrModifyScene: 'cancel_or_modify_scene',
      capitalDirection: 'capital_direction',
      cascadeDepartment: 'cascade_department',
      categoryDesc: 'category_desc',
      checkInDate: 'check_in_date',
      checkoutDate: 'checkout_date',
      city: 'city',
      cityCode: 'city_code',
      cityCounty: 'city_county',
      cityCountyCode: 'city_county_code',
      corpRefundFee: 'corp_refund_fee',
      corpTotalFee: 'corp_total_fee',
      costCenter: 'cost_center',
      costCenterNumber: 'cost_center_number',
      deductibleTax: 'deductible_tax',
      department: 'department',
      departmentId: 'department_id',
      exceedReason: 'exceed_reason',
      feeType: 'fee_type',
      feeTypeDesc: 'fee_type_desc',
      fees: 'fees',
      fines: 'fines',
      fuPointFee: 'fu_point_fee',
      hotelName: 'hotel_name',
      index: 'index',
      insOrderId: 'ins_order_id',
      insuranceNumber: 'insurance_number',
      insurancePrice: 'insurance_price',
      insuranceProductName: 'insurance_product_name',
      invoiceTitle: 'invoice_title',
      isEarlyDeparture: 'is_early_departure',
      isNegotiation: 'is_negotiation',
      isShareStr: 'is_share_str',
      nights: 'nights',
      noAdvanceBookingReason: 'no_advance_booking_reason',
      orderId: 'order_id',
      orderPrice: 'order_price',
      orderType: 'order_type',
      originalReserveRule: 'original_reserve_rule',
      overApplyId: 'over_apply_id',
      paymentDepartmentId: 'payment_department_id',
      paymentDepartmentName: 'payment_department_name',
      personRefundFee: 'person_refund_fee',
      personSettlePrice: 'person_settle_price',
      primaryId: 'primary_id',
      projectCode: 'project_code',
      projectName: 'project_name',
      promotionFee: 'promotion_fee',
      recoverMoneyReceiptAmt: 'recover_money_receipt_amt',
      remark: 'remark',
      reserveRule: 'reserve_rule',
      roomNo: 'room_no',
      roomNumber: 'room_number',
      roomPrice: 'room_price',
      roomType: 'room_type',
      sceneId: 'scene_id',
      sceneName: 'scene_name',
      serviceFee: 'service_fee',
      settleTypeDesc: 'settle_type_desc',
      settlementFee: 'settlement_fee',
      settlementGrantFee: 'settlement_grant_fee',
      settlementTime: 'settlement_time',
      settlementType: 'settlement_type',
      star: 'star',
      status: 'status',
      statusDesc: 'status_desc',
      taxRate: 'tax_rate',
      thirdItineraryId: 'third_itinerary_id',
      totalNights: 'total_nights',
      tradeActionDesc: 'trade_action_desc',
      travelerId: 'traveler_id',
      travelerJobNo: 'traveler_job_no',
      travelerMemberType: 'traveler_member_type',
      travelerMemberTypeName: 'traveler_member_type_name',
      travelerName: 'traveler_name',
      unbookedLowestPriceReason: 'unbooked_lowest_price_reason',
      voucherType: 'voucher_type',
      voucherTypeDesc: 'voucher_type_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementPromotionFee: 'number',
      alipayTradeNo: 'string',
      applyArrCityCode: 'string',
      applyArrCityName: 'string',
      applyDepCityCode: 'string',
      applyDepCityName: 'string',
      applyExtendField: 'string',
      applyId: 'string',
      averageNights: 'string',
      billRecordTime: 'string',
      billingEntity: 'string',
      bookChannel: 'string',
      bookMode: 'string',
      bookReason: 'string',
      bookTime: 'string',
      bookerId: 'string',
      bookerJobNo: 'string',
      bookerName: 'string',
      brandGroup: 'string',
      brandName: 'string',
      businessTripResult: 'string',
      cancelOrModifyReason: 'string',
      cancelOrModifyScene: 'string',
      capitalDirection: 'string',
      cascadeDepartment: 'string',
      categoryDesc: 'string',
      checkInDate: 'string',
      checkoutDate: 'string',
      city: 'string',
      cityCode: 'string',
      cityCounty: 'string',
      cityCountyCode: 'string',
      corpRefundFee: 'number',
      corpTotalFee: 'number',
      costCenter: 'string',
      costCenterNumber: 'string',
      deductibleTax: 'number',
      department: 'string',
      departmentId: 'string',
      exceedReason: 'string',
      feeType: 'string',
      feeTypeDesc: 'string',
      fees: 'number',
      fines: 'number',
      fuPointFee: 'number',
      hotelName: 'string',
      index: 'string',
      insOrderId: 'string',
      insuranceNumber: 'string',
      insurancePrice: 'number',
      insuranceProductName: 'string',
      invoiceTitle: 'string',
      isEarlyDeparture: 'string',
      isNegotiation: 'string',
      isShareStr: 'string',
      nights: 'number',
      noAdvanceBookingReason: 'string',
      orderId: 'string',
      orderPrice: 'number',
      orderType: 'string',
      originalReserveRule: 'string',
      overApplyId: 'string',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      personRefundFee: 'number',
      personSettlePrice: 'number',
      primaryId: 'number',
      projectCode: 'string',
      projectName: 'string',
      promotionFee: 'number',
      recoverMoneyReceiptAmt: 'number',
      remark: 'string',
      reserveRule: 'string',
      roomNo: 'string',
      roomNumber: 'number',
      roomPrice: 'number',
      roomType: 'string',
      sceneId: 'string',
      sceneName: 'string',
      serviceFee: 'number',
      settleTypeDesc: 'string',
      settlementFee: 'number',
      settlementGrantFee: 'number',
      settlementTime: 'string',
      settlementType: 'string',
      star: 'string',
      status: 'number',
      statusDesc: 'string',
      taxRate: 'string',
      thirdItineraryId: 'string',
      totalNights: 'number',
      tradeActionDesc: 'string',
      travelerId: 'string',
      travelerJobNo: 'string',
      travelerMemberType: 'string',
      travelerMemberTypeName: 'string',
      travelerName: 'string',
      unbookedLowestPriceReason: 'string',
      voucherType: 'number',
      voucherTypeDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

