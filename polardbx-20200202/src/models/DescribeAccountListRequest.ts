// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the account. Specify this parameter to query a specific account.
   * 
   * @example
   * testaccount
   */
  accountName?: string;
  /**
   * @remarks
   * The type of the account. Specify this parameter to query accounts of a specific type. If you set this parameter to null, all accounts are returned.
   * 
   * - Before three-role mode is enabled: 0 indicates a standard account, and 1 indicates a privileged user account.
   * - After three-role mode is enabled: 0 indicates a standard account, 2 indicates a system administrator account, 3 indicates a security administrator account, and 4 indicates an audit administrator account.
   * 
   * @example
   * 0
   */
  accountType?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

