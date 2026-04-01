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
   * The data migration method of the instance. This parameter is available only for instances that are created in dedicated clusters. Valid values:
   * 
   * *   **0** (default): The system preferentially upgrades or downgrades the instance without a migration. If the resources on the host on which the instance resides are insufficient, the system migrates the instance to another suitable host.
   * *   **1**: The system upgrades or downgrades the instance without a migration. If the upgrade or downgrade is not supported, the system reports an error.
   * *   **2**: The system migrates the data of the instance from the host on which the instance resides to another host. You must also specify **DedicatedHostGroupId**, **TargetDedicatedHostIdForMaster**, and **TargetDedicatedHostIdForSlave**. If you set DBInstanceTransType to 2, you cannot migrate the data of the instance to the host on which the instance resides. If you migrate the data of the instance to the host on which the instance resides, the migration fails.
   * 
   * @example
   * 0
   */
  DBInstanceTransType?: number;
  /**
   * @remarks
   * The dedicated cluster ID. This parameter is supported if you call this operation to suspend an RDS instance in the dedicated cluster. You can call the DescribeDedicatedHostGroups operation to query the dedicated cluster ID.
   * 
   * @example
   * dhg-39****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The effective time. This parameter is available only for instances that are created in dedicated clusters.
   * 
   * *   **Immediate**
   * *   **MaintainTime**: The change takes effect during the planned maintenance window. For more information, see ModifyDBInstanceMaintainTime.
   * *   **SpecificTime**: The change takes effect at a specified point in time.
   * 
   * Default value: MaintainTime.
   * 
   * @example
   * Immediate
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The database engine version of the instance. This parameter is available only for instances that are created in dedicated clusters.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The switching time. This parameter is available only for instances that are created in dedicated clusters. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > This parameter must be specified when **EffectiveTime** is set to **Specified**.
   * 
   * @example
   * 2019-10-21T10:00:00Z
   */
  specifiedTime?: string;
  /**
   * @remarks
   * The storage capacity of the instance. This parameter is available only for instances that are created in dedicated clusters. Valid values: **5 to 2000**. Unit: GB. If you do not specify this parameter, the storage capacity of the instance remains unchanged.
   * 
   * @example
   * 1000
   */
  storage?: number;
  /**
   * @remarks
   * The instance type of the required instance. This parameter is available only for instances that are created in dedicated clusters.
   * 
   * @example
   * rds.ebmhfc6.20xlarge
   */
  targetDBInstanceClass?: string;
  /**
   * @remarks
   * A deprecated parameter. You do not need to specify this parameter.
   * 
   * @example
   * dh-bp****
   */
  targetDedicatedHostIdForLog?: string;
  /**
   * @remarks
   * The ID of the host on which the primary instance is created. This parameter is available only for instances that are created in dedicated clusters.
   * 
   * > This parameter must be specified when **DBInstanceTransType** is set to **2**.
   * 
   * @example
   * dh-bp****
   */
  targetDedicatedHostIdForMaster?: string;
  /**
   * @remarks
   * The ID of the host on which the secondary instance is created. This parameter is available only for instances that are created in dedicated clusters.
   * 
   * > This parameter must be specified when **DBInstanceTransType** is set to **2**.
   * 
   * @example
   * dh-bp****
   */
  targetDedicatedHostIdForSlave?: string;
  /**
   * @remarks
   * The vSwitch ID. This parameter is available only for instances that are created in dedicated clusters.
   * 
   * @example
   * vsw-****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID. This parameter is available only for instances that are created in dedicated clusters.
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

