// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainBillSettlementQueryResponseBodyModuleDataList extends $dara.Model {
  /**
   * @example
   * 2021123432260
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
   * 103189557
   */
  applyId?: string;
  arrCityCode?: string;
  arrCityName?: string;
  /**
   * @example
   * 2021-10-13
   */
  arrDate?: string;
  arrStation?: string;
  arrStationLocation?: string;
  arrStationLocationCode?: string;
  /**
   * @example
   * 12:30
   */
  arrTime?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  billRecordTime?: string;
  /**
   * @example
   * 2021-10-08 23:38:55
   */
  bookTime?: string;
  /**
   * @example
   * al_xinuan.zsy
   */
  bookerId?: string;
  bookerJobNo?: string;
  bookerName?: string;
  businessTripResult?: string;
  cabinMaxPrice?: number;
  /**
   * @example
   * 1
   */
  capitalDirection?: string;
  cascadeDepartment?: string;
  categoryDesc?: string;
  changeAffiliateNo?: string;
  changeApplyId?: string;
  /**
   * @example
   * 23.0
   */
  changeFee?: number;
  changeResult?: string;
  coachNo?: string;
  costCenter?: string;
  /**
   * @example
   * T85
   */
  costCenterNumber?: string;
  /**
   * @example
   * 0
   */
  coupon?: number;
  deductibleTax?: number;
  depCityCode?: string;
  depCityName?: string;
  depStationLocation?: string;
  depStationLocationCode?: string;
  department?: string;
  departmentId?: string;
  /**
   * @example
   * 2021-10-14
   */
  deptDate?: string;
  deptStation?: string;
  /**
   * @example
   * 09:44
   */
  deptTime?: string;
  exceedReason?: string;
  /**
   * @example
   * 6001
   */
  feeType?: string;
  feeTypeDesc?: string;
  /**
   * @example
   * 4740293
   */
  index?: string;
  invoiceTitle?: string;
  isTransferOrder?: string;
  longTicketNo?: string;
  maxCabin?: string;
  /**
   * @example
   * 23432692343243432
   */
  orderId?: string;
  /**
   * @example
   * 350
   */
  orderPrice?: number;
  orderTicketNo?: string;
  /**
   * @example
   * 534545345
   */
  overApplyId?: string;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  /**
   * @example
   * 4740293
   */
  primaryId?: number;
  printTicketPrice?: number;
  /**
   * @example
   * 2345235435
   */
  projectCode?: string;
  projectName?: string;
  refundAffiliateNo?: string;
  refundApplyId?: string;
  /**
   * @example
   * 0
   */
  refundFee?: number;
  refundReason?: string;
  remark?: string;
  reserveMode?: string;
  runTime?: string;
  sceneId?: string;
  sceneName?: string;
  /**
   * @example
   * 004F
   */
  seatNo?: string;
  seatType?: string;
  /**
   * @example
   * 23.0
   */
  serviceFee?: number;
  settleTypeDesc?: string;
  /**
   * @example
   * 350
   */
  settlementFee?: number;
  /**
   * @example
   * 4.56
   */
  settlementGrantFee?: number;
  /**
   * @example
   * 2021-10-08 23:39:01
   */
  settlementTime?: string;
  /**
   * @example
   * 2
   */
  settlementType?: string;
  shortTicketNo?: string;
  speedPackageFee?: number;
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
  ticketCorpPayPrice?: string;
  /**
   * @example
   * 2115242342342424067354
   */
  ticketNo?: string;
  ticketPersonPayPrice?: string;
  /**
   * @example
   * 350
   */
  ticketPrice?: number;
  tradeActionDesc?: string;
  /**
   * @example
   * G906
   */
  trainNo?: string;
  trainType?: string;
  travelerId?: string;
  travelerJobNo?: string;
  travelerMemberType?: string;
  travelerMemberTypeName?: string;
  travelerName?: string;
  /**
   * @example
   * 11
   */
  voucherType?: number;
  voucherTypeDesc?: string;
  static names(): { [key: string]: string } {
    return {
      alipayTradeNo: 'alipay_trade_no',
      applyArrCityCode: 'apply_arr_city_code',
      applyArrCityName: 'apply_arr_city_name',
      applyDepCityCode: 'apply_dep_city_code',
      applyDepCityName: 'apply_dep_city_name',
      applyExtendField: 'apply_extend_field',
      applyId: 'apply_id',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrDate: 'arr_date',
      arrStation: 'arr_station',
      arrStationLocation: 'arr_station_location',
      arrStationLocationCode: 'arr_station_location_code',
      arrTime: 'arr_time',
      billRecordTime: 'bill_record_time',
      bookTime: 'book_time',
      bookerId: 'booker_id',
      bookerJobNo: 'booker_job_no',
      bookerName: 'booker_name',
      businessTripResult: 'business_trip_result',
      cabinMaxPrice: 'cabin_max_price',
      capitalDirection: 'capital_direction',
      cascadeDepartment: 'cascade_department',
      categoryDesc: 'category_desc',
      changeAffiliateNo: 'change_affiliate_no',
      changeApplyId: 'change_apply_id',
      changeFee: 'change_fee',
      changeResult: 'change_result',
      coachNo: 'coach_no',
      costCenter: 'cost_center',
      costCenterNumber: 'cost_center_number',
      coupon: 'coupon',
      deductibleTax: 'deductible_tax',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depStationLocation: 'dep_station_location',
      depStationLocationCode: 'dep_station_location_code',
      department: 'department',
      departmentId: 'department_id',
      deptDate: 'dept_date',
      deptStation: 'dept_station',
      deptTime: 'dept_time',
      exceedReason: 'exceed_reason',
      feeType: 'fee_type',
      feeTypeDesc: 'fee_type_desc',
      index: 'index',
      invoiceTitle: 'invoice_title',
      isTransferOrder: 'is_transfer_order',
      longTicketNo: 'long_ticket_no',
      maxCabin: 'max_cabin',
      orderId: 'order_id',
      orderPrice: 'order_price',
      orderTicketNo: 'order_ticket_no',
      overApplyId: 'over_apply_id',
      paymentDepartmentId: 'payment_department_id',
      paymentDepartmentName: 'payment_department_name',
      primaryId: 'primary_id',
      printTicketPrice: 'print_ticket_price',
      projectCode: 'project_code',
      projectName: 'project_name',
      refundAffiliateNo: 'refund_affiliate_no',
      refundApplyId: 'refund_apply_id',
      refundFee: 'refund_fee',
      refundReason: 'refund_reason',
      remark: 'remark',
      reserveMode: 'reserve_mode',
      runTime: 'run_time',
      sceneId: 'scene_id',
      sceneName: 'scene_name',
      seatNo: 'seat_no',
      seatType: 'seat_type',
      serviceFee: 'service_fee',
      settleTypeDesc: 'settle_type_desc',
      settlementFee: 'settlement_fee',
      settlementGrantFee: 'settlement_grant_fee',
      settlementTime: 'settlement_time',
      settlementType: 'settlement_type',
      shortTicketNo: 'short_ticket_no',
      speedPackageFee: 'speed_package_fee',
      status: 'status',
      statusDesc: 'status_desc',
      taxRate: 'tax_rate',
      thirdItineraryId: 'third_itinerary_id',
      ticketCorpPayPrice: 'ticket_corp_pay_price',
      ticketNo: 'ticket_no',
      ticketPersonPayPrice: 'ticket_person_pay_price',
      ticketPrice: 'ticket_price',
      tradeActionDesc: 'trade_action_desc',
      trainNo: 'train_no',
      trainType: 'train_type',
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
      alipayTradeNo: 'string',
      applyArrCityCode: 'string',
      applyArrCityName: 'string',
      applyDepCityCode: 'string',
      applyDepCityName: 'string',
      applyExtendField: 'string',
      applyId: 'string',
      arrCityCode: 'string',
      arrCityName: 'string',
      arrDate: 'string',
      arrStation: 'string',
      arrStationLocation: 'string',
      arrStationLocationCode: 'string',
      arrTime: 'string',
      billRecordTime: 'string',
      bookTime: 'string',
      bookerId: 'string',
      bookerJobNo: 'string',
      bookerName: 'string',
      businessTripResult: 'string',
      cabinMaxPrice: 'number',
      capitalDirection: 'string',
      cascadeDepartment: 'string',
      categoryDesc: 'string',
      changeAffiliateNo: 'string',
      changeApplyId: 'string',
      changeFee: 'number',
      changeResult: 'string',
      coachNo: 'string',
      costCenter: 'string',
      costCenterNumber: 'string',
      coupon: 'number',
      deductibleTax: 'number',
      depCityCode: 'string',
      depCityName: 'string',
      depStationLocation: 'string',
      depStationLocationCode: 'string',
      department: 'string',
      departmentId: 'string',
      deptDate: 'string',
      deptStation: 'string',
      deptTime: 'string',
      exceedReason: 'string',
      feeType: 'string',
      feeTypeDesc: 'string',
      index: 'string',
      invoiceTitle: 'string',
      isTransferOrder: 'string',
      longTicketNo: 'string',
      maxCabin: 'string',
      orderId: 'string',
      orderPrice: 'number',
      orderTicketNo: 'string',
      overApplyId: 'string',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      primaryId: 'number',
      printTicketPrice: 'number',
      projectCode: 'string',
      projectName: 'string',
      refundAffiliateNo: 'string',
      refundApplyId: 'string',
      refundFee: 'number',
      refundReason: 'string',
      remark: 'string',
      reserveMode: 'string',
      runTime: 'string',
      sceneId: 'string',
      sceneName: 'string',
      seatNo: 'string',
      seatType: 'string',
      serviceFee: 'number',
      settleTypeDesc: 'string',
      settlementFee: 'number',
      settlementGrantFee: 'number',
      settlementTime: 'string',
      settlementType: 'string',
      shortTicketNo: 'string',
      speedPackageFee: 'number',
      status: 'number',
      statusDesc: 'string',
      taxRate: 'string',
      thirdItineraryId: 'string',
      ticketCorpPayPrice: 'string',
      ticketNo: 'string',
      ticketPersonPayPrice: 'string',
      ticketPrice: 'number',
      tradeActionDesc: 'string',
      trainNo: 'string',
      trainType: 'string',
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

