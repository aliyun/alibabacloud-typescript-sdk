// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateAvailableZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > If the network type of the instance is VPC, you must also specify the **Vswitch** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1ece71ff2f****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The effective time for migrating the zone. The instance must be active. Valid values:
   * - **Immediately**: Takes effect immediately.
   * - **MaintainTime**: Takes effect during the maintenance window of the instance.
   * 
   * Default value: **Immediately**.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The ID of destination secondary zone 2.
   * 
   * @example
   * cn-shanghai-n
   */
  hiddenZoneId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of destination secondary zone 1.
   * 
   * @example
   * cn-hangzhou-h
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the destination zone.
   * 
   * > This parameter is required when the network type of the instance is VPC.
   * 
   * @example
   * vsw-bp1buy0h9myt5i9e7****
   */
  vswitch?: string;
  /**
   * @remarks
   * The ID of the destination zone.
   * 
   * > - The destination zone and the current zone of the instance are in the same region.
   * > - You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query zone IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      effectiveTime: 'EffectiveTime',
      hiddenZoneId: 'HiddenZoneId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secondaryZoneId: 'SecondaryZoneId',
      vswitch: 'Vswitch',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      effectiveTime: 'string',
      hiddenZoneId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secondaryZoneId: 'string',
      vswitch: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

