// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsDiskDeviceMappings } from "./DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsDiskDeviceMappings";
import { DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsFeatures } from "./DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsFeatures";


export class DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptions extends $dara.Model {
  /**
   * @remarks
   * The operating system architecture. Valid values:
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
   * *   BIOS: BIOS mode
   * *   UEFI: Unified Extensible Firmware Interface (UEFI) mode
   * 
   * @example
   * BIOS
   */
  bootMode?: string;
  /**
   * @remarks
   * The information of disks from which the custom images are created.
   * 
   * *   When the value of N is 1, a custom image is created from the system disk.
   * *   When the value of N is an integer in the range of 2 to 17, a custom image is created from a data disk.
   */
  diskDeviceMappings?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsDiskDeviceMappings;
  /**
   * @remarks
   * The feature attributes of the image.
   */
  features?: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsFeatures;
  /**
   * @remarks
   * The type of the license to use to activate the operating system after the image is imported. Valid values:
   * 
   * *   Auto: ECS detects the operating system of the image and allocates a license to the operating system In this mode, the system first checks whether a license allocated by an official Alibaba Cloud channel is specified in the `Platform`. If a license allocated by an official Alibaba Cloud channel is specified, the system allocates the license to the imported image. If no such license is specified, the Bring Your Own License (BYOL) mode is used.
   * *   Aliyun: The license allocated through an official Alibaba Cloud channel is used for the operating system distribution specified by `Platform`.
   * *   BYOL: The license that comes with the source operating system is used. When you use the BYOL license, make sure that your license key is supported by Alibaba Cloud.
   * 
   * @example
   * Auto
   */
  licenseType?: string;
  /**
   * @remarks
   * The operating system type. Valid values:
   * 
   * *   windows: Windows operating systems
   * *   linux: Linux operating systems
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
      diskDeviceMappings: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsDiskDeviceMappings,
      features: DescribeImagePipelinesResponseBodyImagePipelineImagePipelineSetImportImageOptionsFeatures,
      licenseType: 'string',
      OSType: 'string',
      platform: 'string',
      retainImportedImage: 'boolean',
    };
  }

  validate() {
    if(this.diskDeviceMappings && typeof (this.diskDeviceMappings as any).validate === 'function') {
      (this.diskDeviceMappings as any).validate();
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

