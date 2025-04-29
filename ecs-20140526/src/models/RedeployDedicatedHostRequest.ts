// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RedeployDedicatedHostRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dedicated host.
   * 
   * This parameter is required.
   * 
   * @example
   * dh-bp165p6xk2tlw61e****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * Specifies whether to stop the instance before it is migrated to the destination dedicated host. Valid values:
   * 
   * *   reboot: stops the instance before migration.
   * *   LiveMigrationFirst: migrates the instance without stopping it. If you set MigrationType to LiveMigrationFirst, you must specify DedicatedHostId. In this case, you cannot change the instance type of the ECS instance when the instance is migrated. If the migration in LiveMigrationFirst mode fails, the system switches to the Reboot mode.
   * 
   * Default value: reboot.
   * 
   * @example
   * Reboot
   * 
   * **if can be null:**
   * true
   */
  migrationType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the dedicated host. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
      dedicatedHostId: 'DedicatedHostId',
      migrationType: 'MigrationType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      migrationType: 'string',
      ownerAccount: 'string',
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

