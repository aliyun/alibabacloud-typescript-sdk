// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUserFromDesktopGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer share.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The IDs of the cloud computer shares.
   */
  desktopGroupIds?: string[];
  /**
   * @remarks
   * The IDs of the authorized users that you want to remove.
   */
  endUserIds?: string[];
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
  userGroupName?: string;
  userOuPath?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      desktopGroupIds: 'DesktopGroupIds',
      endUserIds: 'EndUserIds',
      regionId: 'RegionId',
      userGroupName: 'UserGroupName',
      userOuPath: 'UserOuPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      desktopGroupIds: { 'type': 'array', 'itemType': 'string' },
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      userGroupName: 'string',
      userOuPath: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopGroupIds)) {
      $dara.Model.validateArray(this.desktopGroupIds);
    }
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

