// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersForGroupResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The source ID of the group member relationship.
   * 
   * If the group is created in EIAM, the value of this parameter is the instance ID. For other types of groups, the value is the enterprise ID from the source. For example, if the group is imported from DingTalk, the value is the corpId of the DingTalk enterprise.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  groupMemberRelationSourceId?: string;
  /**
   * @remarks
   * The source type of the group member relationship. Valid values:
   * 
   * build_in: The group is created in EIAM.
   * 
   * ding_talk: The group is imported from DingTalk.
   * 
   * ad: The group is imported from Active Directory (AD).
   * 
   * ldap: The group is imported from LDAP.
   * 
   * we_com: The group is imported from WeCom.
   * 
   * @example
   * build_in
   */
  groupMemberRelationSourceType?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      groupMemberRelationSourceId: 'GroupMemberRelationSourceId',
      groupMemberRelationSourceType: 'GroupMemberRelationSourceType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupMemberRelationSourceId: 'string',
      groupMemberRelationSourceType: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that match the query.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of account objects.
   */
  users?: ListUsersForGroupResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': ListUsersForGroupResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

