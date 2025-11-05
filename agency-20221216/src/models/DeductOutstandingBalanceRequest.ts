// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeductOutstandingBalanceRequest extends $dara.Model {
  /**
   * @remarks
   * The Deducted Credit to be offset.
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
  deductAmount?: string;
  /**
   * @remarks
   * Account UID of Distribution Customer.
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

