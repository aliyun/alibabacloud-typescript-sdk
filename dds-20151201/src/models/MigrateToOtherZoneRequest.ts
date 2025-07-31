// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateToOtherZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the instance is migrated to the destination zone. Valid values:
   * 
   * *   **Immediately** (default): The instance is migrated immediately.
   * *   **MaintainTime**: The instance is migrated during its maintenance window.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  If the network type of the instance is VPC, you must specify the **Vswitch** parameter .
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2658****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the vSwitch in the destination zone.
   * 
   * >  This parameter is valid and required only when the network type of the instance is VPC.
   * 
   * @example
   * vsw-bp67ac****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the destination zone to which you want to migrate the ApsaraDB for MongoDB instance.
   * 
   * > * The destination and source zones must be in one region.
   * > * You can call [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) to query the zone IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveTime: 'EffectiveTime',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTime: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
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

