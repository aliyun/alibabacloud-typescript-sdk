// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKubernetesVersionMetadataResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * centos_7_7_x64_20G_alibase_20200426.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * CentOS 7.7
   */
  imageName?: string;
  /**
   * @remarks
   * The OS platform. Valid values:
   * 
   * *   `AliyunLinux`
   * *   `CentOS`
   * *   `Windows`
   * *   `WindowsCore`
   * 
   * @example
   * CentOS
   */
  platform?: string;
  /**
   * @remarks
   * The version of the image.
   * 
   * @example
   * 7.7
   */
  osVersion?: string;
  /**
   * @remarks
   * The type of OS distribution that you want to use. To specify the node OS, we recommend that you use this parameter. Valid values:
   * 
   * *   `CentOS`
   * *   `AliyunLinux`
   * *   `AliyunLinux Qboot`
   * *   `AliyunLinuxUEFI`
   * *   `AliyunLinux3`
   * *   `Windows`
   * *   `WindowsCore`
   * *   `AliyunLinux3Arm64`
   * *   `ContainerOS`
   * 
   * @example
   * centos_7_7_20
   */
  imageType?: string;
  /**
   * @remarks
   * The type of OS. Examples:
   * 
   * *   `Windows`
   * *   `Linux`
   * 
   * @example
   * Linux
   */
  osType?: string;
  /**
   * @remarks
   * The type of image. Valid values:
   * 
   * *   `system`: public image
   * *   `self`: custom image
   * *   `others`: shared image from other Alibaba Cloud accounts
   * *   `marketplace`: image from the marketplace
   * 
   * @example
   * system
   */
  imageCategory?: string;
  /**
   * @remarks
   * The architecture of the image.
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'image_id',
      imageName: 'image_name',
      platform: 'platform',
      osVersion: 'os_version',
      imageType: 'image_type',
      osType: 'os_type',
      imageCategory: 'image_category',
      architecture: 'architecture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      platform: 'string',
      osVersion: 'string',
      imageType: 'string',
      osType: 'string',
      imageCategory: 'string',
      architecture: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

