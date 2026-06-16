// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the display name. The query is performed based on the prefix.
   * 
   * @example
   * name
   */
  displayNameStartsWith?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * user@example.com
   */
  email?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * NTxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The page number. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The default value is 20. The maximum value is 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The mobile number of the user.
   * 
   * @example
   * 156xxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The country calling code. For example, the country calling code of China is `86`. Do not add `00` or `+` to the country calling code.
   * 
   * @example
   * 86
   */
  phoneRegion?: string;
  /**
   * @remarks
   * The status of the user. Valid values:
   * 
   * - `enabled`: The user is enabled.
   * 
   * - `disabled`: The user is disabled.
   * 
   * @example
   * enable
   */
  status?: string;
  /**
   * @remarks
   * The external ID of the user. The external ID can be used to associate the user with a user in an external system.
   * 
   * > The external ID must be unique within the same source type and source ID.
   * 
   * @example
   * id_wovwffm62xifdziem7an7xxxxx
   */
  userExternalId?: string;
  /**
   * @remarks
   * The list of user IDs.
   * 
   * @example
   * 20
   */
  userIds?: string[];
  /**
   * @remarks
   * The source ID of the user.
   * 
   * If the user is created in EIAM, the value of this parameter is the ID of the EIAM instance. If the user is imported from an external system, the value of this parameter is the enterprise ID of the user in the external system. For example, if the user is imported from DingTalk, the value of this parameter is the `corpId` of the enterprise in DingTalk.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  userSourceId?: string;
  /**
   * @remarks
   * The source type of the user. Valid values:
   * 
   * - `build_in`: The user is created in EIAM.
   * 
   * - `ding_talk`: The user is imported from DingTalk.
   * 
   * - `ad`: The user is imported from Active Directory (AD).
   * 
   * - `ldap`: The user is imported from a Lightweight Directory Access Protocol (LDAP) directory.
   * 
   * - `we_com`: The user is imported from WeCom.
   * 
   * @example
   * build_in
   */
  userSourceType?: string;
  /**
   * @remarks
   * The prefix of the username. The query is performed based on the prefix.
   * 
   * @example
   * name_001
   */
  usernameStartsWith?: string;
  static names(): { [key: string]: string } {
    return {
      displayNameStartsWith: 'DisplayNameStartsWith',
      email: 'Email',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      organizationalUnitId: 'OrganizationalUnitId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      phoneRegion: 'PhoneRegion',
      status: 'Status',
      userExternalId: 'UserExternalId',
      userIds: 'UserIds',
      userSourceId: 'UserSourceId',
      userSourceType: 'UserSourceType',
      usernameStartsWith: 'UsernameStartsWith',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayNameStartsWith: 'string',
      email: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      organizationalUnitId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      phoneRegion: 'string',
      status: 'string',
      userExternalId: 'string',
      userIds: { 'type': 'array', 'itemType': 'string' },
      userSourceId: 'string',
      userSourceType: 'string',
      usernameStartsWith: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

