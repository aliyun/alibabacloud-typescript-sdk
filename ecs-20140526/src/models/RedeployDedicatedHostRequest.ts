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
   * Specifies whether to stop ECS instance before migrating it to the destination dedicated host. Valid values:
   * 
   * - Reboot: stops ECS instance before migration.
   * 
   * - LiveMigrationFirst: migrates ECS instance without stopping it. You must specify the DedicatedHostId parameter. This value does not support changing ECS instance type during migration. If live migration fails, cold migration is performed by default.
   * 
   * Default value: Reboot.
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
   * The region ID of the dedicated host. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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

