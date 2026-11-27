// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCallListResponseBodyCallList extends $dara.Model {
  /**
   * @remarks
   * App ID。
   * 
   * @example
   * 9qb1****
   */
  appId?: string;
  /**
   * @remarks
   * Number of users with poor communication experience.
   * 
   * @example
   * 0
   */
  badExpUserCnt?: number;
  /**
   * @remarks
   * Communication status. Valid values:  
   * - **IN**: In progress.  
   * - **OUT**: Ended.
   * 
   * @example
   * OUT
   */
  callStatus?: string;
  /**
   * @remarks
   * Channel ID.
   * 
   * @example
   * 904
   */
  channelId?: string;
  /**
   * @remarks
   * The UNIX timestamp indicating when the communication was created, in seconds.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @remarks
   * The UNIX timestamp indicating when the communication was released, in seconds.
   * 
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * Duration of the communication, in seconds.
   * 
   * @example
   * 10
   */
  duration?: number;
  /**
   * @remarks
   * User Count.
   * 
   * @example
   * 5
   */
  userCnt?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      badExpUserCnt: 'BadExpUserCnt',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      userCnt: 'UserCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      badExpUserCnt: 'number',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      userCnt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of communications.
   */
  callList?: DescribeCallListResponseBodyCallList[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 2
   */
  pageNo?: number;
  /**
   * @remarks
   * Quantity per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @remarks
   * Total Quantity.
   * 
   * @example
   * 20
   */
  totalCnt?: number;
  static names(): { [key: string]: string } {
    return {
      callList: 'CallList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callList: { 'type': 'array', 'itemType': DescribeCallListResponseBodyCallList },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.callList)) {
      $dara.Model.validateArray(this.callList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

