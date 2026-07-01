// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubYikeUserCreditRequest extends $dara.Model {
  /**
   * @remarks
   * The amount of credit to deduct. The value must be greater than 0 and cannot exceed the credit balance of the sub-account.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  credit?: number;
  /**
   * @remarks
   * The user ID of the sub-account.
   * 
   * This parameter is required.
   * 
   * @example
   * id
   */
  yikeUserId?: string;
  static names(): { [key: string]: string } {
    return {
      credit: 'Credit',
      yikeUserId: 'YikeUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credit: 'number',
      yikeUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

