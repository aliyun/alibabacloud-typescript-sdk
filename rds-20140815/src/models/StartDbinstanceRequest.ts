// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The migration method of the instance. This parameter is only supported for instances in a dedicated cluster. Valid values:
   * * **0**: Default value. The system preferentially performs a local upgrade or downgrade. If local resources are insufficient, the system performs a cross-instance migration.
   * * **1**: Local upgrade or downgrade. If the system determines that the instance does not support local upgrade or downgrade, an error is returned.
   * * **2**: Cross-instance migration. The instance is migrated to a specified host. You must specify the **DedicatedHostGroupId**, **TargetDedicatedHostIdForMaster**, and **TargetDedicatedHostIdForSlave** parameters. The instance cannot be migrated to the current host. Otherwise, the migration fails.
   * 
   * @example
   * 0
   */
  DBInstanceTransType?: number;
  /**
   * @remarks
   * This operation also supports starting ApsaraDB RDS instances in a dedicated cluster. In this case, you must specify the dedicated cluster ID. You can call the DescribeDedicatedHostGroups operation to query the dedicated cluster ID.
   * 
   * @example
   * dhg-39****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The effective period. This parameter is only supported for instances in a dedicated cluster. Valid values:
   * 
   * * **Immediate**: The changes take effect immediately.
   * * **MaintainTime**: The changes take effect within the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
   * * **SpecificTime**: The changes take effect at a specified time.
   * 
   * Default value: MaintainTime.
   * 
   * @example
   * Immediate
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The database engine version. This parameter is only supported for instances in a dedicated cluster.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The specified time when the changes take effect. This parameter is only supported for instances in a dedicated cluster. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > You must specify this parameter when **EffectiveTime** is set to **Specified**.
   * 
   * @example
   * 2019-10-21T10:00:00Z
   */
  specifiedTime?: string;
  /**
   * @remarks
   * The custom storage capacity. This parameter is only supported for instances in a dedicated cluster. Valid values: **5** to **2000**. Unit: GB. If you do not specify this parameter, the storage capacity remains unchanged.
   * 
   * @example
   * 1000
   */
  storage?: number;
  /**
   * @remarks
   * The instance type of the target instance. This parameter is only supported for instances in a dedicated cluster.
   * 
   * @example
   * rds.ebmhfc6.20xlarge
   */
  targetDBInstanceClass?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and does not need to be specified.
   * 
   * @example
   * dh-bp****
   */
  targetDedicatedHostIdForLog?: string;
  /**
   * @remarks
   * The ID of the destination host for the primary node. This parameter is only supported for instances in a dedicated cluster.
   * 
   * > You must specify this parameter when **DBInstanceTransType** is set to **2**.
   * 
   * @example
   * dh-bp****
   */
  targetDedicatedHostIdForMaster?: string;
  /**
   * @remarks
   * The ID of the destination host for the secondary node. This parameter is only supported for instances in a dedicated cluster.
   * 
   * > You must specify this parameter when **DBInstanceTransType** is set to **2**.
   * 
   * @example
   * dh-bp****
   */
  targetDedicatedHostIdForSlave?: string;
  /**
   * @remarks
   * The vSwitch ID. This parameter is only supported for instances in a dedicated cluster.
   * 
   * @example
   * vsw-****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID. This parameter is only supported for instances in a dedicated cluster.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBInstanceTransType: 'DBInstanceTransType',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      effectiveTime: 'EffectiveTime',
      engineVersion: 'EngineVersion',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      specifiedTime: 'SpecifiedTime',
      storage: 'Storage',
      targetDBInstanceClass: 'TargetDBInstanceClass',
      targetDedicatedHostIdForLog: 'TargetDedicatedHostIdForLog',
      targetDedicatedHostIdForMaster: 'TargetDedicatedHostIdForMaster',
      targetDedicatedHostIdForSlave: 'TargetDedicatedHostIdForSlave',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBInstanceTransType: 'number',
      dedicatedHostGroupId: 'string',
      effectiveTime: 'string',
      engineVersion: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      specifiedTime: 'string',
      storage: 'number',
      targetDBInstanceClass: 'string',
      targetDedicatedHostIdForLog: 'string',
      targetDedicatedHostIdForMaster: 'string',
      targetDedicatedHostIdForSlave: 'string',
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

