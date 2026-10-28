// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeductOutstandingBalanceRequest extends $dara.Model {
  /**
   * @remarks
   * The amount of deducted credit to reduce.
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
  deductAmount?: string;
  /**
   * @remarks
   * The UID of the reseller\\"s customer account.
   * 
   * This parameter is required.
   * 
   * @example
   * 1133166938931507
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      deductAmount: 'DeductAmount',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductAmount: 'string',
      uid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

