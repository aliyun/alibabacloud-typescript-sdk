// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the user that you want to query. Only exact match is supported.
   * 
   * @example
   * testuser
   */
  displayName?: string;
  /**
   * @remarks
   * The instance ID of the bastion host for which you want to query the user list.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
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
   * The page number of the current page in a paging query. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query.  
   * The maximum value of the PageSize parameter is 100. The default number of entries per page is 20. If PageSize is left empty, 20 entries are returned by default.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the bastion host for which you want to query the user list.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The source of the user that you want to query. Valid values:
   * - **Local**: local user
   * - **Ram**: Resource Access Management (RAM) user
   * - **AD**: AD user
   * - **LDAP**: LDAP user
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The unique identity of the user that you want to query. Only exact match is supported.
   * > This parameter is the unique identity of the Resource Access Management (RAM) user that corresponds to the bastion host user. This parameter takes effect when the source of the newly created user is a RAM user (that is, **Source** is set to **Ram**). You can invoke the [ListUsers](https://help.aliyun.com/document_detail/28684.html) operation of access control and obtain this parameter from the **UserId** field in the response.
   * 
   * @example
   * 122748924538****
   */
  sourceUserId?: string;
  /**
   * @remarks
   * The ID of the user group that you want to query.
   * > You can call the [ListUserGroups](https://help.aliyun.com/document_detail/204509.html) operation to obtain this parameter.
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
   * The status of the user that you want to query. Valid values:
   * - **Normal**: normal
   * - **Frozen**: locked
   * - **Expired**: expired
   * - **RemoteDeleted**: user source deleted
   * - **Inactive**: inactive due to prolonged absence of logon
   * - **PasswordExpired**: password expired
   * - **RemoteDNChanged**: user DN updated
   * - **RemoteFrozen**: frozen on the RAM side
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

