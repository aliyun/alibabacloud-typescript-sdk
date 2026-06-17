// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. The default value is **1**.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The description of the Cloud Firewall member account. The description must be 1 to 256 characters in length.
   * 
   * @example
   * renewal
   */
  memberDesc?: string;
  /**
   * @remarks
   * The name of the Cloud Firewall member account.
   * 
   * @example
   * cloudfirewall_2
   */
  memberDisplayName?: string;
  /**
   * @remarks
   * The UID of the Cloud Firewall member account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * The default value is **20**.
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

