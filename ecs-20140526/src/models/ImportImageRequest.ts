// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportImageRequestDiskDeviceMapping extends $dara.Model {
  /**
   * @remarks
   * The device name of DiskDeviceMapping.N.Device in the custom image.
   * 
   * > This parameter will be deprecated. For better compatibility, do not use this parameter.
   * 
   * @example
   * null
   */
  device?: string;
  /**
   * @remarks
   * The size of the custom image. Unit: GiB.
   * 
   * The size includes the system disk and data disks. Make sure that the system disk space is greater than or equal to the size of the imported image file. Valid values:
   * 
   * - When N is 1, the value specifies the system disk size. Valid values: 1 to 2048.
   * - When N is 2 to 17, the value specifies the data disk size. Valid values: 1 to 2048.
   * 
   * After you upload the source image file to OSS, you can view the image file size in the OSS bucket.
   * 
   * > This parameter will be deprecated. For better compatibility, use `DiskDeviceMapping.N.DiskImageSize`.
   * 
   * @example
   * 80
   */
  diskImSize?: number;
  /**
   * @remarks
   * The size of the custom image after the image is imported.
   * 
   * The size includes the system disk and data disks. Make sure that the system disk space is greater than or equal to the size of the imported image file. Valid values:
   * 
   * - When N is 1, the value specifies the system disk size. Valid values: 1 to 2048. Unit: GiB.
   * - When N is 2 to 17, the value specifies the data disk size. Valid values: 1 to 2048. Unit: GiB.
   * 
   * After you upload the source image file to OSS, you can view the image file size in the OSS bucket.
   * 
   * @example
   * 80
   */
  diskImageSize?: number;
  /**
   * @remarks
   * The image format. Valid values:
   * 
   * - RAW.
   * - VHD.
   * - QCOW2.
   * - VMDK (in invitational preview).
   * 
   * Default value: null, which indicates that Alibaba Cloud automatically detects the image format. The detected format prevails.
   * 
   * @example
   * QCOW2
   */
  format?: string;
  /**
   * @remarks
   * The OSS bucket where the image file is stored.
   * 
   * > Before you import an image to this OSS bucket for the first time, add the RAM authorization policy as described in the **Operation description** section of this topic. Otherwise, the `NoSetRoletoECSServiceAccount` error is returned.
   * 
   * @example
   * ecsimageos
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The file name (key) of the image file stored in the OSS bucket after the image is uploaded to OSS.
   * 
   * @example
   * CentOS_5.4_32.raw
   */
  OSSObject?: string;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      diskImSize: 'DiskImSize',
      diskImageSize: 'DiskImageSize',
      format: 'Format',
      OSSBucket: 'OSSBucket',
      OSSObject: 'OSSObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: 'string',
      diskImSize: 'number',
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

