// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceMembersResponseBodyMembers } from "./DescribeInstanceMembersResponseBodyMembers";
import { DescribeInstanceMembersResponseBodyPageInfo } from "./DescribeInstanceMembersResponseBodyPageInfo";


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

