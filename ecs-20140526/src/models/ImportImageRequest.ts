// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImportImageRequestDiskDeviceMapping } from "./ImportImageRequestDiskDeviceMapping";
import { ImportImageRequestFeatures } from "./ImportImageRequestFeatures";
import { ImportImageRequestTag } from "./ImportImageRequestTag";


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
   * The information of disks from which the custom images are created.
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

