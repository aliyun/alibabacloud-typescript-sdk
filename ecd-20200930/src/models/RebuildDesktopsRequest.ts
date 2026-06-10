// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebuildDesktopsRequest extends $dara.Model {
  afterStatus?: string;
  /**
   * @remarks
   * The IDs of the cloud computers to rebuild. You can specify 1 to 20 IDs.
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
   * The operating system language. This parameter applies only to system images. For Linux cloud computers, only English is supported.
   * 
   * @example
   * en-US
   */
  language?: string;
  /**
   * @remarks
   * Specifies how to handle the data disk.
   * 
   * > This parameter is optional.
   * 
   * - If a cloud computer does not have a data disk, this parameter is ignored.<br>
   * 
   * - If a cloud computer has a data disk:
   * 
   *   1. If the new image has the same operating system as the original one:
   * 
   *      - If you set this parameter to `replace`, the data disk is replaced.
   * 
   *      - If you do not specify this parameter, the data disk is retained.
   * 
   *   2. If the new image has a different operating system:
   * 
   *      - If you set this parameter to `replace`, the data disk is replaced.
   * 
   *      - If you do not specify this parameter, the data disk is erased.
   * 
   * @example
   * replace
   */
  operateType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to find the regions where Elastic Desktop Service is available.
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

