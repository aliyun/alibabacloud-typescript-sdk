// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportImageRequestDiskDeviceMapping extends $dara.Model {
  /**
   * @remarks
   * The device name of disk N in the custom image.
   * 
   * >  This parameter will be removed in the future. We recommend that you do not use this parameter to ensure future compatibility.
   * 
   * @example
   * null
   */
  device?: string;
  /**
   * @remarks
   * The size of disk N in the custom image. Unit: GiB.
   * 
   * You can use this parameter to specify the sizes of the system disk and data disks in the custom image. When you specify the size of the system disk, make sure that the specified size is greater than or equal to the size of the imported image file. Unit: GiB. Valid values:
   * 
   * *   When the N value is 1, this parameter specifies the size of the system disk in the custom image. Valid values: 1 to 2048.
   * *   When the N value is an integer in the range of 2 to 17, this parameter specifies the size of a data disk in the custom image. Valid values: 1 to 2048.
   * 
   * After the image file is uploaded to an OSS bucket, you can view the size of the image file in the OSS bucket.
   * 
   * >  This parameter will be removed in the future. We recommend that you use `DiskDeviceMapping.N.DiskImageSize` to ensure future compatibility.
   * 
   * @example
   * 80
   */
  diskImSize?: number;
  /**
   * @remarks
   * The size of disk N in the custom image after the source image is imported.
   * 
   * You can use this parameter to specify the sizes of the system disk and data disks in the custom image. When you specify the size of the system disk, make sure that the specified size is greater than or equal to the size of the imported image file. Unit: GiB. Valid values:
   * 
   * *   When the N value is 1, this parameter specifies the size of the system disk in the custom image. Valid values: 1 to 2048.
   * *   When the N value is an integer in the range of 2 to 17, this parameter specifies the size of a data disk in the custom image. Valid values: 1 to 2048.
   * 
   * After the image file is uploaded to an OSS bucket, you can view the size of the image file in the OSS bucket.
   * 
   * @example
   * 80
   */
  diskImageSize?: number;
  /**
   * @remarks
   * The format of the source image. Valid values:
   * 
   * *   RAW
   * *   VHD
   * *   QCOW2
   * *   VMDK (invitational preview)
   * 
   * This parameter is empty by default, which indicates that the system checks the image format and uses the check result as the value of this parameter.
   * 
   * @example
   * QCOW2
   */
  format?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) bucket where the image file is stored.
   * 
   * >  Before you import images for the first time, you must use RAM to authorize ECS to access your OSS buckets. If ECS is not authorized to access your OSS buckets, the `NoSetRoletoECSServiceAcount` error code is returned when you call the ImportImage operation. For more information, see **Usage notes**.
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
   * The metadata access mode version of the image. Valid values:
   * 
   * *   v1: You cannot set the metadata access mode to security hardening when you create instances from the image.
   * *   v2: You can set the metadata access mode to security hardening when you create instances from the image.
   * 
   * Default value: v1.
   * 
   * @example
   * v2
   */
  imdsSupport?: string;
  /**
   * @remarks
   * Specifies whether the image supports the Non-Volatile Memory Express (NVMe) protocol. Valid values:
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

export class ImportImageRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the image. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the image. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:`.
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
   * *   i386
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
   * *   BIOS
   * *   UEFI
   * 
   * Default value: BIOS. If you set `Architecture` to arm64, set this parameter to UEFI.
   * 
   * > Make sure that you are aware of the boot modes supported by the specified image, as thehe modified boot mode needs to be supported by the image. This way, instances that use this image can start.
   * 
   * @example
   * BIOS
   */
  bootMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. **The token can contain only ASCII characters and cannot exceed 64 characters in length.** For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The image description. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The mode in which to check the image. If you do not specify this parameter, the image is not checked. Only the standard check mode is supported.
   * 
   * >  This parameter is supported for most Linux and Windows operating system versions. For more information about image check items and operating system limits for image check, see [Overview](https://help.aliyun.com/document_detail/439819.html) and [Operating system limits for image check](https://help.aliyun.com/document_detail/475800.html).
   * 
   * @example
   * Standard
   */
  detectionStrategy?: string;
  /**
   * @remarks
   * Details about the custom images.
   */
  diskDeviceMapping?: ImportImageRequestDiskDeviceMapping[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   true: performs only a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized RAM users, and missing parameter values. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   false: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The attributes of the image.
   */
  features?: ImportImageRequestFeatures;
  /**
   * @remarks
   * The image name. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `acs:` or `aliyun`. The name cannot contain `http://` or `https://`. The name can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * ImageTestName
   */
  imageName?: string;
  /**
   * @remarks
   * The type of the license used to activate the operating system after the image is imported. Valid values:
   * 
   * *   Auto: ECS checks the operating system of the image and allocates a license to the operating system. ECS first checks whether the operating system distribution specified by `Platform` has a license allocated through an official Alibaba Cloud channel. If yes, the allocated license is used. If no, the license that comes with the source operating system is used.
   * *   Aliyun: The license allocated through an official Alibaba Cloud channel is used for the operating system distribution specified by `Platform`.
   * *   BYOL: The license that comes with the source operating system is used. In this case, make sure that your license key is eligible for use in Alibaba Cloud.
   * 
   * Default value: Auto.
   * 
   * @example
   * Auto
   */
  licenseType?: string;
  /**
   * @remarks
   * The operating system platform. Valid values:
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
  ownerId?: number;
  /**
   * @remarks
   * The operating system distribution. Valid values:
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
   * 
   * Default value: Others Linux.
   * 
   * @example
   * Aliyun
   */
  platform?: string;
  /**
   * @remarks
   * The region ID of the source image. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the image.
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
   * The Alibaba Cloud Resource Name (ARN) of the cloud box, which is used to uniquely identify a storage location in the cloud.
   * 
   * >  Specify this parameter only if you import an image from OSS on CloudBox. Otherwise, you do not need to specify this parameter. For more information, see [What is OSS on CloudBox?](https://help.aliyun.com/document_detail/430190.html)
   * 
   * The ARN must be in the following format: `arn:acs:cloudbox:{RegionId}:{AliUid}:cloudbox/{CloudBoxId}`. Replace `{RegionId}` with the region ID of the cloud box, `{AliUid}` with the ID of the Alibaba Cloud account to which the cloud box belongs, and `{CloudBoxId}` with the ID of the cloud box.
   * 
   * @example
   * arn:acs:cloudbox:cn-hangzhou:123456:cloudbox/cb-xx***123
   */
  storageLocationArn?: string;
  /**
   * @remarks
   * The image tags.
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

