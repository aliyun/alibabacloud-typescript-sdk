// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBProxyInstanceKernelVersionRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * normal
   */
  DBProxyEngineType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The specified time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * >If you set **UpgradeTime** to **SpecifyTime**, you must specify this parameter.
   * 
   * @example
   * 2019-07-10T13:15:12Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The target minor engine version.
   * 
   * @example
   * 2.25.9_20251028
   */
  targetMinorVersion?: string;
  /**
   * @remarks
   * The time when you want to perform the upgrade. Valid values:
   * 
   * * **MaintainTime** (default): The upgrade is performed within the [maintenance window](https://help.aliyun.com/document_detail/610402.html).
   * * **Immediate**: The upgrade is performed immediately.
   * * **SpecifyTime**: The upgrade is performed at a specified time.
   * 
   * @example
   * MaintainTime
   */
  upgradeTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBProxyEngineType: 'DBProxyEngineType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchTime: 'SwitchTime',
      targetMinorVersion: 'TargetMinorVersion',
      upgradeTime: 'UpgradeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBProxyEngineType: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchTime: 'string',
      targetMinorVersion: 'string',
      upgradeTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