export class ImportImageRequestFeatures extends $dara.Model {
  /**
   * @remarks
   * The metadata access mode of the image. Valid values:
   * - v1: When you create an ECS instance from this image, you cannot set the metadata access mode to hardened mode only.
   * - v2: When you create an ECS instance from this image, you can set the metadata access mode to hardened mode only.
   * 
   * Default value: v1.
   * 
   * @example
   * v2
   */
  imdsSupport?: string;
  /**
   * @remarks
   * Specifies whether the image supports NVMe. Valid values:
   * 
   *  - supported: Instances created from this image support NVMe.
   *  - unsupported: Instances created from this image do not support NVMe.
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

export class ImportImageRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the image tag. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the image tag. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:`. It cannot contain `http://` or `https://`.
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

export class ImportImageRequest extends $dara.Model {
  /**
   * @remarks
   * The system architecture. Valid values: 
   * 
   * - i386.
   * - x86_64.
   * - arm64.
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
   * Default value: BIOS. If `Architecture=arm64`, the default value is UEFI, and only UEFI is supported.
   * 
   * <notice>
   * 
   * To prevent instances from failing to start due to an unsupported boot mode, make sure that you understand the boot mode supported by the target image before you set this parameter. For more information about image boot modes, see [Image boot modes](~~2244655#b9caa9b8bb1wf~~).
   * 
   * </notice>.
   * 
   * @example
   * BIOS
   */
  bootMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the image. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The image detection strategy. If this parameter is not specified, detection is not triggered. Only the Standard detection mode is supported.
   * 
   * > Most Linux and Windows versions are supported. For more information about image detection items and operating system limitations, see [Image detection overview](https://help.aliyun.com/document_detail/439819.html) and [Operating system limitations for image detection](https://help.aliyun.com/document_detail/475800.html).
   * 
   * @example
   * Standard
   */
  detectionStrategy?: string;
  /**
   * @remarks
   * The information list of the custom image to create.
   */
  diskDeviceMapping?: ImportImageRequestDiskDeviceMapping[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - true: performs only a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized RAM users, and missing parameter values. If the request fails the dry run, the corresponding error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - false: performs a dry run and sends the request. If the request passes the dry run, a 2XX HTTP status code is returned and the resource status is queried.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The image feature-related properties.
   */
  features?: ImportImageRequestFeatures;
  /**
   * @remarks
   * The name of the image. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`. It can contain digits, periods (.), colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * ImageTestName
   */
  imageName?: string;
  /**
   * @remarks
   * The license type. This parameter specifies the authorization mode when instances are created by calling [RunInstances](https://help.aliyun.com/document_detail/2679677.html) with the image. This value takes effect only for Windows Server images. Valid values:
   * - Aliyun: Use the Alibaba Cloud official license. After the instance starts, the system attempts to automatically connect to the Alibaba Cloud KMS server for activation. The billing for the instance includes the Windows Server license fee.
   * - BYOL: Bring Your Own License. After the instance starts, Alibaba Cloud does not automatically activate it. You must manually activate it by using your own valid license key. The billing for the instance does not include the Windows Server license fee.
   * 
   * Default value: Aliyun.
   * 
   * @example
   * BYOL
   */
  licenseType?: string;
  /**
   * @remarks
   * The operating system type. Valid values: 
   * 
   * - windows. You must also set `LicenseType`.
   * - linux.
   * 
   * Default value: linux.
   * 
   * @example
   * linux
   */
  OSType?: string;
  ownerId?: number;
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
   * Default value: Others Linux.
   * 
   * @example
   * Aliyun
   */
  platform?: string;
  /**
   * @remarks
   * The region ID of the source custom image. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the enterprise resource group to which the imported image belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the RAM role used to import the image.
   * 
   * @example
   * AliyunECSImageImportDefaultRole
   */
  roleName?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the CloudBox, which is used to uniquely identify the cloud storage location.
   * 
   * > You need to specify this parameter only when you import an image file from OSS on CloudBox. If you do not use OSS on CloudBox, do not set this parameter. For more information, see [What is OSS on CloudBox](https://help.aliyun.com/document_detail/430190.html).
   * 
   * The ARN must follow this format: `arn:acs:cloudbox:{RegionId}:{AliUid}:cloudbox/{CloudBoxId}`, where `{RegionId}` is the region ID of the CloudBox, `{AliUid}` is the Alibaba Cloud account ID, and `{CloudBoxId}` is the CloudBox ID.
   * 
   * @example
   * arn:acs:cloudbox:cn-hangzhou:123456:cloudbox/cb-xx***123
   */
  storageLocationArn?: string;
  /**
   * @remarks
   * The tags of the image.
   */
  tag?: ImportImageRequestTag[];
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      bootMode: 'BootMode',
      clientToken: 'ClientToken',
      description: 'Description',
      detectionStrategy: 'DetectionStrategy',
      diskDeviceMapping: 'DiskDeviceMapping',
      dryRun: 'DryRun',
      features: 'Features',
      imageName: 'ImageName',
      licenseType: 'LicenseType',
      OSType: 'OSType',
      ownerId: 'OwnerId',
      platform: 'Platform',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleName: 'RoleName',
      storageLocationArn: 'StorageLocationArn',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      bootMode: 'string',
      clientToken: 'string',
      description: 'string',
      detectionStrategy: 'string',
      diskDeviceMapping: { 'type': 'array', 'itemType': ImportImageRequestDiskDeviceMapping },
      dryRun: 'boolean',
      features: ImportImageRequestFeatures,
      imageName: 'string',
      licenseType: 'string',
      OSType: 'string',
      ownerId: 'number',
      platform: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleName: 'string',
      storageLocationArn: 'string',
      tag: { 'type': 'array', 'itemType': ImportImageRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.diskDeviceMapping)) {
      $dara.Model.validateArray(this.diskDeviceMapping);
    }
    if(this.features && typeof (this.features as any).validate === 'function') {
      (this.features as any).validate();
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

