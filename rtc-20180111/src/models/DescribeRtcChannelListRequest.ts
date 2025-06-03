// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcChannelListRequest extends $dara.Model {
  /**
   * @example
   * aoe****
   */
  appId?: string;
  /**
   * @example
   * testChannel
   */
  channelId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * cn
   */
  serviceArea?: string;
  /**
   * @example
   * desc
   */
  sortType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2018-01-29T00:00:00Z
   */
  timePoint?: string;
  /**
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

