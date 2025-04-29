// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticStrengthRequest extends $dara.Model {
  /**
   * @remarks
   * The disk categories of the data disks. The disk categories that do not match the specified criteria are returned after you call this operation.
   * 
   * >  If you do not specify the scaling group ID, you must specify this parameter.
   */
  dataDiskCategories?: string[];
  /**
   * @remarks
   * The name of the image family. You can specify the ImageFamily request parameter to obtain the most recent available images in the current image family for instance creation. If you specify ImageId, you cannot specify ImageFamily.
   * 
   * >  If you do not specify the scaling group ID, you must specify at least one of ImageId, ImageName, and ImageFamily.
   * 
   * @example
   * CentOS7
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image file that provides the image resource for Auto Scaling to create instances.
   * 
   * >  If you do not specify the scaling group ID, you must specify at least one of ImageId, ImageName, and ImageFamily.
   * 
   * @example
   * centos6u5_64_20G_aliaegis****.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image. Each image name must be unique in a region. If you specify ImageId, ImageName is ignored.
   * 
   * You cannot use ImageName to specify an Alibaba Cloud Marketplace image.
   * 
   * >  If you do not specify the scaling group ID, you must specify at least one of ImageId, ImageName, and ImageFamily.
   * 
   * @example
   * ubuntu_18_04_x64_20G_alibase_20231225.vhd
   */
  imageName?: string;
  /**
   * @remarks
   * The instance types. The instance types specified by this parameter overwrite the instance types specified in the scaling configuration.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The number of IPv6 addresses. If the instance type that you specified does meet the requirement for the number of IPv6 addresses, the scaling strength is weak.
   * 
   * >  If you do not specify the scaling group ID, you must specify this parameter.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * **
   * 
   * **Warning** This parameter is deprecated. We recommend that you use SpotStrategy.
   * 
   * The preemption policy that you want to apply to pay-as-you-go instances. The preemption policy specified by this parameter overwrites the preemption policy specified in the scaling configuration. Valid values:
   * 
   * *   NoSpot: The instances are created as regular pay-as-you-go instances.
   * *   SpotWithPriceLimit: The instances are created as preemptible instances with a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instances are created as preemptible instances for which the market price at the time of purchase is automatically used as the bidding price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * NoSpot
   */
  priorityStrategy?: string;
  /**
   * @remarks
   * The region ID of the scaling group.
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
   * The IDs of the scaling groups that you want to query.
   */
  scalingGroupIds?: string[];
  /**
   * @remarks
   * The instance bidding policy. Valid values:
   * 
   * *   NoSpot: The instances are created as pay-as-you-go instances.
   * *   SpotWithPriceLimit: The instances are created as preemptible instances with a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instances are created as preemptible instances for which the market price at the time of purchase is used as the bid price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The categories of the system disks. The categories of the system disks specified by this parameter overwrite the categories of the system disks specified in the scaling configuration. Valid values:
   * 
   * *   cloud: basic disk.
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: standard SSD.
   * *   cloud_essd: Enterprise SSD (ESSD).
   * 
   * >  If you do not specify the scaling group ID, you must specify this parameter.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The vSwitch IDs.
   * 
   * >  If you do not specify the scaling group ID, you must specify this parameter.
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

