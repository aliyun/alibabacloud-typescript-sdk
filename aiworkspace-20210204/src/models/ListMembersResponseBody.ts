// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMembersResponseBodyMembers extends $dara.Model {
  /**
   * @remarks
   * Account name of the member.
   * 
   * @example
   * testAccount
   */
  accountName?: string;
  /**
   * @remarks
   * Account type. Valid values:
   * 
   * - 1: Alibaba Cloud account
   * 
   * - 5: RAM user
   * 
   * - 6: RAM role
   * 
   * @example
   * 5
   */
  accountType?: string;
  /**
   * @remarks
   * Display name of the member.
   * 
   * @example
   * myDisplayName
   */
  displayName?: string;
  /**
   * @remarks
   * Time when the member was added, in UTC. Format: ISO 8601.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Member ID.
   * 
   * @example
   * 14588*****51688039
   */
  memberId?: string;
  /**
   * @remarks
   * Username of the member.
   * 
   * @example
   * user1
   */
  memberName?: string;
  /**
   * @remarks
   * Roles assigned to the member.
   */
  roles?: string[];
  /**
   * @remarks
   * Alibaba Cloud account ID of the member.
   * 
   * @example
   * 215139******88039
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      memberId: 'MemberId',
      memberName: 'MemberName',
      roles: 'Roles',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      memberId: 'string',
      memberName: 'string',
      roles: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of workspace members.
   */
  members?: ListMembersResponseBodyMembers[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of members that match the filter criteria.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': ListMembersResponseBodyMembers },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

