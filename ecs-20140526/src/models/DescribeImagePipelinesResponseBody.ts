// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAddAccounts extends $dara.Model {
  addAccount?: string[];
  static names(): { [key: string]: string } {
    return {
      addAccount: 'AddAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addAccount: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.addAccount)) {
      $dara.Model.validateArray(this.addAccount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAdvancedOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to disable the feature that automatically adds a suffix to the name of the image created based on the image template. Valid value:
   * 
   * *   disable
   * 
   * @example
   * disable
   */
  imageNameSuffix?: string;
  /**
   * @remarks
   * Indicates whether to retain Cloud Assistant. During the image building process, the system automatically installs Cloud Assistant in the intermediate instance to run commands. You can choose whether to retain Cloud Assistant in the new image created based on the image template. Valid values:
   * 
   * *   true: retains Cloud Assistant.
   * *   false: does not retain Cloud Assistant.
   * 
   * >  This parameter does not affect Cloud Assistant that comes with your image.
   * 
   * @example
   * true
   */
  retainCloudAssistant?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageNameSuffix: 'ImageNameSuffix',
      retainCloudAssistant: 'RetainCloudAssistant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageNameSuffix: 'string',
      retainCloudAssistant: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageFeatures extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the image supports the NVMe protocol. Valid values:
   * 
   * *   supported: The image supports the NVMe protocol. Instances created from the image also support the NVMe protocol.
   * *   unsupported: The image does not support the NVMe protocol. Instances created from the image do not support the NVMe protocol.
   * *   auto: The system automatically checks whether the image supports the NVMe protocol. The system automatically checks whether the NVMe driver is installed on your image before the image is built. If you install or uninstall the NVMe driver during the image building task, the check result may be incorrect. We recommend that you set the value to supported or unsupported based on the image building content.
   * 
   * @example
   * auto
   */
  nvmeSupport?: string;
  static names(): { [key: string]: string } {
    return {
      nvmeSupport: 'NvmeSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTagsImageTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the image.
   * 
   * @example
   * testKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the image.
   * 
   * @example
   * testValue
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

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTags extends $dara.Model {
  imageTag?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTagsImageTag[];
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: { 'type': 'array', 'itemType': DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTagsImageTag },
    };
  }

  validate() {
    if(Array.isArray(this.imageTag)) {
      $dara.Model.validateArray(this.imageTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptions extends $dara.Model {
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * description.
   */
  description?: string;
  /**
   * @remarks
   * The image family.
   * 
   * @example
   * family
   */
  imageFamily?: string;
  /**
   * @remarks
   * The feature attributes of the image.
   */
  imageFeatures?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageFeatures;
  /**
   * @remarks
   * The prefix of the image name.
   * 
   * @example
   * imageName
   */
  imageName?: string;
  /**
   * @remarks
   * The tags of the image.
   */
  imageTags?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTags;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      imageFamily: 'ImageFamily',
      imageFeatures: 'ImageFeatures',
      imageName: 'ImageName',
      imageTags: 'ImageTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      imageFamily: 'string',
      imageFeatures: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageFeatures,
      imageName: 'string',
      imageTags: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptionsImageTags,
    };
  }

  validate() {
    if(this.imageFeatures && typeof (this.imageFeatures as any).validate === 'function') {
      (this.imageFeatures as any).validate();
    }
    if(this.imageTags && typeof (this.imageTags as any).validate === 'function') {
      (this.imageTags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsDiskDeviceMappingsDiskDeviceMapping extends $dara.Model {
  /**
   * @remarks
   * The size of disk N in the custom image after the image is imported.
   * 
   * You can use this parameter to specify the sizes of the system disk and data disks in the custom image. When you specify the size of the system disk, make sure that the specified size is greater than or equal to the size of the source image file. Unit: GiB. Valid values:
   * 
   * *   When N is set to 1, this parameter indicates the size of the system disk in the custom image. Valid values: 1 to 2048.
   * *   When N is set to an integer in the range of 2 to 17, this parameter indicates the size of a data disk in the custom image. Valid values: 1 to 2048.
   * 
   * After the image file is uploaded to an OSS bucket, you can view the size of the image file in the OSS bucket.
   * 
   * @example
   * 40
   */
  diskImageSize?: number;
  /**
   * @remarks
   * The format of the image. Valid values:
   * 
   * *   RAW
   * *   VHD
   * *   QCOW2
   * 
   * @example
   * RAW
   */
  format?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) bucket where the image file is stored.
   * 
   * @example
   * ecsimageos
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The name (key) of the object that the image file is stored as in the OSS bucket.
   * 
   * @example
   * CentOS_5.4_32.raw
   */
  OSSObject?: string;
  static names(): { [key: string]: string } {
    return {
      diskImageSize: 'DiskImageSize',
      format: 'Format',
      OSSBucket: 'OSSBucket',
      OSSObject: 'OSSObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskImageSize: 'number',
      format: 'string',
      OSSBucket: 'string',
      OSSObject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsDiskDeviceMappings extends $dara.Model {
  diskDeviceMapping?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsDiskDeviceMappingsDiskDeviceMapping[];
  static names(): { [key: string]: string } {
    return {
      diskDeviceMapping: 'DiskDeviceMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskDeviceMapping: { 'type': 'array', 'itemType': DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsDiskDeviceMappingsDiskDeviceMapping },
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

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsFeatures extends $dara.Model {
  imdsSupport?: string;
  /**
   * @remarks
   * Indicates whether the image supports the NVMe protocol. Valid values:
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
      imdsSupport: 'ImdsSupport',
      nvmeSupport: 'NvmeSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imdsSupport: 'string',
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

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsImportImageTagsImportImageTag extends $dara.Model {
  key?: string;
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

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsImportImageTags extends $dara.Model {
  importImageTag?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsImportImageTagsImportImageTag[];
  static names(): { [key: string]: string } {
    return {
      importImageTag: 'ImportImageTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importImageTag: { 'type': 'array', 'itemType': DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsImportImageTagsImportImageTag },
    };
  }

  validate() {
    if(Array.isArray(this.importImageTag)) {
      $dara.Model.validateArray(this.importImageTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptions extends $dara.Model {
  /**
   * @remarks
   * The operating system architecture. Valid values:
   * 
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
   * *   BIOS: BIOS mode
   * *   UEFI: Unified Extensible Firmware Interface (UEFI) mode
   * 
   * @example
   * BIOS
   */
  bootMode?: string;
  description?: string;
  /**
   * @remarks
   * The information of disks from which the custom images are created.
   * 
   * *   When the value of N is 1, a custom image is created from the system disk.
   * *   When the value of N is an integer in the range of 2 to 17, a custom image is created from a data disk.
   */
  diskDeviceMappings?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsDiskDeviceMappings;
  /**
   * @remarks
   * The attributes of the custom image.
   */
  features?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsFeatures;
  imageName?: string;
  importImageTags?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsImportImageTags;
  /**
   * @remarks
   * The type of the license to use to activate the operating system after the image is imported. Valid values:
   * 
   * *   Auto: ECS detects the operating system of the image and allocates a license to the operating system In this mode, the system first checks whether a license allocated by an official Alibaba Cloud channel is specified in the `Platform`. If a license allocated by an official Alibaba Cloud channel is specified, the system allocates the license to the imported image. If no such license is specified, the Bring Your Own License (BYOL) mode is used.
   * *   Aliyun: The license allocated through an official Alibaba Cloud channel is used for the operating system distribution specified by `Platform`.
   * *   BYOL: The license that comes with the source operating system is used. When you use the BYOL license, make sure that your license key is supported by Alibaba Cloud.
   * 
   * @example
   * Auto
   */
  licenseType?: string;
  /**
   * @remarks
   * The operating system type. Valid values:
   * 
   * *   windows: Windows operating systems
   * *   linux: Linux operating systems
   * 
   * @example
   * linux
   */
  OSType?: string;
  /**
   * @remarks
   * The version of the operating system. Valid values:
   * 
   * *   Aliyun
   * *   Anolis
   * *   CentOS
   * *   Ubuntu
   * *   CoreOS
   * *   SUSE
   * *   Debian
   * *   OpenSUSE
   * *   FreeBSD
   * *   RedHat
   * *   Kylin
   * *   UOS
   * *   Fedora
   * *   Fedora CoreOS
   * *   CentOS Stream
   * *   AlmaLinux
   * *   Rocky Linux
   * *   Gentoo
   * *   Customized Linux
   * *   Others Linux
   * *   Windows Server 2022
   * *   Windows Server 2019
   * *   Windows Server 2016
   * *   Windows Server 2012
   * *   Windows Server 2008
   * *   Windows Server 2003
   * *   Other Windows
   * 
   * @example
   * Aliyun
   */
  platform?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview.
   * 
   * @example
   * false
   */
  retainImportedImage?: boolean;
  retentionStrategy?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      bootMode: 'BootMode',
      description: 'Description',
      diskDeviceMappings: 'DiskDeviceMappings',
      features: 'Features',
      imageName: 'ImageName',
      importImageTags: 'ImportImageTags',
      licenseType: 'LicenseType',
      OSType: 'OSType',
      platform: 'Platform',
      retainImportedImage: 'RetainImportedImage',
      retentionStrategy: 'RetentionStrategy',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      bootMode: 'string',
      description: 'string',
      diskDeviceMappings: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsDiskDeviceMappings,
      features: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsFeatures,
      imageName: 'string',
      importImageTags: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsImportImageTags,
      licenseType: 'string',
      OSType: 'string',
      platform: 'string',
      retainImportedImage: 'boolean',
      retentionStrategy: 'string',
      roleName: 'string',
    };
  }

  validate() {
    if(this.diskDeviceMappings && typeof (this.diskDeviceMappings as any).validate === 'function') {
      (this.diskDeviceMappings as any).validate();
    }
    if(this.features && typeof (this.features as any).validate === 'function') {
      (this.features as any).validate();
    }
    if(this.importImageTags && typeof (this.importImageTags as any).validate === 'function') {
      (this.importImageTags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
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

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetTags extends $dara.Model {
  tag?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetTagsTag },
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

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetToRegionIds extends $dara.Model {
  toRegionId?: string[];
  static names(): { [key: string]: string } {
    return {
      toRegionId: 'ToRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      toRegionId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.toRegionId)) {
      $dara.Model.validateArray(this.toRegionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSet extends $dara.Model {
  /**
   * @remarks
   * The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template.
   */
  addAccounts?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAddAccounts;
  /**
   * @remarks
   * The advanced settings.
   */
  advancedOptions?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAdvancedOptions;
  /**
   * @remarks
   * The source image.
   * 
   * *   When `BaseImageType` is set to IMAGE, the value of this parameter is the ID of a custom image.
   * *   When `BaseImageType` is set to IMAGE_FAMILY, the value of this parameter is the name of an image family.
   * 
   * @example
   * m-bp67acfmxazb4p****
   */
  baseImage?: string;
  /**
   * @remarks
   * The type of the source image. Valid values:
   * 
   * *   IMAGE: custom image
   * *   IMAGE_FAMILY: image family
   * 
   * @example
   * IMAGE
   */
  baseImageType?: string;
  /**
   * @remarks
   * The content of the image template.
   * 
   * @example
   * FROM IMAGE:m-bp67acfmxazb4p****
   */
  buildContent?: string;
  /**
   * @remarks
   * The time when the image template was created.
   * 
   * @example
   * 2020-11-24T06:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether to release the intermediate instance when the image fails to be created.
   * 
   * @example
   * true
   */
  deleteInstanceOnFailure?: boolean;
  /**
   * @remarks
   * The description of the image template.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The family of the image created based on the image template.
   * 
   * >  This parameter is no longer used. We recommend that you use ImageOptions.ImageFamily.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  imageFamily?: string;
  /**
   * @remarks
   * The name prefix of the image created based on the image template.
   * 
   * >  This parameter is no longer used. We recommend that you use ImageOptions.ImageName.
   * 
   * @example
   * testImageName
   * 
   * @deprecated
   */
  imageName?: string;
  /**
   * @remarks
   * The attributes of the image created based on the image template.
   */
  imageOptions?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptions;
  /**
   * @remarks
   * The ID of the image template.
   * 
   * @example
   * ip-2ze5tsl5bp6nf2b3****
   */
  imagePipelineId?: string;
  /**
   * @remarks
   * The attributes and settings of the imported image.
   */
  importImageOptions?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptions;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The size of the outbound public bandwidth for the intermediate instance. Unit: Mbit/s.
   * 
   * @example
   * 0
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The name of the image template.
   * 
   * @example
   * testImagePipeline
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the image created based on the image template supports the Non-Volatile Memory Express (NVMe) protocol.
   * 
   * >  This parameter is no longer used. We recommend that you use ImageOptions.ImageFeatures.NvmeSupport.
   * 
   * @example
   * auto
   * 
   * @deprecated
   */
  nvmeSupport?: string;
  /**
   * @remarks
   * The repair mode of the image template.
   * 
   * Valid values:
   * 
   * *   Standard: the standard mode
   * 
   * @example
   * null
   */
  repairMode?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The system disk size of the intermediate instance. Unit: GiB
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The tags of the image template.
   */
  tags?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetTags;
  /**
   * @remarks
   * The content of the image test template.
   * 
   * @example
   * null
   */
  testContent?: string;
  /**
   * @remarks
   * The IDs of regions to which to distribute the image that will be created based on the image template.
   */
  toRegionIds?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetToRegionIds;
  /**
   * @remarks
   * The ID of the vSwitch in the virtual private cloud (VPC).
   * 
   * @example
   * vsw-bp67acfmxazb4p****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      addAccounts: 'AddAccounts',
      advancedOptions: 'AdvancedOptions',
      baseImage: 'BaseImage',
      baseImageType: 'BaseImageType',
      buildContent: 'BuildContent',
      creationTime: 'CreationTime',
      deleteInstanceOnFailure: 'DeleteInstanceOnFailure',
      description: 'Description',
      imageFamily: 'ImageFamily',
      imageName: 'ImageName',
      imageOptions: 'ImageOptions',
      imagePipelineId: 'ImagePipelineId',
      importImageOptions: 'ImportImageOptions',
      instanceType: 'InstanceType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      name: 'Name',
      nvmeSupport: 'NvmeSupport',
      repairMode: 'RepairMode',
      resourceGroupId: 'ResourceGroupId',
      systemDiskSize: 'SystemDiskSize',
      tags: 'Tags',
      testContent: 'TestContent',
      toRegionIds: 'ToRegionIds',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addAccounts: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAddAccounts,
      advancedOptions: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetAdvancedOptions,
      baseImage: 'string',
      baseImageType: 'string',
      buildContent: 'string',
      creationTime: 'string',
      deleteInstanceOnFailure: 'boolean',
      description: 'string',
      imageFamily: 'string',
      imageName: 'string',
      imageOptions: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImageOptions,
      imagePipelineId: 'string',
      importImageOptions: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptions,
      instanceType: 'string',
      internetMaxBandwidthOut: 'number',
      name: 'string',
      nvmeSupport: 'string',
      repairMode: 'string',
      resourceGroupId: 'string',
      systemDiskSize: 'number',
      tags: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetTags,
      testContent: 'string',
      toRegionIds: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetToRegionIds,
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.addAccounts && typeof (this.addAccounts as any).validate === 'function') {
      (this.addAccounts as any).validate();
    }
    if(this.advancedOptions && typeof (this.advancedOptions as any).validate === 'function') {
      (this.advancedOptions as any).validate();
    }
    if(this.imageOptions && typeof (this.imageOptions as any).validate === 'function') {
      (this.imageOptions as any).validate();
    }
    if(this.importImageOptions && typeof (this.importImageOptions as any).validate === 'function') {
      (this.importImageOptions as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.toRegionIds && typeof (this.toRegionIds as any).validate === 'function') {
      (this.toRegionIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBodyImagePipeline extends $dara.Model {
  imagePipelineSet?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSet[];
  static names(): { [key: string]: string } {
    return {
      imagePipelineSet: 'ImagePipelineSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imagePipelineSet: { 'type': 'array', 'itemType': DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSet },
    };
  }

  validate() {
    if(Array.isArray(this.imagePipelineSet)) {
      $dara.Model.validateArray(this.imagePipelineSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePipelinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the image templates.
   */
  imagePipeline?: DescribeImagePipelinesResponseBodyImagePipeline;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. For information about how to use the return value, see the "Usage notes" section of this topic.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of image templates returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      imagePipeline: 'ImagePipeline',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imagePipeline: DescribeImagePipelinesResponseBodyImagePipeline,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.imagePipeline && typeof (this.imagePipeline as any).validate === 'function') {
      (this.imagePipeline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

