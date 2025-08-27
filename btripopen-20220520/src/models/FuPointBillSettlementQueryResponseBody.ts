// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FuPointBillSettlementQueryResponseBodyModuleItems extends $dara.Model {
  adjustTime?: string;
  /**
   * @example
   * 123aaa
   */
  alipayId?: string;
  /**
   * @example
   * 124
   */
  alipayTradeNo?: string;
  /**
   * @example
   * CD
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
   * 1424041616244499302
   */
  applyId?: string;
  /**
   * @example
   * 123@qq.com
   */
  approverEmail?: string;
  /**
   * @example
   * 11
   */
  approverId?: string;
  approverName?: string;
  /**
   * @example
   * 10.5
   */
  awardNum?: number;
  /**
   * @example
   * 100.12
   */
  basisAmount?: string;
  /**
   * @example
   * 2023-01-01 00:00:00
   */
  billRecordTime?: string;
  billingEntity?: string;
  bookMode?: string;
  /**
   * @example
   * 2023-01-01 00:00:00
   */
  bookTime?: string;
  /**
   * @example
   * 1234
   */
  bookerId?: string;
  /**
   * @example
   * zs123
   */
  bookerJobNo?: string;
  bookerName?: string;
  capitalDirection?: string;
  cascadeDepartment?: string;
  categoryDesc?: string;
  /**
   * @example
   * 100.32
   */
  categoryOrderSettlePrice?: string;
  costCenter?: string;
  /**
   * @example
   * cs1
   */
  costCenterNumber?: string;
  costDepartment?: string;
  /**
   * @example
   * 0.11
   */
  deductibleTax?: number;
  department?: string;
  /**
   * @example
   * 1112
   */
  departmentId?: string;
  feeType?: string;
  feeTypeDesc?: string;
  foreignersTag?: string;
  /**
   * @example
   * 10
   */
  grantNum?: number;
  /**
   * @example
   * 1
   */
  index?: string;
  invoiceTitle?: string;
  /**
   * @remarks
   * Location
   */
  location?: string;
  makeInvoice?: string;
  mappingCompanyCode?: string;
  /**
   * @example
   * 4801105714092
   */
  orderId?: string;
  orderStatusDesc?: string;
  originCategory?: string;
  /**
   * @example
   * 111234
   */
  originOrderId?: string;
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
   * 93746933
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
   * 111224324
   */
  purchaseOrderId?: string;
  remark?: string;
  /**
   * @example
   * 10.45
   */
  saveAmount?: number;
  /**
   * @example
   * 1
   */
  sceneId?: string;
  sceneName?: string;
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
  /**
   * @example
   * 166564408
   */
  showSubOrderId?: string;
  /**
   * @remarks
   * SIO
   * 
   * @example
   * SIO
   */
  sio?: string;
  /**
   * @example
   * 2
   */
  status?: number;
  statusDesc?: string;
  /**
   * @example
   * 1019199938284381
   */
  subOrderId?: string;
  /**
   * @example
   * 9%
   */
  taxRate?: string;
  /**
   * @example
   * cs2
   */
  thirdInvoiceId?: string;
  /**
   * @example
   * 11
   */
  thirdItineraryId?: string;
  tradeActionDesc?: string;
  tradeReason?: string;
  /**
   * @example
   * 123@qq.com
   */
  travelerEmail?: string;
  /**
   * @example
   * 1234
   */
  travelerId?: string;
  /**
   * @example
   * A1234
   */
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
      adjustTime: 'adjust_time',
      alipayId: 'alipay_id',
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
      awardNum: 'award_num',
      basisAmount: 'basis_amount',
      billRecordTime: 'bill_record_time',
      billingEntity: 'billing_entity',
      bookMode: 'book_mode',
      bookTime: 'book_time',
      bookerId: 'booker_id',
      bookerJobNo: 'booker_job_no',
      bookerName: 'booker_name',
      capitalDirection: 'capital_direction',
      cascadeDepartment: 'cascade_department',
      categoryDesc: 'category_desc',
      categoryOrderSettlePrice: 'category_order_settle_price',
      costCenter: 'cost_center',
      costCenterNumber: 'cost_center_number',
      costDepartment: 'cost_department',
      deductibleTax: 'deductible_tax',
      department: 'department',
      departmentId: 'department_id',
      feeType: 'fee_type',
      feeTypeDesc: 'fee_type_desc',
      foreignersTag: 'foreigners_tag',
      grantNum: 'grant_num',
      index: 'index',
      invoiceTitle: 'invoice_title',
      location: 'location',
      makeInvoice: 'make_invoice',
      mappingCompanyCode: 'mapping_company_code',
      orderId: 'order_id',
      orderStatusDesc: 'order_status_desc',
      originCategory: 'origin_category',
      originOrderId: 'origin_order_id',
      overApplyId: 'over_apply_id',
      paymentDepartmentId: 'payment_department_id',
      paymentDepartmentName: 'payment_department_name',
      primaryId: 'primary_id',
      processorOaCode: 'processor_oa_code',
      projectCode: 'project_code',
      projectName: 'project_name',
      purchaseOrderId: 'purchase_order_id',
      remark: 'remark',
      saveAmount: 'save_amount',
      sceneId: 'scene_id',
      sceneName: 'scene_name',
      settleTypeDesc: 'settle_type_desc',
      settlementFee: 'settlement_fee',
      settlementGrantFee: 'settlement_grant_fee',
      settlementTime: 'settlement_time',
      settlementType: 'settlement_type',
      showSubOrderId: 'show_sub_order_id',
      sio: 'sio',
      status: 'status',
      statusDesc: 'status_desc',
      subOrderId: 'sub_order_id',
      taxRate: 'tax_rate',
      thirdInvoiceId: 'third_invoice_id',
      thirdItineraryId: 'third_itinerary_id',
      tradeActionDesc: 'trade_action_desc',
      tradeReason: 'trade_reason',
      travelerEmail: 'traveler_email',
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
      alipayId: 'string',
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
      awardNum: 'number',
      basisAmount: 'string',
      billRecordTime: 'string',
      billingEntity: 'string',
      bookMode: 'string',
      bookTime: 'string',
      bookerId: 'string',
      bookerJobNo: 'string',
      bookerName: 'string',
      capitalDirection: 'string',
      cascadeDepartment: 'string',
      categoryDesc: 'string',
      categoryOrderSettlePrice: 'string',
      costCenter: 'string',
      costCenterNumber: 'string',
      costDepartment: 'string',
      deductibleTax: 'number',
      department: 'string',
      departmentId: 'string',
      feeType: 'string',
      feeTypeDesc: 'string',
      foreignersTag: 'string',
      grantNum: 'number',
      index: 'string',
      invoiceTitle: 'string',
      location: 'string',
      makeInvoice: 'string',
      mappingCompanyCode: 'string',
      orderId: 'string',
      orderStatusDesc: 'string',
      originCategory: 'string',
      originOrderId: 'string',
      overApplyId: 'string',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      primaryId: 'number',
      processorOaCode: 'string',
      projectCode: 'string',
      projectName: 'string',
      purchaseOrderId: 'string',
      remark: 'string',
      saveAmount: 'number',
      sceneId: 'string',
      sceneName: 'string',
      settleTypeDesc: 'string',
      settlementFee: 'number',
      settlementGrantFee: 'number',
      settlementTime: 'string',
      settlementType: 'string',
      showSubOrderId: 'string',
      sio: 'string',
      status: 'number',
      statusDesc: 'string',
      subOrderId: 'string',
      taxRate: 'string',
      thirdInvoiceId: 'string',
      thirdItineraryId: 'string',
      tradeActionDesc: 'string',
      tradeReason: 'string',
      travelerEmail: 'string',
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

