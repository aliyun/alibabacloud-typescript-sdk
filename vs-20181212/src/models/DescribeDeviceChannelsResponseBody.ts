// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceChannelsResponseBodyChannels extends $dara.Model {
  /**
   * @example
   * 0
   */
  channelId?: number;
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @example
   * on
   */
  deviceStatus?: string;
  /**
   * @example
   * 3100000****000000002
   */
  gbId?: string;
  name?: string;
  /**
   * @example
   * {}
   */
  params?: string;
  /**
   * @example
   * 323*****997-cn-qingdao
   */
  streamId?: string;
  /**
   * @example
   * off
   */
  streamStatus?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      deviceId: 'DeviceId',
      deviceStatus: 'DeviceStatus',
      gbId: 'GbId',
      name: 'Name',
      params: 'Params',
      streamId: 'StreamId',
      streamStatus: 'StreamStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'number',
      deviceId: 'string',
      deviceStatus: 'string',
      gbId: 'string',
      name: 'string',
      params: 'string',
      streamId: 'string',
      streamStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceChannelsResponseBody extends $dara.Model {
  channels?: DescribeDeviceChannelsResponseBodyChannels[];
  /**
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 4641C72D-462E-4AEA-8485-FC267AF90B0A
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': DescribeDeviceChannelsResponseBodyChannels },
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

