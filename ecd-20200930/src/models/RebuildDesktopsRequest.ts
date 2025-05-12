// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebuildDesktopsRequest extends $dara.Model {
  afterStatus?: string;
  /**
   * @remarks
   * The cloud computer IDs. You can specify the IDs of 1 to 20 cloud computers.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string[];
  /**
   * @remarks
   * The ID of the new image.
   * 
   * @example
   * m-84mztzatmlnys****
   */
  imageId?: string;
  /**
   * @remarks
   * The OS language. Only system images are supported, and Linux cloud computers support only English.
   * 
   * Valid values:
   * 
   * *   en-US: English
   * *   zh-HK: Traditional Chinese (Hong Kong, China)
   * *   zh-CN: Simplified Chinese
   * *   ja-JP: Japanese
   * 
   * @example
   * en-US
   */
  language?: string;
  /**
   * @remarks
   * The operation type on the data disk.
   * 
   * >  This parameter is empty by default regardless of whether data disks are attached to the cloud computer.
   * 
   * *   No data disks are attached to the cloud computer:\\
   *     No operation is performed on the data disks of the cloud computer regardless of the value of this parameter.
   * 
   * *   Data disks are attached to the cloud computer:
   * 
   *     1.  The OS of the cloud computer is the same as the OS of the destination image:
   * 
   *         *   If you set the OperateType parameter to `replace`, the data in the data disks of the cloud computer is replaced.
   *         *   If you leave the OperateType parameter empty, the data in the data disks of the cloud computer is retained.
   * 
   *     2.  The OS of the cloud computer is different from the OS of the destination image:
   * 
   *         *   If you set the OperateType parameter to `replace`, the data in the data disks of the cloud computer is replaced.
   *         *   If you leave the OperateType parameter empty, the data in the data disks of the cloud computer is cleared.
   * 
   * @example
   * replace
   */
  operateType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions supported by Elastic Desktop Service (EDS).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      afterStatus: 'AfterStatus',
      desktopId: 'DesktopId',
      imageId: 'ImageId',
      language: 'Language',
      operateType: 'OperateType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterStatus: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      imageId: 'string',
      language: 'string',
      operateType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

