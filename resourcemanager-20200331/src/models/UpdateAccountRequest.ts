// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that corresponds to the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The new type of the member. Valid values:
   * 
   * *   ResourceAccount: resource account
   * *   CloudAccount: cloud account
   * 
   * >  You can configure either the `NewDisplayName` or `NewAccountType` parameter.
   * 
   * @example
   * ResourceAccount
   */
  newAccountType?: string;
  /**
   * @remarks
   * The new display name of the member.
   * 
   * >  You can configure either the `NewDisplayName` or `NewAccountType` parameter.
   * 
   * @example
   * admin
   */
  newDisplayName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      newAccountType: 'NewAccountType',
      newDisplayName: 'NewDisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      newAccountType: 'string',
      newDisplayName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

