// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebuildDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * The target status of the cloud computer after the rebuild is complete.
   * 
   * @example
   * Running
   */
  afterStatus?: string;
  /**
   * @remarks
   * The cloud computer ID. You can specify 1 to 20 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string[];
  /**
   * @remarks
   * The ID of the new image to use after the change.
   * 
   * @example
   * m-84mztzatmlnys****
   */
  imageId?: string;
  /**
   * @remarks
   * The operating system language. Currently, only system images are supported, and Linux computers only support English.
   * 
   * @example
   * en-US
   */
  language?: string;
  /**
   * @remarks
   * The operation type for the data cloud disk.
   * 
   * > Regardless of whether the cloud computer has a data cloud disk, no field value is passed in by default when you call this operation.
   * 
   * - If the cloud computer has no data cloud disk:  
   *         No data cloud disk operation is performed regardless of the field value passed in.
   * - If the cloud computer has a data cloud disk:
   *     1. When the operating system of the cloud computer is the same as that of the target image:
   *         - If the field value is `replace`, the data cloud disk of the cloud computer is replaced.
   *         - If no field value is passed in, the original data cloud disk of the cloud computer is retained.
   *     2. When the operating system of the cloud computer is different from that of the target image:
   *         - If the field value is `replace`, the data cloud disk of the cloud computer is replaced.
   *         - If no field value is passed in, the data cloud disk of the cloud computer is cleared.
   * 
   * @example
   * replace
   */
  operateType?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the list of regions supported by Elastic Desktop Service.
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

