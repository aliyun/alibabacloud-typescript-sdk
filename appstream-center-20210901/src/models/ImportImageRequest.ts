// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportImageRequest extends $dara.Model {
  /**
   * @remarks
   * The business region ID, such as cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The business line to which the image belongs. Default value: 1.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The image boot mode. Valid values:
   * - BIOS: Legacy BIOS boot.
   * - UEFI: UEFI boot.
   * 
   * @example
   * UEFI
   */
  bootMode?: string;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * Custom Cloud Desktop image
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the image security check. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   */
  enableSecurityCheck?: boolean;
  /**
   * @remarks
   * Specifies whether the image is a GPU image. Valid values:
   * - true: Yes.
   * - false: No.
   */
  gpuCategory?: boolean;
  /**
   * @remarks
   * The GPU driver type. Valid values:
   * - gpu_grid9: GRID 9 driver.
   * - gpu_grid12: GRID 12 driver.
   * - gpu_custom: Custom driver.
   * 
   * @example
   * gpu_grid12
   */
  gpuDriverType?: string;
  /**
   * @remarks
   * The name of the image after it is imported. This parameter cannot be empty.
   * 
   * @example
   * DemoImage
   */
  imageName?: string;
  /**
   * @remarks
   * The operating system license type. Valid values:
   * - Auto: Automatically selected.
   * - Aliyun: Provided by Alibaba Cloud.
   * - BYOL: Bring your own license.
   * Default value: Auto.
   * 
   * @example
   * Auto
   */
  licenseType?: string;
  /**
   * @remarks
   * The operating system type of the image file. It must be consistent with the actual operating system of the image, such as Windows or Linux.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The complete OSS object URL of the image file to be imported, including the bucket domain name and file path. The file must be uploaded before you call this operation. Example: https://BucketName.oss-cn-hangzhou.aliyuncs.com/FilePath.
   */
  ossObjectPath?: string;
  /**
   * @remarks
   * The product type. Currently, only CloudDesktop (Cloud Desktop) is supported.
   * 
   * @example
   * CloudDesktop
   */
  productType?: string;
  /**
   * @remarks
   * The image connection protocol. Valid values: ASP and HDX. Default value: ASP.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GiB.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      bizType: 'BizType',
      bootMode: 'BootMode',
      description: 'Description',
      enableSecurityCheck: 'EnableSecurityCheck',
      gpuCategory: 'GpuCategory',
      gpuDriverType: 'GpuDriverType',
      imageName: 'ImageName',
      licenseType: 'LicenseType',
      osType: 'OsType',
      ossObjectPath: 'OssObjectPath',
      productType: 'ProductType',
      protocolType: 'ProtocolType',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      bizType: 'number',
      bootMode: 'string',
      description: 'string',
      enableSecurityCheck: 'boolean',
      gpuCategory: 'boolean',
      gpuDriverType: 'string',
      imageName: 'string',
      licenseType: 'string',
      osType: 'string',
      ossObjectPath: 'string',
      productType: 'string',
      protocolType: 'string',
      systemDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

