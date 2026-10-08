// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateToOtherZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * * **Basic**: Basic Edition
   * * **HighAvailability**: High-availability Edition
   * * **AlwaysOn**: SQL Server Cluster Edition
   * * **cluster**: MySQL Cluster Edition
   * * **Finance**: RDS Enterprise Edition
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  customExtraInfo?: string;
  /**
   * @remarks
   * The target instance type of the destination instance. Only the instance type can be changed. The storage type cannot be changed.
   * When the **IsModifySpec** parameter settings require **true**, you must specify at least one of this parameter and **DBInstanceStorage**.
   * 
   * For more information about instance types, see [Primary ApsaraDB RDS for MySQL instance types](https://help.aliyun.com/document_detail/276975.html).
   * 
   * @example
   * mysql.x4.xlarge.2
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The destination storage capacity. When the **IsModifySpec** parameter settings require **true**, you must specify at least one of this parameter and **DBInstanceClass**.
   * 
   * Unit: GB.
   * Valid values: The storage capacity varies based on the instance type. For more information, see [Primary ApsaraDB RDS for MySQL instance types](https://help.aliyun.com/document_detail/276975.html).
   * 
   * @example
   * 500
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The instance storage type. Valid values:
   * - cloud_essd: PL1 ESSD cloud disk.
   * - cloud_essd2: PL2 ESSD cloud disk.
   * - cloud_essd3: PL3 ESSD cloud disk.
   * - cloud_ssd: standard SSD (not recommended because standard SSDs are no longer available for purchase in some regions).
   * 
   * @example
   * cloud_essd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The effective period. Valid values:
   * * **Immediate**: The migration takes effect immediately. This is the default value.
   * * **MaintainTime**: The migration takes effect during the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
   * * **ScheduleTime**: The migration takes effect at a custom time.
   * 
   * > If you set this parameter to **ScheduleTime**, you must also specify the **SwitchTime** parameter.
   * 
   * @example
   * Immediate
   */
  effectiveTime?: string;
  /**
   * @remarks
   * Specifies whether to enable the Buffer Pool Extension (BPE) feature for premium performance disks. Valid values:
   * 
   *  - **1**: Enable.
   *  - **0**: Disable.
   * 
   * > For more information about the BPE feature, see [Buffer Pool Extension (BPE)](https://help.aliyun.com/document_detail/2527067.html).
   * 
   * @example
   * 0
   */
  ioAccelerationEnabled?: string;
  /**
   * @remarks
   * Specifies whether to change the instance specifications during zone migration.
   * 
   * - **true**: Change the specifications. When this parameter is set to **true**, you must specify at least one of the **DBInstanceClass** and **DBInstanceStorage** parameters.
   * - **false**: Do not change the specifications. This is the default value.
   * 
   * > This parameter is applicable only to ApsaraDB RDS for MySQL instances.
   * 
   * @example
   * true
   */
  isModifySpec?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The custom time at which the zone switch takes effect. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * > This parameter is used together with the **EffectiveTime** parameter and is required only when **EffectiveTime** is set to **ScheduleTime**.
   * 
   * @example
   * 2021-12-14T15:15:15Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID. The VPC cannot be changed during instance migration and must remain the same.
   * 
   * - This parameter is required when you migrate a VPC-connected instance to a different zone.
   * - If the instance engine is SQL Server, the VPC can be changed during instance migration.
   * 
   * @example
   * vpc-****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * - This parameter is required when you migrate a VPC-connected instance to a different zone. You can invoke DescribeVSwitches to query the vSwitches that have been created.
   * - When you perform instance migration for an ApsaraDB RDS for PostgreSQL or SQL Server instance to a different zone with a secondary zone configured, you can specify multiple vSwitch IDs separated by commas (,), corresponding to the zones.
   * 
   * @example
   * vsw-uf6adz52c2p****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the destination zone. You can call DescribeRegions to query the zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The secondary zone 1.
   * > This parameter is required for instances that are not of the Basic Edition.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneIdSlave1?: string;
  /**
   * @remarks
   * The secondary zone 2.
   * > This parameter is applicable only to RDS Enterprise Edition instances.
   * 
   * @example
   * cn-hangzhou-d
   */
  zoneIdSlave2?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      customExtraInfo: 'CustomExtraInfo',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      effectiveTime: 'EffectiveTime',
      ioAccelerationEnabled: 'IoAccelerationEnabled',
      isModifySpec: 'IsModifySpec',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchTime: 'SwitchTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      zoneIdSlave1: 'ZoneIdSlave1',
      zoneIdSlave2: 'ZoneIdSlave2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      customExtraInfo: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      effectiveTime: 'string',
      ioAccelerationEnabled: 'string',
      isModifySpec: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      zoneIdSlave1: 'string',
      zoneIdSlave2: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

