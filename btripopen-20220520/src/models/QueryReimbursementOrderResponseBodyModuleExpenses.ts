// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryReimbursementOrderResponseBodyModuleExpensesExpenseCompositions } from "./QueryReimbursementOrderResponseBodyModuleExpensesExpenseCompositions";
import { QueryReimbursementOrderResponseBodyModuleExpensesInvoiceInfos } from "./QueryReimbursementOrderResponseBodyModuleExpensesInvoiceInfos";


export class QueryReimbursementOrderResponseBodyModuleExpenses extends $dara.Model {
  /**
   * @example
   * 20
   */
  amount?: string;
  currency?: string;
  expenseCity?: string;
  expenseCompositions?: QueryReimbursementOrderResponseBodyModuleExpensesExpenseCompositions[];
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  expenseTime?: string;
  expenseType?: string;
  /**
   * @example
   * code
   */
  expenseTypeCode?: string;
  invoiceInfos?: QueryReimbursementOrderResponseBodyModuleExpensesInvoiceInfos[];
  reimbExpenseId?: number;
  remark?: string;
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

