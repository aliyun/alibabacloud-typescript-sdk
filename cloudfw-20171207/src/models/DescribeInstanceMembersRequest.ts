// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The remarks of the member. The remarks must be 1 to 256 characters in length.
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
   * The UID of the member.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      memberDesc: 'MemberDesc',
      memberDisplayName: 'MemberDisplayName',
      memberUid: 'MemberUid',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      memberDesc: 'string',
      memberDisplayName: 'string',
      memberUid: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

