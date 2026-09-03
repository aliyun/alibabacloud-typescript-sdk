// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * The shared cloud computer ID.
   * 
   * - If DesktopId is specified, DesktopGroupId is ignored.
   * - If DesktopId is empty, the system retrieves the DesktopId of all cloud computers within the shared cloud computer based on DesktopGroupId.
   * 
   * @example
   * dg-07if7qsxoxkb6****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The shared cloud computer IDs.
   */
  desktopGroupIds?: string[];
  /**
   * @remarks
   * The cloud computer IDs. You can specify 1 to 100 IDs.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-4zfb6zj728hhr****
   */
  imageId?: string;
  /**
   * @remarks
   * The timestamp of the last retry. Unit: milliseconds.
   * 
   * @example
   * 1699960800000
   */
  lastRetryTime?: number;
  /**
   * @remarks
   * The billing method.
   * > This parameter takes effect only for resetting shared cloud computers. If this parameter is left empty, all cloud computers of all billing methods within the shared cloud computer are reset.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The reset scope. You can configure this parameter to specify whether to reset the image or the cloud computer.
   * 
   * @example
   * ALL
   */
  resetScope?: string;
  /**
   * @remarks
   * The reset type, which determines whether to reset and the scope of cloud disks to reset.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  resetType?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      desktopGroupIds: 'DesktopGroupIds',
      desktopId: 'DesktopId',
      imageId: 'ImageId',
      lastRetryTime: 'LastRetryTime',
      payType: 'PayType',
      regionId: 'RegionId',
      resetScope: 'ResetScope',
      resetType: 'ResetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      desktopGroupIds: { 'type': 'array', 'itemType': 'string' },
      desktopId: { 'type': 'array', 'itemType': 'string' },
      imageId: 'string',
      lastRetryTime: 'number',
      payType: 'string',
      regionId: 'string',
      resetScope: 'string',
      resetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopGroupIds)) {
      $dara.Model.validateArray(this.desktopGroupIds);
    }
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

