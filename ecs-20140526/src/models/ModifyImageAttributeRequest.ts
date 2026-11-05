// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImageAttributeRequestFeatures extends $dara.Model {
  /**
   * @remarks
   * The metadata access mode of the image. Valid values:
   * - v1: When you create an ECS instance from this image, you cannot set the metadata access mode to enforced.
   * - v2: When you create an ECS instance from this image, you can set the metadata access mode to enforced.
   * <notice>
   * 
   *   You cannot change ImdsSupport from v2 to v1. To change the value, create a new image from a snapshot associated with this image and set the value to v1.
   * 
   * </notice>
   * 
   * @example
   * v2
   */
  imdsSupport?: string;
  /**
   * @remarks
   * Modifies the NVMe support attribute of the image. If this parameter is not specified, the original value is retained.
   * >Notice: Before you enable this feature, ensure that the NVMe driver is pre-installed in the operating system. Recommended procedure: install the driver on an instance, create a custom image, and then call this operation. Forcibly enabling this feature without the driver causes the instance to fail to start.
   * 
   * @example
   * supported
   * 
   * **if can be null:**
   * true
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

export class ModifyImageAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The boot mode of the image. Valid values:
   * - BIOS: BIOS boot mode.
   * - UEFI: UEFI boot mode.
   * - UEFI-Preferred: Dual boot mode.
   * 
   * 
   * <notice>
   * 
   *    To prevent instances from failing to start due to an unsupported boot mode, make sure that you understand the boot modes supported by the target image before you modify the boot mode. For more information about image boot modes, see [Image boot modes](~~2244655#b9caa9b8bb1wf~~).
   * 
   * </notice>
   * 
   * @example
   * BIOS
   */
  bootMode?: string;
  /**
   * @remarks
   * The description of the custom image. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * Default value: empty. The original description is retained.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - true: A precheck request is sent, and the image attributes are not modified. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - false: A normal request is sent, and the image attributes are modified if the request passes the check.
   * 
   * Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The feature-related attributes of the image.
   * 
   * **if can be null:**
   * true
   */
  features?: ModifyImageAttributeRequestFeatures;
  /**
   * @remarks
   * The name of the image family. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with aliyun or acs:. It cannot contain http:// or https://. It can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
   * 
   * Default value: empty.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the custom image.
   * 
   * This parameter is required.
   * 
   * @example
   * m-bp18ygjuqnwhechc****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the custom image. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with aliyun or acs:. It cannot contain http:// or https://. It can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
   * 
   * Default value: empty. The original name is retained.
   * 
   * @example
   * testImageName
   */
  imageName?: string;
  /**
   * @remarks
   * The license type used to activate the operating system after the image is imported. Only BYOL is supported.
   * 
   * BYOL: The license provided with the source operating system. If you use BYOL, you must ensure that your license key is supported on Alibaba Cloud.
   * 
   * @example
   * BYOL
   */
  licenseType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the custom image. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the image. Valid values:
   * 
   * - Deprecated: Sets the image to the deprecated state. If the custom image is shared, you must unshare it before you can set it to the deprecated state. You cannot share or copy a deprecated image. However, you can use the image to create instances or replace system disks.
   * - Available: Sets the image to the available state. You can restore a deprecated image to the available state.
   * 
   * > If you want to roll back a custom image in an image family to the previous version, you can set the latest available custom image to the deprecated state. However, if the image is the only available custom image in the image family, deprecating the image leaves the image family without any available custom images for creating instances. Proceed with caution.
   * 
   * @example
   * Deprecated
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bootMode: 'BootMode',
      description: 'Description',
      dryRun: 'DryRun',
      features: 'Features',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      imageName: 'ImageName',
      licenseType: 'LicenseType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootMode: 'string',
      description: 'string',
      dryRun: 'boolean',
      features: ModifyImageAttributeRequestFeatures,
      imageFamily: 'string',
      imageId: 'string',
      imageName: 'string',
      licenseType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  validate() {
    if(this.features && typeof (this.features as any).validate === 'function') {
      (this.features as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

