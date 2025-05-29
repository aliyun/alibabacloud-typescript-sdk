// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemberResponseBody extends $dara.Model {
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
   * The time when the workspace is created, in UTC. The time follows the ISO 8601 standard.
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
   * 145883-21513926******88039
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
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
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
   * 21513926******88039
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      memberId: 'MemberId',
      memberName: 'MemberName',
      requestId: 'RequestId',
      roles: 'Roles',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      memberId: 'string',
      memberName: 'string',
      requestId: 'string',
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

