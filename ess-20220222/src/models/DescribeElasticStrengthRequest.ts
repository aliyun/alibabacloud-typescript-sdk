// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticStrengthRequest extends $dara.Model {
  /**
   * @remarks
   * A list of data disk categories used to evaluate elastic strength. If a category is incompatible, the response identifies the specific mismatched category.
   * 
   * > You can specify this parameter if `ScalingGroupId` is not specified.
   */
  dataDiskCategories?: string[];
  /**
   * @remarks
   * The name of the image family. You can set this parameter to use the latest available image from the specified image family to create instances. If you specify ImageId, this parameter is ignored.
   * 
   * > If `ScalingGroupId` is not specified, you must specify at least one of `ImageId`, `ImageName`, or `ImageFamily`.
   * 
   * @example
   * CentOS7
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image used to create instances.
   * 
   * > If `ScalingGroupId` is not specified, you must specify at least one of `ImageId`, `ImageName`, or `ImageFamily`.
   * 
   * @example
   * centos6u5_64_20G_aliaegis****.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image. The name must be unique within a region. If you specify `ImageId`, this parameter is ignored.
   * 
   * You cannot use this parameter to specify a Marketplace image.
   * 
   * > If `ScalingGroupId` is not specified, you must specify at least one of `ImageId`, `ImageName`, or `ImageFamily`.
   * 
   * @example
   * ubuntu_18_04_x64_20G_alibase_20231225.vhd
   */
  imageName?: string;
  /**
   * @remarks
   * A list of ECS instance types. If specified, this parameter overrides the instance types in the scaling configuration.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The number of IPv6 addresses to be configured for each instance. The elastic strength is lowered for instance types that do not support the specified number of IPv6 addresses.
   * 
   * > You can specify this parameter if `ScalingGroupId` is not specified.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * >Warning: This parameter is deprecated. Use `SpotStrategy` instead.
   * The spot strategy for pay-as-you-go instances. If specified, this parameter overrides the spot strategy in the scaling configuration. Valid values:
   * 
   * - `NoSpot`: A regular pay-as-you-go instance.
   * 
   * - `SpotWithPriceLimit`: A spot instance with a specified maximum price.
   * 
   * - `SpotAsPriceGo`: A spot instance where the system automatically bids at the current market price.
   * 
   * Default value: `NoSpot`.
   * 
   * @example
   * NoSpot
   */
  priorityStrategy?: string;
  /**
   * @remarks
   * The ID of the region where the scaling group is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The IDs of one or more scaling groups to query in a batch operation.
   */
  scalingGroupIds?: string[];
  /**
   * @remarks
   * The spot strategy for instances. Valid values:
   * 
   * - `NoSpot`: A regular pay-as-you-go instance.
   * 
   * - `SpotWithPriceLimit`: A spot instance with a specified maximum price.
   * 
   * - `SpotAsPriceGo`: A spot instance where the system automatically bids at the current market price.
   * 
   * Default value: `NoSpot`.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * A list of system disk categories. If specified, this parameter overrides the system disk categories in the scaling configuration. Valid values:
   * 
   * - `cloud`: Basic Cloud Disk.
   * 
   * - `cloud_efficiency`: Ultra Cloud Disk.
   * 
   * - `cloud_ssd`: Standard SSD.
   * 
   * - `cloud_essd`: ESSD.
   * 
   * > This parameter is required if `ScalingGroupId` is not specified.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * A list of VSwitch IDs.
   * 
   * > This parameter is required if `ScalingGroupId` is not specified.
   */
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      dataDiskCategories: 'DataDiskCategories',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      imageName: 'ImageName',
      instanceTypes: 'InstanceTypes',
      ipv6AddressCount: 'Ipv6AddressCount',
      priorityStrategy: 'PriorityStrategy',
      regionId: 'RegionId',
      scalingGroupId: 'ScalingGroupId',
      scalingGroupIds: 'ScalingGroupIds',
      spotStrategy: 'SpotStrategy',
      systemDiskCategories: 'SystemDiskCategories',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCategories: { 'type': 'array', 'itemType': 'string' },
      imageFamily: 'string',
      imageId: 'string',
      imageName: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      ipv6AddressCount: 'number',
      priorityStrategy: 'string',
      regionId: 'string',
      scalingGroupId: 'string',
      scalingGroupIds: { 'type': 'array', 'itemType': 'string' },
      spotStrategy: 'string',
      systemDiskCategories: { 'type': 'array', 'itemType': 'string' },
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dataDiskCategories)) {
      $dara.Model.validateArray(this.dataDiskCategories);
    }
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    if(Array.isArray(this.scalingGroupIds)) {
      $dara.Model.validateArray(this.scalingGroupIds);
    }
    if(Array.isArray(this.systemDiskCategories)) {
      $dara.Model.validateArray(this.systemDiskCategories);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

