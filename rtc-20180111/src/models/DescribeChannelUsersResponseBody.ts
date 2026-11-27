// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The channel mode. Valid values:
   * 
   * - **1**: Communication (communication mode).
   * 
   * - **2**: Interactive_live (live streaming mode).
   * 
   * @example
   * 1
   */
  channelProfile?: number;
  /**
   * @remarks
   * The total number of users in the channel in communication mode. If the channel is not in communication mode, this parameter is 0.
   * 
   * @example
   * 100
   */
  commTotalNum?: number;
  /**
   * @remarks
   * The list of interactive user IDs in the channel in live streaming mode. This parameter is empty if the channel is not in live streaming mode.
   */
  interactiveUserList?: string[];
  /**
   * @remarks
   * The total number of interactive users in the channel in live streaming mode. If the channel is not in live streaming mode, this parameter is 0.
   * 
   * @example
   * 0
   */
  interactiveUserNum?: number;
  /**
   * @remarks
   * Indicates whether the channel exists. Valid values:
   * - **true**: The channel exists.
   * 
   * - **false**: The channel does not exist.
   * 
   * @example
   * true
   */
  isChannelExist?: boolean;
  /**
   * @remarks
   * The list of viewer IDs in the channel in live streaming mode. A maximum of 1,000 viewers are returned. This parameter is empty if the channel is not in live streaming mode.
   */
  liveUserList?: string[];
  /**
   * @remarks
   * The total number of viewers in the channel in live streaming mode. If the channel is not in live streaming mode, this parameter is 0.
   * 
   * @example
   * 0
   */
  liveUserNum?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6159ba01-6687-4fb2-a831-f0cd8d188648
   */
  requestId?: string;
  /**
   * @remarks
   * The timestamp of the current time in UTC.
   * 
   * @example
   * 1557909133
   */
  timestamp?: number;
  /**
   * @remarks
   * The list of user IDs in the channel in communication mode. This parameter is empty if the channel is not in communication mode.
   */
  userList?: string[];
  static names(): { [key: string]: string } {
    return {
      channelProfile: 'ChannelProfile',
      commTotalNum: 'CommTotalNum',
      interactiveUserList: 'InteractiveUserList',
      interactiveUserNum: 'InteractiveUserNum',
      isChannelExist: 'IsChannelExist',
      liveUserList: 'LiveUserList',
      liveUserNum: 'LiveUserNum',
      requestId: 'RequestId',
      timestamp: 'Timestamp',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelProfile: 'number',
      commTotalNum: 'number',
      interactiveUserList: { 'type': 'array', 'itemType': 'string' },
      interactiveUserNum: 'number',
      isChannelExist: 'boolean',
      liveUserList: { 'type': 'array', 'itemType': 'string' },
      liveUserNum: 'number',
      requestId: 'string',
      timestamp: 'number',
      userList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.interactiveUserList)) {
      $dara.Model.validateArray(this.interactiveUserList);
    }
    if(Array.isArray(this.liveUserList)) {
      $dara.Model.validateArray(this.liveUserList);
    }
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

