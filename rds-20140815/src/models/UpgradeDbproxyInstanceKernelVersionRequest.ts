// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBProxyInstanceKernelVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
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
   * The specific point in time when you want to perform the upgrade. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * >  If you set **UpgradeTime** to **SpecifyTime**, you must specify SwitchTime.
   * 
   * @example
   * 2019-07-10T13:15:12Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The time when you want to upgrade the database proxy version of the instance. Valid values:
   * 
   * *   **MaintainTime** (default): performs the upgrade during the maintenance window that you specified. For more information, see [Modify the maintenance window](https://help.aliyun.com/document_detail/610402.html).
   * *   **Immediate**: performs the upgrade immediately.
   * *   **SpecifyTime**: performs the upgrade at a specified point in time.
   * 
   * > *   **If the instance runs MySQL, you can set this parameter to **MaintainTime**, **Immediate**, or SpecifyTime**.
   * > *   If the instance runs PostgreSQL, you can set this parameter to **MaintainTime** or **Immediate**.
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

