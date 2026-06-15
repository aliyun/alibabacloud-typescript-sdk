// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportImageRequestDiskDeviceMapping extends $dara.Model {
  /**
   * @remarks
   * The device name of the disk (`DiskDeviceMapping.N.Device`) in the custom image.
   * 
   * > This parameter is being phased out. To ensure compatibility, we recommend that you avoid using this parameter.
   * 
   * @example
   * null
   */
  device?: string;
  /**
   * @remarks
   * The size of the disk, in GiB.
   * 
   * The system disk size must be greater than or equal to the size of the imported image file. Valid values:
   * 
   * - For N=1, the disk is a system disk. The value must be in the range of 1 to 2,048.
   * 
   * - For N=2 to 17, the disk is a data disk. The value must be in the range of 1 to 2,048.
   * 
   * After you upload the source image file to an OSS bucket, you can view the size of the file in the bucket.
   * 
   * > This parameter is being deprecated. For better compatibility, we recommend that you use the `DiskDeviceMapping.N.DiskImageSize` parameter.
   * 
   * @example
   * 80
   */
  diskImSize?: number;
  /**
   * @remarks
   * The size of the disk after the image is imported, in GiB.
   * 
   * The value of this parameter for the system disk must be greater than or equal to the size of the image file. Valid values:
   * 
   * - For N=1, the disk is a system disk. The value must be in the range of 1 to 2,048.
   * 
   * - For N=2 to 17, the disk is a data disk. The value must be in the range of 1 to 2,048.
   * 
   * After you upload the source image file to an OSS bucket, you can view the size of the file in the bucket.
   * 
   * @example
   * 80
   */
  diskImageSize?: number;
  /**
   * @remarks
   * The format of the image file. Valid values:
   * 
   * - RAW
   * 
   * - VHD
   * 
   * - QCOW2
   * 
   * - VMDK (This feature is in invitation-only preview.)
   * 
   * Default value: None. If you leave this parameter empty, Alibaba Cloud automatically detects the image format and uses the detected format.
   * 
   * @example
   * QCOW2
   */
  format?: string;
  /**
   * @remarks
   * The OSS bucket where the image file is stored.
   * 
   * > Before you import an image from an OSS bucket for the first time, you must add a RAM policy as described in the **Description** section of this topic. Otherwise, the API returns the `NoSetRoletoECSServiceAccount` error.
   * 
   * @example
   * ecsimageos
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The object key of the image file in the OSS bucket.
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
   * 
   * - v1: When you create an ECS instance from the image, you cannot set the metadata access mode to Security-Hardened Mode.
   * 
   * - v2: When you create an ECS instance from the image, you can set the metadata access mode to Security-Hardened Mode.
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
   * - supported: Instances created from the image support the NVMe protocol.
   * 
   * - unsupported: Instances created from the image do not support the NVMe protocol.
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
   * The key of tag N. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters long and cannot start with `aliyun` or `acs:` or contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N. Valid values of N: 1 to 20. The tag value can be an empty string. It can be up to 128 characters long, cannot start with `acs:`, and cannot contain `http://` or `https://`.
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
   * - i386
   * 
   * - x86_64
   * 
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
   * - BIOS: the BIOS boot mode.
   * 
   * - UEFI: the UEFI boot mode.
   * 
   * Default value: BIOS. If you set `Architecture` to `arm64`, the value of this parameter defaults to UEFI and can only be set to UEFI.
   * 
   * >Notice: 
   * 
   * To prevent startup failures, ensure the boot mode you specify is supported by the image. For more information, see [Image boot modes](~~2244655#b9caa9b8bb1wf~~).
   * 
   * @example
   * BIOS
   */
  bootMode?: string;
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of a request. The token must be unique across requests. The token can contain only ASCII characters and must be no more than 64 characters long. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the image. The description must be 2 to 256 characters long and cannot start with `http://` or `https://`. Both English and Chinese characters are supported.
   * 
   * @example
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The policy for checking the image. If you do not specify this parameter, the system does not check the image. This parameter supports only the standard detection mode. Set the value to `Standard`.
   * 
   * > This feature is supported on most Linux and Windows versions. For more information about the check items and the operating systems that support this feature, see [Image detection overview](https://help.aliyun.com/document_detail/439819.html) and [Operating system limitations for image detection](https://help.aliyun.com/document_detail/475800.html).
   * 
   * @example
   * Standard
   */
  detectionStrategy?: string;
  /**
   * @remarks
   * A list of disk device mappings for the custom image.
   */
  diskDeviceMapping?: ImportImageRequestDiskDeviceMapping[];
  /**
   * @remarks
   * Specifies whether to perform a dry run for the request. Valid values:
   * 
   * - `true`: performs a check request without executing the actual operation. The system checks whether the request parameters are valid, the request format is correct, and the required permissions are granted. If the check fails, the system returns an error message. If the check succeeds, the system returns the `DryRunOperation` error code.
   * 
   * - `false`: sends a normal request. After the request passes the check, the system returns a 2xx HTTP status code and performs the operation.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The properties of image features.
   */
  features?: ImportImageRequestFeatures;
  /**
   * @remarks
   * The name of the image. The name must be 2 to 128 characters long and start with a letter or a Chinese character. It can contain digits, periods (.), colons (:), underscores (_), and hyphens (-). The name cannot start with `aliyun` or `acs:` or contain `http://` or `https://`.
   * 
   * @example
   * ImageTestName
   */
  imageName?: string;
  /**
   * @remarks
   * The license type. This parameter sets the licensing model for instances that are created from the image by calling the [RunInstances](https://help.aliyun.com/document_detail/2679677.html) operation. This parameter applies only to Windows Server images. Valid values:
   * 
   * - Aliyun: Uses a license provided by Alibaba Cloud. When you start an instance created from this image, the system attempts to automatically connect to the Alibaba Cloud KMS server for activation. The fees for the instance include the cost of the Windows Server license.
   * 
   * - BYOL: Bring Your Own License. When you start an instance created from this image, Alibaba Cloud does not provide activation. You must use your own license key to manually activate the operating system. The fees for the instance do not include the cost of the Windows Server license.
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
   * - `windows`: You must also set the `LicenseType` parameter.
   * 
   * - `linux`
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
   * The operating system distribution. Valid values:
   * 
   * - Aliyun
   * 
   * - Anolis
   * 
   * - CentOS
   * 
   * - Ubuntu
   * 
   * - CoreOS
   * 
   * - SUSE
   * 
   * - Debian
   * 
   * - OpenSUSE
   * 
   * - FreeBSD
   * 
   * - RedHat
   * 
   * - Kylin
   * 
   * - UOS
   * 
   * - Fedora
   * 
   * - Fedora CoreOS
   * 
   * - CentOS Stream
   * 
   * - AlmaLinux
   * 
   * - Rocky Linux
   * 
   * - Gentoo
   * 
   * - Customized Linux
   * 
   * - Others Linux
   * 
   * - Windows Server 2022
   * 
   * - Windows Server 2019
   * 
   * - Windows Server 2016
   * 
   * - Windows Server 2012
   * 
   * - Windows Server 2008
   * 
   * - Windows Server 2003
   * 
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
   * The ID of the region where the source custom image is located. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the imported image belongs.
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
   * The Alibaba Cloud Resource Name (ARN) of the CloudBox, which uniquely identifies the cloud storage location.
   * 
   * > You must specify this parameter only when you import an image file from OSS ON CloudBox. If you do not use OSS ON CloudBox, do not specify this parameter. For more information, see [What is OSS ON CloudBox?](https://help.aliyun.com/document_detail/430190.html).
   * 
   * The ARN must be in the `arn:acs:cloudbox:{RegionId}:{AliUid}:cloudbox/{CloudBoxId}` format. Replace `{RegionId}` with the ID of the region where the CloudBox is located, `{AliUid}` with the ID of your Alibaba Cloud account, and `{CloudBoxId}` with the ID of the CloudBox.
   * 
   * @example
   * arn:acs:cloudbox:cn-hangzhou:123456:cloudbox/cb-xx***123
   */
  storageLocationArn?: string;
  /**
   * @remarks
   * The tags to add to the image.
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

