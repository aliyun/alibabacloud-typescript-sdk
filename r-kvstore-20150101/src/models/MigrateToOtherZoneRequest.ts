// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateToOtherZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Tair (Redis OSS-compatible) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The time when the database is switched after the instance is migrated. Valid values:
   * 
   * *   **Immediately**: The database is immediately switched after the instance is migrated.
   * *   **MaintainTime**: The database is switched within the maintenance window.
   * 
   * >  Default value: Immediately.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of read replicas in the primary zone.
   * 
   * > 
   * 
   * *   The **ReadOnlyCount** and **SlaveReadOnlyCount** parameters are applicable only to cloud-native instances for which read/write splitting is enabled. When you migrate an instance to multiple zones, you can use these parameters to adjust the distribution of read replicas in the primary and secondary zones of the instance. This operation does not allow you to increase or decrease the number of nodes. Therefore, the sum of the values of `ReadOnlyCount and SlaveReadOnlyCount` must be the same as that before the migration.
   * 
   * *   If you do not specify these parameters when you migrate an instance from a single zone to multiple zones, one read replica is migrated to the secondary zone, and all other read replicas remain in the primary zone.
   * 
   * *   If the instance is a cluster instance, the preceding parameters indicate the number of read replicas per shard in the primary and secondary zones of the instance.
   * 
   * @example
   * 1
   */
  readOnlyCount?: number;
  /**
   * @remarks
   * The number of replica nodes in the primary zone.
   * 
   * > 
   * 
   * *   The **ReplicaCount** and **SlaveReplicaCount** parameters are applicable only to cloud-native instances. When you migrate an instance to multiple zones, you can use these parameters to adjust the distribution of replica nodes in the primary and secondary zones of the instance. This operation does not allow you to increase or decrease the number of nodes. Therefore, the sum of the values of `ReplicaCount and SlaveReplicaCount` must be the same as that before the migration.
   * 
   * *   If you do not specify these parameters when you migrate an instance from a single zone to multiple zones, one replica node is migrated to the secondary zone, and all other replica nodes remain in the primary zone.
   * 
   * *   If the instance is a cluster instance, the preceding parameters indicate the number of replica nodes per shard in the primary and secondary zones of the instance.
   * 
   * @example
   * 1
   */
  replicaCount?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the secondary zone to which you want to migrate the instance. You can call the [DescribeZones](https://help.aliyun.com/document_detail/473764.html) operation to query zone IDs.
   * 
   * >  If you specify this parameter, the master node and replica node of the instance can be deployed in different zones and disaster recovery is implemented across zones. The instance can withstand failures in data centers.
   * 
   * @example
   * cn-hangzhou-h
   */
  secondaryZoneId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The number of read replicas in the secondary zone.
   * 
   * @example
   * 1
   */
  slaveReadOnlyCount?: number;
  /**
   * @remarks
   * The number of replica nodes in the secondary zone.
   * 
   * @example
   * 1
   */
  slaveReplicaCount?: number;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * > 
   * 
   * *   The zone where the vSwitch resides must be the same as the ID of the destination zone.
   * 
   * *   If the network type of the instance is VPC, this parameter is required.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the destination primary zone. You can call the [DescribeZones](https://help.aliyun.com/document_detail/473764.html) operation to query zone IDs.
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

