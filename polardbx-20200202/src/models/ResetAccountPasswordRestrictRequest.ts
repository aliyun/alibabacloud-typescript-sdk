// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAccountPasswordRestrictRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the account whose password you want to reset. > Only passwords of standard accounts can be reset.
   * 
   * This parameter is required.
   * 
   * @example
   * testaccount
   */
  accountName?: string;
  /**
   * @remarks
   * The account information for which you want to reset the password. Separate multiple account entries with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * *****
   */
  accountPassword?: string;
  /**
   * @remarks
   * The instance ID. > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of all instances in the specified region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The region ID. > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the account whose password you want to reset. > *Only passwords of standard accounts can be reset.* You can invoke the [DescribeAccountList](https://help.aliyun.com/document_detail/196844.html) operation to query the account information of the target instance, including account names.
   * 
   * @example
   * account_sec
   */
  securityAccountName?: string;
  /**
   * @remarks
   * The password of the security administrator account. > If three-role mode is enabled, this parameter is required. For more information about three-role mode, see [Three-role mode](https://help.aliyun.com/document_detail/213824.html).
   * 
   * @example
   * *****
   */
  securityAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      securityAccountName: 'SecurityAccountName',
      securityAccountPassword: 'SecurityAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
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

