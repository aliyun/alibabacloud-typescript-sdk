// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMonthlyBillRequest extends $dara.Model {
  /**
   * @remarks
   * Bill Owner type. Value Range:</br>
   * 1: Master account</br>
   * 2: Sub account</br>
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  billOwner?: string;
  /**
   * @remarks
   * Value Range:
   * 
   * - MonthlyInvoice
   * - MonthRefundInvoice
   * - MonthlySummary (Deprecated)
   * - MonthlyInstanceAddAdjustBill 
   * - MonthlyInstanceRefundBill
   * - MonthlyAddAdjustInvoce
   * - MonthlyRefundAdjustInvoce 
   * - MonthlyInstanceConsumeV2 
   * - MarginReportV2
   * 
   * This parameter is required.
   * 
   * @example
   * MonthlyInvoice
   */
  billType?: string;
  /**
   * @remarks
   * Billing Month, Format is YYYY-MM
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-11
   */
  month?: string;
  static names(): { [key: string]: string } {
    return {
      billOwner: 'BillOwner',
      billType: 'BillType',
      month: 'Month',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwner: 'string',
      billType: 'string',
      month: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