export class FuPointBillSettlementQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 10
   */
  category?: number;
  /**
   * @example
   * corpid
   */
  corpId?: string;
  items?: FuPointBillSettlementQueryResponseBodyModuleItems[];
  /**
   * @example
   * 2022-07-02
   */
  periodEnd?: string;
  /**
   * @example
   * 2021-10-13
   */
  periodStart?: string;
  /**
   * @example
   * 1qwe
   */
  scrollId?: string;
  /**
   * @example
   * 30
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      corpId: 'corp_id',
      items: 'items',
      periodEnd: 'period_end',
      periodStart: 'period_start',
      scrollId: 'scroll_id',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      corpId: 'string',
      items: { 'type': 'array', 'itemType': FuPointBillSettlementQueryResponseBodyModuleItems },
      periodEnd: 'string',
      periodStart: 'string',
      scrollId: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FuPointBillSettlementQueryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: number;
  /**
   * @remarks
   * module。
   */
  module?: FuPointBillSettlementQueryResponseBodyModule;
  /**
   * @example
   * true
   */
  morePage?: boolean;
  /**
   * @example
   * 210bc22017109867047728291dd406
   */
  requestId?: string;
  resultMsg?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * trace_id
   * 
   * @example
   * 213e382517240341253056547e41fc
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      module: 'module',
      morePage: 'more_page',
      requestId: 'requestId',
      resultMsg: 'result_msg',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      module: FuPointBillSettlementQueryResponseBodyModule,
      morePage: 'boolean',
      requestId: 'string',
      resultMsg: 'string',
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

