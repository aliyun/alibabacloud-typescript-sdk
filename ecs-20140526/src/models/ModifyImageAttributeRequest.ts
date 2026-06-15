// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImageAttributeRequestFeatures extends $dara.Model {
  /**
   * @remarks
   * The metadata access mode of the image. Valid values:
   * 
   * - `v1`: When you create an ECS instance from this image, you cannot set the metadata access mode to `enforced mode`.
   * 
   * - `v2`: When you create an ECS instance from this image, you can set the metadata access mode to `enforced mode`.
   * 
   *   >Notice: 
   * 
   *   You cannot change the value of `ImdsSupport` from `v2` to `v1`. To use the `v1` mode, create a new image from a snapshot that is associated with the image and set `ImdsSupport` to `v1`.
   * 
   * @example
   * v2
   */
  imdsSupport?: string;
  /**
   * @remarks
   * Specifies whether the image supports NVMe. Valid values:
   * 
   * - `supported`: The image supports NVMe. Instances that you create from this image support the NVMe protocol.
   * 
   * - `unsupported`: The image does not support NVMe. Instances that you create from this image do not support the NVMe protocol.
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
   * 
   * - `BIOS`: BIOS boot mode.
   * 
   * - `UEFI`: UEFI boot mode.
   * 
   * - `UEFI-Preferred`: UEFI-preferred boot mode.
   * 
   * >Notice: 
   * 
   * To prevent startup failures, verify the boot modes that the image supports before you change its boot mode. For more information, see [Boot modes](~~2244655#b9caa9b8bb1wf~~).
   * 
   * @example
   * BIOS
   */
  bootMode?: string;
  /**
   * @remarks
   * The new description of the custom image. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * If you do not specify this parameter, the original description is retained.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run to check whether the request is valid. Valid values:
   * 
   * - `true`: performs a dry run to check the request for validity, syntax, and required permissions. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - `false` (default): sends the request. If the request passes the validation checks, the operation is performed.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The features of the image.
   * 
   * **if can be null:**
   * true
   */
  features?: ModifyImageAttributeRequestFeatures;
  /**
   * @remarks
   * The name of the image family. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character. The name cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`. It can contain digits, periods (.), colons (:), underscores (_), and hyphens (-).
   * 
   * By default, this parameter is empty.
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
   * The name of the custom image. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character. The name cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`. It can contain digits, periods (.), colons (:), underscores (_), and hyphens (-).
   * 
   * If you do not specify this parameter, the original name is retained.
   * 
   * @example
   * testImageName
   */
  imageName?: string;
  /**
   * @remarks
   * The license type for activating the operating system after you import the image. The only valid value is `BYOL`.
   * 
   * `BYOL`: Bring Your Own License. If you use the BYOL license type, you must ensure that your license key is supported for use on Alibaba Cloud.
   * 
   * @example
   * BYOL
   */
  licenseType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the custom image is located. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to view the latest list of Alibaba Cloud regions.
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
   * The image status. Valid values:
   * 
   * - `Deprecated`: Deprecates the image. If a custom image that you want to deprecate is shared, you must unshare it first. You cannot share or copy a deprecated image. However, you can use the image to create an instance or replace a system disk.
   * 
   * - `Available`: Makes the image available. You can change the status of a deprecated image to `Available`.
   * 
   * > However, if this is the only available custom image in the image family, deprecating it prevents the creation of instances from any image in that family. Use this option with caution.
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

