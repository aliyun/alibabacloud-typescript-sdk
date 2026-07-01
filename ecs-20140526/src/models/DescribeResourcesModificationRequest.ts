// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourcesModificationRequest extends $dara.Model {
  /**
   * @remarks
   * The list of conditions.
   */
  conditions?: string[];
  /**
   * @remarks
   * The number of vCPU kernels of the target instance type. For valid values, see [Instance family](https://help.aliyun.com/document_detail/25378.html).
   * 
   * This parameter takes effect only when DestinationResource is set to InstanceType.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The type of the resource to be changed. Valid values: 
   *          
   * - InstanceType: instance type.
   * - SystemDisk: system disk type.
   * 
   *   If you set this parameter to SystemDisk, you must also specify the InstanceType parameter to indicate the disk type required by the target instance type.
   * 
   * This parameter is required.
   * 
   * @example
   * InstanceType
   */
  destinationResource?: string;
  /**
   * @remarks
   * The target instance type. For more information, see [Instance family](https://help.aliyun.com/document_detail/25378.html). You can also call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query the most recent instance type list.
   * 
   * If DestinationResource is set to SystemDisk, you must also specify the InstanceType parameter to indicate the disk type required by the target instance type.
   * 
   * @example
   * ecs.g7.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The memory size of the target instance type. Unit: GiB. For valid values, see [Instance family](https://help.aliyun.com/document_detail/25378.html).
   * 
   * This parameter takes effect only when DestinationResource is set to InstanceType.
   * 
   * @example
   * 8.0
   */
  memory?: number;
  /**
   * @remarks
   * Specifies whether cross-cluster instance type changes are supported. Valid values: 
   *         
   * - true: Supported.
   * - false: Not supported.
   * 
   * Default value: false.
   * 
   * If the MigrateAcrossZone parameter is set to true and you upgrade or downgrade the Elastic Compute Service instance based on the returned information, take note of the following items: 
   *             
   * - VPC-type instances: For [retired instance types](https://help.aliyun.com/document_detail/55263.html), when a non-I/O optimized instance is changed to an I/O optimized instance, the disk device names and software authorization codes of the server are changed. For Linux instances, basic disks (cloud) are identified as xvda or xvdb. Ultra disks (cloud_efficiency) and standard SSDs (cloud_ssd) are identified as vda or vdb.
   * 
   * @example
   * true
   */
  migrateAcrossZone?: boolean;
  /**
   * @remarks
   * The type of the Upgrade/Downgrade operation.
   * 
   * - Valid values for subscription resources: 
   * 
   *     - Upgrade: upgrades resources.
   *     - Downgrade: downgrades resources.
   *     - RenewDowngrade: downgrades resources upon renewal.
   *     - RenewModify: renewal with specification change for expired instances.
   * 
   * - Valid value for pay-as-you-go resources: Upgrade.
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
   * The region ID of the instance whose configuration you want to change. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID (InstanceId) of the instance whose instance type or system disk type you want to change.
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
   * The ID of the target zone.
   * 
   * Specify this parameter when you want to change the instance type across zones.
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

