// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImagePipelineRequestAdvancedOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable the feature that automatically adds a suffix to the name of the image created based on the image template. Valid value:
   * 
   * *   disable
   * 
   * @example
   * disable
   */
  imageNameSuffix?: string;
  /**
   * @remarks
   * Specifies whether to retain Cloud Assistant Agent that is installed during the image building process. During the image building process, the system automatically installs Cloud Assistant Agent on the intermediate instance to run commands. You can choose whether to retain Cloud Assistant Agent that is installed during the image building process in the new image. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * >  The setting of this parameter does not affect Cloud Assistant Agent that comes with your image.
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
   * Specifies whether the image created based on the image template supports the NVMe protocol. Valid values:
   * 
   * *   supported: The image supports the NVMe protocol. Instances created from the image also support the NVMe protocol.
   * *   unsupported: The image does not support the NVMe protocol. Instances created from the image do not support the NVMe protocol.
   * *   auto: The system automatically detects whether the image supports the NVMe protocol. The system automatically detects whether the NVMe driver is installed on your image before the new image is built. If you install or uninstall the NVMe driver during the image building process, the detection result may be incorrect. We recommend that you set the value to supported or unsupported based on the image building content.
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
   * The key of tag N to add to the image. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the image. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:`. It cannot contain `http://` or `https://`.
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
   * The description of the image. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The image family. The image family name must be 2 to 128 characters in length. The name must start with a letter and cannot start with acs: or aliyun. The name cannot contain http:// or https:// and can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * family
   */
  imageFamily?: string;
  /**
   * @remarks
   * The feature attributes of the image.
   */
  imageFeatures?: CreateImagePipelineRequestImageOptionsImageFeatures;
  /**
   * @remarks
   * The prefix of the image name. The prefix must be 2 to 64 characters in length. The prefix must start with a letter and cannot start with `http://` or `https://`. The prefix can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * The system generates the final image name that consists of the specified prefix and the ID of the build task (`ExecutionId`) in the format of `{ImageName}_{ExecutionId}`.
   * 
   * @example
   * testImageName
   */
  imageName?: string;
  /**
   * @remarks
   * The tags to add to the image.
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
   * The size of disk N in the custom image after the source image is imported.
   * 
   * You can use this parameter to specify the sizes of the system disk and data disks in the custom image. When you specify the size of the system disk, make sure that the specified size is greater than or equal to the size of the source image file. Unit: GiB. Valid values:
   * 
   * *   When the N value is 1, this parameter specifies the size of the system disk in the custom image. Valid values: 1 to 2048.
   * *   When the N value is an integer in the range of 2 to 17, this parameter specifies the size of a data disk in the custom image. Valid values: 1 to 2048.
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
   * This parameter is empty by default, which indicates that the system checks the format of the image and uses the check result as the value of this parameter.
   * 
   * @example
   * RAW
   */
  format?: string;
  /**
   * @remarks
   * The OSS bucket where the image file is stored.
   * 
   * @example
   * ecsimageos
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The name (key) of the object that the uploaded image is stored as in the OSS bucket.
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
   * Specifies whether the imported source image supports the Non-Volatile Memory Express (NVMe) protocol. Valid values:
   * 
   * *   supported: The image supports the NVMe protocol. Instances created from the image also support the NVMe protocol.
   * *   unsupported: The image does not support the NVMe protocol. Instances created from the image do not support the NVMe protocol.
   * 
   * Default value: unsupported.
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
   * The system architecture of the system disk. If you specify a data disk snapshot to create the system disk of the image, use Architecture to specify the system architecture of the system disk. Valid values:
   * 
   * *   x86_64
   * *   arm64
   * 
   * Default value: x86_64.
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
   * Default value: BIOS. If you set Architecture to `arm64`, set this parameter to UEFI.
   * 
   * >  Before you specify this parameter, make sure that you are familiar with the boot modes supported by the image. If you specify a boot mode that is not supported by the image, ECS instances created from the image cannot start as expected. For information about the boot modes of images, see the [Boot modes of images](~~2244655#b9caa9b8bb1wf~~) section of the "Best practices for ECS instance boot modes" topic.
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
   * *   When the N value is 1, this parameter creates a custom image from the system disk.
   * *   When the N value is an integer in the range of 2 to 17, this parameter creates a custom image from a data disk.
   */
  diskDeviceMappings?: CreateImagePipelineRequestImportImageOptionsDiskDeviceMappings[];
  /**
   * @remarks
   * The attributes of the image.
   */
  features?: CreateImagePipelineRequestImportImageOptionsFeatures;
  imageName?: string;
  importImageTags?: CreateImagePipelineRequestImportImageOptionsImportImageTags[];
  /**
   * @remarks
   * The type of the license to use to activate the operating system after the image is imported. Valid values:
   * 
   * *   Auto: ECS detects the operating system of the image and allocates a license to the operating system. In this mode, the system first checks whether a license allocated by an official Alibaba Cloud channel is available for the operating system version specified by `Platform`. If a license allocated by an official Alibaba Cloud channel is available for the operating system version, the system allocates the license to the imported image. If no such license is available, the Bring Your Own License (BYOL) mode is used.
   * *   Aliyun: The license allocated by an official Alibaba Cloud channel for the operating system version specified by `Platform` is used.
   * *   BYOL: The license that comes with the source operating system is used. When you use the BYOL license, make sure that your license key is supported by Alibaba Cloud.
   * 
   * Default value: Auto.
   * 
   * @example
   * Auto
   */
  licenseType?: string;
  /**
   * @remarks
   * The operating system type. Valid values:
   * 
   * *   windows
   * *   linux
   * 
   * Default value: linux.
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
   * Default value: Others Linux when the operating system type is linux, and Other Windows when the operating system type is windows.
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
   * The key of tag N. Valid values of N: 1 to 20. You cannot specify empty strings as tag keys. The tag key must be 1 to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value must be 0 to 128 characters in length. It cannot start with `acs:` or contain `http://` or `https://`.
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
   * The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template. You can specify up to 20 account IDs.
   * 
   * @example
   * 1234567890
   */
  addAccount?: number[];
  /**
   * @remarks
   * The advanced settings.
   */
  advancedOptions?: CreateImagePipelineRequestAdvancedOptions;
  /**
   * @remarks
   * The source image.
   * 
   * *   If you set `BaseImageType` to IMAGE, set BaseImage to the ID of a custom image.
   * *   If you set `BaseImageType` to IMAGE_FAMILY, set BaseImage to the name of an image family.
   * *   If you set `BaseImageType` to OSS, you do not need to specify BaseImage.
   * 
   * @example
   * m-bp67acfmxazb4p****
   */
  baseImage?: string;
  /**
   * @remarks
   * The type of the source image. Valid values:
   * 
   * *   IMAGE: image
   * *   IMAGE_FAMILY: image family
   * *   OSS: Object Storage Service (OSS) object
   * 
   * This parameter is required.
   * 
   * @example
   * IMAGE
   */
  baseImageType?: string;
  /**
   * @remarks
   * The build content in the image template. The content cannot exceed 16 KB in size. For information about the commands supported by Image Builder, see [Commands supported by Image Builder](https://help.aliyun.com/document_detail/200206.html).
   * 
   * @example
   * FROM IMAGE:m-bp67acfmxazb4p****
   */
  buildContent?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.**** For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to release the intermediate instance when the image cannot be created. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * > If the intermediate instance cannot be started, the instance is released by default.
   * 
   * @example
   * true
   */
  deleteInstanceOnFailure?: boolean;
  /**
   * @remarks
   * The description of the image template. The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.
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
  imageOptions?: CreateImagePipelineRequestImageOptions;
  /**
   * @remarks
   * The attributes and settings of the image that you want to import. If you set `BaseImageType` to OSS, you must specify this parameter.
   */
  importImageOptions?: CreateImagePipelineRequestImportImageOptions;
  /**
   * @remarks
   * The instance type. You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query instance types.
   * 
   * If you do not configure this parameter, an instance type that provides the fewest vCPUs and memory resources is automatically selected. This configuration is subject to resource availability of instance types. For example, the ecs.g6.large instance type is automatically selected. If available ecs.g6.large resources are insufficient, the ecs.g6.xlarge instance type is selected.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The size of the outbound public bandwidth for the intermediate instance. Unit: Mbit/s. Valid values: 0 to 100.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The name of the launch template. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * >  If you do not specify `Name`, the return value of `ImagePipelineId` is used.
   * 
   * @example
   * testImagePipeline
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the image created based on the image template supports the NVMe protocol.
   * 
   * >  This parameter is no longer used. We recommend that you use ImageOptions.ImageFeatures.NvmeSupport.
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
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The repair mode of the image template.
   * 
   * Valid values:
   * 
   * *   Standard: the standard mode.
   * 
   *     Supported check items in Linux operating systems:
   * 
   *     *   GUESTOS.CloudInit
   *     *   GUESTOS.Dhcp
   *     *   GUESTOS.Virtio
   *     *   GUESTOS.OnlineResizeFS
   *     *   GUESTOS.Grub
   *     *   GUESTOS.Fstab
   * 
   *     Supported check items in Windows operating systems:
   * 
   *     *   GUESTOS.Virtio
   *     *   GUESTOS.Update
   *     *   GUESTOS.Hotfix
   *     *   GUESTOS.Server
   * 
   * >  As the check and repair capabilities continue to improve, the number of check items may increase. For more information about check items, see [Overview of image check](https://help.aliyun.com/document_detail/439819.html).
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The system disk size of the intermediate instance. Unit: GiB. Valid values: 20 to 500.
   * 
   * Default value: 40.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The tags to add to the template.
   */
  tag?: CreateImagePipelineRequestTag[];
  /**
   * @remarks
   * The test content in the image template. The content cannot exceed 16 KB in size. For information about the commands supported by Image Builder, see [Commands supported by Image Builder](https://help.aliyun.com/document_detail/200206.html).
   * 
   * @example
   * null
   */
  testContent?: string;
  /**
   * @remarks
   * The IDs of regions to which you want to distribute the image that is created based on the image template. You can specify up to 20 region IDs.
   * 
   * If you do not specify this parameter, the image is created only in the current region.
   * 
   * @example
   * cn-hangzhou
   */
  toRegionId?: string[];
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * If you do not specify this parameter, a new VPC and vSwitch are created. Make sure that the VPC quota in your account is sufficient. For more information, see [Limits and quotas](https://help.aliyun.com/document_detail/27750.html).
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

