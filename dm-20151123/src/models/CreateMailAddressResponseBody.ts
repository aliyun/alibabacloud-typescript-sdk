// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMailAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the sender address.
   * 
   * @example
   * 15123
   */
  mailAddressId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95A7D497-F8DD-4834-B81E-C1783236E55F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mailAddressId: 'MailAddressId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailAddressId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

