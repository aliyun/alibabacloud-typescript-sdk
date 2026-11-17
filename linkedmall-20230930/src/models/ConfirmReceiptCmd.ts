// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmReceiptCmd extends $dara.Model {
  /**
   * @remarks
   * The refund dispute ID.
   * 
   * @example
   * 6693****4352
   */
  disputeId?: string;
  static names(): { [key: string]: string } {
    return {
      disputeId: 'disputeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disputeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

