// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryReimbursementOrderResponseBodyModuleExpenses } from "./QueryReimbursementOrderResponseBodyModuleExpenses";
import { QueryReimbursementOrderResponseBodyModuleItineraries } from "./QueryReimbursementOrderResponseBodyModuleItineraries";
import { QueryReimbursementOrderResponseBodyModulePaymentInfos } from "./QueryReimbursementOrderResponseBodyModulePaymentInfos";


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
  costCenterCode?: string;
  costCenterName?: string;
  expenses?: QueryReimbursementOrderResponseBodyModuleExpenses[];
  expensesCoverDeptId?: string;
  expensesCoverDeptName?: string;
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
  isDeleted?: string;
  itineraries?: QueryReimbursementOrderResponseBodyModuleItineraries[];
  paymentFinishTime?: string;
  paymentInfos?: QueryReimbursementOrderResponseBodyModulePaymentInfos[];
  /**
   * @example
   * 10.00
   */
  personalAmount?: string;
  processEndTime?: string;
  projectCode?: string;
  projectName?: string;
  reason?: string;
  /**
   * @example
   * RT203956
   */
  reimbursementNo?: string;
  remark?: string;
  status?: string;
  travelThirdApplyId?: string;
  /**
   * @example
   * userId
   */
  userId?: string;
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

