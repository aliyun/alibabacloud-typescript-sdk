// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageFromFamilyResponseBodyImageDiskDeviceMappingsDiskDeviceMapping extends $dara.Model {
  device?: string;
  format?: string;
  importOSSBucket?: string;
  importOSSObject?: string;
  size?: string;
  snapshotId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      format: 'Format',
      importOSSBucket: 'ImportOSSBucket',
      importOSSObject: 'ImportOSSObject',
      size: 'Size',
      snapshotId: 'SnapshotId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: 'string',
      format: 'string',
      importOSSBucket: 'string',
      importOSSObject: 'string',
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

export class DescribeImageFromFamilyResponseBodyImageDiskDeviceMappings extends $dara.Model {
  diskDeviceMapping?: DescribeImageFromFamilyResponseBodyImageDiskDeviceMappingsDiskDeviceMapping[];
  static names(): { [key: string]: string } {
    return {
      diskDeviceMapping: 'DiskDeviceMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskDeviceMapping: { 'type': 'array', 'itemType': DescribeImageFromFamilyResponseBodyImageDiskDeviceMappingsDiskDeviceMapping },
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

export class DescribeImageFromFamilyResponseBodyImageTagsTag extends $dara.Model {
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

export class DescribeImageFromFamilyResponseBodyImageTags extends $dara.Model {
  tag?: DescribeImageFromFamilyResponseBodyImageTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeImageFromFamilyResponseBodyImageTagsTag },
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

export class DescribeImageFromFamilyResponseBodyImage extends $dara.Model {
  /**
   * @remarks
   * The system architecture type of the image. Valid values:
   * - i386
   * - x86_64
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2018-01-10T01:01:10Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * testDescription
   */
  description?: string;
  diskDeviceMappings?: DescribeImageFromFamilyResponseBodyImageDiskDeviceMappings;
  /**
   * @remarks
   * The image family.
   * 
   * @example
   * testImageFamily
   */
  imageFamily?: string;
  /**
   * @remarks
   * The image ID.
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
   * The alias of the image owner. Valid values:
   * - system: public image.
   * - self: your custom image.
   * - others: shared image from other users.
   * - marketplace: Alibaba Cloud Marketplace image.
   * 
   * @example
   * self
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The image version.
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
   * Indicates whether the custom image has been shared with other users.
   * 
   * @example
   * true
   */
  isSelfShared?: string;
  /**
   * @remarks
   * Indicates whether you have subscribed to the Terms of Service for the image product that corresponds to the product code.
   * 
   * @example
   * false
   */
  isSubscribed?: boolean;
  /**
   * @remarks
   * Indicates whether cloud-init is supported.
   * 
   * @example
   * true
   */
  isSupportCloudinit?: boolean;
  /**
   * @remarks
   * Indicates whether the image can run on an I/O optimized instance.
   * 
   * @example
   * true
   */
  isSupportIoOptimized?: boolean;
  /**
   * @remarks
   * The China-locale display name of the operating system.
   * 
   * @example
   * Alibaba Cloud Linux 2.1903
   */
  OSName?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * - windows
   * - linux
   * 
   * @example
   * linux
   */
  OSType?: string;
  /**
   * @remarks
   * The operating system platform.
   * 
   * @example
   * Aliyun
   */
  platform?: string;
  /**
   * @remarks
   * The product code of the Alibaba Cloud Marketplace image.
   * 
   * @example
   * jxsc00****
   */
  productCode?: string;
  /**
   * @remarks
   * The image creation progress, in percent.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The size of the image. Unit: GiB.
   * 
   * @example
   * 80
   */
  size?: number;
  /**
   * @remarks
   * The status of the image. Valid values:
   * - UnAvailable: unavailable
   * - Available: available
   * - Creating: being created
   * - CreateFailed: failed to be created
   * 
   * @example
   * Available
   */
  status?: string;
  tags?: DescribeImageFromFamilyResponseBodyImageTags;
  /**
   * @remarks
   * The type of resource that references the image. Valid values:
   * - instance: One or more ECS instances have been created from the image.
   * - none: No ECS instances have been created from the image.
   * 
   * @example
   * none
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      creationTime: 'CreationTime',
      description: 'Description',
      diskDeviceMappings: 'DiskDeviceMappings',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      imageVersion: 'ImageVersion',
      isCopied: 'IsCopied',
      isSelfShared: 'IsSelfShared',
      isSubscribed: 'IsSubscribed',
      isSupportCloudinit: 'IsSupportCloudinit',
      isSupportIoOptimized: 'IsSupportIoOptimized',
      OSName: 'OSName',
      OSType: 'OSType',
      platform: 'Platform',
      productCode: 'ProductCode',
      progress: 'Progress',
      size: 'Size',
      status: 'Status',
      tags: 'Tags',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      creationTime: 'string',
      description: 'string',
      diskDeviceMappings: DescribeImageFromFamilyResponseBodyImageDiskDeviceMappings,
      imageFamily: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      imageVersion: 'string',
      isCopied: 'boolean',
      isSelfShared: 'string',
      isSubscribed: 'boolean',
      isSupportCloudinit: 'boolean',
      isSupportIoOptimized: 'boolean',
      OSName: 'string',
      OSType: 'string',
      platform: 'string',
      productCode: 'string',
      progress: 'string',
      size: 'number',
      status: 'string',
      tags: DescribeImageFromFamilyResponseBodyImageTags,
      usage: 'string',
    };
  }

  validate() {
    if(this.diskDeviceMappings && typeof (this.diskDeviceMappings as any).validate === 'function') {
      (this.diskDeviceMappings as any).validate();
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

export class DescribeImageFromFamilyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The image information.
   */
  image?: DescribeImageFromFamilyResponseBodyImage;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: DescribeImageFromFamilyResponseBodyImage,
      requestId: 'string',
    };
  }

  validate() {
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

