// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDesktopsRequestDesktopAttachment extends $dara.Model {
  /**
   * @remarks
   * The category of the data disk. Valid values:
   * 
   * *   cloud_auto: SSD
   * *   cloud_essd: ESSD
   * 
   * @example
   * cloud_auto
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the data disk. Valid values:
   * 
   * - PL0 (default)
   * - PL1
   * 
   * @example
   * PL0
   */
  dataDiskPerLevel?: string;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB.
   * 
   * @example
   * 40
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The default display language:
   * 
   * - zh-CN: Simplified Chinese
   * - zh-HK: Traditional Chinese
   * - en-US: English
   * - ja-JP: Japanese
   * 
   * @example
   * zh-CN
   */
  defaultLanguage?: string;
  /**
   * @remarks
   * The desktop type. You can call the [DescribeDesktopTypes](~~DescribeDesktopTypes~~) operation to query the IDs of supported desktop types.
   * 
   * @example
   * eds.enterprise_office.8c16g
   */
  desktopType?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-39ddhdb0ggzjx*****
   */
  imageId?: string;
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * *   cloud_auto: SSD
   * *   cloud_essd: ESSD
   * 
   * @example
   * cloud_auto
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the system disk. Valid values:
   * 
   * - PL0 (default)
   * - PL1
   * 
   * @example
   * PL0
   */
  systemDiskPerLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
   * 
   * @example
   * 40
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataDiskCategory: 'DataDiskCategory',
      dataDiskPerLevel: 'DataDiskPerLevel',
      dataDiskSize: 'DataDiskSize',
      defaultLanguage: 'DefaultLanguage',
      desktopType: 'DesktopType',
      imageId: 'ImageId',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskPerLevel: 'SystemDiskPerLevel',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCategory: 'string',
      dataDiskPerLevel: 'string',
      dataDiskSize: 'number',
      defaultLanguage: 'string',
      desktopType: 'string',
      imageId: 'string',
      systemDiskCategory: 'string',
      systemDiskPerLevel: 'string',
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

