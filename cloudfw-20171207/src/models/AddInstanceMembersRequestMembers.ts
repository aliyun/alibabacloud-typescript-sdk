// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddInstanceMembersRequestMembers extends $dara.Model {
  /**
   * @remarks
   * The remarks of the member. The value must be 1 to 256 characters in length.
   * 
   * @example
   * renewal
   */
  memberDesc?: string;
  /**
   * @remarks
   * The UID of the member. You can add up to 20 members to Cloud Firewall at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: number;
  static names(): { [key: string]: string } {
    return {
      memberDesc: 'MemberDesc',
      memberUid: 'MemberUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberDesc: 'string',
      memberUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

