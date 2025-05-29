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

