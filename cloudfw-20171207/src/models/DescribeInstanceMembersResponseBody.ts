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

export class DescribeInstanceMembersResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of the members.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the member.
   */
  members?: DescribeInstanceMembersResponseBodyMembers[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeInstanceMembersResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A531AE1A-FBA2-48B6-BAB8-84D02BD409EE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': DescribeInstanceMembersResponseBodyMembers },
      pageInfo: DescribeInstanceMembersResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

