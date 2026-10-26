// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceRequestDBNodes extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the node, which is used to specify the node.
   * > This parameter is valid only for Cluster Edition instances.
   * 
   * @example
   * 28542293
   */
  nodeId?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * * **Master**: Primary node.
   * * **Slave**: Secondary node.
   * 
   * > For Cluster Edition instances, this parameter is not required. You can specify the node by using the NodeId parameter.
   * 
   * @example
   * Master
   */
  role?: string;
  /**
   * @remarks
   * The vSwitch ID of the instance.
   * 
   * @example
   * vsw-bp1g7uym6ia6yroes6dkm
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-shanghai-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      role: 'Role',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      role: 'string',
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

export class ModifyDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically use coupons. Valid values:
   * * **true** (default): Yes.
   * * **false**: No.
   * 
   * > After a coupon is used, if a downgrade is required, the amount deducted by the coupon will not be refunded.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the [I/O performance burst feature for Premium ESSD cloud disks](https://help.aliyun.com/document_detail/2340501.html). Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * - **Basic**: Basic Edition
   * - **HighAvailability**: High-availability Edition
   * - **cluster**: Cluster Edition
   * 
   * @example
   * Standard
   */
  category?: string;
  /**
   * @remarks
   * <props="china">Specifies whether to enable the [data archiving feature for general cloud disks](https://help.aliyun.com/document_detail/2701832.html). Valid values:
   * 
   * - <props="china">**true**: Enabled.
   * 
   * - <props="china">**false**: Disabled.
   * 
   * <props="intl">Reserved parameter.
   * 
   * @example
   * true
   */
  coldDataEnabled?: boolean;
  /**
   * @remarks
   * The instance type. For more information, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * @example
   * pg.n4.2c.1m
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-bp15i4hn07r******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The [target storage capacity](https://help.aliyun.com/document_detail/26312.html). Unit: GB. You can call the [DescribeAvailableClasses](https://help.aliyun.com/document_detail/610393.html) operation to query the available storage capacity range for the target instance type.
   * 
   * > * You must specify at least one of this parameter and the **DBInstanceClass** parameter.
   * > * You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/610394.html) operation to view the current storage capacity of the instance.
   * 
   * @example
   * 500
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The instance storage type. Valid values:
   * 
   * * **general_essd**: Premium ESSD (recommended)
   * * **cloud_essd**: PL1 ESSD
   * * **cloud_essd2**: PL2 ESSD
   * * **cloud_essd3**: PL3 ESSD
   * 
   * @example
   * cloud_essd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The node information.
   */
  DBNodes?: ModifyDBInstanceRequestDBNodes[];
  /**
   * @remarks
   * The type of specification change for the instance. Valid values:
   * 
   * - **Up** (default): Upgrades a subscription instance, or upgrades or downgrades a pay-as-you-go instance.
   * - **Down**: Downgrades a subscription instance.
   * 
   * @example
   * Up
   */
  direction?: string;
  /**
   * @remarks
   * The effective period for the new configurations. Valid values:
   * > **Changing some configurations may affect the instance**. Read the [Impact section in the feature documentation](https://help.aliyun.com/document_detail/96061.html) carefully before you configure this parameter, and perform the operation during off-peak hours.
   * * **Immediate** (default): Takes effect immediately.
   * * **MaintainTime**: Takes effect within the [maintenance window](https://help.aliyun.com/document_detail/610402.html).
   * * **ScheduleTime**: Specifies a time for the switchover. The time must be at least 12 hours later than the current time, and the actual switch time follows the formula: EffectiveTime = ScheduleTime + SwitchTime.
   * 
   * @example
   * Immediate
   */
  effectiveTime?: string;
  /**
   * @remarks
   * Specifies whether to enable the [Buffer Pool Extension (BPE) feature for Premium ESSD cloud disks](https://help.aliyun.com/document_detail/2527067.html). Valid values:
   * 
   * -  **1**: Enabled.
   * -  **0**: Disabled.
   * 
   * @example
   * 0
   */
  ioAccelerationEnabled?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The parameter template ID.
   * 
   * @example
   * rpg-dp****
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The parameters and their values. All parameter values are of the string type. You can call the DescribeParameterTemplates operation to query parameter names and values.
   * 
   * > If you specify the **ParameterGroupId** parameter and a parameter is modified by both the ParameterGroupId and Parameters parameters, the modification in the Parameters parameter takes precedence.
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * aliwood-1688-mobile-promotion
   */
  promotionCode?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies the execution time for modifying the parameter. This parameter is required when EffectiveTime is set to ScheduleTime. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC time).
   * > The time must be later than the current time (the time when the API call is executed).
   * 
   * @example
   * 2019-10-17T18:50:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The [minor engine version](https://help.aliyun.com/document_detail/126002.html) of the PostgreSQL instance. When you change the instance type and an error indicates that the minor engine version is not supported, you must specify this parameter **to upgrade the minor engine version during the instance type change**.
   * 
   * Format: `rds_postgres_<Major version number>00_<Minor version number>`. Example for version 12 on 20200830: `rds_postgres_1200_20200830`.
   * 
   * @example
   * rds_postgres_1200_20200830
   */
  targetMinorVersion?: string;
  static names(): { [key: string]: string } {
    return {
      autoUseCoupon: 'AutoUseCoupon',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      coldDataEnabled: 'ColdDataEnabled',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      DBNodes: 'DBNodes',
      direction: 'Direction',
      effectiveTime: 'EffectiveTime',
      ioAccelerationEnabled: 'IoAccelerationEnabled',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parameterGroupId: 'ParameterGroupId',
      parameters: 'Parameters',
      promotionCode: 'PromotionCode',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      switchTime: 'SwitchTime',
      targetMinorVersion: 'TargetMinorVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUseCoupon: 'boolean',
      burstingEnabled: 'boolean',
      category: 'string',
      coldDataEnabled: 'boolean',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      DBNodes: { 'type': 'array', 'itemType': ModifyDBInstanceRequestDBNodes },
      direction: 'string',
      effectiveTime: 'string',
      ioAccelerationEnabled: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      parameterGroupId: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      promotionCode: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      switchTime: 'string',
      targetMinorVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBNodes)) {
      $dara.Model.validateArray(this.DBNodes);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

