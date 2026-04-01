// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateToOtherZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The RDS edition of the instance. Valid values:
   * 
   * *   **Basic**: RDS Basic Edition
   * *   **HighAvailability**: RDS High-availability Edition
   * *   **AlwaysOn**: SQL Server on RDS Cluster Edition
   * *   **cluster**: MySQL on RDS Cluster Edition
   * *   **Finance**: RDS Enterprise Edition
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  customExtraInfo?: string;
  /**
   * @remarks
   * The new instance type of the instance. You can change the instance type of the instance. You cannot change the storage type of the instance. If you set **IsModifySpec** to **true**, you must specify at least one of DBInstanceClass and **DBInstanceStorage**.
   * 
   * For more information about instance types, see [Primary ApsaraDB RDS for MySQL instance types](https://help.aliyun.com/document_detail/276975.html).
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
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The new storage capacity of the instance. If you set **IsModifySpec** to **true**, you must specify at least one of DBInstanceStorage and **DBInstanceClass**.
   * 
   * Unit: GB. The available storage capacity range varies based on the instance type of the instance. For more information, see [Primary ApsaraDB RDS for MySQL instance types](https://help.aliyun.com/document_detail/276975.html).
   * 
   * @example
   * 500
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * *   **local_ssd**: local SSD. This is the recommended storage type.
   * *   **general_essd**: general Enterprise SSD (ESSD). This is the recommended storage type.
   * *   **cloud_essd**: PL1 ESSD
   * *   **cloud_essd2**: PL2 ESSD
   * *   **cloud_essd3**: PL3 ESSD
   * *   **cloud_ssd**: standard SSD. This storage type is not recommended. Standard SSDs are no longer available for purchase in some Alibaba Cloud regions.
   * 
   * The default value of this parameter is determined by the instance type specified by the **DBInstanceClass** parameter.
   * 
   * *   If the instance type specifies the local SSD storage type, the default value of this parameter is **local_ssd**.
   * *   If the instance type specifies the standard SSD or ESSD storage type, the default value of this parameter is **cloud_essd**.
   * 
   * >  Serverless instances support only PL1 ESSDs and general ESSDs.
   * 
   * @example
   * local_ssd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The time when you want the change to take effect. Valid values:
   * 
   * *   **Immediately** (default): The change immediately takes effect.
   * *   **MaintainTime**: The change takes effect during the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
   * *   **ScheduleTime**: The change takes effect at the point in time that you specify.
   * 
   * >  If you set this parameter to **ScheduleTime**, you must specify the **SwitchTime** parameter.
   * 
   * @example
   * Immediate
   */
  effectiveTime?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * 0
   */
  ioAccelerationEnabled?: string;
  /**
   * @remarks
   * Specifies whether to change the specifications of the instance during the cross-zone migration. Valid values:
   * 
   * *   **true**: You want to change the specifications of the instance during the cross-zone migration. If you set this parameter to **true**, you must specify at least one of **DBInstanceClass** and **DBInstanceStorage**.
   * *   **false** (default): You do not want to change the specifications of the instance during the cross-zone migration.
   * 
   * > This parameter applies only to instances that run MySQL.
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
   * The migration time. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > This parameter is used with **EffectiveTime**. You must specify this parameter only when **EffectiveTime** is set to **ScheduleTime**.
   * 
   * @example
   * 2021-12-14T15:15:15Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). Do not change the VPC of the instance when you migrate the instance across zones.
   * 
   * *   This parameter must be specified when the instance resides in a VPC.
   * *   If the instance runs SQL Server, you can change the VPC of the instance.
   * 
   * @example
   * vpc-xxxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * *   This parameter must be specified when the instance resides in a VPC. You can call the DescribeVSwitches operation to query existing vSwitches.
   * *   If the instance runs PostgreSQL or SQL Server and a secondary zone is specified for the instance, you can specify multiple vSwitch IDs, each of which corresponds to a zone. Separate the vSwitch IDs with commas (,).
   * 
   * @example
   * vsw-uf6adz52c2pxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the destination zone. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The secondary zone 1 of the instance.
   * 
   * >  This parameter must be configured if the instance runs RDS editions other than RDS Basic Edition.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneIdSlave1?: string;
  /**
   * @remarks
   * The secondary zone 2 of the instance.
   * 
   * >  You can specify this parameter only for instances that run RDS Enterprise Edition.
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

