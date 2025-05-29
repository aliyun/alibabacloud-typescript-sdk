// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDevicesResponseBodyDevicesStats extends $dara.Model {
  /**
   * @example
   * 0
   */
  channelNum?: number;
  /**
   * @example
   * 0
   */
  failedNum?: number;
  /**
   * @example
   * 0
   */
  offlineNum?: number;
  /**
   * @example
   * 0
   */
  onlineNum?: number;
  /**
   * @example
   * 0
   */
  streamNum?: number;
  static names(): { [key: string]: string } {
    return {
      channelNum: 'ChannelNum',
      failedNum: 'FailedNum',
      offlineNum: 'OfflineNum',
      onlineNum: 'OnlineNum',
      streamNum: 'StreamNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelNum: 'number',
      failedNum: 'number',
      offlineNum: 'number',
      onlineNum: 'number',
      streamNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

