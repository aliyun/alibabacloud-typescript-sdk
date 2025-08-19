// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPayerForAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the billing account.
   * 
   * This parameter is required.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

