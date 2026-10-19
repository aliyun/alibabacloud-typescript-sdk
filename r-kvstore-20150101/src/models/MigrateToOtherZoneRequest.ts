// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateToOtherZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The time when the database switchover is performed after data migration. Valid values: 
   * * **Immediately**: The switchover is performed immediately after the migration.
   * * **MaintainTime**: The switchover is performed within the maintenance window.
   * 
   * > Default value: **Immediately**.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of read-only nodes in the primary zone.
   * > * The ReadOnlyCount and SlaveReadOnlyCount parameters apply only to cloud-native instances with read/write splitting enabled. When you migrate an instance to multiple zones, you can use these parameters to adjust the distribution of read-only nodes across the primary and secondary zones. This operation does not support adding or removing nodes. Therefore, the total number of read-only nodes calculated by ReadOnlyCount + SlaveReadOnlyCount must remain the same as that before the migration.
   * > * When you migrate an instance from a single zone to multiple zones and do not specify these parameters, one read-only node is migrated to the secondary zone by default, and the remaining read-only nodes stay in the primary zone.
   * > * If the instance uses the cluster architecture, these parameters specify the number of read-only nodes per shard in the primary and secondary zones.
   * 
   * @example
   * 1
   */
  readOnlyCount?: number;
  /**
   * @remarks
   * The number of secondary nodes in the primary zone.
   * > * The ReplicaCount and SlaveReplicaCount parameters apply only to cloud-native instances. When you migrate an instance to multiple zones, you can use these parameters to adjust the distribution of secondary nodes across the primary and secondary zones. This operation does not support adding or removing nodes. Therefore, the total number of secondary nodes calculated by ReplicaCount + SlaveReplicaCount must remain the same as that before the migration.
   * > * When you migrate an instance from a single zone to multiple zones and do not specify these parameters, one secondary node is migrated to the secondary zone by default, and the remaining secondary nodes stay in the primary zone.
   * > * If the instance uses the cluster architecture, these parameters specify the number of secondary nodes per shard in the primary and secondary zones.
   * 
   * @example
   * 1
   */
  replicaCount?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the destination secondary zone. You can call the [DescribeZones](https://help.aliyun.com/document_detail/473764.html) operation to query the zone ID.
   * > If you specify this parameter, the primary and secondary data nodes are distributed across different zones. This implements cross-zone disaster recovery and tolerates data center-level failures.
   * 
   * @example
   * cn-hangzhou-h
   */
  secondaryZoneId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The number of read-only nodes in the secondary zone.
   * 
   * @example
   * 1
   */
  slaveReadOnlyCount?: number;
  /**
   * @remarks
   * The number of secondary nodes in the secondary zone.
   * 
   * @example
   * 1
   */
  slaveReplicaCount?: number;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * > * The zone where the vSwitch resides must be the same as the destination zone specified by ZoneId. 
   * > * This parameter is required if the network type of the instance is VPC.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the destination primary zone. You can call the [DescribeZones](https://help.aliyun.com/document_detail/473764.html) operation to query the zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      effectiveTime: 'EffectiveTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      readOnlyCount: 'ReadOnlyCount',
      replicaCount: 'ReplicaCount',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secondaryZoneId: 'SecondaryZoneId',
      securityToken: 'SecurityToken',
      slaveReadOnlyCount: 'SlaveReadOnlyCount',
      slaveReplicaCount: 'SlaveReplicaCount',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      effectiveTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      readOnlyCount: 'number',
      replicaCount: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secondaryZoneId: 'string',
      securityToken: 'string',
      slaveReadOnlyCount: 'number',
      slaveReplicaCount: 'number',
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

