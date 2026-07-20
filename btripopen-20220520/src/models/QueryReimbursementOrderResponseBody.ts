// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReimbursementOrderResponseBodyModuleExpensesExpenseCompositions extends $dara.Model {
  /**
   * @example
   * 账单id
   */
  billSettlementId?: number;
  /**
   * @example
   * 1:支出
   * 2:收入
   */
  capitalDirection?: string;
  /**
   * @example
   * 6001
   */
  feeType?: string;
  /**
   * @example
   * 1002039194090156153
   */
  orderId?: string;
  /**
   * @example
   * 2023-06-11-2023-06-12
   */
  remark?: string;
  remindTagList?: string[];
  /**
   * @example
   * 350
   */
  settlementAmount?: string;
  /**
   * @example
   * 2021-10-08T22:27Z
   */
  settlementTime?: string;
  /**
   * @example
   * 11
   */
  voucherType?: number;
  static names(): { [key: string]: string } {
    return {
      billSettlementId: 'bill_settlement_id',
      capitalDirection: 'capital_direction',
      feeType: 'fee_type',
      orderId: 'order_id',
      remark: 'remark',
      remindTagList: 'remind_tag_list',
      settlementAmount: 'settlement_amount',
      settlementTime: 'settlement_time',
      voucherType: 'voucher_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billSettlementId: 'number',
      capitalDirection: 'string',
      feeType: 'string',
      orderId: 'string',
      remark: 'string',
      remindTagList: { 'type': 'array', 'itemType': 'string' },
      settlementAmount: 'string',
      settlementTime: 'string',
      voucherType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.remindTagList)) {
      $dara.Model.validateArray(this.remindTagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReimbursementOrderResponseBodyModuleExpensesInvoiceInfos extends $dara.Model {
  amount?: string;
  invoiceCode?: string;
  invoiceData?: string;
  invoiceDate?: string;
  invoiceNumber?: string;
  invoiceType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      invoiceCode: 'invoice_code',
      invoiceData: 'invoice_data',
      invoiceDate: 'invoice_date',
      invoiceNumber: 'invoice_number',
      invoiceType: 'invoice_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      invoiceCode: 'string',
      invoiceData: 'string',
      invoiceDate: 'string',
      invoiceNumber: 'string',
      invoiceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReimbursementOrderResponseBodyModuleExpenses extends $dara.Model {
  /**
   * @example
   * 20
   */
  amount?: string;
  /**
   * @example
   * CNY(人民币)
   */
  currency?: string;
  /**
   * @example
   * 杭州
   */
  expenseCity?: string;
  expenseCompositions?: QueryReimbursementOrderResponseBodyModuleExpensesExpenseCompositions[];
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  expenseTime?: string;
  /**
   * @example
   * 火车
   */
  expenseType?: string;
  /**
   * @example
   * code
   */
  expenseTypeCode?: string;
  invoiceInfos?: QueryReimbursementOrderResponseBodyModuleExpensesInvoiceInfos[];
  /**
   * @example
   * 费用明细id
   */
  reimbExpenseId?: number;
  /**
   * @example
   * 测试
   */
  remark?: string;
  /**
   * @example
   * 结算方式；支付类型
   * 枚举值：
   * personal：个人支付
   * enterprise：企业支付
   */
  settlementType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      currency: 'currency',
      expenseCity: 'expense_city',
      expenseCompositions: 'expense_compositions',
      expenseTime: 'expense_time',
      expenseType: 'expense_type',
      expenseTypeCode: 'expense_type_code',
      invoiceInfos: 'invoice_infos',
      reimbExpenseId: 'reimb_expense_id',
      remark: 'remark',
      settlementType: 'settlement_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      currency: 'string',
      expenseCity: 'string',
      expenseCompositions: { 'type': 'array', 'itemType': QueryReimbursementOrderResponseBodyModuleExpensesExpenseCompositions },
      expenseTime: 'string',
      expenseType: 'string',
      expenseTypeCode: 'string',
      invoiceInfos: { 'type': 'array', 'itemType': QueryReimbursementOrderResponseBodyModuleExpensesInvoiceInfos },
      reimbExpenseId: 'number',
      remark: 'string',
      settlementType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.expenseCompositions)) {
      $dara.Model.validateArray(this.expenseCompositions);
    }
    if(Array.isArray(this.invoiceInfos)) {
      $dara.Model.validateArray(this.invoiceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReimbursementOrderResponseBodyModuleItineraries extends $dara.Model {
  /**
   * @example
   * 北京
   */
  arrCity?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  arrDate?: string;
  /**
   * @example
   * CTU
   */
  depCity?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  depDate?: string;
  /**
   * @example
   * 飞机
   */
  trafficWay?: string;
  /**
   * @example
   * 单程/往返
   */
  tripWay?: string;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrDate: 'arr_date',
      depCity: 'dep_city',
      depDate: 'dep_date',
      trafficWay: 'traffic_way',
      tripWay: 'trip_way',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrDate: 'string',
      depCity: 'string',
      depDate: 'string',
      trafficWay: 'string',
      tripWay: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReimbursementOrderResponseBodyModulePaymentInfos extends $dara.Model {
  /**
   * @example
   * 20.00
   */
  amount?: string;
  cnapsCode?: string;
  payeeAccountNumber?: string;
  /**
   * @example
   * userId
   */
  payeeUserId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      cnapsCode: 'cnaps_code',
      payeeAccountNumber: 'payee_account_number',
      payeeUserId: 'payee_user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      cnapsCode: 'string',
      payeeAccountNumber: 'string',
      payeeUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReimbursementOrderResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 10.00
   */
  companyAmount?: string;
  /**
   * @example
   * 20.00
   */
  companyPayAmount?: string;
  /**
   * @example
   * dinga809ed71b9201f35
   */
  corpId?: string;
  /**
   * @example
   * costCenterCode123
   */
  costCenterCode?: string;
  /**
   * @example
   * 测试成本中心
   */
  costCenterName?: string;
  expenses?: QueryReimbursementOrderResponseBodyModuleExpenses[];
  /**
   * @example
   * 123
   */
  expensesCoverDeptId?: string;
  /**
   * @example
   * 部门1
   */
  expensesCoverDeptName?: string;
  /**
   * @example
   * XXX公司
   */
  expensesCoverInvoiceTitle?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  gmtModified?: string;
  /**
   * @example
   * y/n，是/否
   */
  isDeleted?: string;
  itineraries?: QueryReimbursementOrderResponseBodyModuleItineraries[];
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  paymentFinishTime?: string;
  paymentInfos?: QueryReimbursementOrderResponseBodyModulePaymentInfos[];
  /**
   * @example
   * 10.00
   */
  personalAmount?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  processEndTime?: string;
  /**
   * @example
   * projectCode123
   */
  projectCode?: string;
  /**
   * @example
   * XXX项目
   */
  projectName?: string;
  /**
   * @example
   * 自愿申请
   */
  reason?: string;
  /**
   * @example
   * RT203956
   */
  reimbursementNo?: string;
  /**
   * @example
   * 测试
   */
  remark?: string;
  /**
   * @example
   * 状态枚举值：
   * wait_commit：待提交发票
   * partial_payment：部分打款
   * wait_payment：待打款
   * reject：已驳回
   * financing_recheck：财务复审
   * commit：已提交
   * wait_commit：待提交
   * awaiting_approval：审批中
   * complete_payment：已打款
   * withdraw：已撤回
   */
  status?: string;
  /**
   * @example
   * 关联的出差审批单单号
   */
  travelThirdApplyId?: string;
  /**
   * @example
   * userId
   */
  userId?: string;
  /**
   * @example
   * 张三
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      companyAmount: 'company_amount',
      companyPayAmount: 'company_pay_amount',
      corpId: 'corp_id',
      costCenterCode: 'cost_center_code',
      costCenterName: 'cost_center_name',
      expenses: 'expenses',
      expensesCoverDeptId: 'expenses_cover_dept_id',
      expensesCoverDeptName: 'expenses_cover_dept_name',
      expensesCoverInvoiceTitle: 'expenses_cover_invoice_title',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      isDeleted: 'is_deleted',
      itineraries: 'itineraries',
      paymentFinishTime: 'payment_finish_time',
      paymentInfos: 'payment_infos',
      personalAmount: 'personal_amount',
      processEndTime: 'process_end_time',
      projectCode: 'project_code',
      projectName: 'project_name',
      reason: 'reason',
      reimbursementNo: 'reimbursement_no',
      remark: 'remark',
      status: 'status',
      travelThirdApplyId: 'travel_third_apply_id',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyAmount: 'string',
      companyPayAmount: 'string',
      corpId: 'string',
      costCenterCode: 'string',
      costCenterName: 'string',
      expenses: { 'type': 'array', 'itemType': QueryReimbursementOrderResponseBodyModuleExpenses },
      expensesCoverDeptId: 'string',
      expensesCoverDeptName: 'string',
      expensesCoverInvoiceTitle: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      isDeleted: 'string',
      itineraries: { 'type': 'array', 'itemType': QueryReimbursementOrderResponseBodyModuleItineraries },
      paymentFinishTime: 'string',
      paymentInfos: { 'type': 'array', 'itemType': QueryReimbursementOrderResponseBodyModulePaymentInfos },
      personalAmount: 'string',
      processEndTime: 'string',
      projectCode: 'string',
      projectName: 'string',
      reason: 'string',
      reimbursementNo: 'string',
      remark: 'string',
      status: 'string',
      travelThirdApplyId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.expenses)) {
      $dara.Model.validateArray(this.expenses);
    }
    if(Array.isArray(this.itineraries)) {
      $dara.Model.validateArray(this.itineraries);
    }
    if(Array.isArray(this.paymentInfos)) {
      $dara.Model.validateArray(this.paymentInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReimbursementOrderResponseBody extends $dara.Model {
  /**
   * @example
   * PARAM_ERROR
   */
  code?: string;
  /**
   * @example
   * 成功
   */
  message?: string;
  module?: QueryReimbursementOrderResponseBodyModule;
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
   * @remarks
   * traceId
   * 
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
      module: QueryReimbursementOrderResponseBodyModule,
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

