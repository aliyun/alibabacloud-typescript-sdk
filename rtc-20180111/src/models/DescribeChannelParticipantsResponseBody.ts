// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeChannelParticipantsResponseBodyUserList } from "./DescribeChannelParticipantsResponseBodyUserList";


export class DescribeChannelParticipantsResponseBody extends $dara.Model {
  /**
   * @example
   * 6159ba01-6687-4fb2-a831-f0cd8d188648
   */
  requestId?: string;
  /**
   * @example
   * 1557909133
   */
  timestamp?: number;
  /**
   * @example
   * 3
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  userList?: DescribeChannelParticipantsResponseBodyUserList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timestamp: 'Timestamp',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timestamp: 'number',
      totalNum: 'number',
      totalPage: 'number',
      userList: DescribeChannelParticipantsResponseBodyUserList,
    };
  }

  validate() {
    if(this.userList && typeof (this.userList as any).validate === 'function') {
      (this.userList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

