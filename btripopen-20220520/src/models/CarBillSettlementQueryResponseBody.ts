// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarBillSettlementQueryResponseBodyModuleDataList extends $dara.Model {
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
  arrCity?: string;
  arrCityCode?: string;
  arrDate?: string;
  arrLocation?: string;
  arrTime?: string;
  baseLocation?: string;
  billRecordTime?: string;
  billingEntity?: string;
  bookModel?: string;
  bookTime?: string;
  bookerId?: string;
  bookerJobNo?: string;
  bookerName?: string;
  businessCategory?: string;
  capitalDirection?: string;
  carLevel?: string;
  cascadeDepartment?: string;
  categoryDesc?: string;
  costCenter?: string;
  costCenterNumber?: string;
  costDepartment?: string;
  coupon?: number;
  couponPrice?: number;
  customContent?: string;
  deductibleTax?: number;
  depCityCode?: string;
  department?: string;
  departmentId?: string;
  deptCity?: string;
  deptDate?: string;
  deptLocation?: string;
  deptTime?: string;
  driverAddDetail?: string;
  driverAddFee?: number;
  estimateDriveDistance?: string;
  estimatePrice?: number;
  feeType?: string;
  feeTypeDesc?: string;
  foreignersTag?: string;
  index?: string;
  invoiceTitle?: string;
  levelName?: string;
  location?: string;
  mappingCompanyCode?: string;
  memo?: string;
  orderId?: string;
  orderPrice?: number;
  overApplyId?: string;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  personSettleFee?: number;
  position?: string;
  positionLevel?: string;
  primaryId?: number;
  processorOaCode?: string;
  projectCode?: string;
  projectName?: string;
  protocolDiscountFee?: number;
  providerName?: string;
  realDriveDistance?: string;
  realFromAddr?: string;
  realToAddr?: string;
  remark?: string;
  sceneId?: string;
  sceneName?: string;
  serviceFee?: number;
  settleTypeDesc?: string;
  settlementFee?: number;
  settlementGrantFee?: number;
  settlementTime?: string;
  settlementType?: string;
  sio?: string;
  specialOrder?: string;
  specialReason?: string;
  status?: number;
  statusDesc?: string;
  subOrderId?: string;
  supplementApplyId?: string;
  taxRate?: string;
  thirdItineraryId?: string;
  timeType?: string;
  tradeActionDesc?: string;
  travelerEmail?: string;
  travelerId?: string;
  travelerJobNo?: string;
  travelerMemberType?: string;
  travelerMemberTypeName?: string;
  travelerName?: string;
  userConfirmDesc?: string;
  vehicleSceneId?: string;
  vehicleSceneName?: string;
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
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrDate: 'arr_date',
      arrLocation: 'arr_location',
      arrTime: 'arr_time',
      baseLocation: 'base_location',
      billRecordTime: 'bill_record_time',
      billingEntity: 'billing_entity',
      bookModel: 'book_model',
      bookTime: 'book_time',
      bookerId: 'booker_id',
      bookerJobNo: 'booker_job_no',
      bookerName: 'booker_name',
      businessCategory: 'business_category',
      capitalDirection: 'capital_direction',
      carLevel: 'car_level',
      cascadeDepartment: 'cascade_department',
      categoryDesc: 'category_desc',
      costCenter: 'cost_center',
      costCenterNumber: 'cost_center_number',
      costDepartment: 'cost_department',
      coupon: 'coupon',
      couponPrice: 'coupon_price',
      customContent: 'custom_content',
      deductibleTax: 'deductible_tax',
      depCityCode: 'dep_city_code',
      department: 'department',
      departmentId: 'department_id',
      deptCity: 'dept_city',
      deptDate: 'dept_date',
      deptLocation: 'dept_location',
      deptTime: 'dept_time',
      driverAddDetail: 'driver_add_detail',
      driverAddFee: 'driver_add_fee',
      estimateDriveDistance: 'estimate_drive_distance',
      estimatePrice: 'estimate_price',
      feeType: 'fee_type',
      feeTypeDesc: 'fee_type_desc',
      foreignersTag: 'foreigners_tag',
      index: 'index',
      invoiceTitle: 'invoice_title',
      levelName: 'level_name',
      location: 'location',
      mappingCompanyCode: 'mapping_company_code',
      memo: 'memo',
      orderId: 'order_id',
      orderPrice: 'order_price',
      overApplyId: 'over_apply_id',
      paymentDepartmentId: 'payment_department_id',
      paymentDepartmentName: 'payment_department_name',
      personSettleFee: 'person_settle_fee',
      position: 'position',
      positionLevel: 'position_level',
      primaryId: 'primary_id',
      processorOaCode: 'processor_oa_code',
      projectCode: 'project_code',
      projectName: 'project_name',
      protocolDiscountFee: 'protocol_discount_fee',
      providerName: 'provider_name',
      realDriveDistance: 'real_drive_distance',
      realFromAddr: 'real_from_addr',
      realToAddr: 'real_to_addr',
      remark: 'remark',
      sceneId: 'scene_id',
      sceneName: 'scene_name',
      serviceFee: 'service_fee',
      settleTypeDesc: 'settle_type_desc',
      settlementFee: 'settlement_fee',
      settlementGrantFee: 'settlement_grant_fee',
      settlementTime: 'settlement_time',
      settlementType: 'settlement_type',
      sio: 'sio',
      specialOrder: 'special_order',
      specialReason: 'special_reason',
      status: 'status',
      statusDesc: 'status_desc',
      subOrderId: 'sub_order_id',
      supplementApplyId: 'supplement_apply_id',
      taxRate: 'tax_rate',
      thirdItineraryId: 'third_itinerary_id',
      timeType: 'time_type',
      tradeActionDesc: 'trade_action_desc',
      travelerEmail: 'traveler_email',
      travelerId: 'traveler_id',
      travelerJobNo: 'traveler_job_no',
      travelerMemberType: 'traveler_member_type',
      travelerMemberTypeName: 'traveler_member_type_name',
      travelerName: 'traveler_name',
      userConfirmDesc: 'user_confirm_desc',
      vehicleSceneId: 'vehicle_scene_id',
      vehicleSceneName: 'vehicle_scene_name',
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
      arrCity: 'string',
      arrCityCode: 'string',
      arrDate: 'string',
      arrLocation: 'string',
      arrTime: 'string',
      baseLocation: 'string',
      billRecordTime: 'string',
      billingEntity: 'string',
      bookModel: 'string',
      bookTime: 'string',
      bookerId: 'string',
      bookerJobNo: 'string',
      bookerName: 'string',
      businessCategory: 'string',
      capitalDirection: 'string',
      carLevel: 'string',
      cascadeDepartment: 'string',
      categoryDesc: 'string',
      costCenter: 'string',
      costCenterNumber: 'string',
      costDepartment: 'string',
      coupon: 'number',
      couponPrice: 'number',
      customContent: 'string',
      deductibleTax: 'number',
      depCityCode: 'string',
      department: 'string',
      departmentId: 'string',
      deptCity: 'string',
      deptDate: 'string',
      deptLocation: 'string',
      deptTime: 'string',
      driverAddDetail: 'string',
      driverAddFee: 'number',
      estimateDriveDistance: 'string',
      estimatePrice: 'number',
      feeType: 'string',
      feeTypeDesc: 'string',
      foreignersTag: 'string',
      index: 'string',
      invoiceTitle: 'string',
      levelName: 'string',
      location: 'string',
      mappingCompanyCode: 'string',
      memo: 'string',
      orderId: 'string',
      orderPrice: 'number',
      overApplyId: 'string',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      personSettleFee: 'number',
      position: 'string',
      positionLevel: 'string',
      primaryId: 'number',
      processorOaCode: 'string',
      projectCode: 'string',
      projectName: 'string',
      protocolDiscountFee: 'number',
      providerName: 'string',
      realDriveDistance: 'string',
      realFromAddr: 'string',
      realToAddr: 'string',
      remark: 'string',
      sceneId: 'string',
      sceneName: 'string',
      serviceFee: 'number',
      settleTypeDesc: 'string',
      settlementFee: 'number',
      settlementGrantFee: 'number',
      settlementTime: 'string',
      settlementType: 'string',
      sio: 'string',
      specialOrder: 'string',
      specialReason: 'string',
      status: 'number',
      statusDesc: 'string',
      subOrderId: 'string',
      supplementApplyId: 'string',
      taxRate: 'string',
      thirdItineraryId: 'string',
      timeType: 'string',
      tradeActionDesc: 'string',
      travelerEmail: 'string',
      travelerId: 'string',
      travelerJobNo: 'string',
      travelerMemberType: 'string',
      travelerMemberTypeName: 'string',
      travelerName: 'string',
      userConfirmDesc: 'string',
      vehicleSceneId: 'string',
      vehicleSceneName: 'string',
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

export class CarBillSettlementQueryResponseBodyModule extends $dara.Model {
  category?: number;
  corpId?: string;
  dataList?: CarBillSettlementQueryResponseBodyModuleDataList[];
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
      dataList: { 'type': 'array', 'itemType': CarBillSettlementQueryResponseBodyModuleDataList },
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

export class CarBillSettlementQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: CarBillSettlementQueryResponseBodyModule;
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
      module: CarBillSettlementQueryResponseBodyModule,
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

