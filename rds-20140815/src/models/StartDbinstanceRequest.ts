// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is supported only for dedicated cluster instances. The migration method of the instance. Valid values:
   * * **0**: Default value. The system preferentially performs a local specification change. If local resources are insufficient, a cross-instance migration is performed.
   * * **1**: Local specification change. If the system determines that the instance does not support a local specification change, an error is returned.
   * * **2**: Cross-instance migration. The instance is migrated to a specified host. You must specify **DedicatedHostGroupId**, **TargetDedicatedHostIdForMaster**, and **TargetDedicatedHostIdForSlave**. The instance cannot be migrated to the host on which it currently resides. Otherwise, the migration fails.
   * 
   * @example
   * 0
   */
  DBInstanceTransType?: number;
  /**
   * @remarks
   * This operation also supports starting an ApsaraDB RDS instance in a dedicated cluster. In this case, specify the dedicated cluster ID. You can call DescribeDedicatedHostGroups to query the dedicated cluster ID.
   * 
   * @example
   * dhg-39****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * This parameter is supported only for dedicated cluster instances. The effective period. Valid values:
   * 
   * * **Immediate**: The operation takes effect immediately.
   * * **MaintainTime**: The operation takes effect during the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
   * * **SpecificTime**: The operation takes effect at a specified time.
   * 
   * Default value: MaintainTime.
   * 
   * @example
   * Immediate
   */
  effectiveTime?: string;
  /**
   * @remarks
   * This parameter is supported only for dedicated cluster instances. The database engine version.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is supported only for dedicated cluster instances. The specified switchover time. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * > This parameter is required when **EffectiveTime** is set to **Specified**.
   * 
   * @example
   * 2019-10-21T10:00:00Z
   */
  specifiedTime?: string;
  /**
   * @remarks
   * This parameter is supported only for dedicated cluster instances. The custom storage capacity. Valid values: **5 to 2000**. Unit: GB. If you do not specify this parameter, the storage capacity remains unchanged.
   * 
   * @example
   * 1000
   */
  storage?: number;
  /**
   * @remarks
   * This parameter is supported only for dedicated cluster instances. The instance type of the target instance.
   * 
   * @example
   * rds.ebmhfc6.20xlarge
   */
  targetDBInstanceClass?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and does not need to be configured.
   * 
   * @example
   * dh-bp****
   */
  targetDedicatedHostIdForLog?: string;
  /**
   * @remarks
   * This parameter is supported only for dedicated cluster instances. Specifies the ID of the destination host for the primary node.
   * 
   * > This parameter is required when **DBInstanceTransType** is set to **2**.
   * 
   * @example
   * dh-bp****
   */
  targetDedicatedHostIdForMaster?: string;
  /**
   * @remarks
   * This parameter is supported only for dedicated cluster instances. Specifies the ID of the destination host for the secondary node.
   * 
   * > This parameter is required when **DBInstanceTransType** is set to **2**.
   * 
   * @example
   * dh-bp****
   */
  targetDedicatedHostIdForSlave?: string;
  /**
   * @remarks
   * This parameter is supported only for dedicated cluster instances. The vSwitch ID.
   * 
   * @example
   * vsw-****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * This parameter is supported only for dedicated cluster instances. The zone ID.
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

