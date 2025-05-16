// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableImagesResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The OS architecture of the image. Valid values:
   * 
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
   * *   BIOS: Basic Input/Output System (BIOS).
   * *   UEFI: Unified Extensible Firmware Interface (UEFI).
   * 
   * >  When you change the OS boot mode of an instance, you must make sure that the boot mode matches the boot mode of the associated image. Otherwise, the instance fails to be booted.
   * 
   * @example
   * BIOS
   */
  bootMode?: string;
  /**
   * @remarks
   * The image description.
   * 
   * @example
   * ExampleDescription
   */
  description?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * centos_7_06_64_20G_alibase_2019071****
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * CHESS5V5.0.27
   */
  imageName?: string;
  /**
   * @remarks
   * The image source. Valid values:
   * 
   * *   system: system image.
   * *   self: custom image.
   * *   others: shared image.
   * 
   * @example
   * self
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The OS name in Chinese.
   */
  OSName?: string;
  /**
   * @remarks
   * The OS name in English.
   * 
   * @example
   * CentOS  7.9 64 bit
   */
  OSNameEn?: string;
  /**
   * @remarks
   * The OS. Valid values:
   * 
   * *   CentOS
   * *   windows
   * 
   * @example
   * windows
   */
  platform?: string;
  /**
   * @remarks
   * The image size. Unit: GiB
   * 
   * @example
   * 40
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      bootMode: 'BootMode',
      description: 'Description',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      OSName: 'OSName',
      OSNameEn: 'OSNameEn',
      platform: 'Platform',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      bootMode: 'string',
      description: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      OSName: 'string',
      OSNameEn: 'string',
      platform: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

