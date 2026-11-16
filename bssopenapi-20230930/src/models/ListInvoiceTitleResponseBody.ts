// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInvoiceTitleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The account bank name.
   * 
   * @example
   * China Merchants Bank
   */
  accountBankName?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 1990699401005016
   */
  accountId?: number;
  /**
   * @remarks
   * The bank account number.
   * 
   * @example
   * 1234567890
   */
  bankAccountNumber?: string;
  /**
   * @remarks
   * The time when the invoice title was created. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-06-01 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The invoice title ID.
   * 
   * @example
   * 123456
   */
  id?: string;
  /**
   * @remarks
   * The invoice title.
   * 
   * @example
   * XX Company
   */
  invoiceTitle?: string;
  /**
   * @remarks
   * The registered address.
   * 
   * @example
   * Chaoyang District, Beijing
   */
  registeredAddress?: string;
  /**
   * @remarks
   * The registered landline number.
   * 
   * @example
   * 010-12345678
   */
  registeredLandline?: string;
  /**
   * @remarks
   * The unified social credit code. The code is 15, 17, 18, or 20 characters in length.
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
   * The list of invoice titles.
   */
  data?: ListInvoiceTitleResponseBodyData[];
  /**
   * @remarks
   * The response metadata.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * The request ID.
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

