// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCreditLineRequest extends $dara.Model {
  /**
   * @remarks
   * New Credit Line
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  creditLine?: string;
  /**
   * @remarks
   * The UID of Sub Account.
   * 
   * This parameter is required.
   * 
   * @example
   * 1263644979775567
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      creditLine: 'CreditLine',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditLine: 'string',
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

