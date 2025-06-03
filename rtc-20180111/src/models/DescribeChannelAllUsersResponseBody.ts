// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeChannelAllUsersResponseBodyUsers } from "./DescribeChannelAllUsersResponseBodyUsers";


export class DescribeChannelAllUsersResponseBody extends $dara.Model {
  channelExist?: boolean;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  users?: DescribeChannelAllUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      channelExist: 'ChannelExist',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelExist: 'boolean',
      requestId: 'string',
      users: { 'type': 'array', 'itemType': DescribeChannelAllUsersResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

