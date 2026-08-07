// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageRequestDiskDeviceMapping extends $dara.Model {
  /**
   * @remarks
   * The device name in the custom image. Valid values:
   * 
   * - The device name of the system disk must be /dev/xvda.
   * 
   * - The device names of data disks are in alphabetical order from /dev/xvdb to /dev/xvdz and cannot be duplicated.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The type of the disk in the new image. You can use this parameter to specify a data disk snapshot as the system disk of the image. If this parameter is not specified, the disk type defaults to the type of the disk corresponding to the snapshot. Valid values:
   * 
   * - system: system disk. Only one system disk snapshot can be specified.
   * - data: data disk. Up to 16 data disk snapshots can be specified.
   * 
   * @example
   * system
   */
  diskType?: string;
  /**
   * @remarks
   * The size of the disk, in GiB. The valid values and default value of DiskDeviceMapping.N.Size depend on DiskDeviceMapping.N.SnapshotId:
   * 
   * - If SnapshotId is not specified, the valid values and default value of Size are:
   *     - Basic disk: 5 to 2000 GiB. Default value: 5.
   *     - Other disk types: 20 to 32768 GiB. Default value: 20.
   * - If SnapshotId is specified, the value of Size must be greater than or equal to the size of the snapshot. Default value: the size of the snapshot.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * s-bp17441ohwkdca0****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      diskType: 'DiskType',
      size: 'Size',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: 'string',
      diskType: 'string',
      size: 'number',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageRequestFeatures extends $dara.Model {
  /**
   * @remarks
   * The metadata access mode of the image. Valid values:
   * - v1: When you create an ECS instance from this image, you cannot set the metadata access mode to "security hardened mode only".
   * - v2: When you create an ECS instance from this image, you can set the metadata access mode to "security hardened mode only".
   * 
   * Default value: When creating an image from a snapshot, the default is v1. When creating an image from an instance, the default is the ImdsSupport property value of the image used when the instance was created.
   * 
   * @example
   * v2
   */
  imdsSupport?: string;
  static names(): { [key: string]: string } {
    return {
      imdsSupport: 'ImdsSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imdsSupport: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageRequestSecureBootOptions extends $dara.Model {
  secureBootSupport?: string;
  static names(): { [key: string]: string } {
    return {
      secureBootSupport: 'SecureBootSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secureBootSupport: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the image. Valid values of N: 1 to 20. The tag key cannot be an empty string. It can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the image. Valid values of N: 1 to 20. The tag value can be an empty string. It can be up to 128 characters in length and cannot start with `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * ValueTest
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

export class CreateImageRequest extends $dara.Model {
  /**
   * @remarks
   * The system architecture. After a data disk snapshot is specified as the system disk of the image, use this parameter to specify the system architecture of the system disk. Valid values:
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
   * - (Default) UEFI-Preferred: dual boot mode.  
   * 
   * <notice>
   * 
   * To prevent instances from failing to start due to an unsupported boot mode, make sure that you understand the boot modes supported by the target image before specifying this parameter. For more information about image boot modes, see [Image boot modes](~~2244655#b9caa9b8bb1wf~~).
   * 
   * </notice>
   * 
   * @example
   * BIOS
   */
  bootMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the image. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * ImageTestDescription
   */
  description?: string;
  /**
   * @remarks
   * The image detection strategy. If this parameter is not configured, detection is not triggered. Only the Standard detection mode is supported. 
   * 
   * > Most Linux and Windows versions are supported. For more information about image detection items and operating system limitations, see [Image detection overview](https://help.aliyun.com/document_detail/439819.html) and [Operating system limitations for image detection](https://help.aliyun.com/document_detail/475800.html).
   * 
   * @example
   * Standard
   */
  detectionStrategy?: string;
  /**
   * @remarks
   * The disk and snapshot information used to create the custom image. If you want to create a custom image from system disk and data disk snapshots, use this parameter to specify the snapshots.
   */
  diskDeviceMapping?: CreateImageRequestDiskDeviceMapping[];
  dryRun?: boolean;
  /**
   * @remarks
   * The image feature-related properties.
   */
  features?: CreateImageRequestFeatures;
  /**
   * @remarks
   * The image family name. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with aliyun or acs:. It cannot contain http:// or https://. It can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The image name. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with http:// or https://. It can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * TestCentOS
   */
  imageName?: string;
  /**
   * @remarks
   * The image version.
   * 
   * > If you specify an instance ID (`InstanceId`) and the image of the instance is an Alibaba Cloud Marketplace image or a custom image created from an Alibaba Cloud Marketplace image, this parameter must be the same as the `ImageVersion` of the current instance image or left empty.
   * 
   * @example
   * 2017011017
   */
  imageVersion?: string;
  /**
   * @remarks
   * The instance ID. This parameter is required when you create a custom image from an instance.
   * 
   * @example
   * i-bp1g6zv0ce8oghu7****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The operating system distribution. After a data disk snapshot is specified as the system disk of the image, use this parameter to specify the operating system distribution of the system disk. Valid values:
   * 
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
   * 
   * Default value: Others Linux.
   * 
   * @example
   * CentOS
   */
  platform?: string;
  /**
   * @remarks
   * The region ID of the image. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the custom image belongs. If you do not set this parameter, the created image belongs to the default resource group.
   * 
   * > If you invoke this operation as a Resource Access Management (RAM) user and `ResourceGroupId` is left empty, note that when the RAM user does not have permissions on the default resource group, the error message `Forbidden: User not authorized to operate on the specified resource` is returned. Settings a resource group ID that the RAM user has permissions on, or grant the RAM user permissions on the default resource group through the corresponding Alibaba Cloud account before invoking this operation again.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secureBootOptions?: CreateImageRequestSecureBootOptions;
  /**
   * @remarks
   * The snapshot ID used to create the custom image.
   * 
   * > If you want to create a custom image from only the system disk snapshot of an instance, you can use this parameter or the `DiskDeviceMapping.N.SnapshotId` parameter. If you want to add data disk snapshots, use only the `DiskDeviceMapping.N.SnapshotId` parameter.
   * 
   * @example
   * s-bp17441ohwkdca0****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateImageRequestTag[];
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
      imageFamily: 'ImageFamily',
      imageName: 'ImageName',
      imageVersion: 'ImageVersion',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      platform: 'Platform',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secureBootOptions: 'SecureBootOptions',
      snapshotId: 'SnapshotId',
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
      diskDeviceMapping: { 'type': 'array', 'itemType': CreateImageRequestDiskDeviceMapping },
      dryRun: 'boolean',
      features: CreateImageRequestFeatures,
      imageFamily: 'string',
      imageName: 'string',
      imageVersion: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      platform: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secureBootOptions: CreateImageRequestSecureBootOptions,
      snapshotId: 'string',
      tag: { 'type': 'array', 'itemType': CreateImageRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.diskDeviceMapping)) {
      $dara.Model.validateArray(this.diskDeviceMapping);
    }
    if(this.features && typeof (this.features as any).validate === 'function') {
      (this.features as any).validate();
    }
    if(this.secureBootOptions && typeof (this.secureBootOptions as any).validate === 'function') {
      (this.secureBootOptions as any).validate();
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

