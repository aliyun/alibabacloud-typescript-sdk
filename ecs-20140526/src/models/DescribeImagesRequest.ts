// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key for querying resources. Valid values:
   * 
   * - When this parameter is set to `CreationStartTime`, you can query resources created after the time specified by `Filter.N.Value`.
   * - When this parameter is set to `CreationEndTime`, you can query resources created before the time specified by `Filter.N.Value`.
   * - When this parameter is set to `NetworkType`, you can query resources of the specified network type.
   * - When this parameter is set to `CpuOnlineUpgrade`, `CpuOnlineDowngrade`, `MemoryOnlineUpgrade`, or `MemoryOnlineDowngrade`, you can query the CPU or memory hot-plugging support of the specified image.
   * 
   * Default value: null.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The filter value for querying resources.
   * - When `Filter.N.Key` is `CreationStartTime` or `CreationEndTime`, the format is `yyyy-MM-ddTHH:mmZ` in UTC+0.
   * - When `Filter.N.Key` is `NetworkType`, valid values for the network type include `vpc` and `classic`.
   * 
   * - When `Filter.N.Key` is `CpuOnlineUpgrade`, `CpuOnlineDowngrade`, `MemoryOnlineUpgrade`, or `MemoryOnlineDowngrade`, valid values are `supported` and `unsupported`.
   * 
   * Default value: null.
   * 
   * @example
   * 2017-12-05T22:40Z
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the image. Valid values of N: 1 to 20.
   * 
   * When you use a single tag to filter resources, the resource count with this tag cannot exceed 1000. When you use multiple tags to filter resources, the resource count of resources that have all specified tags attached cannot exceed 1000. If the resource count exceeds 1000, use the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the image. Valid values of N: 1 to 20.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The scenario in which the image is used. Valid values:
   * 
   * - CreateEcs (default): instance creation.
   * - ChangeOS: replacement of the system disk or operating system.
   * 
   * @example
   * CreateEcs
   */
  actionType?: string;
  /**
   * @remarks
   * The architecture of the image. Valid values:
   * 
   * - i386.
   * - x86_64.
   * - arm64.
   * 
   * @example
   * i386
   */
  architecture?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run.
   *          
   * - true: Sends a check request without querying resource status. The check items include whether the AccessKey pair is valid, whether the Resource Access Management (RAM) user has the required authorization, and whether required parameters are specified. If the check fails, the corresponding error is returned. If the check succeeds, the DryRunOperation error code is returned.  
   * - false: Sends a normal request. After the check succeeds, a 2XX HTTP status code is returned and the resource status is queried. 
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The list of filter conditions for querying resources.
   */
  filter?: DescribeImagesRequestFilter[];
  /**
   * @remarks
   * The name of the image family. You can set this parameter to filter images that belong to the specified image family.
   * 
   * Default value: empty.
   * > For information about image families associated with Alibaba Cloud official images, see [Overview of public images](https://help.aliyun.com/document_detail/108393.html).
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * <details>
   * <summary>Naming rules for image IDs</summary>
   * 
   * - Public images: Named by operating system version, architecture, language, and release date. For example, the image ID of Windows Server 2008 R2 Enterprise Edition, 64-bit English system is win2008r2_64_ent_sp1_en-us_40G_alibase_20190318.vhd.
   * 
   * - Custom images, shared images, Alibaba Cloud Marketplace images, and community images: Start with m.
   * 
   * </details>
   * 
   * @example
   * m-bp1g7004ksh0oeuc****
   */
  imageId?: string;
  /**
   * @remarks
   * The image name. Fuzzy search is supported.
   * 
   * @example
   * testImageName
   */
  imageName?: string;
  /**
   * @remarks
   * The source of the image. Valid values:
   * 
   * - system: Public images provided by Alibaba Cloud that are not published through Alibaba Cloud Marketplace. This is different from the concept of "Public Image" in the console.
   * - self: Custom images that you created.
   * - others: Includes shared images (images directly shared by other Alibaba Cloud users) and community images (custom images that are fully shared publicly by any Alibaba Cloud user). Note:
   *     - To query community images, IsPublic must be set to true.
   *     - To query shared images, IsPublic must be set to false or left empty.
   * - marketplace: Images published by Alibaba Cloud or third-party independent software vendors (ISVs) in Alibaba Cloud Marketplace. These images must be purchased together with ECS. Note the billing details of Alibaba Cloud Marketplace images.
   * 
   * Default value: empty.
   * 
   * > An empty value indicates that images with system, self, and others values are returned.
   * 
   * @example
   * self
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the image owner. This parameter takes effect only when you query shared images or community images.
   * 
   * @example
   * 20169351435666****
   */
  imageOwnerId?: number;
  /**
   * @remarks
   * The instance type for which available images are queried.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether to query published community images. Valid values:
   * 
   * - true: Queries published community images. When you set this parameter to true, ImageOwnerAlias must be set to others.
   * - false: Queries image types other than community images. The specific types depend on the ImageOwnerAlias parameter value.
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
   * Specifies whether the image can run on I/O optimized instances.
   * 
   * @example
   * true
   */
  isSupportIoOptimized?: boolean;
  /**
   * @remarks
   * The operating system type of the image. Valid values:
   * 
   * - windows.
   * - linux.
   * 
   * @example
   * linux
   */
  OSType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the resources.
   * 
   * Start value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the image. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the custom image belongs. When you use this parameter to filter resources, the resource count cannot exceed 1000.
   * 
   * > Filtering by the default resource group is not supported.
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
   * The status of the image. If you do not specify this parameter, only images in the Available state are returned. Valid values:
   * 
   * - Creating: The image is being created.
   * - Waiting: The image is waiting in a multi-task queue.
   * - Available (default): The image is available for use.
   * - UnAvailable: The image is unavailable.
   * - CreateFailed: The image failed to be created.
   * - Deprecated: The image is deprecated.
   * 
   * Default value: Available. This parameter supports multiple values separated by commas (,).
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: DescribeImagesRequestTag[];
  usable?: boolean;
  /**
   * @remarks
   * Specifies whether the image is running on ECS instances. Valid values:
   * 
   * - instance: The image is in use and associated with ECS instances.
   * - none: The image is idle and not associated with any ECS instances.
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
      usable: 'Usable',
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
      usable: 'boolean',
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

