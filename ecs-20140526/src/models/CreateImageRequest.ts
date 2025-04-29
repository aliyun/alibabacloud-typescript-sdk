// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateImageRequestDiskDeviceMapping } from "./CreateImageRequestDiskDeviceMapping";
import { CreateImageRequestFeatures } from "./CreateImageRequestFeatures";
import { CreateImageRequestTag } from "./CreateImageRequestTag";


export class CreateImageRequest extends $dara.Model {
  /**
   * @remarks
   * The system architecture of the system disk. If you specify a data disk snapshot to create the system disk of the custom image, use Architecture to specify the system architecture of the system disk. Valid values:
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
   * *   BIOS: BIOS mode
   * *   UEFI: Unified Extensible Firmware Interface (UEFI) mode
   * *   UEFI-Preferred (default): BIOS mode and UEFI mode
   * 
   * >  Before you specify this parameter, make sure that you are familiar with the boot modes supported by the image. If you specify a boot mode that is not supported by the image, ECS instances created from the image cannot start as expected. For information about the boot modes of images, see the [Boot modes of images](~~2244655#b9caa9b8bb1wf~~) section of the "Best practices for ECS instance boot modes" topic.
   * 
   * @example
   * BIOS
   */
  bootMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The image description. The description must be 2 to 256 characters in length and cannot start with [http:// or https://.](http://https://。)
   * 
   * @example
   * ImageTestDescription
   */
  description?: string;
  /**
   * @remarks
   * The mode in which to check the custom image. If you do not specify this parameter, the image is not checked. Only the standard check mode is supported.
   * 
   * >  This parameter is supported for most Linux and Windows operating system versions. For information about image check items and operating system limits for image check, see [Overview of image check](https://help.aliyun.com/document_detail/439819.html) and [Operating system limits for image check](https://help.aliyun.com/document_detail/475800.html).
   * 
   * @example
   * Standard
   */
  detectionStrategy?: string;
  /**
   * @remarks
   * Details of the disks and snapshots from which the custom image is created. If you want to create a custom image based on a system disk snapshot and data disk snapshots, use this parameter to specify the snapshots.
   */
  diskDeviceMapping?: CreateImageRequestDiskDeviceMapping[];
  dryRun?: boolean;
  /**
   * @remarks
   * The attributes of the custom image.
   */
  features?: CreateImageRequestFeatures;
  /**
   * @remarks
   * The name of the image family. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with acs: or aliyun. The name cannot contain http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The name of the custom image. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * TestCentOS
   */
  imageName?: string;
  /**
   * @remarks
   * The image version.
   * 
   * >  If you specify an ECS instance that runs an Alibaba Cloud Marketplace image or a custom image derived from an Alibaba Cloud Marketplace image by using `InstanceId`, you must leave this parameter empty or set this parameter to the `ImageVersion` value of the image run by the specified ECS instance.
   * 
   * @example
   * 2017011017
   */
  imageVersion?: string;
  /**
   * @remarks
   * The ID of the ECS instance from which to create the custom image. To create a custom image from an ECS instance, you must specify this parameter.
   * 
   * @example
   * i-bp1g6zv0ce8oghu7****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The operating system distribution for the system disk in the custom image. If you specify a data disk snapshot to create the system disk of the custom image, use Platform to specify the operating system distribution for the system disk. Valid values:
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
   * CentOS
   */
  platform?: string;
  /**
   * @remarks
   * The region ID of the custom image that you want to create. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent list of regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the custom image. If you leave this parameter empty, the image is assigned to the default resource group.
   * 
   * >  If you call the CreateImage operation as a Resource Access Management (RAM) user who does not have permissions on the default resource group and leave `ResourceGroupId` empty, the `Forbidden: User not authorized to operate on the specified resource` error message is returned. You must specify the ID of a resource group on which the RAM user has permissions or grant the RAM user permissions on the default resource group, and then call the CreateImage operation again.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the snapshot from which to create the custom image.
   * 
   * >  To create a custom image from only a system disk snapshot of an ECS instance, you can specify this parameter or `DiskDeviceMapping.N.SnapshotId` to specify the snapshot ID. If you add data disk snapshots, you can use only `DiskDeviceMapping.N.SnapshotId` to specify snapshots.
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

