// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadImageRequest extends $dara.Model {
  bootMode?: string;
  /**
   * @remarks
   * The data cloud disk size. Valid values: 80 to 500. Unit: GiB.
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
   * Specifies whether the image is a GPU image.
   * 
   * @example
   * true
   */
  gpuCategory?: boolean;
  /**
   * @remarks
   * The type of the pre-installed GPU driver.
   * 
   * @example
   * gpu_grid9
   */
  gpuDriverType?: string;
  /**
   * @remarks
   * The image name. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * Win10_Test
   */
  imageName?: string;
  /**
   * @remarks
   * The license type used to activate the operating system after the image is imported. Valid values:
   * 
   * - Auto: Alibaba Cloud detects the source operating system and assigns a license. In automatic mode, the system first checks whether an Alibaba Cloud official license is available for the `Platform` you specified and assigns it to the imported image. If no such license is available, the system switches to BYOL (Bring Your Own License) mode.
   * - Aliyun: Uses an Alibaba Cloud official license based on the `Platform` you specified.
   * - BYOL: Uses the license that comes with the source operating system. When you use BYOL, make sure that your license key supports use on Alibaba Cloud.
   * 
   * Default value: Auto.
   * 
   * > Systems such as Windows 10 cannot be activated through Alibaba Cloud. Set `LicenseType` to BYOL for custom activation.
   * 
   * @example
   * Auto
   */
  licenseType?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The OSS object path of the image file.
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
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The system cloud disk size. Unit: GiB.
   * 
   * > The system cloud disk size cannot be smaller than the image file size.
   * 
   * @example
   * 80
   */
  systemDiskSize?: string;
  static names(): { [key: string]: string } {
    return {
      bootMode: 'BootMode',
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
      bootMode: 'string',
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

