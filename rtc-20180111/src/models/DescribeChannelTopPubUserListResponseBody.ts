// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelTopPubUserListResponseBodyTopPubUserDetailListOnlinePeriods extends $dara.Model {
  /**
   * @remarks
   * The time when the user joined the channel. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1615893327
   */
  joinTs?: number;
  /**
   * @remarks
   * The time when the user left the channel. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1615893442
   */
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelTopPubUserListResponseBodyTopPubUserDetailList extends $dara.Model {
  /**
   * @remarks
   * The time when the user first joined the channel. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1615893327
   */
  createdTs?: number;
  /**
   * @remarks
   * The time when the user last left the channel. The value is a UNIX timestamp in seconds. The value is 0 if the call has not ended.
   * 
   * @example
   * 1615893442
   */
  destroyedTs?: number;
  /**
   * @remarks
   * The total duration in seconds.
   * 
   * @example
   * 115
   */
  duration?: number;
  /**
   * @remarks
   * The geographic location, such as Beijing-Beijing.
   * 
   * @example
   * Zhejiang-Hangzhou
   */
  location?: string;
  /**
   * @remarks
   * The communication duration in seconds.
   * 
   * @example
   * 115
   */
  onlineDuration?: number;
  /**
   * @remarks
   * The list of online periods for the user.
   */
  onlinePeriods?: DescribeChannelTopPubUserListResponseBodyTopPubUserDetailListOnlinePeriods[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      location: 'Location',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      location: 'string',
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribeChannelTopPubUserListResponseBodyTopPubUserDetailListOnlinePeriods },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.onlinePeriods)) {
      $dara.Model.validateArray(this.onlinePeriods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelTopPubUserListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @remarks
   * The list of details about top publishing users.
   */
  topPubUserDetailList?: DescribeChannelTopPubUserListResponseBodyTopPubUserDetailList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topPubUserDetailList: 'TopPubUserDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topPubUserDetailList: { 'type': 'array', 'itemType': DescribeChannelTopPubUserListResponseBodyTopPubUserDetailList },
    };
  }

  validate() {
    if(Array.isArray(this.topPubUserDetailList)) {
      $dara.Model.validateArray(this.topPubUserDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

