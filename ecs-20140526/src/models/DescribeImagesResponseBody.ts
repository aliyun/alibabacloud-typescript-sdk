// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagesResponseBodyImagesImageDetectionOptionsItemsItem extends $dara.Model {
  name?: string;
  riskCode?: string;
  riskLevel?: string;
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
  items?: DescribeImagesResponseBodyImagesImageDetectionOptionsItems;
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
  device?: string;
  encrypted?: boolean;
  format?: string;
  importOSSBucket?: string;
  importOSSObject?: string;
  progress?: string;
  remainTime?: number;
  size?: string;
  snapshotId?: string;
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
  cpuOnlineDowngrade?: string;
  cpuOnlineUpgrade?: string;
  imdsSupport?: string;
  memoryOnlineDowngrade?: string;
  memoryOnlineUpgrade?: string;
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
  tagKey?: string;
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
  architecture?: string;
  bootMode?: string;
  creationTime?: string;
  description?: string;
  detectionOptions?: DescribeImagesResponseBodyImagesImageDetectionOptions;
  diskDeviceMappings?: DescribeImagesResponseBodyImagesImageDiskDeviceMappings;
  features?: DescribeImagesResponseBodyImagesImageFeatures;
  imageFamily?: string;
  imageId?: string;
  imageName?: string;
  imageOwnerAlias?: string;
  imageOwnerId?: number;
  imageVersion?: string;
  isCopied?: boolean;
  isPublic?: boolean;
  isSelfShared?: string;
  isSubscribed?: boolean;
  isSupportCloudinit?: boolean;
  isSupportIoOptimized?: boolean;
  licenseType?: string;
  loginAsNonRootSupported?: boolean;
  OSName?: string;
  OSNameEn?: string;
  OSType?: string;
  platform?: string;
  productCode?: string;
  progress?: string;
  resourceGroupId?: string;
  size?: number;
  status?: string;
  supplierName?: string;
  tags?: DescribeImagesResponseBodyImagesImageTags;
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

