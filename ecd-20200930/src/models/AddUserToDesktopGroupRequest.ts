// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserToDesktopGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the shared cloud computer to which you want to add authorized users.
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
   * The list of users to authorize.
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
      clientToken: 'ClientToken',
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
      clientToken: 'string',
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

