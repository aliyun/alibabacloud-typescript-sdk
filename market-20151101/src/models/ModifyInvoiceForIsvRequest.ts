// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInvoiceForIsvRequest extends $dara.Model {
  checkNotice?: string;
  /**
   * @example
   * https://oss.aliyuncs.com/xxxx.png
   */
  electronUrl?: string;
  invoiceId?: number;
  /**
   * @example
   * 1897702****
   */
  number?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  operateType?: number;
  /**
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

