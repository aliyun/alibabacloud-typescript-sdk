// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourcesModificationRequest extends $dara.Model {
  /**
   * @remarks
   * The conditions.
   */
  conditions?: string[];
  /**
   * @remarks
   * The number of vCPUs of the instance type. For information about the valid values, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * This parameter is valid only when the DestinationResource parameter is set to InstanceType.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The resource type that you want to change. Valid values:
   * 
   * *   InstanceType
   * 
   * *   SystemDisk
   * 
   *     If you set this parameter to SystemDisk, you must specify the InstanceType parameter. In this case, this operation queries the system disk categories supported by the specified instance type.
   * 
   * This parameter is required.
   * 
   * @example
   * InstanceType
   */
  destinationResource?: string;
  /**
   * @remarks
   * The instance type to which you want to change the instance type of the instance. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html). You can also call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the most recent instance type list.
   * 
   * If you set the DestinationResource parameter to SystemDisk, you must specify the InstanceType parameter. In this case, this operation queries the system disk categories supported by the specified instance type.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The memory size of the instance type. Unit: GiB. For information about the valid values, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * This parameter is valid only when the DestinationResource parameter is set to InstanceType.
   * 
   * @example
   * 8.0
   */
  memory?: number;
  /**
   * @remarks
   * Specifies whether cross-cluster instance type upgrades are supported. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * When MigrateAcrossZone is set to true and you upgrade the instance type of an instance based on the returned information, take note of the following items:
   * 
   * *   Instance that resides in the classic network:
   * 
   *     *   For [retired instance types](https://help.aliyun.com/document_detail/55263.html), when a non-I/O optimized instance is upgraded to an I/O optimized instance, the private IP address, disk device names, and software authorization codes of the instance change. For a Linux instance, basic disks (cloud) are identified as xvd\\* such as xvda and xvdb, and ultra disks (cloud_efficiency) and standard SSDs (cloud_ssd) are identified as vd\\* such as vda and vdb.
   *     *   For [instance families available for purchase](https://help.aliyun.com/document_detail/25378.html), when the instance type of an instance is changed, the private IP address of the instance changes.
   * 
   * *   Instance that resides in a virtual private cloud (VPC): For [retired instance types](https://help.aliyun.com/document_detail/55263.html), when a non-I/O optimized instance is upgraded to an I/O optimized instance, the disk device names and software authorization codes of the instance change. For a Linux instance, basic disks (cloud) are identified as xvd\\* such as xvda and xvdb, and ultra disks (cloud_efficiency) and standard SSDs (cloud_ssd) are identified as vd\\* such as vda and vdb.
   * 
   * @example
   * true
   */
  migrateAcrossZone?: boolean;
  /**
   * @remarks
   * The operation of changing resource configurations.
   * 
   * *   Valid values for subscription resources:
   * 
   *     *   Upgrade: upgrades resources.
   *     *   Downgrade: downgrades resources.
   *     *   RenewDowngrade: renews and downgrades resources.
   *     *   RenewModify: renews an expired instance and changes its configurations.
   * 
   * *   Set the value to Upgrade for pay-as-you-go resources.
   * 
   * Default value: Upgrade.
   * 
   * @example
   * Upgrade
   */
  operationType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance for which you want to change the instance type or system disk category. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the instance for which you want to change the instance type or system disk category.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the destination zone to which you want to migrate the instance.
   * 
   * If you want to change the instance type across zones, you must specify this parameter.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      cores: 'Cores',
      destinationResource: 'DestinationResource',
      instanceType: 'InstanceType',
      memory: 'Memory',
      migrateAcrossZone: 'MigrateAcrossZone',
      operationType: 'OperationType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': 'string' },
      cores: 'number',
      destinationResource: 'string',
      instanceType: 'string',
      memory: 'number',
      migrateAcrossZone: 'boolean',
      operationType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

