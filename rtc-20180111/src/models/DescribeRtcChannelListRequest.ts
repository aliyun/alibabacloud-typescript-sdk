// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcChannelListRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can create and query the ID in the console. Only a single ID is supported.
   * 
   * @example
   * aoe****
   */
  appId?: string;
  /**
   * @remarks
   * The channel ID. Only a single ID is supported.
   * 
   * @example
   * testChannel
   */
  channelId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Valid values: greater than **0**. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: greater than **0**. Default value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The service area. By default, all areas are queried. Valid values:
   * 
   * - **cn**: China.
   * 
   * - **us**: United States.
   * 
   * @example
   * cn
   */
  serviceArea?: string;
  /**
   * @remarks
   * The sort order. By default, the records are sorted in descending order of StartTime.
   * 
   * @example
   * desc
   */
  sortType?: string;
  /**
   * @remarks
   * The query time in UTC. The format is yyyy-MM-ddTHH:mm:ssZ. The time granularity is one day.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-01-29T00:00:00Z
   */
  timePoint?: string;
  /**
   * @remarks
   * The user ID. Only a single ID is supported.
   * 
   * @example
   * testUser
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      serviceArea: 'ServiceArea',
      sortType: 'SortType',
      timePoint: 'TimePoint',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      serviceArea: 'string',
      sortType: 'string',
      timePoint: 'string',
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

