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
   * The list of Cloud Firewall member accounts to add. Call DescribeInstanceRdAccounts to obtain the available MemberUid values. You can add up to 20 members at a time, subject to the instance member quota.
   * 
   * This parameter is required.
   * 
   * @example
   * AddInstanceMembers
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

