// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key used when querying resources. Valid values:
   * 
   * - If this parameter is set to `CreationStartTime`, you can query resources created after the specified time point (`Filter.N.Value`).
   * 
   * - If this parameter is set to `CreationEndTime`, you can query resources created before the specified time point (`Filter.N.Value`).
   * 
   * - If this parameter is set to `NetworkType`, you can query resources of the specified network type.
   * 
   * - If this parameter is set to any of `CpuOnlineUpgrade`, `CpuOnlineDowngrade`, `MemoryOnlineUpgrade`, or `MemoryOnlineDowngrade`, you can query the hot-swapping support status of CPU or memory for the specified image.
   * 
   * Default Value: null.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The filter value used when querying resources.
   * 
   * - When (`Filter.N.Key`) is `CreationStartTime` or `CreationEndTime`, the format is `yyyy-MM-ddTHH:mmZ` in UTC+0 time zone.
   * 
   * - When (`Filter.N.Key`) is `NetworkType`, valid values include `vpc`, `classic`, etc.
   * 
   * - When (`Filter.N.Key`) is `CpuOnlineUpgrade`, `CpuOnlineDowngrade`, `MemoryOnlineUpgrade`, or `MemoryOnlineDowngrade`, the value can be `supported` or `unsupported`.
   * 
   * Default Value: null.
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
   * When you use one tag to filter resources, the number of resources retrieved under this tag cannot exceed 1,000. When you use multiple tags to filter resources, the number of resources that are attached with all specified tags cannot exceed 1,000. If the resource count exceeds 1,000, use the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) API to query the resources.
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
   * The scenario in which the image will be used. Valid values:
   * 
   * - CreateEcs (default): Create an instance.
   * 
   * - ChangeOS: Replace the system disk or change the operating system.
   * 
   * @example
   * CreateEcs
   */
  actionType?: string;
  /**
   * @remarks
   * The architecture of the image. Valid values:
   * 
   * - i386
   * 
   * - x86_64
   * 
   * - arm64
   * 
   * @example
   * i386
   */
  architecture?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run of the request.
   * 
   * - true: Sends a dry run request without querying resource status. The system checks whether the AccessKey is valid, whether the Resource Access Management (RAM) user is authorized, and whether all required parameters are specified. If the check fails, an error is returned. If the check passes, the error code DryRunOperation is returned.
   * 
   * - false: Sends a normal request. After the check passes, an HTTP 2XX status code is returned and the resource status is queried directly.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * A list of filter conditions for querying resources.
   */
  filter?: DescribeImagesRequestFilter[];
  /**
   * @remarks
   * The name of the image family. When querying images, you can use this parameter to filter images belonging to the specified image family.
   * 
   * Default value: empty.
   * 
   * > For information about image families associated with official Alibaba Cloud images, see [Overview of public images](https://help.aliyun.com/document_detail/108393.html).
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
   * 
   * <summary>
   * 
   * Naming convention for image IDs
   * 
   * </summary>
   * 
   * - Public images: Named based on the operating system version, architecture, language, and published date. For example, the image ID for Windows Server 2008 R2 Enterprise Edition, 64-bit English system is `win2008r2_64_ent_sp1_en-us_40G_alibase_20190318.vhd`.
   * 
   * - Custom images, shared images, Alibaba Cloud Marketplace images, and community images: Start with the letter `m`.
   * 
   * </details>
   * 
   * @example
   * m-bp1g7004ksh0oeuc****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image. Fuzzy search is supported.
   * 
   * @example
   * testImageName
   */
  imageName?: string;
  /**
   * @remarks
   * The source of the image. Valid values:
   * 
   * - system: Images provided by Alibaba Cloud that are not published on Alibaba Cloud Marketplace. This differs from the "public image" concept in the console.
   * 
   * - self: Your custom images.
   * 
   * - others: Includes shared images (images directly shared with you by other Alibaba Cloud users) and community images (custom images fully publicly shared by any Alibaba Cloud user). Note the following:
   * 
   *   - To find community images, IsPublic must be true.
   * 
   *   - To find shared images, IsPublic must be set to false or omitted.
   * 
   * - marketplace: Images published on Alibaba Cloud Marketplace by Alibaba Cloud or third-party ISVs, which must be purchased together with ECS instances. Please review the pricing details of Alibaba Cloud Marketplace images yourself.
   * 
   * Default value: empty.
   * 
   * > An empty value returns results with ImageOwnerAlias values of system, self, and others.
   * 
   * @example
   * self
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the image belongs. This parameter takes effect only when you query shared images and community images.
   * 
   * @example
   * 20169351435666****
   */
  imageOwnerId?: number;
  /**
   * @remarks
   * Queries images that can be used with the specified instance type.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether to query published community images. Valid values:
   * 
   * - true: Queries published community images. When this parameter is set to true, ImageOwnerAlias must be set to others.
   * 
   * - false: Queries other image types excluding community images, depending on the value of the ImageOwnerAlias parameter.
   * 
   * Default Value: false.
   * 
   * @example
   * false
   */
  isPublic?: boolean;
  /**
   * @remarks
   * Indicates whether the image supports cloud-init.
   * 
   * @example
   * true
   */
  isSupportCloudinit?: boolean;
  /**
   * @remarks
   * Indicates whether the image can run on I/O optimized instances.
   * 
   * @example
   * true
   */
  isSupportIoOptimized?: boolean;
  /**
   * @remarks
   * The operating system type of the image. Valid values:
   * 
   * - windows
   * 
   * - linux
   * 
   * @example
   * linux
   */
  OSType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the image resource list.
   * 
   * Starting value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query.
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
   * The region ID to which the image belongs. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to view the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the enterprise resource group to which the custom image belongs. When using this parameter to filter resources, the number of resources cannot exceed 1,000.
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
   * Indicates whether subscription-based images have exceeded their usage period.
   * 
   * @example
   * false
   */
  showExpired?: boolean;
  /**
   * @remarks
   * The custom image created from a specific snapshot ID.
   * 
   * @example
   * s-bp17ot2q7x72ggtw****
   */
  snapshotId?: string;
  /**
   * @remarks
   * Queries images in the specified status. If this parameter is not configured, only images in the Available status are returned by default. Valid values:
   * 
   * - Creating: The image is being created.
   * 
   * - Waiting: The image is queued for multitasking.
   * 
   * - Available (default): The image is available for your use.
   * 
   * - UnAvailable: The image is unavailable for your use.
   * 
   * - CreateFailed: The image creation failed.
   * 
   * - Deprecated: The image has been deprecated.
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
  /**
   * @remarks
   * Indicates whether the image is already running on an ECS instance. Valid values:
   * 
   * - instance: The image is in use by one or more ECS instances.
   * 
   * - none: The image is idle and not used by any ECS instance.
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

