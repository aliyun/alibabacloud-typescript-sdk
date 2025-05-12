// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer share.
   * 
   * *   If you specify `DesktopId`, ignore `DesktopGroupId`.
   * *   If you leave `DesktopId` empty, the system obtains the IDs of all cloud computers within the share specified by `DesktopGroupId`.``
   * 
   * @example
   * dg-07if7qsxoxkb6****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The IDs of the cloud computer shares.
   */
  desktopGroupIds?: string[];
  /**
   * @remarks
   * The IDs of the cloud computers. You can specify the IDs of 1 to 100 cloud computers.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-4zfb6zj728hhr****
   */
  imageId?: string;
  /**
   * @remarks
   * The billing method of the cloud computer share.
   * 
   * >  This parameter takes effect when you reset a cloud computer share. If you leave this parameter empty, all cloud computers in that share are reset.
   * 
   * Valid values:
   * 
   * *   PostPaid: pay-as-you-go.
   * *   PrePaid: subscription.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/436773.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The reset scope. You can configure this parameter to reset the image or cloud computer.
   * 
   * Valid values:
   * 
   * *   ALL (default): resets the image and cloud computer.
   * *   IMAGE: resets only the image.
   * 
   * @example
   * ALL
   */
  resetScope?: string;
  /**
   * @remarks
   * The disk reset type.
   * 
   * Valid values:
   * 
   * *   0: does not reset disks.
   * *   1: resets only the system disk.
   * *   2: resets only the user disk.
   * *   3: resets the system disk and the user disk.
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

