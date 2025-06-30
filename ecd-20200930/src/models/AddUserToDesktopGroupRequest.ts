// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserToDesktopGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure the idempotence of a request](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
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
   * The IDs of the users to whom you want to grant permissions.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The ID of the region.
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

