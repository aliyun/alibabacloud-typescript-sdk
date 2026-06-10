// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the shared cloud desktop.
   * 
   * - If you specify `DesktopId`, the system ignores `DesktopGroupId`.
   * 
   * - If `DesktopId` is empty, the system uses `DesktopGroupId` to retrieve the `DesktopId` of all cloud desktops in the shared cloud desktop group.
   * 
   * @example
   * dg-07if7qsxoxkb6****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * A list of shared cloud desktop group IDs.
   */
  desktopGroupIds?: string[];
  /**
   * @remarks
   * A list of cloud desktop IDs. You can specify 1 to 100 IDs.
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
  lastRetryTime?: number;
  /**
   * @remarks
   * The billing method.
   * 
   * > This parameter applies only when resetting shared cloud desktops. If you leave it empty, the system resets all cloud desktops in the shared cloud desktop group, regardless of their billing method.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to list regions that support WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The scope of the reset operation. Set this parameter to reset either the image or the cloud desktop.
   * 
   * @example
   * ALL
   */
  resetScope?: string;
  /**
   * @remarks
   * The reset type. This determines whether to reset and which disks to reset.
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

