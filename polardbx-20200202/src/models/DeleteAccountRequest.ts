// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the account to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * testaccount
   */
  accountName?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-*********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the security administrator account.
   * 
   * > If three-role mode is enabled, this parameter is required. If three-role mode is not enabled, you do not need to specify this parameter.
   * 
   * @example
   * securityAccount
   */
  securityAccountName?: string;
  /**
   * @remarks
   * The password of the security administrator account.
   * 
   * > If three-role mode is enabled, this parameter is required. If three-role mode is not enabled, you do not need to specify this parameter.
   * 
   * @example
   * securityPassword
   */
  securityAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      securityAccountName: 'SecurityAccountName',
      securityAccountPassword: 'SecurityAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
      securityAccountName: 'string',
      securityAccountPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

