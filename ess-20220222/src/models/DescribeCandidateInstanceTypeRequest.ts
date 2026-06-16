// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCandidateInstanceTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include vSwitches from other availability zones as candidates.
   * 
   * > The instance types remain unchanged. Only new availability zones are added as candidates. If a scaling group fails to scale out in all selected availability zones due to issues such as insufficient inventory, Auto Scaling automatically adds a vSwitch in a new availability zone to the scaling group based on this setting.
   * > For example, if a scaling group is configured for the cn-hangzhou-h and cn-hangzhou-g availability zones and a scale-out fails in both zones, Auto Scaling may create a vSwitch in the cn-hangzhou-k availability zone and add it to the scaling group based on real-time inventory.
   * 
   * @example
   * true
   */
  allowCrossAz?: boolean;
  /**
   * @remarks
   * Specifies whether to include instance types from other generations as candidates.
   * 
   * - For example, if the current instance type is ecs.c7.large, you can set this parameter to true to include instance types such as ecs.c6.large and ecs.c8.large in the list of candidates.
   * 
   * @example
   * true
   */
  allowDifferentGeneration?: boolean;
  /**
   * @remarks
   * The data disk categories, ordered by priority from high to low. If Auto Scaling cannot create a data disk by using a higher-priority category, it tries the next one in the list.
   */
  dataDiskCategories?: string[];
  /**
   * @remarks
   * The name of the image family. When specified, the latest image in this family is used to create instances. This parameter cannot be used with ImageId.
   * 
   * > If you do not specify the scaling group ID, you must specify at least one of ImageId, ImageName, and ImageFamily.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image used to create instances.
   * 
   * > If the specified image contains both a system disk and data disks, any existing data disk information in the scaling configuration is cleared.
   * 
   * @example
   * centos6u5_64_20G_aliaegis****.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image. The name must be unique within a region. You cannot use this parameter to specify an image from Alibaba Cloud Marketplace.
   * 
   * > This parameter is an alternative to the `ImageId` parameter. If you specify `ImageId`, `ImageName` is ignored.
   * 
   * @example
   * centos6u5_64_20G_aliaegis_20140703.vhd
   */
  imageName?: string;
  /**
   * @remarks
   * The specified ECS instance types.
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The number of IPv6 addresses.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The maximum price for a candidate instance type.
   * 
   * @example
   * 2
   */
  maxPrice?: number;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the scaling group is located.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The bidding strategy for pay-as-you-go instances. Valid values:
   * 
   * - NoSpot: a standard pay-as-you-go instance.
   * 
   * - SpotWithPriceLimit: a spot instance with a user-defined maximum price.
   * 
   * - SpotAsPriceGo: a spot instance where the system automatically bids at the market price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The system disk categories, ordered by priority from high to low. If Auto Scaling cannot create a system disk by using a higher-priority category, it tries the next one in the list.
   */
  systemDiskCategories?: string[];
  /**
   * @remarks
   * The specified availability zones.
   */
  zoneIds?: string[];
  static names(): { [key: string]: string } {
    return {
      allowCrossAz: 'AllowCrossAz',
      allowDifferentGeneration: 'AllowDifferentGeneration',
      dataDiskCategories: 'DataDiskCategories',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      imageName: 'ImageName',
      instanceTypes: 'InstanceTypes',
      ipv6AddressCount: 'Ipv6AddressCount',
      maxPrice: 'MaxPrice',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spotStrategy: 'SpotStrategy',
      systemDiskCategories: 'SystemDiskCategories',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCrossAz: 'boolean',
      allowDifferentGeneration: 'boolean',
      dataDiskCategories: { 'type': 'array', 'itemType': 'string' },
      imageFamily: 'string',
      imageId: 'string',
      imageName: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      ipv6AddressCount: 'number',
      maxPrice: 'number',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spotStrategy: 'string',
      systemDiskCategories: { 'type': 'array', 'itemType': 'string' },
      zoneIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dataDiskCategories)) {
      $dara.Model.validateArray(this.dataDiskCategories);
    }
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    if(Array.isArray(this.systemDiskCategories)) {
      $dara.Model.validateArray(this.systemDiskCategories);
    }
    if(Array.isArray(this.zoneIds)) {
      $dara.Model.validateArray(this.zoneIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

