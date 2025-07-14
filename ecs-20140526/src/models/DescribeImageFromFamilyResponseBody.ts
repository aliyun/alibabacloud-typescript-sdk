// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageFromFamilyResponseBodyImageDiskDeviceMappingsDiskDeviceMapping extends $dara.Model {
  /**
   * @remarks
   * The device name of the disk. Example: /dev/xvdb.
   * 
   * >  This parameter will be removed in the future. To ensure compatibility, we recommend that you use other parameters.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The image format.
   * 
   * @example
   * qcow2
   */
  format?: string;
  /**
   * @remarks
   * The OSS bucket that contains the imported image file.
   * 
   * @example
   * testEcsImport
   */
  importOSSBucket?: string;
  /**
   * @remarks
   * The OSS object to which the imported image belongs.
   * 
   * @example
   * imageImport
   */
  importOSSObject?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 80
   */
  size?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * s-bp17ot2q7x72ggtw****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The image type.
   * 
   * @example
   * custom
   */
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
  /**
   * @remarks
   * The tag key of the custom image.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the custom image.
   * 
   * @example
   * TestValue
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
   * The architecture of the image. Valid values:
   * 
   * *   i386
   * *   x86_64
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
   * The description of the volume.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The mappings between the disk and the snapshot in the image.
   */
  diskDeviceMappings?: DescribeImageFromFamilyResponseBodyImageDiskDeviceMappings;
  /**
   * @remarks
   * The name of the image family.
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
   * 
   * *   system: public images provided by Alibaba Cloud
   * *   self: your custom images
   * *   others: shared images from other Alibaba Cloud accounts
   * *   marketplace: Alibaba Cloud Marketplace images
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
   * Indicates whether the custom image was shared to other Alibaba Cloud accounts.
   * 
   * @example
   * true
   */
  isSelfShared?: string;
  /**
   * @remarks
   * Indicates whether you have subscribed to the service terms of the image product corresponding to the image product code.
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
   * Indicates whether the image can be used on I/O optimized instances.
   * 
   * @example
   * true
   */
  isSupportIoOptimized?: boolean;
  /**
   * @remarks
   * The display name of the operating system in Chinese.
   * 
   * @example
   * Alibaba Cloud Linux 2.1903
   */
  OSName?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   windows
   * *   linux
   * 
   * @example
   * linux
   */
  OSType?: string;
  /**
   * @remarks
   * The operating system.
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
   * The image creation progress in percentage.
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
   * The state of the image. Valid values:
   * 
   * *   UnAvailable
   * *   Available
   * *   Creating
   * *   CreateFailed
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tags of the image.
   */
  tags?: DescribeImageFromFamilyResponseBodyImageTags;
  /**
   * @remarks
   * Indicates whether the image has been used to create ECS instances. Valid values:
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
   * The ID of the request.
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

