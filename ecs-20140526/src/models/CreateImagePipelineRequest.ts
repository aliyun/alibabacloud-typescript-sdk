// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImagePipelineRequestAdvancedOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable the automatic addition of a suffix to the destination image name. Valid values:
   * - disable: disables the automatic addition.
   * 
   * @example
   * disable
   */
  imageNameSuffix?: string;
  /**
   * @remarks
   * Specifies whether to retain Cloud Assistant. During the build process, the system automatically installs Cloud Assistant on the intermediate instance to execute commands. You can choose whether to retain it in the built destination image. Valid values:
   * - true: retains Cloud Assistant.
   * - false: does not retain Cloud Assistant.
   * 
   * Default value: false.
   * > This setting does not affect the Cloud Assistant that is pre-installed in your image.
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
   * Specifies whether the built destination image supports NVMe. Valid values:
   * - supported: supported. This indicates that instances created from this image support the NVMe protocol.
   * - unsupported: not supported. This indicates that instances created from this image do not support the NVMe protocol.
   * - auto: automatic detection. The system automatically detects whether the NVMe driver is installed in your image. This detection occurs before the build phase. If you install or uninstall the NVMe driver during the build, the detection result may be inaccurate. We recommend that you set this parameter to supported or unsupported based on the build content.
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
   * The tag key. Valid values of N: 1 to 20. If this parameter is specified, it cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: 1 to 20. If this parameter is specified, it can be an empty string. The tag value can be up to 128 characters in length. It cannot start with `acs:`, and cannot contain `http://` or `https://`.
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
   * The target image family. The value must be 2 to 128 characters in length. It must start with a letter or a Chinese character, and cannot start with aliyun or acs:. It cannot contain http:// or https://. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * family
   */
  imageFamily?: string;
  /**
   * @remarks
   * The properties related to destination image features.
   */
  imageFeatures?: CreateImagePipelineRequestImageOptionsImageFeatures;
  /**
   * @remarks
   * The prefix of the target image name. The prefix must be 2 to 64 characters in length and must start with a letter or a Chinese character. It cannot start with http:// or https://. It can contain letters, Chinese characters, digits, colons (:), underscores (_), periods (.), and hyphens (-). The system automatically generates the final image name by concatenating the prefix and the build task ID (ExecutionId) in the {ImageName}_{ExecutionId} format.
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
   * The space consists of the system disk and data disks. You must ensure that the size of the system disk is greater than or equal to the size of the imported image file. Valid values:
   * 
   * - If N is set to 1, it indicates the system disk. Valid values: 1 to 2048. Unit: GiB.
   * - If N is set to 2 to 17, it indicates data disks. Valid values: 1 to 2048. Unit: GiB.
   * 
   * After you upload the source image file to OSS, you can view the size of the image file in the OSS bucket.
   * 
   * @example
   * 40
   */
  diskImageSize?: number;
  /**
   * @remarks
   * The image format. Valid values:
   * 
   * - RAW
   * - VHD
   * - QCOW2
   * 
   * Default value: none. This indicates that Alibaba Cloud automatically detects the image format, and the detected format prevails.
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
   * The name (key) of the image file saved in the OSS bucket after the image is uploaded.
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
  /**
   * @remarks
   * The metadata access mode of the image. Valid values:
   * 
   * - v1: When you create an ECS instance from this image, you cannot set the metadata access mode to "Reinforced mode only".
   * 
   * - v2: When you create an ECS instance from this image, you can set the metadata access mode to "Reinforced mode only".
   * 
   * Default value: v1.
   * 
   * @example
   * v2
   */
  imdsSupport?: string;
  /**
   * @remarks
   * Specifies whether the imported original image supports NVMe. Valid values:
   * - supported: supported. This indicates that instances created from this image support the NVMe protocol.
   * - unsupported: not supported. This indicates that instances created from this image do not support the NVMe protocol.
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
  /**
   * @remarks
   * The tag key of the image.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the image.
   * 
   * @example
   * testValue
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

export class CreateImagePipelineRequestImportImageOptions extends $dara.Model {
  /**
   * @remarks
   * The system architecture of the system disk. After you specify a data disk snapshot to create a system disk, you must use Architecture to determine the system architecture of the system disk. Valid values:
   * 
   * - x86_64
   * - arm64
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
   * - BIOS: BIOS boot mode.
   * - UEFI: UEFI boot mode.
   * 
   * Default value: BIOS. If Architecture is set to arm64, the default value is UEFI, and you can only set this parameter to UEFI.
   * 
   * <notice>
   * 
   * To prevent instances from failing to start due to unsupported boot modes, make sure that you understand the boot modes supported by the destination image before you specify this parameter. For more information about image boot modes, see [Image boot modes](~~2244655#b9caa9b8bb1wf~~).
   * 
   * </notice>
   * 
   * @example
   * BIOS
   */
  bootMode?: string;
  /**
   * @remarks
   * The description of the imported image.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The list of custom image information to be created.
   * - If N is set to 1, it indicates the system disk.
   * - If N is set to 2 to 17, it indicates data disks.
   */
  diskDeviceMappings?: CreateImagePipelineRequestImportImageOptionsDiskDeviceMappings[];
  /**
   * @remarks
   * The properties related to image features.
   */
  features?: CreateImagePipelineRequestImportImageOptionsFeatures;
  /**
   * @remarks
   * The name of the imported image.
   * 
   * @example
   * testImageName
   */
  imageName?: string;
  /**
   * @remarks
   * The list of tags for the image.
   */
  importImageTags?: CreateImagePipelineRequestImportImageOptionsImportImageTags[];
  /**
   * @remarks
   * The license type used to activate the operating system after the image is imported. Valid values:
   * 
   * - Auto: Alibaba Cloud detects the source operating system and assigns a license. In auto mode, the system first checks whether the Platform you specified has a license from official Alibaba Cloud channels and assigns it to the imported image. If no such license is available, the system switches to the Bring Your Own License (BYOL) method.
   * - Aliyun: uses a license from official Alibaba Cloud channels based on the Platform you specified.
   * - BYOL: uses the license provided by the source operating system. If you use BYOL, you must ensure that your license key is supported on Alibaba Cloud.
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
   * - windows
   * - linux
   * 
   * Default value: linux.
   * 
   * @example
   * linux
   */
  OSType?: string;
  /**
   * @remarks
   * The operating system version. Valid values:
   * - Aliyun
   * - Anolis
   * - CentOS
   * - Ubuntu
   * - CoreOS
   * - SUSE
   * - Debian
   * - OpenSUSE
   * - FreeBSD
   * - RedHat
   * - Kylin
   * - UOS
   * - Fedora
   * - Fedora CoreOS
   * - CentOS Stream
   * - AlmaLinux
   * - Rocky Linux
   * - Gentoo
   * - Customized Linux
   * - Others Linux
   * - Windows Server 2022
   * - Windows Server 2019
   * - Windows Server 2016
   * - Windows Server 2012
   * - Windows Server 2008
   * - Windows Server 2003
   * - Other Windows
   * 
   * Default value: Others Linux if the operating system type is Linux, or Other Windows if the operating system type is Windows.
   * 
   * @example
   * Aliyun
   */
  platform?: string;
  /**
   * @remarks
   * <notice>
   * **[Deprecated]** Use ImportImageOptions.RetentionStrategy instead.
   * </notice>
   * 
   * @example
   * false
   */
  retainImportedImage?: boolean;
  /**
   * @remarks
   * The data retention policy for the imported image. Valid values:
   * 
   * - RetainOnlySuccessful: retains the image only if the build succeeds.
   * - RetainOnlyFailed: retains the image only if the build fails.
   * - RetainAlways: always retains the image regardless of the build result.
   * - RetainNever: never retains the image regardless of the build result.
   * 
   * Default value: RetainNever.
   * 
   * @example
   * RetainAlways
   */
  retentionStrategy?: string;
  /**
   * @remarks
   * The name of the RAM role used when the image is imported.
   */
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
   * The tag key. Valid values of N: 1 to 20. If this parameter is specified, it cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: 1 to 20. If this parameter is specified, it can be an empty string. The tag value can be up to 128 characters in length. It cannot start with `acs:`, and cannot contain `http://` or `https://`.
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
   * The Alibaba Cloud account ID for image sharing of the destination image. Valid values of N: 1 to 20.
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
   * - If BaseImageType is set to IMAGE, set this parameter to the image ID.
   * - If BaseImageType is set to IMAGE_FAMILY, set this parameter to the image family name.
   * - If BaseImageType is set to OSS, you do not need to specify this parameter.
   * 
   * @example
   * m-bp67acfmxazb4p****
   */
  baseImage?: string;
  /**
   * @remarks
   * The source image type. Valid values:
   * 
   * - IMAGE: image.
   * - IMAGE_FAMILY: image family.
   * - OSS: OSS object.
   * 
   * This parameter is required.
   * 
   * @example
   * IMAGE
   */
  baseImageType?: string;
  /**
   * @remarks
   * The content of the image build template. The content size cannot exceed 16 KB. For more information about supported commands, see [Commands supported by Image Builder](https://help.aliyun.com/document_detail/200206.html).
   * 
   * @example
   * COMPONENT ic-bp12dvdzvr9k9*****
   * COMPONENT acs:ecs:cn-hangzhou:18689161186*****:imagecomponent/ComponentName/1.*.*
   */
  buildContent?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to release the intermediate instance if the image build fails. Valid values:
   * 
   * - true: releases the instance.
   * - false: does not release the instance.
   * 
   * Default value: true.
   * 
   * > If the intermediate instance fails to start, the instance is not retained by default.
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
   * <notice>
   * **[Deprecated]** Use ImageOptions.ImageFamily instead.
   * </notice>
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
   * <notice>
   * **[Deprecated]** Use ImageOptions.ImageName instead.
   * </notice>
   * 
   * @example
   * testImageName
   * 
   * @deprecated
   */
  imageName?: string;
  /**
   * @remarks
   * The properties of the destination image.
   */
  imageOptions?: CreateImagePipelineRequestImageOptions;
  /**
   * @remarks
   * The properties and settings of the imported image. This parameter is required when BaseImageType is set to OSS.
   */
  importImageOptions?: CreateImagePipelineRequestImportImageOptions;
  /**
   * @remarks
   * The instance type. You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query available instance types.
   * 
   * If you do not specify this parameter, the system automatically selects an instance type with the minimum number of vCPUs and memory size based on resource availability. For example, the system selects the ecs.g6.large instance type by default. If ecs.g6.large is out of stock, the system selects ecs.g6.xlarge.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The outbound public bandwidth of the intermediate instance. Unit: Mbit/s. Valid values: 0 to 100.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The template name. It must be 2 to 128 characters in length and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`. It can contain letters, digits, Chinese characters, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * > If you do not specify `Name`, the value of `ImagePipelineId` is used by default.
   * 
   * @example
   * testImagePipeline
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the built destination image supports NVMe.
   * <notice>
   * **[Deprecated]** Use ImageOptions.ImageFeatures.NvmeSupport instead.
   * </notice>
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
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The image repair items.
   * 
   * - Repair items supported by Linux:
   *    - fstab: fixes disk attach configuration issues.
   *    - grub: fixes GRUB boot configuration issues.
   *    - dhcp: fixes network DHCP issues.
   *    - selinux: fixes Security-Enhanced Linux (SELinux) issues.
   *    - growpart: fixes online automatic scale-out issues of the root partition.
   *    - cloudinit: installs the cloud-init initialization service.
   *    - aegis: installs the Security Center agent.
   *    - nvme: fixes NVMe driver issues.
   *    - virtio: fixes virtio driver issues.
   *    - standardizedtimezone: fixes standard time zone issues.
   * - Repair items supported by Windows:
   *    - bcd: fixes boot configuration data file issues.
   *    - hotfix: fixes Windows patch issues.
   *    - disk: fixes disk Settings issues.
   *    - update: fixes Windows Update process issues.
   *    - server: fixes service configuration issues.
   *    - bootmgr: fixes Windows Boot Manager issues.
   *    - vminit: fixes Windows initialization agent issues.
   *    - osloader: fixes Windows OS Loader issues.
   *    - virtio: fixes virtio driver issues.
   *    - standardizedtimezone: fixes standard time zone issues.
   */
  repairItem?: string[];
  /**
   * @remarks
   * The repair mode in the image template.
   * 
   * Valid values:
   * - Standard: standard repair mode.
   * 
   *   The standard repair package for Linux includes:
   *   - GUESTOS.CloudInit
   *   - GUESTOS.Dhcp
   *   - GUESTOS.Virtio
   *   - GUESTOS.OnlineResizeFS
   *   - GUESTOS.Grub
   *   - GUESTOS.Fstab
   *   - GUESTOS.Nvme
   * 
   *   The standard repair package for Windows includes:
   *   - GUESTOS.Virtio
   *   - GUESTOS.Update
   *   - GUESTOS.Hotfix
   *   - GUESTOS.Server
   *   - GUESTOS.Bcd
   *   - GUESTOS.Disk
   *   - GUESTOS.Bootmgr
   *   - GUESTOS.OSLoader
   *   - GUESTOS.Vminit
   * 
   * - All: full repair mode.
   * 
   *   The full repair package for Linux includes the following items in addition to those in the standard repair package:
   *   - GUESTOS.Selinux
   *   - GUESTOS.SecurityCenterAgent
   * 
   *   The full repair package for Windows includes the following items in addition to those in the standard repair package:
   *   - GUESTOS.Server
   * 
   * - Customized: custom repair mode. In this mode, the repair items in the repair package are specified by the RepairItem parameter.
   * 
   * > As the detection and repair capabilities improve, the included repair items may increase. For more information about the specific meanings of repair items, see [Image check overview](https://help.aliyun.com/document_detail/439819.html).
   * 
   * @example
   * Standard
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
   * The list of tags.
   */
  tag?: CreateImagePipelineRequestTag[];
  /**
   * @remarks
   * The content of the image test template. The content size cannot exceed 16 KB. For more information about supported commands, see [Commands supported by Image Builder](https://help.aliyun.com/document_detail/200206.html).
   * 
   * @example
   * COMPONENT ic-bp12dvdzvr9k9*****
   * COMPONENT acs:ecs:cn-hangzhou:18689161186*****:imagecomponent/ComponentName/1.*.*
   */
  testContent?: string;
  /**
   * @remarks
   * The list of regions to which the destination image is distributed. Valid values of N: 1 to 20.
   * 
   * If you do not specify this parameter, the image is created only in the current region by default.
   * 
   * @example
   * cn-hangzhou
   */
  toRegionId?: string[];
  /**
   * @remarks
   * The vSwitch ID of the VPC.
   * 
   * If you do not specify this parameter, a new VPC and vSwitch are created by default. Make sure that your account has sufficient VPC resource quotas. For more information, see [Limits](https://help.aliyun.com/document_detail/27750.html).
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

