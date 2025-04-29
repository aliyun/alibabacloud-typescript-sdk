// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImagesResponseBodyImagesImageDetectionOptions } from "./DescribeImagesResponseBodyImagesImageDetectionOptions";
import { DescribeImagesResponseBodyImagesImageDiskDeviceMappings } from "./DescribeImagesResponseBodyImagesImageDiskDeviceMappings";
import { DescribeImagesResponseBodyImagesImageFeatures } from "./DescribeImagesResponseBodyImagesImageFeatures";
import { DescribeImagesResponseBodyImagesImageTags } from "./DescribeImagesResponseBodyImagesImageTags";


export class DescribeImagesResponseBodyImagesImage extends $dara.Model {
  /**
   * @remarks
   * The architecture of the image. Valid values:
   * 
   * *   i386
   * *   x86_64
   * *   arm64
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The boot mode of the image. Valid values:
   * 
   * *   BIOS: Basic Input/Output System (BIOS)
   * *   UEFI: Unified Extensible Firmware Interface (UEFI)
   * *   UEFI-Preferred: BIOS and UEFI
   * 
   * For information about the image boot modes, see [Image boot modes](~~2244655#b9caa9b8bb1wf~~).
   * 
   * @example
   * BIOS
   */
  bootMode?: string;
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2019-11-15T06:07:05Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * Archive log for Oracle
   */
  description?: string;
  /**
   * @remarks
   * Details about the check performed on the image.
   */
  detectionOptions?: DescribeImagesResponseBodyImagesImageDetectionOptions;
  /**
   * @remarks
   * The mappings between disks and snapshots in the image.
   */
  diskDeviceMappings?: DescribeImagesResponseBodyImagesImageDiskDeviceMappings;
  /**
   * @remarks
   * The feature attributes of the image.
   */
  features?: DescribeImagesResponseBodyImagesImageFeatures;
  /**
   * @remarks
   * The name of the image family.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-bp1g7004ksh0oeuc****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * testImageName
   */
  imageName?: string;
  /**
   * @remarks
   * The source of the image. Valid values:
   * 
   * *   system: a public image provided by Alibaba Cloud
   * *   self: a custom image that you created
   * *   others: a shared image from another Alibaba Cloud account or a community image published by another Alibaba Cloud account
   * *   marketplace: an Alibaba Cloud Marketplace image
   * 
   * @example
   * self
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the image belongs. This parameter takes effect only if you query shared images or community images.
   * 
   * @example
   * 1234567890
   */
  imageOwnerId?: number;
  /**
   * @remarks
   * The version of the image.
   * 
   * @example
   * 2
   */
  imageVersion?: string;
  /**
   * @remarks
   * Indicates whether the image is a copy of another image.
   * 
   * @example
   * false
   */
  isCopied?: boolean;
  /**
   * @remarks
   * Indicates whether the image is publicly available. Publicly available images include public images provided by Alibaba Cloud and custom images published as community images. Valid values:
   * 
   * *   true: The image is publicly available.
   * *   false: The image is publicly unavailable.
   * 
   * @example
   * false
   */
  isPublic?: boolean;
  /**
   * @remarks
   * Indicates whether the custom image was shared to other Alibaba Cloud accounts.
   * 
   * @example
   * true
   */
  isSelfShared?: string;
  /**
   * @remarks
   * Indicates whether you accepted the Terms of Service of the image service that corresponds to the product code.
   * 
   * @example
   * false
   */
  isSubscribed?: boolean;
  /**
   * @remarks
   * Indicates whether the image supports cloud-init.
   * 
   * @example
   * true
   */
  isSupportCloudinit?: boolean;
  /**
   * @remarks
   * Indicates whether the image can be used on I/O optimized instances.
   * 
   * @example
   * true
   */
  isSupportIoOptimized?: boolean;
  /**
   * @remarks
   * Indicates whether the image supports logons of non-root users. Valid values:
   * 
   * *   true: The image supports logons of non-root users.
   * *   false: The image does not support logons of non-root users.
   * 
   * @example
   * false
   */
  loginAsNonRootSupported?: boolean;
  /**
   * @remarks
   * The display name of the operating system in Chinese.
   * 
   * @example
   * Windows Server 2016 Datacenter Edition 64-bit (Simplified Chinese)
   */
  OSName?: string;
  /**
   * @remarks
   * The display name of the operating system in English.
   * 
   * @example
   * Windows Server  2016 Data Center Edition 64bit Chinese Edition
   */
  OSNameEn?: string;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   windows
   * *   linux
   * 
   * @example
   * windows
   */
  OSType?: string;
  /**
   * @remarks
   * The operating system platform.
   * 
   * @example
   * Windows Server 2016
   */
  platform?: string;
  /**
   * @remarks
   * The Alibaba Cloud Marketplace product code of the image.
   * 
   * @example
   * test000****
   */
  productCode?: string;
  /**
   * @remarks
   * The creation progress of the image. Unit: percent (%).
   * 
   * @example
   * 100%
   */
  progress?: string;
  /**
   * @remarks
   * The ID of the resource group to which the image belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The size of the image. Unit: GiB.
   * 
   * >  If the image contains data disk snapshots, this parameter indicates only the size of the system disk snapshot contained in the image.
   * 
   * @example
   * 60
   */
  size?: number;
  /**
   * @remarks
   * The state of the image. Valid values:
   * 
   * *   UnAvailable: The image is unavailable.
   * *   Available: The image is available.
   * *   Creating: The image is being created.
   * *   CreateFailed: The image failed to be created.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The name of the supplier that published the community image.
   * 
   * @example
   * TestName
   */
  supplierName?: string;
  /**
   * @remarks
   * The tags of the image.
   */
  tags?: DescribeImagesResponseBodyImagesImageTags;
  /**
   * @remarks
   * Indicates whether the image was used to create ECS instances. Valid values:
   * 
   * *   instance: The image was used to create one or more ECS instances.
   * *   none: The image was not used to create ECS instances.
   * 
   * @example
   * none
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      bootMode: 'BootMode',
      creationTime: 'CreationTime',
      description: 'Description',
      detectionOptions: 'DetectionOptions',
      diskDeviceMappings: 'DiskDeviceMappings',
      features: 'Features',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      imageOwnerId: 'ImageOwnerId',
      imageVersion: 'ImageVersion',
      isCopied: 'IsCopied',
      isPublic: 'IsPublic',
      isSelfShared: 'IsSelfShared',
      isSubscribed: 'IsSubscribed',
      isSupportCloudinit: 'IsSupportCloudinit',
      isSupportIoOptimized: 'IsSupportIoOptimized',
      loginAsNonRootSupported: 'LoginAsNonRootSupported',
      OSName: 'OSName',
      OSNameEn: 'OSNameEn',
      OSType: 'OSType',
      platform: 'Platform',
      productCode: 'ProductCode',
      progress: 'Progress',
      resourceGroupId: 'ResourceGroupId',
      size: 'Size',
      status: 'Status',
      supplierName: 'SupplierName',
      tags: 'Tags',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      bootMode: 'string',
      creationTime: 'string',
      description: 'string',
      detectionOptions: DescribeImagesResponseBodyImagesImageDetectionOptions,
      diskDeviceMappings: DescribeImagesResponseBodyImagesImageDiskDeviceMappings,
      features: DescribeImagesResponseBodyImagesImageFeatures,
      imageFamily: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      imageOwnerId: 'number',
      imageVersion: 'string',
      isCopied: 'boolean',
      isPublic: 'boolean',
      isSelfShared: 'string',
      isSubscribed: 'boolean',
      isSupportCloudinit: 'boolean',
      isSupportIoOptimized: 'boolean',
      loginAsNonRootSupported: 'boolean',
      OSName: 'string',
      OSNameEn: 'string',
      OSType: 'string',
      platform: 'string',
      productCode: 'string',
      progress: 'string',
      resourceGroupId: 'string',
      size: 'number',
      status: 'string',
      supplierName: 'string',
      tags: DescribeImagesResponseBodyImagesImageTags,
      usage: 'string',
    };
  }

  validate() {
    if(this.detectionOptions && typeof (this.detectionOptions as any).validate === 'function') {
      (this.detectionOptions as any).validate();
    }
    if(this.diskDeviceMappings && typeof (this.diskDeviceMappings as any).validate === 'function') {
      (this.diskDeviceMappings as any).validate();
    }
    if(this.features && typeof (this.features as any).validate === 'function') {
      (this.features as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

