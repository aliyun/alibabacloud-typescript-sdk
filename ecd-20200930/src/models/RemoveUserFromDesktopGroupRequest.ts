// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUserFromDesktopGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the shared cloud computer from which to remove authorized users.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The list of shared cloud computer IDs.
   */
  desktopGroupIds?: string[];
  /**
   * @remarks
   * The list of authorized users to remove.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The organization ID of the team.
   * 
   * @example
   * org-aliyun-wy-org-id
   */
  orgId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The convenience user group ID.
   * 
   * @example
   * ug-3f6c8a2b****
   */
  simpleUserGroupId?: string;
  /**
   * @remarks
   * The user group name.
   * 
   * @example
   * R&D Group
   */
  userGroupName?: string;
  /**
   * @remarks
   * The organizational unit (OU) path of the user.
   * 
   * @example
   * example.com
   */
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

