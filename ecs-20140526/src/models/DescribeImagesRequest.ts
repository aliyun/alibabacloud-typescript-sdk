// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImagesRequestFilter } from "./DescribeImagesRequestFilter";
import { DescribeImagesRequestTag } from "./DescribeImagesRequestTag";


export class DescribeImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The scenario in which the image is used. Valid values:
   * 
   * *   CreateEcs: instance creation
   * *   ChangeOS: replacement of the system disk or OS
   * 
   * @example
   * CreateEcs
   */
  actionType?: string;
  /**
   * @remarks
   * The architecture of the image. Valid values:
   * 
   * *   i386
   * *   x86_64
   * *   arm64
   * 
   * @example
   * i386
   */
  architecture?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run without performing the actual request.
   * 
   * *   true: performs only a dry run. The system checks whether your AccessKey pair is valid, whether RAM users are granted required permissions, and whether the required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * *   false: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The filter conditions used to query resources.
   */
  filter?: DescribeImagesRequestFilter[];
  /**
   * @remarks
   * The name of the image family. You can set this parameter to query images of the specified image family.
   * 
   * This parameter is empty by default.
   * 
   * >  For information about image families that are associated with Alibaba Cloud official images, see [Overview of public images](https://help.aliyun.com/document_detail/108393.html).
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * **Naming rules for image IDs**
   * 
   * *   IDs of public images are named after the operating system version numbers, architectures, languages, and release dates of the images. For example, the ID of a Windows Server 2008 R2 Enterprise 64-bit (English) public image is win2008r2_64_ent_sp1_en-us_40G_alibase_20190318.vhd.
   * *   IDs of custom images, shared images, Alibaba Cloud Marketplace images, and community images start with m.
   * 
   * @example
   * m-bp1g7004ksh0oeuc****
   */
  imageId?: string;
  /**
   * @remarks
   * The image name. Fuzzy match is supported.
   * 
   * @example
   * testImageName
   */
  imageName?: string;
  /**
   * @remarks
   * The image source. Valid values:
   * 
   * *   system: images that are provided by Alibaba Cloud and are not released in Alibaba Cloud Marketplace, which are different from public images in the Elastic Compute Service (ECS) console.
   * 
   * *   self: your custom images
   * 
   * *   others: shared images (images shared by other Alibaba Cloud accounts) and community images (publicly available custom images that are published by other Alibaba Cloud accounts). Take note of the following items:
   * 
   *     *   To query community images, you must set IsPublic to true.
   *     *   To query shared images, you must set IsPublic to false or leave IsPublic empty.
   * 
   * *   marketplace: images released by Alibaba Cloud or independent software vendors (ISVs) in the Alibaba Cloud Marketplace, which must be purchased together with ECS instances. Take note of the billing details of the images.
   * 
   * This parameter is empty by default.
   * 
   * > By default, this parameter is empty, which indicates that the following images are queried: public images provided by Alibaba Cloud, custom images in your repository, shared images from other Alibaba Cloud accounts, and community images that are published by other Alibaba Cloud accounts.
   * 
   * @example
   * self
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the image belongs. This parameter takes effect only if you query shared images or community images.
   * 
   * @example
   * 1234567890
   */
  imageOwnerId?: number;
  /**
   * @remarks
   * The instance type for which the image can be used.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether to query published community images. Valid values:
   * 
   * *   true: queries published community images. When you set this parameter to true, you must set ImageOwnerAlias to others.
   * *   false: queries image types other than the community images type. The specific image types to be queried are determined by the ImageOwnerAlias value.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  isPublic?: boolean;
  /**
   * @remarks
   * Specifies whether the image supports cloud-init.
   * 
   * @example
   * true
   */
  isSupportCloudinit?: boolean;
  /**
   * @remarks
   * Specifies whether the image can be used on I/O optimized instances.
   * 
   * @example
   * true
   */
  isSupportIoOptimized?: boolean;
  /**
   * @remarks
   * The operating system type of the image. Valid values:
   * 
   * *   windows
   * *   linux
   * 
   * @example
   * linux
   */
  OSType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number to return.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the image. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the custom image belongs. If you specify this parameter to query resources, up to 1,000 resources that belong to the specified resource group can be returned.
   * 
   * > Resources in the default resource group are displayed in the response regardless of whether you specify this parameter.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether the subscription image has expired.
   * 
   * @example
   * false
   */
  showExpired?: boolean;
  /**
   * @remarks
   * The ID of the snapshot used to create the custom image.
   * 
   * @example
   * s-bp17ot2q7x72ggtw****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The status of the image. By default, if you do not specify this parameter, only images in the Available state are returned. Valid values:
   * 
   * *   Creating: The image is being created.
   * *   Waiting: The image is waiting to be processed.
   * *   Available: The image is available.
   * *   UnAvailable: The image is unavailable.
   * *   CreateFailed: The image fails to be created.
   * *   Deprecated: The image is no longer used.
   * 
   * Default value: Available. You can specify multiple values for this parameter. Separate the values with commas (,).
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tags list.
   */
  tag?: DescribeImagesRequestTag[];
  /**
   * @remarks
   * Specifies whether the image is running on an Elastic Compute Service (ECS) instance. Valid values:
   * 
   * *   instance: The image is already in use and running on an ECS instance.
   * *   none: The image is idle.
   * 
   * @example
   * instance
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      architecture: 'Architecture',
      dryRun: 'DryRun',
      filter: 'Filter',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      imageOwnerId: 'ImageOwnerId',
      instanceType: 'InstanceType',
      isPublic: 'IsPublic',
      isSupportCloudinit: 'IsSupportCloudinit',
      isSupportIoOptimized: 'IsSupportIoOptimized',
      OSType: 'OSType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      showExpired: 'ShowExpired',
      snapshotId: 'SnapshotId',
      status: 'Status',
      tag: 'Tag',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      architecture: 'string',
      dryRun: 'boolean',
      filter: { 'type': 'array', 'itemType': DescribeImagesRequestFilter },
      imageFamily: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      imageOwnerId: 'number',
      instanceType: 'string',
      isPublic: 'boolean',
      isSupportCloudinit: 'boolean',
      isSupportIoOptimized: 'boolean',
      OSType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      showExpired: 'boolean',
      snapshotId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeImagesRequestTag },
      usage: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

