// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVerifyResultResponseBodyResult extends $dara.Model {
  /**
   * @example
   * Y/N
   */
  deleteResult?: string;
  /**
   * @example
   * 4ab0b***cbde97
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteResult: 'DeleteResult',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteResult: 'string',
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

