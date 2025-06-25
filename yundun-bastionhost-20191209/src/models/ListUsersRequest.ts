// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the user that you want to query. Only exact match is supported.
   * 
   * @example
   * abc
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the bastion host whose users you want to query.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The mobile phone number of the user that you want to query. Only exact match is supported.
   * 
   * @example
   * 1359999****
   */
  mobile?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.\\
   * Valid values: 1 to 100. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the bastion host whose users you want to query.
   * 
   * >  For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the user that you want to query. Valid values:
   * 
   * *   **Local**: a local user.
   * *   **Ram**: a Resource Access Management (RAM) user.
   * *   **AD**: an Active Directory (AD)-authenticated user.
   * *   **LDAP**: a Lightweight Directory Access Protocol (LDAP)-authenticated user.
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The unique ID of the user that you want to query. Only exact match is supported.
   * 
   * >  This parameter uniquely identifies a RAM user of the bastion host. This parameter is valid if **Source** is set to **Ram**. You can call the [ListUsers](https://help.aliyun.com/document_detail/28684.html) operation in RAM to obtain the unique ID of the user from the **UserId** response parameter.
   * 
   * @example
   * 122748924538****
   */
  sourceUserId?: string;
  /**
   * @remarks
   * The ID of the user group to which the user you want to query belongs.
   * 
   * >  You can call the [ListUserGroups](https://help.aliyun.com/document_detail/204509.html) operation to query the user group ID.
   * 
   * @example
   * 1
   */
  userGroupId?: string;
  /**
   * @remarks
   * The logon name of the user that you want to query. Only exact match is supported.
   * 
   * @example
   * abc
   */
  userName?: string;
  /**
   * @remarks
   * The state of the user that you want to query. Valid values:
   * 
   * *   **Normal**: The user is in normal state.
   * *   **Frozen**: The user is locked.
   * *   **Expired**: The user has expired.
   * 
   * @example
   * Normal
   */
  userState?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      mobile: 'Mobile',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      source: 'Source',
      sourceUserId: 'SourceUserId',
      userGroupId: 'UserGroupId',
      userName: 'UserName',
      userState: 'UserState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      instanceId: 'string',
      mobile: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      source: 'string',
      sourceUserId: 'string',
      userGroupId: 'string',
      userName: 'string',
      userState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

