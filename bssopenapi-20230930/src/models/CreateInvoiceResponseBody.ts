// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInvoiceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1990699401005016
   */
  accountId?: number;
  /**
   * @example
   * 0.01
   */
  amount?: string;
  /**
   * @example
   * 1001
   */
  errorCode?: string;
  /**
   * @example
   * ALIYUN_SERVICE
   */
  invoiceIssuer?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      amount: 'Amount',
      errorCode: 'ErrorCode',
      invoiceIssuer: 'InvoiceIssuer',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      amount: 'string',
      errorCode: 'string',
      invoiceIssuer: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInvoiceResponseBody extends $dara.Model {
  data?: CreateInvoiceResponseBodyData[];
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      metadata: 'Metadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': CreateInvoiceResponseBodyData },
      metadata: 'any',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

