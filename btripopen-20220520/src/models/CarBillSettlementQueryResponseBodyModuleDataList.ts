// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarBillSettlementQueryResponseBodyModuleDataList extends $dara.Model {
  adjustTime?: string;
  /**
   * @example
   * 34534543545345
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
  applyId?: string;
  arrCity?: string;
  arrCityCode?: string;
  /**
   * @example
   * 2022-07-02
   */
  arrDate?: string;
  arrLocation?: string;
  /**
   * @example
   * 13:51:43
   */
  arrTime?: string;
  baseLocation?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  billRecordTime?: string;
  billingEntity?: string;
  bookModel?: string;
  /**
   * @example
   * 2022-05-15 22:27:00
   */
  bookTime?: string;
  bookerId?: string;
  /**
   * @example
   * 70022164
   */
  bookerJobNo?: string;
  bookerName?: string;
  businessCategory?: string;
  /**
   * @example
   * 1
   */
  capitalDirection?: string;
  carLevel?: string;
  cascadeDepartment?: string;
  categoryDesc?: string;
  costCenter?: string;
  /**
   * @example
   * 2391-CN90.150
   */
  costCenterNumber?: string;
  costDepartment?: string;
  /**
   * @example
   * 1
   */
  coupon?: number;
  /**
   * @example
   * 12.7
   */
  couponPrice?: number;
  customContent?: string;
  deductibleTax?: number;
  depCityCode?: string;
  department?: string;
  departmentId?: string;
  deptCity?: string;
  /**
   * @example
   * 2021-10-13
   */
  deptDate?: string;
  deptLocation?: string;
  /**
   * @example
   * 13:46:05
   */
  deptTime?: string;
  driverAddDetail?: string;
  driverAddFee?: number;
  /**
   * @example
   * 29.07
   */
  estimateDriveDistance?: string;
  /**
   * @example
   * 69
   */
  estimatePrice?: number;
  /**
   * @example
   * 40107
   */
  feeType?: string;
  feeTypeDesc?: string;
  /**
   * @example
   * 4988580
   */
  index?: string;
  invoiceTitle?: string;
  levelName?: string;
  mappingCompanyCode?: string;
  memo?: string;
  /**
   * @example
   * 110285961234324
   */
  orderId?: string;
  /**
   * @example
   * 12.7
   */
  orderPrice?: number;
  /**
   * @example
   * 34535465346
   */
  overApplyId?: string;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  /**
   * @example
   * 0
   */
  personSettleFee?: number;
  position?: string;
  positionLevel?: string;
  /**
   * @example
   * 4988580
   */
  primaryId?: number;
  processorOaCode?: string;
  /**
   * @example
   * 23423432423
   */
  projectCode?: string;
  projectName?: string;
  protocolDiscountFee?: number;
  providerName?: string;
  /**
   * @example
   * 0.00
   */
  realDriveDistance?: string;
  realFromAddr?: string;
  realToAddr?: string;
  remark?: string;
  sceneId?: string;
  sceneName?: string;
  /**
   * @example
   * 12.7
   */
  serviceFee?: number;
  settleTypeDesc?: string;
  /**
   * @example
   * 5
   */
  settlementFee?: number;
  /**
   * @example
   * 6.11
   */
  settlementGrantFee?: number;
  /**
   * @example
   * 2022-05-15 22:27:00
   */
  settlementTime?: string;
  /**
   * @example
   * 4
   */
  settlementType?: string;
  specialOrder?: string;
  specialReason?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  statusDesc?: string;
  /**
   * @example
   * 123123232
   */
  subOrderId?: string;
  supplementApplyId?: string;
  /**
   * @remarks
   * 税率
   * 
   * @example
   * 6%
   */
  taxRate?: string;
  thirdItineraryId?: string;
  timeType?: string;
  tradeActionDesc?: string;
  travelerId?: string;
  /**
   * @example
   * 70022164
   */
  travelerJobNo?: string;
  travelerMemberType?: string;
  travelerMemberTypeName?: string;
  travelerName?: string;
  userConfirmDesc?: string;
  vehicleSceneId?: string;
  vehicleSceneName?: string;
  /**
   * @example
   * 11
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
      index: 'index',
      invoiceTitle: 'invoice_title',
      levelName: 'level_name',
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
      index: 'string',
      invoiceTitle: 'string',
      levelName: 'string',
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

