// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHASwitchConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The mode of the automatic primary/secondary switchover feature. Valid values:
   * 
   * *   **Auto**: The automatic primary/secondary switchover feature is enabled. The system automatically switches your workloads over from the instance to its secondary instance in the event of a fault.
   * *   **Manual**: The automatic primary/secondary switchover feature is disabled. You must manually switch your workloads over from the instance to its secondary instance in the event of a fault.
   * 
   * Default value: **Auto**.
   * 
   * >  If you set this parameter to **Manual**, you must specify the **ManualHATime** parameter.
   * 
   * @example
   * Manual
   */
  HAConfig?: string;
  /**
   * @remarks
   * The time to disable the automatic primary/secondary switchover feature. The time can range from the current time to 23:59:59 seven days later. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * >  This parameter takes effect only when you set the **HAConfig** parameter to **Manual**.
   * 
   * @example
   * 2019-08-29T15:00:00Z
   */
  manualHATime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      HAConfig: 'HAConfig',
      manualHATime: 'ManualHATime',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      HAConfig: 'string',
      manualHATime: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

