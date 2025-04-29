// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

