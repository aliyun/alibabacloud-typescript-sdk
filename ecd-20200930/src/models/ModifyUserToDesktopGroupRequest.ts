// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserToDesktopGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer share.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The IDs of the end users that you want to add. You can configure 1 to 500 IDs.
   * 
   * This parameter is required.
   */
  newEndUserIds?: string[];
  /**
   * @remarks
   * The IDs of the end users that you want to remove. You can configure 1 to 500 IDs.
   * 
   * This parameter is required.
   */
  oldEndUserIds?: string[];
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
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      newEndUserIds: 'NewEndUserIds',
      oldEndUserIds: 'OldEndUserIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      newEndUserIds: { 'type': 'array', 'itemType': 'string' },
      oldEndUserIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.newEndUserIds)) {
      $dara.Model.validateArray(this.newEndUserIds);
    }
    if(Array.isArray(this.oldEndUserIds)) {
      $dara.Model.validateArray(this.oldEndUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

