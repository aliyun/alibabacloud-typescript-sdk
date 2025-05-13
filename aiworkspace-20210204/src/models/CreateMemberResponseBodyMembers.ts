// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemberResponseBodyMembers extends $dara.Model {
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * myDisplayName
   */
  displayName?: string;
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
      displayName: 'DisplayName',
      memberId: 'MemberId',
      roles: 'Roles',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      memberId: 'string',
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

