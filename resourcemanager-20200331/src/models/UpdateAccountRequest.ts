// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the member.
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
   * - ResourceAccount: Switches the specified cloud account to a resource account.
   * - CloudAccount: Switches the specified resource account to a cloud account.
   * 
   * > You can specify either `NewDisplayName` or `NewAccountType`, but not both.
   * 
   * @example
   * ResourceAccount
   */
  newAccountType?: string;
  /**
   * @remarks
   * The new name of the member.
   * > You can specify either `NewDisplayName` or `NewAccountType`, but not both.
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

