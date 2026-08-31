// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key for querying resources. Valid values:
   * 
   * - When this parameter is set to `CreationStartTime`, you can query resources created after the time point specified by `Filter.N.Value`.
   * - When this parameter is set to `CreationEndTime`, you can query resources created before the time point specified by `Filter.N.Value`.
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
   * - When `Filter.N.Key` is set to `CreationStartTime` or `CreationEndTime`, the format is `yyyy-MM-ddTHH:mmZ`, using the UTC+0 time zone.
   * - When `Filter.N.Key` is set to `NetworkType`, valid network type values include `vpc` and `classic`.
   * 
   * - When `Filter.N.Key` is set to `CpuOnlineUpgrade`, `CpuOnlineDowngrade`, `MemoryOnlineUpgrade`, or `MemoryOnlineDowngrade`, valid values are `supported` and `unsupported`.
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
   * If you use a single tag to filter resources, the resource count with this tag cannot exceed 1000. If you use multiple tags to filter resources, the resource count that has all specified tags attached cannot exceed 1000. If the resource count exceeds 1000, use the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query resources.
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
   * - ChangeOS: system disk replacement or operating system replacement.
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
   * Specifies whether to perform only a dry run, without performing the actual request.
   *          
   * - true: Only a dry run is performed. The system checks whether your AccessKey pair is valid, whether Resource Access Management (RAM) user authorization is granted, and whether the required parameters are specified. If the check fails, the corresponding error is returned. If the check succeeds, the DryRunOperation error code is returned.  
   * - false: A request is sent. If the check succeeds, a 2XX HTTP status code is returned and the resource status is queried directly. 
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
   * > For information about image families associated with Alibaba Cloud public images, see [Overview of public images](https://help.aliyun.com/document_detail/108393.html).
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
   * - Public images: Named by operating system version, architecture, language, and release date. For example, the image ID for Windows Server 2008 R2 Enterprise Edition, 64-bit English system is win2008r2_64_ent_sp1_en-us_40G_alibase_20190318.vhd.
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
   * - system: Images provided by Alibaba Cloud that are not published through Alibaba Cloud Marketplace. This is different from the "Public Image" concept in the console.
   * - self: Custom images that you created.
   * - others: Includes shared images (images directly shared by other Alibaba Cloud users) and community images (images that any Alibaba Cloud user has fully shared publicly). Note the following:
   *     - To find community images, IsPublic must be set to true.
   *     - To find shared images, IsPublic must be set to false or left empty.
   * - marketplace: Images published by Alibaba Cloud or third-party independent software vendors (ISVs) in Alibaba Cloud Marketplace. These images must be purchased together with ECS. Check the billing details of Alibaba Cloud Marketplace images.
   * 
   * Default value: empty.
   * 
   * > An empty value returns results with values of system, self, and others.
   * 
   * @example
   * self
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the image belongs. This parameter takes effect only when you query shared images or community images.
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
   * - false: Queries image types other than community images. The specific types depend on the value of ImageOwnerAlias.
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
   * The page number of the resources list.
   * 
   * Minimum value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging queries. Settings this parameter specifies the number of entries to return on each page.
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
   * The ID of the enterprise resource group to which the custom image belongs. When you use this parameter to filter resources, the resource count cannot exceed 1000.
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
   * Specifies whether the subscription image has exceeded its usage period.
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
   * The status of the image. Valid values:
   * 
   * - Creating: The image is being created.
   * - Waiting: The image is waiting in a multi-task queue.
   * - Available: The image is available for use.
   * - UnAvailable: The image is unavailable.
   * - CreateFailed: The image failed to be created.
   * - Deprecated: The image is deprecated.
   * - ALL: All image statuses.
   * 
   * Default value: Available. Status is required only when Usable is specified, and has no default value in that case.
   * > This parameter supports multiple values separated by commas (,). When the value is set to ALL, images in all statuses are queried. ALL cannot be used together with other status values.
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
   * Specifies whether the image is available.
   * > An available image indicates that the image can be used immediately to create instances. For more scenarios, see [Instant image availability](https://help.aliyun.com/document_detail/3044728.html).
   * 
   * @example
   * true
   */
  usable?: boolean;
  /**
   * @remarks
   * Specifies whether the image is running on ECS instances. Valid values:
   * 
   * - instance: The image is in use by ECS instances.
   * - none: The image is idle and not used by any ECS instances.
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

