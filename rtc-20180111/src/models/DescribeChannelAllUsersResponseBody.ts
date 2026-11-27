// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelAllUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 1811****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAllUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the channel exists. Valid values:  
   * - **true**: The channel exists.  
   * - **false**: The channel does not exist.
   */
  channelExist?: boolean;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @remarks
   * List of online users in the channel.
   */
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

