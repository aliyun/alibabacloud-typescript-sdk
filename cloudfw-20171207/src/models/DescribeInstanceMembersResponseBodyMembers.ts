// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceMembersResponseBodyMembers extends $dara.Model {
  /**
   * @remarks
   * The time when the member was added to Cloud Firewall. The value is a timestamp. Unit: seconds.
   * 
   * @example
   * 1615189819
   */
  createTime?: number;
  /**
   * @remarks
   * The remarks of the member.
   * 
   * @example
   * renewal
   */
  memberDesc?: string;
  /**
   * @remarks
   * The name of the member.
   * 
   * @example
   * cloudfirewall_2
   */
  memberDisplayName?: string;
  /**
   * @remarks
   * The status of the member. Valid values:
   * 
   * *   **normal**
   * *   **deleting**
   * 
   * @example
   * normal
   */
  memberStatus?: string;
  /**
   * @remarks
   * The UID of the member.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: number;
  /**
   * @remarks
   * The time when the member was last modified. The value is a timestamp. Unit: seconds.
   * 
   * @example
   * 1615189819
   */
  modifyTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      memberDesc: 'MemberDesc',
      memberDisplayName: 'MemberDisplayName',
      memberStatus: 'MemberStatus',
      memberUid: 'MemberUid',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      memberDesc: 'string',
      memberDisplayName: 'string',
      memberStatus: 'string',
      memberUid: 'number',
      modifyTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

