// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserToDesktopGroupRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that ensures the idempotence of a request. Generate a unique value for this parameter from your client. The token can contain only ASCII characters and must be no more than 64 characters long. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the shared cloud desktop to which to add an authorized user.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * A list of shared cloud desktop group IDs.
   */
  desktopGroupIds?: string[];
  /**
   * @remarks
   * A list of users to authorize.
   */
  endUserIds?: string[];
  orgId?: string;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to obtain a list of regions where WUYING Workspace is available.
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

