// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelTopPubUserListResponseBodyTopPubUserDetailListOnlinePeriods extends $dara.Model {
  /**
   * @example
   * 1615893327
   */
  joinTs?: number;
  /**
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
   * @example
   * 1615893327
   */
  createdTs?: number;
  /**
   * @example
   * 1615893442
   */
  destroyedTs?: number;
  /**
   * @example
   * 0
   */
  duration?: number;
  /**
   * @example
   * 浙江省-杭州市
   */
  location?: string;
  /**
   * @example
   * 0
   */
  onlineDuration?: number;
  onlinePeriods?: DescribeChannelTopPubUserListResponseBodyTopPubUserDetailListOnlinePeriods[];
  /**
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
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
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

