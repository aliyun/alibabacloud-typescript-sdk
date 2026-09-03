// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBundleRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the cloud computer template.
   * 
   * @example
   * testBundleName
   */
  bundleName?: string;
  /**
   * @remarks
   * The description of the cloud computer template.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The cloud computer specifications. You can call [DescribeBundles](https://help.aliyun.com/document_detail/436974.html) to query cloud computer templates and obtain the supported cloud computer specifications from the `DesktopType` parameter in the response.
   * 
   * > Non-GPU images can only use non-GPU specifications, and GPU images can only use GPU specifications.
   * 
   * This parameter is required.
   * 
   * @example
   * eds.enterprise_office.2c4g
   */
  desktopType?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * m-4zfb6zj728hhr****
   */
  imageId?: string;
  /**
   * @remarks
   * The operating system language. Currently, only system images are supported. Valid values:
   * 
   * - zh-CN: Simplified Chinese.
   * - zh-HK: Traditional Chinese (Hong Kong (China)).
   * - en-US: English.
   * - ja-JP: Japanese.
   * 
   * @example
   * zh-CN
   */
  language?: string;
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
   * The performance level of the system cloud disk. When the cloud computer specifications are set to graphics or high frequency, you can configure the cloud disk performance level. For more information about the differences between performance levels, see [ESSD cloud disks](https://help.aliyun.com/document_detail/122389.html). Settings: standard SSD and ESSD cloud disks are supported.
   * 
   * @example
   * PL1
   */
  rootDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The system disk size. Unit: GiB. The supported system disk sizes correspond to the specifications. For more information, see [Overview of cloud computer specifications](https://help.aliyun.com/document_detail/188609.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  rootDiskSizeGib?: number;
  /**
   * @remarks
   * The performance level of the data cloud disk. When the cloud computer specifications are set to graphics or high frequency, you can configure the cloud disk performance level. For more information about the differences between performance levels, see [ESSD cloud disks](https://help.aliyun.com/document_detail/122389.html). Settings: standard SSD and ESSD cloud disks are supported.
   * 
   * @example
   * PL1
   */
  userDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The list of data disk sizes. Currently, only one data disk can be configured.
   * 
   * This parameter is required.
   * 
   * @example
   * 70
   */
  userDiskSizeGib?: number[];
  static names(): { [key: string]: string } {
    return {
      bundleName: 'BundleName',
      description: 'Description',
      desktopType: 'DesktopType',
      imageId: 'ImageId',
      language: 'Language',
      regionId: 'RegionId',
      rootDiskPerformanceLevel: 'RootDiskPerformanceLevel',
      rootDiskSizeGib: 'RootDiskSizeGib',
      userDiskPerformanceLevel: 'UserDiskPerformanceLevel',
      userDiskSizeGib: 'UserDiskSizeGib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleName: 'string',
      description: 'string',
      desktopType: 'string',
      imageId: 'string',
      language: 'string',
      regionId: 'string',
      rootDiskPerformanceLevel: 'string',
      rootDiskSizeGib: 'number',
      userDiskPerformanceLevel: 'string',
      userDiskSizeGib: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.userDiskSizeGib)) {
      $dara.Model.validateArray(this.userDiskSizeGib);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

