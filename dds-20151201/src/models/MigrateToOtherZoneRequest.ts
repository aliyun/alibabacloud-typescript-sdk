// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateToOtherZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The effective period for the zone migration. Valid values:
   * - **Immediately** (default): The migration becomes active immediately.
   * - **MaintainTime**: The migration becomes active within the O&M window of the instance.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > If the network type of the instance is VPC, you must also specify the **VSwitchId** parameter.
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
   * > This parameter is available and required only when the network type of the instance is VPC.
   * 
   * @example
   * vsw-bp67ac****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the destination zone.
   * 
   * > - The destination zone must be in the same region as the current zone of the instance.
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

