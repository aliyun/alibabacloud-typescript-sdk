// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateAvailableZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > If the instance is deployed in a VPC, you must specify the **Vswitch** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1ece71ff2f****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The time when the instance is migrated to the destination zone. Valid values:
   * 
   * *   **Immediately**: The instance is immediately migrated to the destination zone.
   * *   **MaintainTime**: The instance is migrated to the destination zone during the maintenance window of the instance.
   * 
   * Default value: **Immediately**.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The ID of the destination hidden zone.
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
   * The ID of the destination secondary zone.
   * 
   * @example
   * cn-hangzhou-h
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the destination zone.
   * 
   * > If the instance is deployed in a VPC, you must specify this parameter.
   * 
   * @example
   * vsw-bp1buy0h9myt5i9e7****
   */
  vswitch?: string;
  /**
   * @remarks
   * The ID of the destination zone.
   * 
   * > 
   * 
   * *   The source zone and the destination zone belong to the same region.
   * 
   * *   You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the zone ID.
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

