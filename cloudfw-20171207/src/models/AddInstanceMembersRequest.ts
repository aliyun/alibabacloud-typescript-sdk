// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddInstanceMembersRequestMembers extends $dara.Model {
  /**
   * @remarks
   * The description of the Cloud Firewall member account. The description must be 1 to 256 characters in length. You can add up to 20 member accounts.
   * 
   * @example
   * renewal
   */
  memberDesc?: string;
  /**
   * @remarks
   * The UID of the Cloud Firewall member account. You can add up to 20 member accounts.
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

export class AddInstanceMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The list of Cloud Firewall member accounts to add. You can call the DescribeInstanceRdAccounts operation to obtain the MemberUid of the accounts that can be added. You can add up to 20 member accounts at a time, subject to the maximum number of members allowed for the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"MemberUid":"258039427902****","MemberDesc":"renewal"}]
   */
  members?: AddInstanceMembersRequestMembers[];
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': AddInstanceMembersRequestMembers },
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

