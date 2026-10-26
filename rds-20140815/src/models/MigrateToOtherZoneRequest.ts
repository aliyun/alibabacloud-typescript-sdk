// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateToOtherZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * * **Basic**: Basic Edition.
   * * **HighAvailability**: High-availability Edition.
   * * **AlwaysOn**: Cluster Edition for SQL Server.
   * * **cluster**: Cluster Edition for MySQL.
   * * **Finance**: RDS Enterprise Edition.
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  customExtraInfo?: string;
  /**
   * @remarks
   * The instance type code of the destination instance. Only instance type changes are supported. Storage type changes are not supported.
   * When the **IsModifySpec** parameter settings are **true**, you must specify at least one of this parameter and **DBInstanceStorage**.
   * 
   * For more information about instance type codes, see [ApsaraDB RDS for MySQL primary instance types](https://help.aliyun.com/document_detail/276975.html).
   * 
   * @example
   * mysql.x4.xlarge.2
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The destination storage capacity. When the **IsModifySpec** parameter settings are **true**, you must specify at least one of this parameter and **DBInstanceClass**.
   * 
   * Unit: GB.
   * Valid values: The storage capacity that can be expanded varies by instance type. For more information, see [ApsaraDB RDS for MySQL primary instance types](https://help.aliyun.com/document_detail/276975.html).
   * 
   * @example
   * 500
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The instance storage type. Valid values:
   * - cloud_essd: PL1 ESSD.
   * - cloud_essd2: PL2 ESSD.
   * - cloud_essd3: PL3 ESSD.
   * - cloud_ssd: standard SSD. This is not recommended because standard SSDs are no longer available in some regions.
   * 
   * @example
   * cloud_essd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The effective period. Valid values:
   * * **Immediate**: Takes effect immediately. This is the default value.
   * * **MaintainTime**: Takes effect within the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
   * * **ScheduleTime**: Takes effect at a specified time.
   * 
   * > If you set this parameter to **ScheduleTime**, you must also specify the **SwitchTime** parameter.
   * 
   * @example
   * Immediate
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The Buffer Pool Extension (BPE) feature switch for premium cloud disks. Valid values:
   * 
   *  - **1**: Enables the feature.
   *  - **0**: Disables the feature.
   * 
   * > For more information about the BPE feature, see [Buffer Pool Extension (BPE)](https://help.aliyun.com/document_detail/2527067.html).
   * 
   * @example
   * 0
   */
  ioAccelerationEnabled?: string;
  /**
   * @remarks
   * Specifies whether to change the specifications during zone migration. Valid values:
   * 
   * - **true**: Changes the specifications. If you set this parameter to **true**, you must specify at least one of the **DBInstanceClass** or **DBInstanceStorage** parameters.
   * - **false**: Does not change the specifications. This is the default value.
   * 
   * > This parameter is only applicable to ApsaraDB RDS for MySQL instances.
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
   * The custom effective time for switching zones. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC time).
   * >This parameter is used together with the **EffectiveTime** parameter and is required only when **EffectiveTime** is set to **ScheduleTime**.
   * 
   * @example
   * 2021-12-14T15:15:15Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). The VPC cannot be changed during instance migration and must remain the same.
   * 
   * - This parameter is required when you migrate a VPC-connected instance across zones.
   * - If the instance runs SQL Server, the VPC can be changed during instance migration.
   * 
   * @example
   * vpc-****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * - This parameter is required when you migrate a VPC-connected instance across zones. You can call the DescribeVSwitches operation to query the created vSwitches.
   * - When you migrate an ApsaraDB RDS for PostgreSQL or ApsaraDB RDS for SQL Server instance across zones and configure a secondary zone, you can specify multiple vSwitch IDs separated by commas (,). The vSwitch IDs must correspond to the zones.
   * 
   * @example
   * vsw-uf6adz52c2p****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the destination zone. You can call the DescribeRegions operation to query the zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The ID of secondary zone 1.
   * >This parameter is required for instances that are not Basic Edition.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneIdSlave1?: string;
  /**
   * @remarks
   * The ID of secondary zone 2.
   * >This parameter is only applicable to RDS Enterprise Edition instances.
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

