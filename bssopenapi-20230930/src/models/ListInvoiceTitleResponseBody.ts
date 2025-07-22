// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInvoiceTitleResponseBodyData extends $dara.Model {
  accountBankName?: string;
  /**
   * @example
   * 1990699401005016
   */
  accountId?: number;
  /**
   * @example
   * 1234567890
   */
  bankAccountNumber?: string;
  /**
   * @example
   * 2025-06-01 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 123456
   */
  id?: string;
  invoiceTitle?: string;
  registeredAddress?: string;
  /**
   * @example
   * 010-12345678
   */
  registeredLandline?: string;
  /**
   * @example
   * 111111111111111
   */
  unifiedSocialCreditCode?: string;
  static names(): { [key: string]: string } {
    return {
      accountBankName: 'AccountBankName',
      accountId: 'AccountId',
      bankAccountNumber: 'BankAccountNumber',
      createTime: 'CreateTime',
      id: 'Id',
      invoiceTitle: 'InvoiceTitle',
      registeredAddress: 'RegisteredAddress',
      registeredLandline: 'RegisteredLandline',
      unifiedSocialCreditCode: 'UnifiedSocialCreditCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountBankName: 'string',
      accountId: 'number',
      bankAccountNumber: 'string',
      createTime: 'string',
      id: 'string',
      invoiceTitle: 'string',
      registeredAddress: 'string',
      registeredLandline: 'string',
      unifiedSocialCreditCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvoiceTitleResponseBody extends $dara.Model {
  data?: ListInvoiceTitleResponseBodyData[];
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
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
      data: { 'type': 'array', 'itemType': ListInvoiceTitleResponseBodyData },
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

