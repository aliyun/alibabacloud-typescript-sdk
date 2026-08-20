// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInvoiceForIsvRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks on the invoice from the service provider.
   * 
   * @example
   * ******
   */
  checkNotice?: string;
  /**
   * @remarks
   * The electronic invoicing URL, used for customers to download the invoice.
   * 
   * @example
   * https://oss.aliyuncs.com/xxxx.png
   */
  electronUrl?: string;
  /**
   * @remarks
   * The invoice application ID. This corresponds to the Result.Id field in the response of the DescribeInvoiceForIsv operation.
   * 
   * @example
   * 4072040****
   */
  invoiceId?: number;
  /**
   * @remarks
   * The invoice number.
   * 
   * @example
   * 1897702****
   */
  number?: string;
  /**
   * @remarks
   * The operation to perform on the current invoice. Valid values:
   * - 0: issue the invoice.
   * - 1: reject the invoice.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  operateType?: number;
  /**
   * @remarks
   * The type of the current invoice. Valid values:
   * - 2: digital electronic general invoice.
   * - 3: digital electronic special invoice.
   * 
   * @example
   * 2
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      checkNotice: 'CheckNotice',
      electronUrl: 'ElectronUrl',
      invoiceId: 'InvoiceId',
      number: 'Number',
      operateType: 'OperateType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkNotice: 'string',
      electronUrl: 'string',
      invoiceId: 'number',
      number: 'string',
      operateType: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

