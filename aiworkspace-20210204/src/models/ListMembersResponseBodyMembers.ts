// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMembersResponseBodyMembers extends $dara.Model {
  accountName?: string;
  accountType?: string;
  /**
   * @remarks
   * The display name of the member.
   * 
   * @example
   * myDisplayName
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the user is created, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The member ID.
   * 
   * @example
   * 14588*****51688039
   */
  memberId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * user1
   */
  memberName?: string;
  /**
   * @remarks
   * The list of roles.
   */
  roles?: string[];
  /**
   * @remarks
   * The user ID.
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

