// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCredentialsStatusPopRequest extends $dara.Model {
  /**
   * @example
   * 4546-100000
   */
  code?: string;
  /**
   * @example
   * 张三
   */
  proxyRecipientName?: string;
  /**
   * @example
   * 14787627188
   */
  proxyRecipientPhoneNumber?: string;
  /**
   * @example
   * Z30
   */
  receiptLocation?: string;
  /**
   * @example
   * 429005111100000
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      proxyRecipientName: 'ProxyRecipientName',
      proxyRecipientPhoneNumber: 'ProxyRecipientPhoneNumber',
      receiptLocation: 'ReceiptLocation',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      proxyRecipientName: 'string',
      proxyRecipientPhoneNumber: 'string',
      receiptLocation: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

