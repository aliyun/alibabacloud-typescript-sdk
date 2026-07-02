// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsForUserResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * The account group ID.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The source ID of the group member relationship.
   * 
   * For the build_in type, this defaults to the instance ID. For other types, this corresponds to the enterprise ID of the respective source. For example, for a DingTalk source, this corresponds to the corpId of the DingTalk enterprise.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  groupMemberRelationSourceId?: string;
  /**
   * @remarks
   * The source type of the group member relationship. Valid values:
   * 
   * build_in: built-in.
   * 
   * ding_talk: imported from DingTalk.
   * 
   * ad: imported from AD.
   * 
   * ldap: imported from LDAP.
   * 
   * we_com: imported from WeCom.
   * 
   * @example
   * build_in
   */
  groupMemberRelationSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupMemberRelationSourceId: 'GroupMemberRelationSourceId',
      groupMemberRelationSourceType: 'GroupMemberRelationSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupMemberRelationSourceId: 'string',
      groupMemberRelationSourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of account groups.
   */
  groups?: ListGroupsForUserResponseBodyGroups[];
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
   * The total number of matching records. The maximum number of records returned per page is determined by PageSize.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': ListGroupsForUserResponseBodyGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

