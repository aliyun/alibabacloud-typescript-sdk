// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInvoiceTitleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Bank name.
   * 
   * @example
   * 招商银行
   */
  accountBankName?: string;
  /**
   * @remarks
   * Account ID.
   * 
   * @example
   * 1990699401005016
   */
  accountId?: number;
  /**
   * @remarks
   * Basic bank account number.
   * 
   * @example
   * 1234567890
   */
  bankAccountNumber?: string;
  /**
   * @remarks
   * The time when the invoice title was created.
   * 
   * @example
   * 2025-06-01 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * Invoice title ID.
   * 
   * @example
   * 123456
   */
  id?: string;
  /**
   * @remarks
   * Invoice title.
   * 
   * @example
   * xx公司
   */
  invoiceTitle?: string;
  /**
   * @remarks
   * Registered address.
   * 
   * @example
   * 北京市朝阳区
   */
  registeredAddress?: string;
  /**
   * @remarks
   * Registered landline number.
   * 
   * @example
   * 010-12345678
   */
  registeredLandline?: string;
  /**
   * @remarks
   * Unified social credit code. 15, 17, 18, or 20 characters.
   * 
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
  /**
   * @remarks
   * Invoice title list
   */
  data?: ListInvoiceTitleResponseBodyData[];
  /**
   * @remarks
   * Response metadata.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * Request ID.
   * 
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

