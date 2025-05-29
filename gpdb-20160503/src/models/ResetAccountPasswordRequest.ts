// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAccountPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * testaccount_1
   */
  accountName?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * Testaccount_1
   */
  accountPassword?: string;
  /**
   * @remarks
   * Before you call this operation, make sure that the following requirements are met:
   * 
   * *   The instance is in the running state.
   * *   The instance is not locked.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-t4nf48vf15713****
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      DBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

