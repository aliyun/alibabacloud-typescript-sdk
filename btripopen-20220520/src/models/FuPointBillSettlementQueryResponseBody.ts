// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FuPointBillSettlementQueryResponseBodyModuleItems extends $dara.Model {
  adjustTime?: string;
  alipayId?: string;
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
  awardNum?: number;
  basisAmount?: string;
  billRecordTime?: string;
  billingEntity?: string;
  bookMode?: string;
  bookTime?: string;
  bookerId?: string;
  bookerJobNo?: string;
  bookerName?: string;
  capitalDirection?: string;
  cascadeDepartment?: string;
  categoryDesc?: string;
  categoryOrderSettlePrice?: string;
  costCenter?: string;
  costCenterNumber?: string;
  costDepartment?: string;
  deductibleTax?: number;
  department?: string;
  departmentId?: string;
  feeType?: string;
  feeTypeDesc?: string;
  foreignersTag?: string;
  grantNum?: number;
  index?: string;
  invoiceTitle?: string;
  location?: string;
  makeInvoice?: string;
  mappingCompanyCode?: string;
  orderId?: string;
  orderStatusDesc?: string;
  originCategory?: string;
  originOrderId?: string;
  overApplyId?: string;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  primaryId?: number;
  processorOaCode?: string;
  projectCode?: string;
  projectName?: string;
  purchaseOrderId?: string;
  remark?: string;
  saveAmount?: number;
  sceneId?: string;
  sceneName?: string;
  settleTypeDesc?: string;
  settlementFee?: number;
  settlementGrantFee?: number;
  settlementTime?: string;
  settlementType?: string;
  showSubOrderId?: string;
  sio?: string;
  status?: number;
  statusDesc?: string;
  subOrderId?: string;
  taxRate?: string;
  thirdInvoiceId?: string;
  thirdItineraryId?: string;
  tradeActionDesc?: string;
  tradeReason?: string;
  travelerEmail?: string;
  travelerId?: string;
  travelerJobNo?: string;
  travelerMemberType?: string;
  travelerMemberTypeName?: string;
  travelerName?: string;
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
  category?: number;
  corpId?: string;
  items?: FuPointBillSettlementQueryResponseBodyModuleItems[];
  periodEnd?: string;
  periodStart?: string;
  scrollId?: string;
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
  code?: number;
  module?: FuPointBillSettlementQueryResponseBodyModule;
  morePage?: boolean;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
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

