// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCallListRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * Call status. Valid values:
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
   * 311
   */
  channelId?: string;
  /**
   * @remarks
   * The end time of the query, expressed as a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1615892596
   */
  endTs?: number;
  /**
   * @remarks
   * Sorting field. Valid values:
   * - **BAD_EXP_USER_COUNT_DESC**: Sort by the number of users with poor experience in descending order.
   * - **BAD_EXP_USER_COUNT_ASC**: Sort by the number of users with poor experience in ascending order.
   * 
   * @example
   * BAD_EXP_USER_COUNT_DESC
   */
  orderBy?: string;
  /**
   * @remarks
   * Page number. Minimum value: 1. Maximum value: 200.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Quantity per page, minimum value is 1, maximum value is 200.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Query mode. Valid values:
   * - **ALL**: All calls.
   * - **FOLLOW**: Followed calls.
   * 
   * @example
   * ALL
   */
  queryMode?: string;
  /**
   * @remarks
   * Start Time of the query, represented as a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1615806196
   */
  startTs?: number;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * c906531af5f9****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      endTs: 'EndTs',
      orderBy: 'OrderBy',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      queryMode: 'QueryMode',
      startTs: 'StartTs',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callStatus: 'string',
      channelId: 'string',
      endTs: 'number',
      orderBy: 'string',
      pageNo: 'number',
      pageSize: 'number',
      queryMode: 'string',
      startTs: 'number',
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

