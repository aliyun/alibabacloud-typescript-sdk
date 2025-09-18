// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagesResponseBodyImagesImageDetectionOptionsItemsItem extends $dara.Model {
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * Nvme
   */
  name?: string;
  /**
   * @remarks
   * The risk that the check item may have.
   * 
   * @example
   * NVMe.NotInstallded
   */
  riskCode?: string;
  /**
   * @remarks
   * The severity of the risk that the check item of the imported custom image has. If the check item is at risk, this parameter is returned. If the check item is not at risk, this parameter is not returned.
   * 
   * Valid values:
   * 
   * *   High: The check item is a high-risk item that may affect the startup of the instance. We recommend that you handle the risk.
   * *   Medium: The check item is a medium-risk item that may affect the startup performance or configurations of the instance. We recommend that you handle the risk.
   * 
   * @example
   * High
   */
  riskLevel?: string;
  /**
   * @remarks
   * The result of the check item.
   * 
   * @example
   * Supported
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      riskCode: 'RiskCode',
      riskLevel: 'RiskLevel',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      riskCode: 'string',
      riskLevel: 'string',
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

export class DescribeImagesResponseBodyImagesImageDetectionOptionsItems extends $dara.Model {
  item?: DescribeImagesResponseBodyImagesImageDetectionOptionsItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeImagesResponseBodyImagesImageDetectionOptionsItemsItem },
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBodyImagesImageDetectionOptions extends $dara.Model {
  /**
   * @remarks
   * The check items.
   */
  items?: DescribeImagesResponseBodyImagesImageDetectionOptionsItems;
  /**
   * @remarks
   * The state of the image check task. Valid values:
   * 
   * *   Processing
   * *   Finished
   * 
   * @example
   * Processing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeImagesResponseBodyImagesImageDetectionOptionsItems,
      status: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBodyImagesImageDiskDeviceMappingsDiskDeviceMapping extends $dara.Model {
  /**
   * @remarks
   * The device name of the disk. Example: /dev/xvdb.
   * 
   * @example
   * /dev/xvda
   */
  device?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview.
   * 
   * @example
   * true
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The format of the image.
   * 
   * @example
   * qcow2
   */
  format?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) bucket that contains the imported image file.
   * 
   * @example
   * testEcsImport
   */
  importOSSBucket?: string;
  /**
   * @remarks
   * The OSS object that corresponds to the imported image file.
   * 
   * @example
   * imageImport
   */
  importOSSObject?: string;
  /**
   * @remarks
   * The progress of the image copy task.
   * 
   * @example
   * 32%
   */
  progress?: string;
  /**
   * @remarks
   * The remaining time of the image copy task. Unit: seconds.
   * 
   * @example
   * 233
   */
  remainTime?: number;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 60
   */
  size?: string;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * @example
   * s-bp17ot2q7x72ggtw****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The type of the image.
   * 
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      encrypted: 'Encrypted',
      format: 'Format',
      importOSSBucket: 'ImportOSSBucket',
      importOSSObject: 'ImportOSSObject',
      progress: 'Progress',
      remainTime: 'RemainTime',
      size: 'Size',
      snapshotId: 'SnapshotId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: 'string',
      encrypted: 'boolean',
      format: 'string',
      importOSSBucket: 'string',
      importOSSObject: 'string',
      progress: 'string',
      remainTime: 'number',
      size: 'string',
      snapshotId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBodyImagesImageDiskDeviceMappings extends $dara.Model {
  diskDeviceMapping?: DescribeImagesResponseBodyImagesImageDiskDeviceMappingsDiskDeviceMapping[];
  static names(): { [key: string]: string } {
    return {
      diskDeviceMapping: 'DiskDeviceMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskDeviceMapping: { 'type': 'array', 'itemType': DescribeImagesResponseBodyImagesImageDiskDeviceMappingsDiskDeviceMapping },
    };
  }

  validate() {
    if(Array.isArray(this.diskDeviceMapping)) {
      $dara.Model.validateArray(this.diskDeviceMapping);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBodyImagesImageFeatures extends $dara.Model {
  /**
   * @example
   * supported
   */
  cpuOnlineDowngrade?: string;
  /**
   * @example
   * supported
   */
  cpuOnlineUpgrade?: string;
  /**
   * @remarks
   * The image metadata access mode. Valid values:
   * 
   * *   v1: You cannot set the image metadata access mode to security hardening when you create instances from the image.
   * *   v2: You can set the image metadata access mode to security hardening when you create instances from the image.
   * 
   * [Overview of instance metadata](https://help.aliyun.com/document_detail/108460.html).
   * 
   * @example
   * v2
   */
  imdsSupport?: string;
  /**
   * @example
   * unsupported
   */
  memoryOnlineDowngrade?: string;
  /**
   * @example
   * unsupported
   */
  memoryOnlineUpgrade?: string;
  /**
   * @remarks
   * Indicates whether the image supports the Non-Volatile Memory Express (NVMe) protocol. Valid values:
   * 
   * *   supported: The image supports the NVMe protocol. Instances created from the image also support the NVMe protocol.
   * *   unsupported: The image does not support the NVMe protocol. Instances created from the image do not support the NVMe protocol.
   * 
   * @example
   * supported
   */
  nvmeSupport?: string;
  static names(): { [key: string]: string } {
    return {
      cpuOnlineDowngrade: 'CpuOnlineDowngrade',
      cpuOnlineUpgrade: 'CpuOnlineUpgrade',
      imdsSupport: 'ImdsSupport',
      memoryOnlineDowngrade: 'MemoryOnlineDowngrade',
      memoryOnlineUpgrade: 'MemoryOnlineUpgrade',
      nvmeSupport: 'NvmeSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuOnlineDowngrade: 'string',
      cpuOnlineUpgrade: 'string',
      imdsSupport: 'string',
      memoryOnlineDowngrade: 'string',
      memoryOnlineUpgrade: 'string',
      nvmeSupport: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBodyImagesImageTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the image.
   * 
   * @example
   * DTS
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the image.
   * 
   * @example
   * Oracle
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBodyImagesImageTags extends $dara.Model {
  tag?: DescribeImagesResponseBodyImagesImageTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeImagesResponseBodyImagesImageTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBodyImagesImage extends $dara.Model {
  /**
   * @remarks
   * The architecture of the image. Valid values:
   * 
   * *   i386
   * *   x86_64
   * *   arm64
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The boot mode of the image. Valid values:
   * 
   * *   BIOS: Basic Input/Output System (BIOS)
   * *   UEFI: Unified Extensible Firmware Interface (UEFI)
   * *   UEFI-Preferred: BIOS and UEFI
   * 
   * For information about the image boot modes, see [Image boot modes](~~2244655#b9caa9b8bb1wf~~).
   * 
   * @example
   * BIOS
   */
  bootMode?: string;
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2019-11-15T06:07:05Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * Archive log for Oracle
   */
  description?: string;
  /**
   * @remarks
   * Details about the check performed on the image.
   */
  detectionOptions?: DescribeImagesResponseBodyImagesImageDetectionOptions;
  /**
   * @remarks
   * The mappings between disks and snapshots in the image.
   */
  diskDeviceMappings?: DescribeImagesResponseBodyImagesImageDiskDeviceMappings;
  /**
   * @remarks
   * The feature attributes of the image.
   */
  features?: DescribeImagesResponseBodyImagesImageFeatures;
  /**
   * @remarks
   * The name of the image family.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-bp1g7004ksh0oeuc****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * testImageName
   */
  imageName?: string;
  /**
   * @remarks
   * The source of the image. Valid values:
   * 
   * *   system: a public image provided by Alibaba Cloud
   * *   self: a custom image that you created
   * *   others: a shared image from another Alibaba Cloud account or a community image published by another Alibaba Cloud account
   * *   marketplace: an Alibaba Cloud Marketplace image
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
   * The version of the image.
   * 
   * @example
   * 2
   */
  imageVersion?: string;
  /**
   * @remarks
   * Indicates whether the image is a copy of another image.
   * 
   * @example
   * false
   */
  isCopied?: boolean;
  /**
   * @remarks
   * Indicates whether the image is publicly available. Publicly available images include public images provided by Alibaba Cloud and custom images published as community images. Valid values:
   * 
   * *   true: The image is publicly available.
   * *   false: The image is publicly unavailable.
   * 
   * @example
   * false
   */
  isPublic?: boolean;
  /**
   * @remarks
   * Indicates whether the custom image was shared to other Alibaba Cloud accounts.
   * 
   * @example
   * true
   */
  isSelfShared?: string;
  /**
   * @remarks
   * Indicates whether you accepted the Terms of Service of the image service that corresponds to the product code.
   * 
   * @example
   * false
   */
  isSubscribed?: boolean;
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
   * Indicates whether the image can be used on I/O optimized instances.
   * 
   * @example
   * true
   */
  isSupportIoOptimized?: boolean;
  licenseType?: string;
  /**
   * @remarks
   * Indicates whether the image supports logons of non-root users. Valid values:
   * 
   * *   true: The image supports logons of non-root users.
   * *   false: The image does not support logons of non-root users.
   * 
   * @example
   * false
   */
  loginAsNonRootSupported?: boolean;
  /**
   * @remarks
   * The display name of the operating system in Chinese.
   * 
   * @example
   * Windows Server 2016 Datacenter Edition 64-bit (Simplified Chinese)
   */
  OSName?: string;
  /**
   * @remarks
   * The display name of the operating system in English.
   * 
   * @example
   * Windows Server  2016 Data Center Edition 64bit Chinese Edition
   */
  OSNameEn?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   windows
   * *   linux
   * 
   * @example
   * windows
   */
  OSType?: string;
  /**
   * @remarks
   * The operating system platform.
   * 
   * @example
   * Windows Server 2016
   */
  platform?: string;
  /**
   * @remarks
   * The Alibaba Cloud Marketplace product code of the image.
   * 
   * @example
   * test000****
   */
  productCode?: string;
  /**
   * @remarks
   * The creation progress of the image. Unit: percent (%).
   * 
   * @example
   * 100%
   */
  progress?: string;
  /**
   * @remarks
   * The ID of the resource group to which the image belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The size of the image. Unit: GiB.
   * 
   * >  If the image contains data disk snapshots, this parameter indicates only the size of the system disk snapshot contained in the image.
   * 
   * @example
   * 60
   */
  size?: number;
  /**
   * @remarks
   * The state of the image. Valid values:
   * 
   * *   UnAvailable: The image is unavailable.
   * *   Available: The image is available.
   * *   Creating: The image is being created.
   * *   CreateFailed: The image failed to be created.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The name of the supplier that published the community image.
   * 
   * @example
   * TestName
   */
  supplierName?: string;
  /**
   * @remarks
   * The tags of the image.
   */
  tags?: DescribeImagesResponseBodyImagesImageTags;
  /**
   * @remarks
   * Indicates whether the image was used to create ECS instances. Valid values:
   * 
   * *   instance: The image was used to create one or more ECS instances.
   * *   none: The image was not used to create ECS instances.
   * 
   * @example
   * none
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      bootMode: 'BootMode',
      creationTime: 'CreationTime',
      description: 'Description',
      detectionOptions: 'DetectionOptions',
      diskDeviceMappings: 'DiskDeviceMappings',
      features: 'Features',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      imageOwnerId: 'ImageOwnerId',
      imageVersion: 'ImageVersion',
      isCopied: 'IsCopied',
      isPublic: 'IsPublic',
      isSelfShared: 'IsSelfShared',
      isSubscribed: 'IsSubscribed',
      isSupportCloudinit: 'IsSupportCloudinit',
      isSupportIoOptimized: 'IsSupportIoOptimized',
      licenseType: 'LicenseType',
      loginAsNonRootSupported: 'LoginAsNonRootSupported',
      OSName: 'OSName',
      OSNameEn: 'OSNameEn',
      OSType: 'OSType',
      platform: 'Platform',
      productCode: 'ProductCode',
      progress: 'Progress',
      resourceGroupId: 'ResourceGroupId',
      size: 'Size',
      status: 'Status',
      supplierName: 'SupplierName',
      tags: 'Tags',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      bootMode: 'string',
      creationTime: 'string',
      description: 'string',
      detectionOptions: DescribeImagesResponseBodyImagesImageDetectionOptions,
      diskDeviceMappings: DescribeImagesResponseBodyImagesImageDiskDeviceMappings,
      features: DescribeImagesResponseBodyImagesImageFeatures,
      imageFamily: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      imageOwnerId: 'number',
      imageVersion: 'string',
      isCopied: 'boolean',
      isPublic: 'boolean',
      isSelfShared: 'string',
      isSubscribed: 'boolean',
      isSupportCloudinit: 'boolean',
      isSupportIoOptimized: 'boolean',
      licenseType: 'string',
      loginAsNonRootSupported: 'boolean',
      OSName: 'string',
      OSNameEn: 'string',
      OSType: 'string',
      platform: 'string',
      productCode: 'string',
      progress: 'string',
      resourceGroupId: 'string',
      size: 'number',
      status: 'string',
      supplierName: 'string',
      tags: DescribeImagesResponseBodyImagesImageTags,
      usage: 'string',
    };
  }

  validate() {
    if(this.detectionOptions && typeof (this.detectionOptions as any).validate === 'function') {
      (this.detectionOptions as any).validate();
    }
    if(this.diskDeviceMappings && typeof (this.diskDeviceMappings as any).validate === 'function') {
      (this.diskDeviceMappings as any).validate();
    }
    if(this.features && typeof (this.features as any).validate === 'function') {
      (this.features as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBodyImages extends $dara.Model {
  image?: DescribeImagesResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': DescribeImagesResponseBodyImagesImage },
    };
  }

  validate() {
    if(Array.isArray(this.image)) {
      $dara.Model.validateArray(this.image);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the images.
   */
  images?: DescribeImagesResponseBodyImages;
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the image.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66189103-EDB2-43E2-BB60-BFF2B62F4EB8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of images.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: DescribeImagesResponseBodyImages,
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.images && typeof (this.images as any).validate === 'function') {
      (this.images as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

