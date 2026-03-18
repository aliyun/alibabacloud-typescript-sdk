// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdMemberListResponseBodyMemberList extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1624954942000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The name of the member.
   * 
   * @example
   * test1
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * 1960279802016267
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      name: 'Name',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      name: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdMemberListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the members.
   */
  memberList?: DescribeRdMemberListResponseBodyMemberList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC245DEE-9800-5579-BF99-189D6A5BA9FE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      memberList: 'MemberList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberList: { 'type': 'array', 'itemType': DescribeRdMemberListResponseBodyMemberList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.memberList)) {
      $dara.Model.validateArray(this.memberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

