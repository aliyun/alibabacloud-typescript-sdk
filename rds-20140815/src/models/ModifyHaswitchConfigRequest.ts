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
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The primary/secondary switchover setting. Valid values:
   * * **Auto**: The system automatically switches over between the primary and secondary instances upon a fault.
   * * **Manual**: Temporarily disables automatic switchover.
   * 
   * Default value: **Auto**.
   * >If you set this parameter to **Manual**, you must also specify the **ManualHATime** parameter.
   * 
   * @example
   * Manual
   */
  HAConfig?: string;
  /**
   * @remarks
   * The deadline for temporarily disabling automatic switchover. You can set this parameter to a point in time up to 23:59:59 seven days later. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * >This parameter takes effect only when **HAConfig** is set to **Manual**.
   * 
   * @example
   * 2019-08-29T15:00:00Z
   */
  manualHATime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the region ID.
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

