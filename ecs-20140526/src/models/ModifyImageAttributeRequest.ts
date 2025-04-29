// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyImageAttributeRequestFeatures } from "./ModifyImageAttributeRequestFeatures";


export class ModifyImageAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The new boot mode of the image. Valid values:
   * 
   * *   BIOS: BIOS mode
   * *   UEFI: Unified Extensible Firmware Interface (UEFI) mode
   * *   UEFI-Preferred: BIOS mode and UEFI mode
   * 
   * >  Before you change this parameter, make sure that you are familiar with the boot modes supported by the image. If you specify a boot mode that is not supported by the image, ECS instances created from the image cannot start as expected. For information about the boot modes of images, see the [Boot modes of custom images](~~2244655#b9caa9b8bb1wf~~) section of the "Best practices for ECS instance boot modes" topic.
   * 
   * @example
   * BIOS
   */
  bootMode?: string;
  /**
   * @remarks
   * The new description of the custom image. The description must be 2 to 256 characters in length It cannot start with [http:// or https://.](http://https://。)
   * 
   * This parameter is empty by default, which specifies that the original description is retained.
   * 
   * @example
   * testDescription
   */
  description?: string;
  dryRun?: boolean;
  /**
   * @remarks
   * The attributes of the custom image.
   * 
   * **if can be null:**
   * true
   */
  features?: ModifyImageAttributeRequestFeatures;
  /**
   * @remarks
   * The name of the image family. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with acs: or aliyun. [It cannot contain http:// or https://. It can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).](http://https://。、（.）、（:）、（_）（-）。)
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
   * The name of the custom image. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with acs: or aliyun. [It cannot contain http:// or https://. It can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).](http://https://。、（.）、（:）、（_）（-）。)
   * 
   * By default, this parameter is empty. In this case, the original name is retained.
   * 
   * @example
   * testImageName
   */
  imageName?: string;
  /**
   * @remarks
   * The type of the license that is used to activate the operating system after the image is imported. Set the value to BYOL.
   * 
   * BYOL: The license that comes with the source operating system is used. When you use the BYOL license, make sure that your license key is supported by Alibaba Cloud.
   * 
   * @example
   * Auto
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
   * The new state of the custom image. Valid values:
   * 
   * *   Deprecated: puts the image into the Deprecated state. If the custom image is shared, you must unshare it before you can put it into the Deprecated state. Images in the Deprecated state cannot be shared or copied, but can be used to create instances or replace system disks.
   * *   Available: puts the image into the Available state. You can restore an image from the Deprecated state to the Available state.
   * 
   * > If you want to roll back a custom image in the image family to a previous version, you can put the latest available custom image into the Deprecated state. If no custom images are in the Available state within the image family, an image family cannot be used to create instances. Proceed with caution if only a single custom image is in the Available state within the image family.
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

