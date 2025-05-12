// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadImageRequest extends $dara.Model {
  /**
   * @remarks
   * The size of the data disk. Valid values: 80 to 500. Unit: GiB.
   * 
   * @example
   * 80
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The description of the image. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable security check.
   * 
   * @example
   * true
   */
  enableSecurityCheck?: boolean;
  /**
   * @remarks
   * Specifies whether the image is a GPU-accelerated image.
   * 
   * @example
   * true
   */
  gpuCategory?: boolean;
  /**
   * @remarks
   * The type of the pre-installed GPU driver.
   * 
   * Valid values:
   * 
   * *   gpu_grid9: This GPU driver is used on cloud computers of the following two specifications: graphics – 4 vCPUs, 23 GiB memory, 4 GiB GPU memory, and graphics – 10 vCPUs, 46 GiB memory, 8 GiB GPU memory.
   * *   gpu_custom: You can install the driver later.
   * *   gpu_grid12: This GPU driver is used on graphical cloud computers of specifications other than the following two specifications: graphics – 4 vCPUs, 23 GiB memory, & 4 GiB GPU memory, and graphics – 10 vCPUs, 46 GiB memory, & 8 GiB GPU memory.
   * 
   * @example
   * gpu_grid9
   */
  gpuDriverType?: string;
  /**
   * @remarks
   * The name of the image. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * Win10_Test
   */
  imageName?: string;
  /**
   * @remarks
   * The type of the license that is used to activate the operating system after the image is imported. Valid values:
   * 
   * *   Auto: Elastic Desktop Service detects the operating system of the image and allocates a license to the operating system. In this mode, the system first checks whether a license allocated by an official Alibaba Cloud channel is specified in the `Platform`. If a license allocated by an official Alibaba Cloud channel is specified, the system allocates the license to the imported image. If no such license is specified, the BYOL (Bring Your Own License) mode is used.
   * *   Aliyun: The license that is allocated by an official Alibaba Cloud channel and is specified by `Platform` is used for the operating system distribution.
   * *   BYOL: The license that comes with the source operating system is used. When you use the BYOL mode, make sure that your license key is supported by Alibaba Cloud.
   * 
   * Default value: Auto.
   * 
   * >  Windows 10 cannot be activated by Alibaba Cloud. Set the `LicenseType` to BYOL for Windows 10.
   * 
   * @example
   * Auto
   */
  licenseType?: string;
  /**
   * @remarks
   * The type of the operating system.
   * 
   * Valid values:
   * 
   * *   Linux
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Windows
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The object path of the image file in Object Storage Service (OSS).
   * 
   * This parameter is required.
   * 
   * @example
   * https://ossbucket:endpoint/object
   */
  ossObjectPath?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * Valid values:
   * 
   * *   ASP: in-house Adaptive Streaming Protocol (ASP)
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
   * 
   * >  The system disk must be at least as large as the image.
   * 
   * @example
   * 80
   */
  systemDiskSize?: string;
  static names(): { [key: string]: string } {
    return {
      dataDiskSize: 'DataDiskSize',
      description: 'Description',
      enableSecurityCheck: 'EnableSecurityCheck',
      gpuCategory: 'GpuCategory',
      gpuDriverType: 'GpuDriverType',
      imageName: 'ImageName',
      licenseType: 'LicenseType',
      osType: 'OsType',
      ossObjectPath: 'OssObjectPath',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSize: 'number',
      description: 'string',
      enableSecurityCheck: 'boolean',
      gpuCategory: 'boolean',
      gpuDriverType: 'string',
      imageName: 'string',
      licenseType: 'string',
      osType: 'string',
      ossObjectPath: 'string',
      protocolType: 'string',
      regionId: 'string',
      systemDiskSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

