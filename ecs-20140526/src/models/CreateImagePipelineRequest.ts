// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImagePipelineRequestAdvancedOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable the automatic suffix for the destination image name. Valid values:
   * 
   * @example
   * disable
   */
  imageNameSuffix?: string;
  /**
   * @remarks
   * Specifies whether to retain Cloud Assistant. During the build process, the system automatically installs Cloud Assistant on the intermediate instance to run commands. You can choose whether to retain Cloud Assistant in the destination image. Valid values:
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

export class CreateImagePipelineRequestImageOptionsImageFeatures extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the destination image supports NVMe. Valid values:
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

export class CreateImagePipelineRequestImageOptionsImageTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:`. The tag value cannot contain `http://` or `https://`.
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

export class CreateImagePipelineRequestImageOptions extends $dara.Model {
  /**
   * @remarks
   * The description. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The destination image family. The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. The name cannot start with aliyun or acs:. The name cannot contain http:// or https://. The name can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * family
   */
  imageFamily?: string;
  /**
   * @remarks
   * The feature properties of the destination image.
   */
  imageFeatures?: CreateImagePipelineRequestImageOptionsImageFeatures;
  /**
   * @remarks
   * The prefix of the destination image name. The name must be 2 to 64 characters in length and must start with a letter or a Chinese character. The name cannot start with `http://` or `https://`. The name can contain Chinese characters, letters, digits, colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * testImageName
   */
  imageName?: string;
  /**
   * @remarks
   * The tags of the destination image.
   */
  imageTags?: CreateImagePipelineRequestImageOptionsImageTags[];
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
      imageFeatures: CreateImagePipelineRequestImageOptionsImageFeatures,
      imageName: 'string',
      imageTags: { 'type': 'array', 'itemType': CreateImagePipelineRequestImageOptionsImageTags },
    };
  }

  validate() {
    if(this.imageFeatures && typeof (this.imageFeatures as any).validate === 'function') {
      (this.imageFeatures as any).validate();
    }
    if(Array.isArray(this.imageTags)) {
      $dara.Model.validateArray(this.imageTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImagePipelineRequestImportImageOptionsDiskDeviceMappings extends $dara.Model {
  /**
   * @remarks
   * The size of the custom image after the image is imported.
   * 
   * @example
   * 40
   */
  diskImageSize?: number;
  /**
   * @remarks
   * The image format. Valid values:
   * 
   * @example
   * RAW
   */
  format?: string;
  /**
   * @remarks
   * The OSS bucket in which the image file is stored.
   * 
   * @example
   * ecsimageos
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The name (key) of the image file stored in the OSS bucket after the image is uploaded.
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

export class CreateImagePipelineRequestImportImageOptionsFeatures extends $dara.Model {
  imdsSupport?: string;
  /**
   * @remarks
   * Specifies whether the imported source image supports NVMe. Valid values:
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

export class CreateImagePipelineRequestImportImageOptionsImportImageTags extends $dara.Model {
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

export class CreateImagePipelineRequestImportImageOptions extends $dara.Model {
  /**
   * @remarks
   * The system architecture of the system disk. You must specify this parameter when you use a data disk snapshot to create a system disk image. Valid values:
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The boot mode of the image. Valid values:
   * 
   * @example
   * BIOS
   */
  bootMode?: string;
  description?: string;
  /**
   * @remarks
   * The information about the custom images.
   */
  diskDeviceMappings?: CreateImagePipelineRequestImportImageOptionsDiskDeviceMappings[];
  /**
   * @remarks
   * The image feature properties.
   */
  features?: CreateImagePipelineRequestImportImageOptionsFeatures;
  imageName?: string;
  importImageTags?: CreateImagePipelineRequestImportImageOptionsImportImageTags[];
  /**
   * @remarks
   * The license type used to activate the operating system after the image is imported. Valid values:
   * 
   * @example
   * Auto
   */
  licenseType?: string;
  /**
   * @remarks
   * The operating system type. Valid values:
   * 
   * @example
   * linux
   */
  OSType?: string;
  /**
   * @remarks
   * The operating system version. Valid values:
   * 
   * @example
   * Aliyun
   */
  platform?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview.
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
      diskDeviceMappings: { 'type': 'array', 'itemType': CreateImagePipelineRequestImportImageOptionsDiskDeviceMappings },
      features: CreateImagePipelineRequestImportImageOptionsFeatures,
      imageName: 'string',
      importImageTags: { 'type': 'array', 'itemType': CreateImagePipelineRequestImportImageOptionsImportImageTags },
      licenseType: 'string',
      OSType: 'string',
      platform: 'string',
      retainImportedImage: 'boolean',
      retentionStrategy: 'string',
      roleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diskDeviceMappings)) {
      $dara.Model.validateArray(this.diskDeviceMappings);
    }
    if(this.features && typeof (this.features as any).validate === 'function') {
      (this.features as any).validate();
    }
    if(Array.isArray(this.importImageTags)) {
      $dara.Model.validateArray(this.importImageTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImagePipelineRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:`. The tag value cannot contain `http://` or `https://`.
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

export class CreateImagePipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID to which to share the destination image through image sharing. Valid values of N: 1 to 20.
   * 
   * @example
   * 1234567890
   */
  addAccount?: number[];
  /**
   * @remarks
   * The advanced configuration.
   */
  advancedOptions?: CreateImagePipelineRequestAdvancedOptions;
  /**
   * @remarks
   * The source image.
   * 
   * @example
   * m-bp67acfmxazb4p****
   */
  baseImage?: string;
  /**
   * @remarks
   * The type of the source image. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * IMAGE
   */
  baseImageType?: string;
  /**
   * @remarks
   * The content of the image build template. The content size cannot exceed 16 KB. For information about supported commands, see [Commands supported by Image Builder](https://help.aliyun.com/document_detail/200206.html).
   * 
   * @example
   * COMPONENT ic-bp12dvdzvr9k9*****
   * COMPONENT acs:ecs:cn-hangzhou:18689161186*****:imagecomponent/ComponentName/1.*.*
   */
  buildContent?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to release the intermediate instance if the image build fails. Valid values:
   * 
   * @example
   * true
   */
  deleteInstanceOnFailure?: boolean;
  /**
   * @remarks
   * The description. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The destination image family.
   * 
   * @example
   * family
   * 
   * @deprecated
   */
  imageFamily?: string;
  /**
   * @remarks
   * The prefix of the destination image name.
   * 
   * @example
   * testImageName
   * 
   * @deprecated
   */
  imageName?: string;
  /**
   * @remarks
   * The destination image properties.
   */
  imageOptions?: CreateImagePipelineRequestImageOptions;
  /**
   * @remarks
   * The properties and settings for importing the image. This parameter is required when `BaseImageType=OSS`.
   */
  importImageOptions?: CreateImagePipelineRequestImportImageOptions;
  /**
   * @remarks
   * The instance type. You can call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query available instance types.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The outbound public bandwidth of the intermediate instance. Unit: Mbit/s. Valid values: 0 to 100.
   * 
   * @example
   * 0
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The template name. The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. The name cannot start with `http://` or `https://`. The name can contain Chinese characters, letters, digits, colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * testImagePipeline
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the destination image supports NVMe.
   * 
   * @example
   * auto
   * 
   * @deprecated
   */
  nvmeSupport?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  repairItem?: string[];
  /**
   * @remarks
   * The repair options in the image template.
   * 
   * @example
   * Standard
   */
  repairMode?: string;
  /**
   * @remarks
   * The ID of the enterprise resource group.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The system disk size of the intermediate instance. Unit: GiB. Valid values: 20 to 500.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateImagePipelineRequestTag[];
  /**
   * @remarks
   * The content of the image test template. The content size cannot exceed 16 KB. For information about supported commands, see [Commands supported by Image Builder](https://help.aliyun.com/document_detail/200206.html).
   * 
   * @example
   * COMPONENT ic-bp12dvdzvr9k9*****
   * COMPONENT acs:ecs:cn-hangzhou:18689161186*****:imagecomponent/ComponentName/1.*.*
   */
  testContent?: string;
  /**
   * @remarks
   * The regions to which to distribute the destination image. Valid values of N: 1 to 20.
   * 
   * @example
   * cn-hangzhou
   */
  toRegionId?: string[];
  /**
   * @remarks
   * The vSwitch ID of the VPC.
   * 
   * @example
   * vsw-bp67acfmxazb4p****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      addAccount: 'AddAccount',
      advancedOptions: 'AdvancedOptions',
      baseImage: 'BaseImage',
      baseImageType: 'BaseImageType',
      buildContent: 'BuildContent',
      clientToken: 'ClientToken',
      deleteInstanceOnFailure: 'DeleteInstanceOnFailure',
      description: 'Description',
      imageFamily: 'ImageFamily',
      imageName: 'ImageName',
      imageOptions: 'ImageOptions',
      importImageOptions: 'ImportImageOptions',
      instanceType: 'InstanceType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      name: 'Name',
      nvmeSupport: 'NvmeSupport',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      repairItem: 'RepairItem',
      repairMode: 'RepairMode',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      systemDiskSize: 'SystemDiskSize',
      tag: 'Tag',
      testContent: 'TestContent',
      toRegionId: 'ToRegionId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addAccount: { 'type': 'array', 'itemType': 'number' },
      advancedOptions: CreateImagePipelineRequestAdvancedOptions,
      baseImage: 'string',
      baseImageType: 'string',
      buildContent: 'string',
      clientToken: 'string',
      deleteInstanceOnFailure: 'boolean',
      description: 'string',
      imageFamily: 'string',
      imageName: 'string',
      imageOptions: CreateImagePipelineRequestImageOptions,
      importImageOptions: CreateImagePipelineRequestImportImageOptions,
      instanceType: 'string',
      internetMaxBandwidthOut: 'number',
      name: 'string',
      nvmeSupport: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      repairItem: { 'type': 'array', 'itemType': 'string' },
      repairMode: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      systemDiskSize: 'number',
      tag: { 'type': 'array', 'itemType': CreateImagePipelineRequestTag },
      testContent: 'string',
      toRegionId: { 'type': 'array', 'itemType': 'string' },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addAccount)) {
      $dara.Model.validateArray(this.addAccount);
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
    if(Array.isArray(this.repairItem)) {
      $dara.Model.validateArray(this.repairItem);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.toRegionId)) {
      $dara.Model.validateArray(this.toRegionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

