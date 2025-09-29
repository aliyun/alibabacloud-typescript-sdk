// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialGetResultIntlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4ab0b***cbde97
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

