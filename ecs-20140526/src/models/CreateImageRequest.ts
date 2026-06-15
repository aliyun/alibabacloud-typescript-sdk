// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageRequestDiskDeviceMapping extends $dara.Model {
  /**
   * @remarks
   * The device name of the disk in the custom image. Valid values:
   * 
   * - The device name of the system disk must be /dev/xvda.
   * 
   * - The device names of data disks are assigned in sequence from /dev/xvdb to /dev/xvdz and cannot be repeated.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The type of the disk in the image. You can specify this parameter to use a data disk snapshot as the system disk of the image. If you do not specify this parameter, the disk type is determined by the type of the source snapshot. Valid values:
   * 
   * - system: system disk. You can specify only one system disk snapshot.
   * 
   * - data: data disk. You can specify a maximum of 16 data disk snapshots.
   * 
   * @example
   * system
   */
  diskType?: string;
  /**
   * @remarks
   * The size of the cloud disk, in GiB. The valid values and default value of `DiskDeviceMapping.N.Size` vary based on whether `DiskDeviceMapping.N.SnapshotId` is specified.
   * 
   * - If `DiskDeviceMapping.N.SnapshotId` is not specified, the value of this parameter depends on the disk type:
   * 
   *   - For basic disks, the value range is 5 to 2,000 and the default value is 5.
   * 
   *   - For other disk types, the value range is 20 to 32,768 and the default value is 20.
   * 
   * - If `DiskDeviceMapping.N.SnapshotId` is specified, the value of `DiskDeviceMapping.N.Size` must be greater than or equal to the snapshot\\"s size. The default value is the snapshot\\"s size.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot.
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
   * The instance metadata access mode. Valid values:
   * 
   * - v1: The normal mode. When you create an ECS instance from an image that has the metadata access mode set to this value, you cannot configure the instance metadata access mode as Enforced.
   * 
   * - v2: The enforced mode. When you create an ECS instance from an image that has the metadata access mode set to this value, you can configure the instance metadata access mode as Enforced.
   * 
   * Default value: v1 if you create the image from a snapshot. If you create the image from an instance, the value is inherited from the source instance\\"s image.
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

export class CreateImageRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the image.
   * 
   * > For compatibility, we recommend that you use the `Tag.N.Key` parameter.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the image. Valid values of N: 1 to 20. The tag value can be an empty string, up to 128 characters long, and cannot start with `acs:` or contain `http://` or `https://`.
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
   * The system disk architecture. If you create the image\\"s system disk from a data disk snapshot, you must specify this parameter to identify the system disk architecture. Valid values:
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
   * - BIOS: BIOS boot mode.
   * 
   * - UEFI: UEFI boot mode.
   * 
   * - UEFI-Preferred: The image supports both BIOS and UEFI boot modes. The UEFI boot mode is preferred. This is the default value.
   * 
   * >Notice: 
   * 
   * If you specify a boot mode that the image does not support, instances created from the image may fail to start. Before you specify this parameter, ensure you know the boot modes that the image supports. For more information, see [Boot modes](~~2244655#b9caa9b8bb1wf~~).
   * 
   * @example
   * BIOS
   */
  bootMode?: string;
  /**
   * @remarks
   * A client-generated token to ensure the request is idempotent. You must ensure that the token is unique across different requests. The `ClientToken` value can contain only ASCII characters and cannot exceed 64 characters. For more information, see [How to ensure idempotency](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The image description. It must be 2 to 256 characters long and cannot start with http\\:// or https\\://.
   * 
   * @example
   * ImageTestDescription
   */
  description?: string;
  /**
   * @remarks
   * The image check policy. If you do not specify this parameter, no check is performed. Only the Standard mode is supported.
   * 
   * > This feature is supported for most Linux and Windows versions. For more information about the check items and the operating systems that support this feature, see [Overview of image check](https://help.aliyun.com/document_detail/439819.html) and [Operating systems that support image check](https://help.aliyun.com/document_detail/475800.html).
   * 
   * @example
   * Standard
   */
  detectionStrategy?: string;
  /**
   * @remarks
   * The mappings between disks and snapshots used to create the custom image. If you need to create a custom image from a system disk snapshot and data disk snapshots, specify this parameter.
   */
  diskDeviceMapping?: CreateImageRequestDiskDeviceMapping[];
  /**
   * @remarks
   * Specifies whether to perform a dry run to check the request. Valid values:
   * 
   * - true: performs a dry run but does not create the image. The system checks whether your AccessKey pair is valid, whether RAM users are granted permissions, and whether the required parameters are specified. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - false: Sends the request to perform the operation. If the request is valid, a 2xx HTTP status code is returned and the image is created.
   * 
   * Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The image attributes.
   */
  features?: CreateImageRequestFeatures;
  /**
   * @remarks
   * The name of the image family. The name must be 2 to 128 characters long and start with a letter or a Chinese character. It cannot start with aliyun or acs:, nor contain http\\:// or https\\://. The name can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The name of the image. The name must be 2 to 128 characters long. It must start with a letter or a Chinese character and must not start with http\\:// or https\\://. The name can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * TestCentOS
   */
  imageName?: string;
  /**
   * @remarks
   * The version of the image.
   * 
   * > If you specify an instance ID (`InstanceId`) and the instance was created from an Alibaba Cloud Marketplace image (or a custom image based on a Marketplace image), this parameter must match the `ImageVersion` of the instance\\"s image or be left empty.
   * 
   * @example
   * 2017011017
   */
  imageVersion?: string;
  /**
   * @remarks
   * The ID of the instance. This parameter is required when you create a custom image from an instance.
   * 
   * @example
   * i-bp1g6zv0ce8oghu7****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The operating system distribution. You must specify this parameter to identify the operating system distribution when you use a data disk snapshot to create the image\\"s system disk. Valid values:
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
   * Default value: Others Linux.
   * 
   * @example
   * CentOS
   */
  platform?: string;
  /**
   * @remarks
   * The ID of the region where the image will be created. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to get the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to add the custom image. If you do not specify this parameter, the image is added to the default resource group.
   * 
   * > As a RAM user, you must have the required permissions to call this operation. If you leave `ResourceGroupId` empty, the `Forbidden: User not authorized to operate on the specified resource` error is returned if you lack permissions on the default resource group. To resolve this issue, specify the ID of a resource group for which you have permissions, or ask an administrator to grant you permissions on the default resource group.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the snapshot used to create the custom image.
   * 
   * > If you create a custom image from only a system disk snapshot, you can use either this parameter or the `DiskDeviceMapping.N.SnapshotId` parameter. If you want to include data disk snapshots, you must use the `DiskDeviceMapping.N.SnapshotId` parameter to specify the snapshots.
   * 
   * @example
   * s-bp17441ohwkdca0****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The tags to add to the image.
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
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

