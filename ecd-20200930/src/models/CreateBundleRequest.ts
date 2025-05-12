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
   * The instance type of the cloud computers. You can call the [DescribeBundles](https://help.aliyun.com/document_detail/436974.html) operation to query cloud computer templates and obtain the instance types supported by the cloud computers from the `DesktopType` response parameter.
   * 
   * >  If you want the template to use a non-GPU-accelerated image, you can only select a non-GPU-accelerated instance type. If you want the template to use a GPU-accelerated image, you can only select a GPU-accelerated instance type.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd.basic.large
   */
  desktopType?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * m-4zfb6zj728hhr****
   */
  imageId?: string;
  /**
   * @remarks
   * The OS language. This parameter is available only for system images. Valid values:
   * 
   * *   zh-CN: Simplified Chinese
   * *   zh-HK: Traditional Chinese (Hong Kong)
   * *   en-US: American English
   * *   ja-JP: Japanese
   * 
   * @example
   * zh-CN
   */
  language?: string;
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
   * The performance level (PL) of the system disk. When the cloud computer instance type that is specified by the DesktopType parameter is set to a graphical instance type or instance type with a high clock speed, you can set the performance level of the disks. For more information about the differences among disks at different PLs, see [Enhanced SSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * Valid values:
   * 
   * *   PL1
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   PL0
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   PL3
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   PL2
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * PL1
   */
  rootDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. The value of this parameter must be consistent with the system disk size supported by the cloud computer instance type. For more information, see [Overview](https://help.aliyun.com/document_detail/188609.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  rootDiskSizeGib?: number;
  /**
   * @remarks
   * The PL of the data disk. When the cloud computer instance type that is specified by the DesktopType parameter is set to a graphical instance type or instance type with a high clock speed, you can set the performance level of the disks. For more information about the differences among disks at different PLs, see [Enhanced SSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * Valid values:
   * 
   * *   PL1
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   PL0
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   PL3
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   PL2
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * PL1
   */
  userDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The data disk sizes. You can configure only one data disk.
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

