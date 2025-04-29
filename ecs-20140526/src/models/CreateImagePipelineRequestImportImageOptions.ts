// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateImagePipelineRequestImportImageOptionsDiskDeviceMappings } from "./CreateImagePipelineRequestImportImageOptionsDiskDeviceMappings";
import { CreateImagePipelineRequestImportImageOptionsFeatures } from "./CreateImagePipelineRequestImportImageOptionsFeatures";


export class CreateImagePipelineRequestImportImageOptions extends $dara.Model {
  /**
   * @remarks
   * The system architecture of the system disk. If you specify a data disk snapshot to create the system disk of the image, use Architecture to specify the system architecture of the system disk. Valid values:
   * 
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
   * 
   * Default value: BIOS. If you set Architecture to `arm64`, set this parameter to UEFI.
   * 
   * >  Before you specify this parameter, make sure that you are familiar with the boot modes supported by the image. If you specify a boot mode that is not supported by the image, ECS instances created from the image cannot start as expected. For information about the boot modes of images, see the [Boot modes of images](~~2244655#b9caa9b8bb1wf~~) section of the "Best practices for ECS instance boot modes" topic.
   * 
   * @example
   * BIOS
   */
  bootMode?: string;
  /**
   * @remarks
   * The information of disks from which the custom images are created.
   * 
   * *   When the N value is 1, this parameter creates a custom image from the system disk.
   * *   When the N value is an integer in the range of 2 to 17, this parameter creates a custom image from a data disk.
   */
  diskDeviceMappings?: CreateImagePipelineRequestImportImageOptionsDiskDeviceMappings[];
  /**
   * @remarks
   * The attributes of the image.
   */
  features?: CreateImagePipelineRequestImportImageOptionsFeatures;
  /**
   * @remarks
   * The type of the license to use to activate the operating system after the image is imported. Valid values:
   * 
   * *   Auto: ECS detects the operating system of the image and allocates a license to the operating system. In this mode, the system first checks whether a license allocated by an official Alibaba Cloud channel is available for the operating system version specified by `Platform`. If a license allocated by an official Alibaba Cloud channel is available for the operating system version, the system allocates the license to the imported image. If no such license is available, the Bring Your Own License (BYOL) mode is used.
   * *   Aliyun: The license allocated by an official Alibaba Cloud channel for the operating system version specified by `Platform` is used.
   * *   BYOL: The license that comes with the source operating system is used. When you use the BYOL license, make sure that your license key is supported by Alibaba Cloud.
   * 
   * Default value: Auto.
   * 
   * @example
   * Auto
   */
  licenseType?: string;
  /**
   * @remarks
   * The operating system type. Valid values:
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
  /**
   * @remarks
   * The version of the operating system. Valid values:
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
   * *   Other Windows
   * 
   * Default value: Others Linux when the operating system type is linux, and Other Windows when the operating system type is windows.
   * 
   * @example
   * Aliyun
   */
  platform?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview.
   * 
   * @example
   * false
   */
  retainImportedImage?: boolean;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      bootMode: 'BootMode',
      diskDeviceMappings: 'DiskDeviceMappings',
      features: 'Features',
      licenseType: 'LicenseType',
      OSType: 'OSType',
      platform: 'Platform',
      retainImportedImage: 'RetainImportedImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      bootMode: 'string',
      diskDeviceMappings: { 'type': 'array', 'itemType': CreateImagePipelineRequestImportImageOptionsDiskDeviceMappings },
      features: CreateImagePipelineRequestImportImageOptionsFeatures,
      licenseType: 'string',
      OSType: 'string',
      platform: 'string',
      retainImportedImage: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.diskDeviceMappings)) {
      $dara.Model.validateArray(this.diskDeviceMappings);
    }
    if(this.features && typeof (this.features as any).validate === 'function') {
      (this.features as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

