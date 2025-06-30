// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CooperatorHotelBillSettlementQueryResponseBodyModuleItems extends $dara.Model {
  adjustTime?: string;
  /**
   * @example
   * 124
   */
  alipayTradeNo?: string;
  /**
   * @example
   * 123
   */
  applyArrCityCode?: string;
  applyArrCityName?: string;
  /**
   * @example
   * 123
   */
  applyDepCityCode?: string;
  applyDepCityName?: string;
  applyExtendField?: string;
  /**
   * @example
   * sdasdas123324
   */
  applyId?: string;
  /**
   * @example
   * 1.0
   */
  averageNights?: number;
  baseLocation?: string;
  /**
   * @example
   * 2023-01-01 00:00:00
   */
  billRecordTime?: string;
  bookChannel?: string;
  bookMode?: string;
  bookReason?: string;
  /**
   * @example
   * 2023-01-01 00:00:00
   */
  bookTime?: string;
  /**
   * @example
   * 123
   */
  bookerId?: string;
  /**
   * @example
   * zs123
   */
  bookerJobNo?: string;
  bookerName?: string;
  brandGroup?: string;
  brandName?: string;
  businessTripResult?: string;
  capitalDirection?: string;
  cascadeDepartment?: string;
  categoryDesc?: string;
  /**
   * @example
   * 2024-02-13
   */
  checkInDate?: string;
  /**
   * @example
   * 2024-02-15
   */
  checkoutDate?: string;
  city?: string;
  /**
   * @example
   * 330100
   */
  cityCode?: string;
  cityCounty?: string;
  /**
   * @example
   * 330100
   */
  cityCountyCode?: number;
  /**
   * @example
   * IN240102113438277278
   */
  cooperatorBillCode?: string;
  cooperatorName?: string;
  /**
   * @example
   * HO20240125162800280928
   */
  cooperatorOrderId?: string;
  /**
   * @example
   * 0.1
   */
  corpRefundFee?: number;
  /**
   * @example
   * 100.0
   */
  corpTotalFee?: number;
  costCenter?: string;
  /**
   * @example
   * 123
   */
  costCenterNumber?: string;
  costDepartment?: string;
  customContent?: string;
  department?: string;
  /**
   * @example
   * 123
   */
  departmentId?: string;
  exceedReason?: string;
  feeType?: string;
  feeTypeDesc?: string;
  /**
   * @example
   * 10.0
   */
  fees?: number;
  /**
   * @example
   * 1.0
   */
  fines?: number;
  /**
   * @example
   * 10.0
   */
  fuPointFee?: number;
  hotelName?: string;
  /**
   * @example
   * 1
   */
  index?: string;
  invoiceTitle?: string;
  isEarlyDeparture?: string;
  isNegotiation?: string;
  isShareStr?: string;
  mappingCompanyCode?: string;
  /**
   * @example
   * 2
   */
  nights?: number;
  /**
   * @example
   * 3137168772101111000
   */
  orderId?: string;
  /**
   * @example
   * 100.0
   */
  orderPrice?: number;
  orderStatusDesc?: string;
  orderType?: string;
  /**
   * @example
   * 123
   */
  overApplyId?: string;
  /**
   * @example
   * 123
   */
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  /**
   * @example
   * 0.1
   */
  personRefundFee?: number;
  /**
   * @example
   * 10.0
   */
  personSettlePrice?: number;
  position?: string;
  positionLevel?: string;
  /**
   * @example
   * 72328485
   */
  primaryId?: number;
  processorOaCode?: string;
  /**
   * @example
   * acs
   */
  projectCode?: string;
  projectName?: string;
  /**
   * @example
   * 0.0
   */
  promotionFee?: number;
  remark?: string;
  /**
   * @example
   * 10
   */
  reserveRule?: number;
  roomNo?: string;
  /**
   * @example
   * 1
   */
  roomNumber?: number;
  /**
   * @example
   * 105.0
   */
  roomPrice?: number;
  roomType?: string;
  /**
   * @example
   * 5.0
   */
  serviceFee?: number;
  settleTypeDesc?: string;
  /**
   * @example
   * 110.0
   */
  settlementFee?: number;
  /**
   * @example
   * 0.0
   */
  settlementGrantFee?: number;
  /**
   * @example
   * 2023-01-01 00:00:00
   */
  settlementTime?: string;
  settlementType?: string;
  star?: string;
  /**
   * @example
   * 2
   */
  status?: number;
  statusDesc?: string;
  /**
   * @example
   * 166564408
   */
  subOrderId?: string;
  /**
   * @example
   * 9%
   */
  taxRate?: string;
  /**
   * @example
   * 1
   */
  thirdInvoiceId?: string;
  /**
   * @example
   * 123
   */
  thirdItineraryId?: string;
  /**
   * @example
   * 2
   */
  totalNights?: number;
  tradeActionDesc?: string;
  /**
   * @example
   * 123
   */
  travelerId?: string;
  /**
   * @example
   * zs123
   */
  travelerJobNo?: string;
  travelerMemberType?: string;
  travelerMemberTypeName?: string;
  travelerName?: string;
  /**
   * @example
   * 1
   */
  voucherType?: number;
  voucherTypeDesc?: string;
  static names(): { [key: string]: string } {
    return {
      adjustTime: 'adjust_time',
      alipayTradeNo: 'alipay_trade_no',
      applyArrCityCode: 'apply_arr_city_code',
      applyArrCityName: 'apply_arr_city_name',
      applyDepCityCode: 'apply_dep_city_code',
      applyDepCityName: 'apply_dep_city_name',
      applyExtendField: 'apply_extend_field',
      applyId: 'apply_id',
      averageNights: 'average_nights',
      baseLocation: 'base_location',
      billRecordTime: 'bill_record_time',
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
      capitalDirection: 'capital_direction',
      cascadeDepartment: 'cascade_department',
      categoryDesc: 'category_desc',
      checkInDate: 'check_in_date',
      checkoutDate: 'checkout_date',
      city: 'city',
      cityCode: 'city_code',
      cityCounty: 'city_county',
      cityCountyCode: 'city_county_code',
      cooperatorBillCode: 'cooperator_bill_code',
      cooperatorName: 'cooperator_name',
      cooperatorOrderId: 'cooperator_order_id',
      corpRefundFee: 'corp_refund_fee',
      corpTotalFee: 'corp_total_fee',
      costCenter: 'cost_center',
      costCenterNumber: 'cost_center_number',
      costDepartment: 'cost_department',
      customContent: 'custom_content',
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
      invoiceTitle: 'invoice_title',
      isEarlyDeparture: 'is_early_departure',
      isNegotiation: 'is_negotiation',
      isShareStr: 'is_share_str',
      mappingCompanyCode: 'mapping_company_code',
      nights: 'nights',
      orderId: 'order_id',
      orderPrice: 'order_price',
      orderStatusDesc: 'order_status_desc',
      orderType: 'order_type',
      overApplyId: 'over_apply_id',
      paymentDepartmentId: 'payment_department_id',
      paymentDepartmentName: 'payment_department_name',
      personRefundFee: 'person_refund_fee',
      personSettlePrice: 'person_settle_price',
      position: 'position',
      positionLevel: 'position_level',
      primaryId: 'primary_id',
      processorOaCode: 'processor_oa_code',
      projectCode: 'project_code',
      projectName: 'project_name',
      promotionFee: 'promotion_fee',
      remark: 'remark',
      reserveRule: 'reserve_rule',
      roomNo: 'room_no',
      roomNumber: 'room_number',
      roomPrice: 'room_price',
      roomType: 'room_type',
      serviceFee: 'service_fee',
      settleTypeDesc: 'settle_type_desc',
      settlementFee: 'settlement_fee',
      settlementGrantFee: 'settlement_grant_fee',
      settlementTime: 'settlement_time',
      settlementType: 'settlement_type',
      star: 'star',
      status: 'status',
      statusDesc: 'status_desc',
      subOrderId: 'sub_order_id',
      taxRate: 'tax_rate',
      thirdInvoiceId: 'third_invoice_id',
      thirdItineraryId: 'third_itinerary_id',
      totalNights: 'total_nights',
      tradeActionDesc: 'trade_action_desc',
      travelerId: 'traveler_id',
      travelerJobNo: 'traveler_job_no',
      travelerMemberType: 'traveler_member_type',
      travelerMemberTypeName: 'traveler_member_type_name',
      travelerName: 'traveler_name',
      voucherType: 'voucher_type',
      voucherTypeDesc: 'voucher_type_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustTime: 'string',
      alipayTradeNo: 'string',
      applyArrCityCode: 'string',
      applyArrCityName: 'string',
      applyDepCityCode: 'string',
      applyDepCityName: 'string',
      applyExtendField: 'string',
      applyId: 'string',
      averageNights: 'number',
      baseLocation: 'string',
      billRecordTime: 'string',
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
      capitalDirection: 'string',
      cascadeDepartment: 'string',
      categoryDesc: 'string',
      checkInDate: 'string',
      checkoutDate: 'string',
      city: 'string',
      cityCode: 'string',
      cityCounty: 'string',
      cityCountyCode: 'number',
      cooperatorBillCode: 'string',
      cooperatorName: 'string',
      cooperatorOrderId: 'string',
      corpRefundFee: 'number',
      corpTotalFee: 'number',
      costCenter: 'string',
      costCenterNumber: 'string',
      costDepartment: 'string',
      customContent: 'string',
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
      invoiceTitle: 'string',
      isEarlyDeparture: 'string',
      isNegotiation: 'string',
      isShareStr: 'string',
      mappingCompanyCode: 'string',
      nights: 'number',
      orderId: 'string',
      orderPrice: 'number',
      orderStatusDesc: 'string',
      orderType: 'string',
      overApplyId: 'string',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      personRefundFee: 'number',
      personSettlePrice: 'number',
      position: 'string',
      positionLevel: 'string',
      primaryId: 'number',
      processorOaCode: 'string',
      projectCode: 'string',
      projectName: 'string',
      promotionFee: 'number',
      remark: 'string',
      reserveRule: 'number',
      roomNo: 'string',
      roomNumber: 'number',
      roomPrice: 'number',
      roomType: 'string',
      serviceFee: 'number',
      settleTypeDesc: 'string',
      settlementFee: 'number',
      settlementGrantFee: 'number',
      settlementTime: 'string',
      settlementType: 'string',
      star: 'string',
      status: 'number',
      statusDesc: 'string',
      subOrderId: 'string',
      taxRate: 'string',
      thirdInvoiceId: 'string',
      thirdItineraryId: 'string',
      totalNights: 'number',
      tradeActionDesc: 'string',
      travelerId: 'string',
      travelerJobNo: 'string',
      travelerMemberType: 'string',
      travelerMemberTypeName: 'string',
      travelerName: 'string',
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

