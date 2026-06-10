// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUserFromDesktopGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the shared cloud desktop from which you revoke the user’s permission.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * A list of shared desktop group IDs.
   */
  desktopGroupIds?: string[];
  /**
   * @remarks
   * The list of authorized users to remove.
   */
  endUserIds?: string[];
  orgId?: string;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to get a list of regions where WUYING Workspace is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  simpleUserGroupId?: string;
  userGroupName?: string;
  userOuPath?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      desktopGroupIds: 'DesktopGroupIds',
      endUserIds: 'EndUserIds',
      orgId: 'OrgId',
      regionId: 'RegionId',
      simpleUserGroupId: 'SimpleUserGroupId',
      userGroupName: 'UserGroupName',
      userOuPath: 'UserOuPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      desktopGroupIds: { 'type': 'array', 'itemType': 'string' },
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      orgId: 'string',
      regionId: 'string',
      simpleUserGroupId: 'string',
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

