// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainBillSettlementQueryResponseBodyModuleDataList extends $dara.Model {
  adjustTime?: string;
  alipayTradeNo?: string;
  applyArrCityCode?: string;
  applyArrCityName?: string;
  applyDepCityCode?: string;
  applyDepCityName?: string;
  applyExtendField?: string;
  applyId?: string;
  approverEmail?: string;
  approverId?: string;
  approverName?: string;
  arrCityCode?: string;
  arrCityName?: string;
  arrDate?: string;
  arrStation?: string;
  arrStationLocation?: string;
  arrStationLocationCode?: string;
  arrTime?: string;
  baseLocation?: string;
  billRecordTime?: string;
  bookTime?: string;
  bookerId?: string;
  bookerJobNo?: string;
  bookerName?: string;
  businessTripResult?: string;
  cabinMaxPrice?: number;
  capitalDirection?: string;
  cascadeDepartment?: string;
  categoryDesc?: string;
  changeAffiliateNo?: string;
  changeApplyId?: string;
  changeFee?: number;
  changeResult?: string;
  coachNo?: string;
  costCenter?: string;
  costCenterNumber?: string;
  costDepartment?: string;
  coupon?: number;
  customContent?: string;
  deductibleTax?: number;
  depCityCode?: string;
  depCityName?: string;
  depStationLocation?: string;
  depStationLocationCode?: string;
  department?: string;
  departmentId?: string;
  deptDate?: string;
  deptStation?: string;
  deptTime?: string;
  exceedReason?: string;
  feeType?: string;
  feeTypeDesc?: string;
  foreignersTag?: string;
  index?: string;
  invoiceTitle?: string;
  isTransferOrder?: string;
  location?: string;
  longTicketNo?: string;
  mappingCompanyCode?: string;
  maxCabin?: string;
  orderId?: string;
  orderPrice?: number;
  orderTicketNo?: string;
  overApplyId?: string;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  position?: string;
  positionLevel?: string;
  primaryId?: number;
  printTicketPrice?: number;
  processorOaCode?: string;
  projectCode?: string;
  projectName?: string;
  refundAffiliateNo?: string;
  refundApplyId?: string;
  refundFee?: number;
  refundReason?: string;
  remark?: string;
  reserveMode?: string;
  runTime?: string;
  sceneId?: string;
  sceneName?: string;
  seatNo?: string;
  seatType?: string;
  serviceFee?: number;
  settleTypeDesc?: string;
  settlementFee?: number;
  settlementGrantFee?: number;
  settlementTime?: string;
  settlementType?: string;
  shortTicketNo?: string;
  sio?: string;
  speedPackageFee?: number;
  status?: number;
  statusDesc?: string;
  taxRate?: string;
  thirdItineraryId?: string;
  ticketCorpPayPrice?: string;
  ticketNo?: string;
  ticketPersonPayPrice?: string;
  ticketPrice?: number;
  tradeActionDesc?: string;
  trainNo?: string;
  trainType?: string;
  travelerEmail?: string;
  travelerId?: string;
  travelerJobNo?: string;
  travelerMemberType?: string;
  travelerMemberTypeName?: string;
  travelerName?: string;
  verifyFailedReason?: string;
  verifyStatus?: number;
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
      approverEmail: 'approver_email',
      approverId: 'approver_id',
      approverName: 'approver_name',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrDate: 'arr_date',
      arrStation: 'arr_station',
      arrStationLocation: 'arr_station_location',
      arrStationLocationCode: 'arr_station_location_code',
      arrTime: 'arr_time',
      baseLocation: 'base_location',
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
      costDepartment: 'cost_department',
      coupon: 'coupon',
      customContent: 'custom_content',
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
      foreignersTag: 'foreigners_tag',
      index: 'index',
      invoiceTitle: 'invoice_title',
      isTransferOrder: 'is_transfer_order',
      location: 'location',
      longTicketNo: 'long_ticket_no',
      mappingCompanyCode: 'mapping_company_code',
      maxCabin: 'max_cabin',
      orderId: 'order_id',
      orderPrice: 'order_price',
      orderTicketNo: 'order_ticket_no',
      overApplyId: 'over_apply_id',
      paymentDepartmentId: 'payment_department_id',
      paymentDepartmentName: 'payment_department_name',
      position: 'position',
      positionLevel: 'position_level',
      primaryId: 'primary_id',
      printTicketPrice: 'print_ticket_price',
      processorOaCode: 'processor_oa_code',
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
      sio: 'sio',
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
      travelerEmail: 'traveler_email',
      travelerId: 'traveler_id',
      travelerJobNo: 'traveler_job_no',
      travelerMemberType: 'traveler_member_type',
      travelerMemberTypeName: 'traveler_member_type_name',
      travelerName: 'traveler_name',
      verifyFailedReason: 'verify_failed_reason',
      verifyStatus: 'verify_status',
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
      approverEmail: 'string',
      approverId: 'string',
      approverName: 'string',
      arrCityCode: 'string',
      arrCityName: 'string',
      arrDate: 'string',
      arrStation: 'string',
      arrStationLocation: 'string',
      arrStationLocationCode: 'string',
      arrTime: 'string',
      baseLocation: 'string',
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
      costDepartment: 'string',
      coupon: 'number',
      customContent: 'string',
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
      foreignersTag: 'string',
      index: 'string',
      invoiceTitle: 'string',
      isTransferOrder: 'string',
      location: 'string',
      longTicketNo: 'string',
      mappingCompanyCode: 'string',
      maxCabin: 'string',
      orderId: 'string',
      orderPrice: 'number',
      orderTicketNo: 'string',
      overApplyId: 'string',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      position: 'string',
      positionLevel: 'string',
      primaryId: 'number',
      printTicketPrice: 'number',
      processorOaCode: 'string',
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
      sio: 'string',
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
      travelerEmail: 'string',
      travelerId: 'string',
      travelerJobNo: 'string',
      travelerMemberType: 'string',
      travelerMemberTypeName: 'string',
      travelerName: 'string',
      verifyFailedReason: 'string',
      verifyStatus: 'number',
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

export class TrainBillSettlementQueryResponseBodyModule extends $dara.Model {
  category?: number;
  corpId?: string;
  dataList?: TrainBillSettlementQueryResponseBodyModuleDataList[];
  periodEnd?: string;
  periodStart?: string;
  scrollId?: string;
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      corpId: 'corp_id',
      dataList: 'data_list',
      periodEnd: 'period_end',
      periodStart: 'period_start',
      scrollId: 'scroll_id',
      totalNum: 'total_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      corpId: 'string',
      dataList: { 'type': 'array', 'itemType': TrainBillSettlementQueryResponseBodyModuleDataList },
      periodEnd: 'string',
      periodStart: 'string',
      scrollId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainBillSettlementQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: TrainBillSettlementQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
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
      module: TrainBillSettlementQueryResponseBodyModule,
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

